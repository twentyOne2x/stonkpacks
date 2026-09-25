import {
  assertStockPackExecutableQuote,
  assertStockPackSelectionLot,
  canonicalAuthorizationDigest,
  lotRecipeEligibilityDigest,
  parseCanonicalInventoryLotV1,
  parseCanonicalOpenRequestV1,
  StockPackOperationIdentityV1Schema,
  StockPackSaleQuoteV1Schema,
  stockPackReferenceAt,
  stockPackRemainingSaleLeg,
  validateStockPackCard,
  validateStockPackTable,
  type StockPackActorV1,
  type StockPackAmountV1,
  type StockPackDeliveryV1,
  type StockPackOpenV1,
  type PackInventoryLotV1,
  type StockPackPayoffCardV1,
  type StockPackPreviewV1,
  type StockPackRewardClaimV1,
  type StockPackSaleV1,
} from "@attn-packs/pack-network";

import type {
  StockPacksPurchaseReview,
  StockPacksPlayerSnapshot,
  StockPacksRewardPayout,
  StockPacksSaleReview,
} from "./stockPacksPlayerTypes";

export type StockPacksPlayerPhase =
  | "browse"
  | "payment_pending"
  | "reward_claim_pending"
  | "selected"
  | "delivery_pending"
  | "delivery_reconciling"
  | "received"
  | "sale_prepared"
  | "sale_pending"
  | "sale_reconciling"
  | "intermediate_held"
  | "sold"
  | "sale_rejected";

export type StockPacksProbabilitySegment = Readonly<{
  cardId: string;
  weight: string;
  total: "10000";
  widthPercent: string;
  accessibleLabel: string;
}>;

const DELIVERY_RANK: Readonly<Record<StockPackDeliveryV1["state"], number>> = {
  selected: 0,
  pending: 1,
  reconciling: 2,
  delivered: 3,
};

const SALE_RANK: Readonly<Record<StockPackSaleV1["state"], number>> = {
  prepared: 0,
  pending: 1,
  reconciling: 1,
  intermediate_held: 2,
  completed: 3,
  rejected: 3,
};
const REWARD_RANK: Readonly<Record<StockPackRewardClaimV1["state"], number>> = {
  prepared: 0,
  reserved: 1,
  selected: 2,
  delivering: 3,
  reconciling: 3,
  delivered: 4,
  rejected: 4,
};

/**
 * Build display state for the actual Board-earned lot. The original preview is
 * retained for snapshot identity and instrument evidence only; its nominal lot
 * amount, paid probability, valuation, and sale quote are never reused.
 */
export function stockPacksRewardDeliveryCard(
  preview: StockPackPreviewV1,
  claim: StockPackRewardClaimV1,
  deliveryLot: PackInventoryLotV1,
): StockPackPayoffCardV1 | null {
  const selection = claim.selection;
  if (!selection) return null;
  const lot = parseCanonicalInventoryLotV1(deliveryLot);
  if (lot.recipeEligibilityDigest !== lotRecipeEligibilityDigest(lot, preview.recipe)
    || selection.selectedLotId !== lot.lotId
    || selection.snapshotId !== preview.snapshot.snapshotId
    || selection.snapshotDigest !== preview.snapshot.snapshotDigest
    || selection.selectedPositionId !== lot.positionId
    || selection.selectedPositionTermsDigest !== lot.positionTermsDigest
    || selection.selectedAsset.identityDigest !== lot.asset.identityDigest
    || selection.selectedAssetAmount !== lot.exactAssetAmount
    || lot.selectionWeight !== "10000") {
    throw new Error("stock_pack_reward_delivery_lot_mismatch");
  }
  const origins = preview.cards.filter((candidate) =>
    candidate.lot.asset.identityDigest === lot.asset.identityDigest
    && candidate.lot.positionId === lot.positionId
    && candidate.lot.positionTermsDigest === lot.positionTermsDigest
    && candidate.lot.marketId === lot.marketId);
  const origin = origins[0];
  if (origins.length !== 1 || !origin) throw new Error("stock_pack_reward_delivery_instrument_ambiguous");
  const card: StockPackPayoffCardV1 = {
    cardId: lot.lotId,
    snapshotId: preview.snapshot.snapshotId,
    snapshotDigest: preview.snapshot.snapshotDigest,
    lot,
    instrument: origin.instrument,
    probability: { weight: "10000", total: "10000" },
    reference: { state: "unavailable", reason: "fresh_evidence_required" },
    saleQuote: { state: "unavailable", reason: "fresh_quote_required" },
    delivery: null,
  };
  validateStockPackCard(card, preview.snapshot);
  return card;
}

