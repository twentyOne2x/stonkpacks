import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import { PublicKey, type Connection } from "@solana/web3.js";
import type { StockPackPreviewV1, StockPackSaleDeliveryReceiptV1 } from "@attn-packs/pack-network";

import type {
  StockPacksPlayerAction,
  StockPacksPlayerCampaign,
  StockPacksPlayerHistoryEntry,
  StockPacksRewardPayout,
  StockPacksPlayerSnapshot,
} from "./stockPacksPlayerTypes";
import type { StockPayoffAcquisitionContext } from "../payoffs";

export type StockPacksStageView = Readonly<{
  packId: string;
  label: string;
  phase: "idle" | "committing" | "opening";
}>;

export type StockPacksCollectionEntry = Readonly<{
  operationId: string;
  card: NonNullable<StockPacksPlayerHistoryEntry["card"]>;
  acquisition: StockPayoffAcquisitionContext;
  state: string;
  updatedAt: string;
}>;

/** The player Profit state remains unavailable until LP fee claims ship. */
export const STOCK_PACKS_PROFIT_UNAVAILABLE = Object.freeze({
  status: "unavailable" as const,
  label: "UNAVAILABLE",
  amount: null,
  action: null,
  description: "LP fee claims are not available yet. No claimable amount is shown for this account.",
  detail: "LPs earn a share of fees. Board payouts, token delivery, and sale proceeds are not LP fee claims.",
});

/** An earned reward keeps its approved table even when the campaign is later republished. */
export function stockPacksCampaignPresentationPreview(campaign: StockPacksPlayerCampaign): StockPackPreviewV1 {
  return campaign.access.mode === "sponsored_reward" && campaign.rewardPreview
    ? campaign.rewardPreview
    : campaign.campaign.preview;
}

export function stockPacksHasClaimableReward(campaign: StockPacksPlayerCampaign): boolean {
  return campaign.access.mode === "sponsored_reward"
    && campaign.acquisition.mode === "sponsored_reward"
    && campaign.acquisition.state === "entitled"
    && campaign.rewardCommand !== null
    && campaign.rewardPayout != null
    && campaign.rewardPreview != null;
}

export function stockPacksRewardPayoutStatus(
  payout: StockPacksRewardPayout,
  state: Extract<StockPacksPlayerHistoryEntry, { mode: "sponsored_reward" }>["rewardClaim"]["state"],
): string {
  const status = state === "delivered" ? "delivered"
    : state === "rejected" ? "rejected"
      : state === "reconciling" ? "checking delivery" : "claim in progress";
  return `Round ${payout.roundNumber} · ${status.toUpperCase()}`;
}

export function stockPacksRewardPayoutAmountLabel(
  state: Extract<StockPayoffAcquisitionContext, { mode: "sponsored_reward" }>["state"],
): string {
  if (state === "entitled") return "Claimable payout";
  if (state === "delivered") return "Delivered payout";
  return "Pending payout";
}

/**
 * The Stock Packs API returns the custody wallet that owns the payment account.
 * The existing Royale transfer builder accepts the destination token account,
 * so the adapter must derive the classic SPL ATA before it authors any bytes.
 */
export function stockPackPaymentRecipientTokenAccount(input: Readonly<{
  mint: string;
  recipientWallet: string;
}>): string {
  return getAssociatedTokenAddressSync(
    new PublicKey(input.mint),
    new PublicKey(input.recipientWallet),
    false,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID,
  ).toBase58();
}

/** Reconcile the retained signature before retrying its exact, still-valid bytes. */
export async function broadcastStockPackPayment(
  connection: Pick<Connection, "getSignatureStatuses" | "isBlockhashValid" | "sendRawTransaction">,
  input: Readonly<{ signedTransaction: Uint8Array; transactionId: string; blockhash: string; lastValidBlockHeight: number }>,
): Promise<void> {
  const status = await connection.getSignatureStatuses([input.transactionId], { searchTransactionHistory: true });
  if (status.value.length !== 1 || status.value[0] === undefined) throw new Error("stock_pack_payment_status_unavailable");
  const observed = status.value[0];
  if (observed) {
    if (observed.err) throw new Error("stock_pack_payment_failed");
    return;
  }
  if (!(await connection.isBlockhashValid(input.blockhash, { commitment: "confirmed" })).value) {
    throw new Error("stock_pack_payment_blockhash_expired");
  }
  const sent = await connection.sendRawTransaction(input.signedTransaction, { skipPreflight: false, maxRetries: 0 });
  if (sent !== input.transactionId) throw new Error("stock_pack_broadcast_signature_changed");
}