export function stockPacksActorKey(actor: StockPackActorV1): string {
  return `${actor.actorAccountId}:${actor.wallet}`;
}

function assertIsoTimestamp(value: string, label: string): void {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/u.test(value)
    || !Number.isFinite(Date.parse(value))) {
    throw new Error(`${label}_invalid`);
  }
}

function assertOpenActor(open: StockPackOpenV1, actor: StockPackActorV1): void {
  if (open.identity.kind !== "open"
    || open.identity.actorAccountId !== actor.actorAccountId
    || open.request.actorAccountId !== actor.actorAccountId
    || open.request.recipientWallet !== actor.wallet) {
    throw new Error("stock_pack_open_actor_mismatch");
  }
}

function assertSaleActor(sale: StockPackSaleV1, actor: StockPackActorV1): void {
  StockPackOperationIdentityV1Schema.parse(sale.identity);
  StockPackSaleQuoteV1Schema.parse(sale.quote);
  if (sale.identity.kind !== "sale"
    || sale.identity.actorAccountId !== actor.actorAccountId
    || sale.wallet !== actor.wallet
    || sale.quote.actorAccountId !== actor.actorAccountId
    || sale.quote.wallet !== actor.wallet) {
    throw new Error("stock_pack_sale_actor_mismatch");
  }
  const completedPrefix = sale.quote.legs
    .slice(0, sale.completedLegIds.length)
    .map((leg) => leg.legId);
  if (completedPrefix.join(",") !== sale.completedLegIds.join(",")) {
    throw new Error("stock_pack_sale_completed_legs_invalid");
  }
  if (sale.state === "intermediate_held") stockPackRemainingSaleLeg(sale);
}

function assertCardForOpen(
  card: StockPackPayoffCardV1,
  open: StockPackOpenV1,
  preview: StockPackPreviewV1,
  snapshot: StockPacksPlayerSnapshot,
): void {
  if (preview.campaignId !== open.campaignId
    || preview.snapshot.snapshotId !== open.request.snapshotId
    || preview.snapshot.snapshotDigest !== open.request.snapshotDigest
    || preview.recipe.termsDigest !== open.request.recipeTermsDigest) {
    throw new Error("stock_pack_open_preview_mismatch");
  }
  validateStockPackTable(preview);
  validateStockPackCard(card, preview.snapshot);
  if (!open.selection) throw new Error("stock_pack_selected_card_selection_missing");
  if (card.delivery && card.delivery.recipientWallet !== snapshot.actor.wallet) {
    throw new Error("stock_pack_delivery_wallet_mismatch");
  }
  assertStockPackSelectionLot(open.selection, card.lot);
  if (!sameJson(open.delivery, card.delivery)) {
    throw new Error("stock_pack_delivery_projection_mismatch");
  }
}

function assertSaleForCard(sale: StockPackSaleV1, card: StockPackPayoffCardV1): void {
  if (sale.quote.input.asset.identityDigest !== card.lot.asset.identityDigest
    || sale.quote.input.rawAmount !== card.lot.exactAssetAmount) {
    throw new Error("stock_pack_sale_card_mismatch");
  }
  if (card.delivery?.state === "delivered"
    && sale.deliveryReceiptDigest !== card.delivery.receipt.terminalDigest) {
    throw new Error("stock_pack_sale_delivery_receipt_mismatch");
  }
}