function denominationId(rawAmount: string, decimals: number): string | null {
  const units = BigInt(rawAmount);
  const scale = 10n ** BigInt(decimals);
  if (units % scale !== 0n) return null;
  switch (units / scale) {
    case 25n: return "starter25";
    case 50n: return "elite50";
    case 100n: return "prime100";
    default: return null;
  }
}

/** Presentation state for the shared Royale pack renderer, derived only from authoritative journey state. */
export function stockPacksStageView(
  snapshot: StockPacksPlayerSnapshot | null,
  pendingAction: StockPacksPlayerAction | null,
): StockPacksStageView {
  const selectedCampaign = snapshot?.campaigns.find(({ campaign }) =>
    campaign.campaignId === snapshot.selectedCampaignId) ?? snapshot?.campaigns[0] ?? null;
  const quoteAsset = selectedCampaign?.campaign.preview.recipe.quoteAsset;
  const principal = selectedCampaign?.campaign.preview.recipe.exactPackPrincipalQuoteUnits;
  const packId = quoteAsset && principal
    ? denominationId(principal, quoteAsset.decimals) ?? selectedCampaign.campaign.campaignId
    : selectedCampaign?.campaign.campaignId ?? "stock-pack";
  const label = selectedCampaign?.title ?? "Stock Pack";
  if (pendingAction === "review_purchase" || pendingAction === "purchase" || pendingAction === "claim_reward") {
    return { packId, label, phase: "committing" };
  }
  const deliveryState = snapshot?.selectedCard?.delivery?.state;
  if (snapshot?.activeOpen && (
    snapshot.activeOpen.selection === null
    || deliveryState === "selected"
    || deliveryState === "pending"
    || deliveryState === "reconciling"
  )) {
    return { packId, label, phase: "opening" };
  }
  if (snapshot?.activeRewardClaim && snapshot.activeRewardClaim.state !== "delivered"
    && snapshot.activeRewardClaim.state !== "rejected") {
    return { packId, label, phase: "opening" };
  }
  return { packId, label, phase: "idle" };
}

/** Return the exact terminal that authorized ownership, without converting reward delivery into a paid receipt. */
export function stockPacksSaleDeliveryReceipt(
  snapshot: Pick<StockPacksPlayerSnapshot, "activeOpen" | "activeRewardClaim" | "selectedCard"> | null,
): StockPackSaleDeliveryReceiptV1 | null {
  if (!snapshot) return null;
  if (snapshot.activeOpen && snapshot.selectedCard?.delivery?.state === "delivered") {
    return snapshot.selectedCard.delivery.receipt;
  }
  if (snapshot.activeRewardClaim?.state === "delivered") return snapshot.activeRewardClaim.receipt;
  return null;
}

/**
 * Collection rows come exclusively from the API's Stock Pack history. This is
 * a projection over canonical operations, not a second browser collection.
 */
export function stockPacksCollectionEntries(
  snapshot: Pick<StockPacksPlayerSnapshot, "history" | "campaigns"> | null,
): readonly StockPacksCollectionEntry[] {
  if (!snapshot) return [];
  return snapshot.history.flatMap((entry) => {
    if (!entry.card) return [];
    const acquisition = snapshot.campaigns.find(({ campaign }) =>
      campaign.campaignId === entry.preview.campaignId)?.acquisition;
    if (!acquisition) throw new Error("stock_pack_collection_acquisition_missing");
    return [{
      operationId: entry.operationId,
      card: entry.card,
      acquisition,
      state: entry.sale?.state ?? entry.card.delivery?.state
        ?? (entry.mode === "sponsored_reward" ? entry.rewardClaim.state : "selected"),
      updatedAt: entry.updatedAt,
    }];
  });
}