function assertRewardClaim(
  claim: StockPackRewardClaimV1,
  actor: StockPackActorV1,
  preview: StockPackPreviewV1,
  card: StockPackPayoffCardV1 | null,
): void {
  if (claim.identity.actorAccountId !== actor.actorAccountId || claim.request.actorAccountId !== actor.actorAccountId
    || claim.request.recipientWallet !== actor.wallet || claim.campaignId !== preview.campaignId
    || claim.request.snapshotId !== preview.snapshot.snapshotId
    || claim.request.snapshotDigest !== preview.snapshot.snapshotDigest) {
    throw new Error("stock_pack_reward_claim_binding_mismatch");
  }
  if (!claim.selection) {
    if (card) throw new Error("stock_pack_reward_card_without_selection");
    return;
  }
  if (!card || card.cardId !== claim.selection.selectedLotId
    || card.snapshotDigest !== claim.selection.snapshotDigest
    || card.lot.positionId !== claim.selection.selectedPositionId
    || card.lot.positionTermsDigest !== claim.selection.selectedPositionTermsDigest
    || card.lot.asset.identityDigest !== claim.selection.selectedAsset.identityDigest
    || card.lot.exactAssetAmount !== claim.selection.selectedAssetAmount) {
    throw new Error("stock_pack_reward_card_mismatch");
  }
  if (card.delivery !== null || card.reference.state !== "unavailable" || card.saleQuote.state !== "unavailable") {
    throw new Error("stock_pack_reward_card_evidence_mismatch");
  }
  validateStockPackCard(card, preview.snapshot);
}

export function assertStockPacksPlayerSnapshot(
  snapshot: StockPacksPlayerSnapshot,
  expectedActor?: StockPackActorV1,
): void {
  assertIsoTimestamp(snapshot.observedAt, "stock_pack_snapshot_observed_at");
  if (expectedActor && stockPacksActorKey(snapshot.actor) !== stockPacksActorKey(expectedActor)) {
    throw new Error("stock_pack_snapshot_actor_mismatch");
  }
  const campaignIds = snapshot.campaigns.map(({ campaign }) => campaign.campaignId);
  if (new Set(campaignIds).size !== campaignIds.length) {
    throw new Error("stock_pack_campaign_duplicate");
  }
  if (snapshot.selectedCampaignId !== null && !campaignIds.includes(snapshot.selectedCampaignId)) {
    throw new Error("stock_pack_selected_campaign_missing");
  }
  for (const { campaign, access, acquisition, rewardCommand, rewardPayout, rewardPreview } of snapshot.campaigns) {
    validateStockPackTable(campaign.preview);
    for (const card of campaign.preview.cards) {
      validateStockPackCard(card, campaign.preview.snapshot);
    }
    if (rewardPreview) {
      if (access.mode !== "sponsored_reward" || rewardPreview.campaignId !== campaign.campaignId) {
        throw new Error("stock_pack_reward_preview_binding_mismatch");
      }
      validateStockPackTable(rewardPreview);
      for (const card of rewardPreview.cards) validateStockPackCard(card, rewardPreview.snapshot);
    }
    if (rewardCommand && !rewardPreview) throw new Error("stock_pack_reward_preview_missing");
    if (access.mode === "paid" && rewardPayout) throw new Error("stock_pack_paid_reward_payout_invalid");
    if (access.mode === "sponsored_reward") {
      if ((acquisition.state === "ineligible") !== (rewardPayout == null)) {
        throw new Error("stock_pack_reward_payout_state_mismatch");
      }
      if (rewardCommand) assertRewardPayout(rewardPayout, rewardCommand.intent.request.entitlement);
    }
  }
  if (snapshot.activeOpen) {
    assertOpenActor(snapshot.activeOpen, snapshot.actor);
    if (!campaignIds.includes(snapshot.activeOpen.campaignId)) {
      throw new Error("stock_pack_open_campaign_missing");
    }
  }
  if (snapshot.activeRewardClaim) {
    if (!campaignIds.includes(snapshot.activeRewardClaim.campaignId)) {
      throw new Error("stock_pack_reward_campaign_missing");
    }
    if (snapshot.activeOpen) throw new Error("stock_pack_active_operation_ambiguous");
  }
  if (((snapshot.activeOpen !== null || snapshot.activeRewardClaim !== null)) !== (snapshot.activePreview !== null)) {
    throw new Error("stock_pack_active_preview_mismatch");
  }
  if (snapshot.selectedCard) {
    if (!snapshot.activePreview) throw new Error("stock_pack_selected_card_operation_missing");
    if (snapshot.activeOpen) assertCardForOpen(snapshot.selectedCard, snapshot.activeOpen, snapshot.activePreview, snapshot);
    else if (snapshot.activeRewardClaim) assertRewardClaim(snapshot.activeRewardClaim, snapshot.actor,
      snapshot.activePreview, snapshot.selectedCard);
    else throw new Error("stock_pack_selected_card_operation_missing");
  } else if (snapshot.activeRewardClaim && snapshot.activePreview) {
    assertRewardClaim(snapshot.activeRewardClaim, snapshot.actor, snapshot.activePreview, null);
  }
  if (snapshot.sale) {
    if (!snapshot.selectedCard) throw new Error("stock_pack_sale_card_missing");
    assertSaleActor(snapshot.sale, snapshot.actor);
    assertSaleForCard(snapshot.sale, snapshot.selectedCard);
  }
  const historyIds = snapshot.history.map(({ operationId }) => operationId);
  if (new Set(historyIds).size !== historyIds.length) {
    throw new Error("stock_pack_history_duplicate");
  }
  for (const entry of snapshot.history) {
    assertIsoTimestamp(entry.updatedAt, "stock_pack_history_updated_at");
    if (entry.mode === "paid") {
      assertOpenActor(entry.open, snapshot.actor);
      if (entry.operationId !== entry.open.identity.operationId) throw new Error("stock_pack_history_operation_mismatch");
      if (entry.preview.campaignId !== entry.open.campaignId) throw new Error("stock_pack_history_preview_mismatch");
      if (entry.card) assertCardForOpen(entry.card, entry.open, entry.preview, snapshot);
    } else {
      if (entry.operationId !== entry.rewardClaim.identity.operationId) throw new Error("stock_pack_history_operation_mismatch");
      assertRewardPayout(entry.rewardPayout, entry.rewardClaim.request.entitlement);
      const projected = stockPacksRewardDeliveryCard(entry.preview, entry.rewardClaim, entry.deliveryLot);
      if (!sameJson(projected, entry.card)) throw new Error("stock_pack_reward_history_projection_mismatch");
      assertRewardClaim(entry.rewardClaim, snapshot.actor, entry.preview, entry.card);
    }
    if (entry.sale) {
      if (!entry.card) throw new Error("stock_pack_history_sale_card_missing");
      assertSaleActor(entry.sale, snapshot.actor);
      assertSaleForCard(entry.sale, entry.card);
    }
  }
}

function assertRewardPayout(
  payout: StockPacksRewardPayout | null | undefined,
  entitlement: StockPackRewardClaimV1["request"]["entitlement"],
): asserts payout is StockPacksRewardPayout {
  if (!payout?.roundId || !/^(?:0|[1-9][0-9]*)$/u.test(payout.roundNumber)
    || payout.epochId !== entitlement.epochId || payout.epochSequence !== entitlement.entitlementVersion
    || payout.asset.identityDigest !== entitlement.asset.identityDigest || payout.exactAmount !== entitlement.rawAmount) {
    throw new Error("stock_pack_reward_payout_binding_mismatch");
  }
}

function sameJson(left: unknown, right: unknown): boolean {
  return JSON.stringify(left) === JSON.stringify(right);
}

function reconcileDelivery(
  current: StockPackDeliveryV1 | null,
  incoming: StockPackDeliveryV1 | null,
): StockPackDeliveryV1 | null {
  if (!current) return incoming;
  if (!incoming) return current;
  if (current.recipientWallet !== incoming.recipientWallet) {
    throw new Error("stock_pack_delivery_recipient_changed");
  }
  if (DELIVERY_RANK[incoming.state] < DELIVERY_RANK[current.state]) return current;
  if (current.state === "delivered" && incoming.state === "delivered"
    && current.receipt.terminalDigest !== incoming.receipt.terminalDigest) {
    throw new Error("stock_pack_delivery_receipt_changed");
  }
  return incoming;
}

function reconcileOpen(
  current: StockPackOpenV1 | null,
  incoming: StockPackOpenV1 | null,
): StockPackOpenV1 | null {
  if (!current) return incoming;
  if (!incoming) return current;
  if (current.identity.operationId !== incoming.identity.operationId) return incoming;
  if (current.identity.requestDigest !== incoming.identity.requestDigest
    || current.campaignId !== incoming.campaignId
    || current.reservationId !== incoming.reservationId
    || current.request.requestDigest !== incoming.request.requestDigest) {
    throw new Error("stock_pack_open_identity_changed");
  }
  if (current.selection && incoming.selection && !sameJson(current.selection, incoming.selection)) {
    throw new Error("stock_pack_selection_changed");
  }
  return {
    ...incoming,
    selection: current.selection ?? incoming.selection,
    delivery: reconcileDelivery(current.delivery, incoming.delivery),
  };
}

function reconcileSale(
  current: StockPackSaleV1 | null,
  incoming: StockPackSaleV1 | null,
): StockPackSaleV1 | null {
  if (!current) return incoming;
  if (!incoming) return current;
  if (current.identity.operationId !== incoming.identity.operationId) return incoming;
  if (current.identity.requestDigest !== incoming.identity.requestDigest
    || current.quote.quoteDigest !== incoming.quote.quoteDigest
    || current.wallet !== incoming.wallet) {
    throw new Error("stock_pack_sale_identity_changed");
  }
  if (SALE_RANK[incoming.state] < SALE_RANK[current.state]) return current;
  if (current.state === "completed" && incoming.state === "completed"
    && !sameJson(current.transactionIds, incoming.transactionIds)) {
    throw new Error("stock_pack_sale_receipt_changed");
  }
  return incoming;
}

function reconcileRewardClaim(
  current: StockPackRewardClaimV1 | null,
  incoming: StockPackRewardClaimV1 | null,
): StockPackRewardClaimV1 | null {
  if (!current) return incoming;
  if (!incoming) return current;
  if (current.identity.operationId !== incoming.identity.operationId) return incoming;
  if (current.identity.requestDigest !== incoming.identity.requestDigest
    || current.request.requestDigest !== incoming.request.requestDigest
    || current.request.entitlement.bindingDigest !== incoming.request.entitlement.bindingDigest) {
    throw new Error("stock_pack_reward_identity_changed");
  }
  if (current.selection && incoming.selection && !sameJson(current.selection, incoming.selection)) {
    throw new Error("stock_pack_reward_selection_changed");
  }
  if (REWARD_RANK[incoming.state] < REWARD_RANK[current.state]) return current;
  if ((current.state === "delivered" || current.state === "rejected")
    && incoming.state !== current.state) {
    throw new Error("stock_pack_reward_terminal_changed");
  }
  if (current.state === "delivered" && incoming.state === "delivered"
    && current.receipt?.terminalDigest !== incoming.receipt?.terminalDigest) {
    throw new Error("stock_pack_reward_receipt_changed");
  }
  return incoming;
}

function reconcileCard(
  current: StockPackPayoffCardV1 | null,
  incoming: StockPackPayoffCardV1 | null,
): StockPackPayoffCardV1 | null {
  if (!current) return incoming;
  if (!incoming) return current;
  if (current.cardId !== incoming.cardId) return incoming;
  if (current.snapshotDigest !== incoming.snapshotDigest
    || current.lot.positionTermsDigest !== incoming.lot.positionTermsDigest
    || current.lot.asset.identityDigest !== incoming.lot.asset.identityDigest
    || current.lot.exactAssetAmount !== incoming.lot.exactAssetAmount) {
    throw new Error("stock_pack_selected_card_changed");
  }
  return { ...incoming, delivery: reconcileDelivery(current.delivery, incoming.delivery) };
}

/** Preserve terminal progress when reconnect readbacks arrive out of order. */
export function reconcileStockPacksPlayerSnapshot(
  current: StockPacksPlayerSnapshot | null,
  incoming: StockPacksPlayerSnapshot,
  expectedActor?: StockPackActorV1,
): StockPacksPlayerSnapshot {
  assertStockPacksPlayerSnapshot(incoming, expectedActor);
  if (!current) return incoming;
  assertStockPacksPlayerSnapshot(current, expectedActor);
  if (stockPacksActorKey(current.actor) !== stockPacksActorKey(incoming.actor)) {
    return incoming;
  }
  const sameActiveOperation = (current.activeOpen?.identity.operationId !== undefined
    && current.activeOpen.identity.operationId === incoming.activeOpen?.identity.operationId)
    || (current.activeRewardClaim?.identity.operationId !== undefined
      && current.activeRewardClaim.identity.operationId === incoming.activeRewardClaim?.identity.operationId);
  const reconciled = {
    ...incoming,
    activeOpen: reconcileOpen(current.activeOpen, incoming.activeOpen),
    activeRewardClaim: reconcileRewardClaim(current.activeRewardClaim, incoming.activeRewardClaim),
    activePreview: sameActiveOperation
      ? current.activePreview ?? incoming.activePreview
      : incoming.activePreview,
    selectedCard: sameActiveOperation ? reconcileCard(current.selectedCard, incoming.selectedCard) : incoming.selectedCard,
    sale: sameActiveOperation ? reconcileSale(current.sale, incoming.sale) : incoming.sale,
  };
  assertStockPacksPlayerSnapshot(reconciled, expectedActor);
  return reconciled;
}

export function stockPacksPlayerPhase(snapshot: StockPacksPlayerSnapshot): StockPacksPlayerPhase {
  const open = snapshot.activeOpen;
  const reward = snapshot.activeRewardClaim;
  if (reward) {
    if (!reward.selection) return "reward_claim_pending";
    if (reward.state === "selected") return "selected";
    if (reward.state === "delivering") return "delivery_pending";
    if (reward.state === "reconciling") return "delivery_reconciling";
    if (reward.state === "prepared" || reward.state === "reserved") return "reward_claim_pending";
    if (reward.state === "rejected") return "sale_rejected";
    if (!snapshot.sale) return "received";
  }
  if (!open && !reward) return "browse";
  if (!open) {
    const sale = snapshot.sale;
    if (!sale) return "received";
    if (sale.state === "prepared") return "sale_prepared";
    if (sale.state === "pending") return "sale_pending";
    if (sale.state === "reconciling") return "sale_reconciling";
    if (sale.state === "intermediate_held") return "intermediate_held";
    if (sale.state === "completed") return "sold";
    return "sale_rejected";
  }
  if (!open.selection) return "payment_pending";
  const delivery = snapshot.selectedCard?.delivery ?? open.delivery;
  if (!delivery || delivery.state === "selected") return "selected";
  if (delivery.state === "pending") return "delivery_pending";
  if (delivery.state === "reconciling") return "delivery_reconciling";
  const sale = snapshot.sale;
  if (!sale) return "received";
  if (sale.state === "prepared") return "sale_prepared";
  if (sale.state === "pending") return "sale_pending";
  if (sale.state === "reconciling") return "sale_reconciling";
  if (sale.state === "intermediate_held") return "intermediate_held";
  if (sale.state === "completed") return "sold";
  return "sale_rejected";
}

export function stockPacksProbabilitySegments(
  cards: readonly StockPackPayoffCardV1[],
): readonly StockPacksProbabilitySegment[] {
  const total = cards.reduce((sum, card) => sum + BigInt(card.probability.weight), 0n);
  if (total !== 10_000n || cards.some((card) => card.probability.total !== "10000")) {
    throw new Error("stock_pack_probability_total_invalid");
  }
  return cards.map((card) => {
    const weight = BigInt(card.probability.weight);
    const whole = weight / 100n;
    const fraction = (weight % 100n).toString().padStart(2, "0");
    const percent = `${whole}.${fraction}`;
    return {
      cardId: card.cardId,
      weight: card.probability.weight,
      total: "10000",
      widthPercent: `${percent}%`,
      accessibleLabel: `${percent.replace(/\.00$/u, "").replace(/(\.\d)0$/u, "$1")}% chance`,
    };
  });
}

export function stockPacksReferenceState(
  card: StockPackPayoffCardV1,
  now: string,
): StockPackPayoffCardV1["reference"] {
  return stockPackReferenceAt(card.reference, now);
}

/** Never substitute the projected quote output for the intermediate holding. */
export function stockPacksActualSaleHolding(sale: StockPackSaleV1 | null): StockPackAmountV1 | null {
  return sale?.state === "intermediate_held" ? sale.actualHolding : null;
}

export function assertStockPacksPurchaseReview(
  review: StockPacksPurchaseReview,
  snapshot: StockPacksPlayerSnapshot,
  now: string,
): void {
  assertIsoTimestamp(review.expiresAt, "stock_pack_purchase_review_expiry");
  assertIsoTimestamp(now, "stock_pack_purchase_review_now");
  if (Date.parse(now) >= Date.parse(review.expiresAt)) {
    throw new Error("stock_pack_purchase_review_expired");
  }
  if (stockPacksActorKey(review.actor) !== stockPacksActorKey(snapshot.actor)) {
    throw new Error("stock_pack_purchase_review_actor_mismatch");
  }
  const campaign = snapshot.campaigns.find(({ campaign }) => campaign.campaignId === review.campaignId)?.campaign;
  if (!campaign || campaign.preview.previewId !== review.previewId
    || campaign.preview.previewDigest !== review.previewDigest
    || campaign.preview.inventoryRevision !== review.command.intent.inventoryRevision) {
    throw new Error("stock_pack_purchase_review_preview_mismatch");
  }
  const amounts = [review.principal, ...review.fees, review.total, review.availableBalance];
  if (amounts.some((amount) => amount.asset.identityDigest !== review.total.asset.identityDigest)) {
    throw new Error("stock_pack_purchase_review_asset_mismatch");
  }
  const calculatedTotal = [review.principal, ...review.fees]
    .reduce((sum, amount) => sum + BigInt(amount.rawAmount), 0n);
  if (calculatedTotal !== BigInt(review.total.rawAmount)) {
    throw new Error("stock_pack_purchase_review_total_mismatch");
  }
  const command = review.command;
  const request = parseCanonicalOpenRequestV1(command.intent.request);
  StockPackOperationIdentityV1Schema.parse(command.identity);
  if (command.identity.kind !== "open"
    || command.identity.actorAccountId !== snapshot.actor.actorAccountId
    || command.identity.operationId !== request.operationId
    || command.identity.nonce !== request.idempotencyNonce
    || command.identity.requestDigest !== canonicalAuthorizationDigest(command.intent)
    || command.intent.campaignId !== review.campaignId
    || request.actorAccountId !== snapshot.actor.actorAccountId
    || request.payerWallet !== snapshot.actor.wallet
    || request.recipientWallet !== snapshot.actor.wallet) {
    throw new Error("stock_pack_purchase_review_command_identity_mismatch");
  }
  if (request.state !== "prepared" || request.originTransactionId !== null
    || request.acceptedAt !== null || request.recipeStatusAtAcceptance !== null
    || request.acceptanceReceiptDigest !== null) {
    throw new Error("stock_pack_purchase_review_command_not_prepared");
  }
  if (request.marketId !== campaign.preview.recipe.marketId
    || request.recipeVersion !== campaign.preview.recipe.recipeVersion
    || request.recipeTermsDigest !== campaign.preview.recipe.termsDigest
    || request.snapshotId !== campaign.preview.snapshot.snapshotId
    || request.snapshotDigest !== campaign.preview.snapshot.snapshotDigest
    || request.exactPrincipalQuoteUnits !== review.principal.rawAmount
    || request.maximumTotalCostQuoteUnits !== review.total.rawAmount
    || request.paymentAsset.identityDigest !== review.total.asset.identityDigest
    || request.paymentAmount !== review.principal.rawAmount
    || Date.parse(review.expiresAt) > Date.parse(request.expiresAt)) {
    throw new Error("stock_pack_purchase_review_command_terms_mismatch");
  }
}

export function assertStockPacksSaleReview(
  review: StockPacksSaleReview,
  snapshot: StockPacksPlayerSnapshot,
  now: string,
): void {
  const card = snapshot.selectedCard;
  if (!card || review.cardId !== card.cardId || card.delivery?.state !== "delivered") {
    throw new Error("stock_pack_sale_review_delivery_missing");
  }
  assertStockPackExecutableQuote(review.quote, {
    actorAccountId: snapshot.actor.actorAccountId,
    wallet: snapshot.actor.wallet,
    amount: { asset: card.lot.asset, rawAmount: card.lot.exactAssetAmount },
    outputAssetDigest: review.quote.minimumOutput.asset.identityDigest,
    now,
  });
}
