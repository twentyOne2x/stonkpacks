import { formatStockPackDisplayAmount, StockPayoffSurface } from "../payoffs";
import { StockPackSalePanel } from "../sale/StockPackSalePanel";
import type { StockPackSaleViewState } from "../sale/stockPackSaleActions";
import { StockPacksRewardClaimActions } from "./StockPacksRewardClaimActions";
import { StockPacksRewardPayoutDetails, stockPacksFormatAmount } from "./StockPacksRewardPayoutDetails";
import { stockPacksPlayerPhase } from "./stockPacksPlayerModel";
import {
  STOCK_PACKS_PROFIT_UNAVAILABLE,
  stockPacksCampaignPresentationPreview,
  stockPacksHasClaimableReward,
  stockPacksRewardPayoutStatus,
} from "./stockPacksPlayerRouteModel";
import type { StockPacksPlayerJourney } from "./useStockPacksPlayer";
import "../../../routes/royale/normalOpening/royaleNormalPackContentsDialog.css";
import "../payoffs/payoffs.css";
import "./stockPacksPlayer.css";

export type StockPacksSaleController = Readonly<{
  state: StockPackSaleViewState;
  now: string;
  onQuote: () => void;
  onRefresh: () => void;
  onConfirm: () => void;
  onRecover: () => void;
}>;

function shortWallet(wallet: string): string {
  return wallet.length > 13 ? `${wallet.slice(0, 6)}…${wallet.slice(-5)}` : wallet;
}

function phaseLabel(phase: ReturnType<typeof stockPacksPlayerPhase>): string {
  switch (phase) {
    case "payment_pending": return "PAYMENT PENDING";
    case "reward_claim_pending": return "REWARD CLAIM PENDING";
    case "selected": return "PULL SELECTED";
    case "delivery_pending": return "DELIVERY PENDING";
    case "delivery_reconciling": return "CHECKING DELIVERY";
    case "received": return "RECEIVED IN YOUR WALLET";
    case "sale_prepared": return "SALE READY FOR REVIEW";
    case "sale_pending": return "SALE PENDING";
    case "sale_reconciling": return "CHECKING SALE";
    case "intermediate_held": return "INTERMEDIATE TOKEN RECEIVED";
    case "sold": return "USDC RECEIVED";
    case "sale_rejected": return "TOKEN KEPT IN WALLET";
    default: return "Choose a Stock Pack";
  }
}

/**
 * Stock-specific content for the established Pack Royale opener. The route
 * keeps ownership of the shell, navigation, pack selection and reveal cinema;
 * this component adds only exact Stock Pack terms and durable action state.
 */
export function StockPacksPlayerPanelRoyale({
  actorConnected,
  journey,
  saleController,
  purchaseDisabledReason = null,
  onConnect,
  onClose,
}: Readonly<{
  actorConnected: boolean;
  journey: StockPacksPlayerJourney;
  saleController: StockPacksSaleController | null;
  purchaseDisabledReason?: string | null;
  onConnect: () => void;
  onClose: () => void;
}>) {
  const snapshot = journey.snapshot;
  const selectedCampaign = snapshot?.campaigns.find(({ campaign }) =>
    campaign.campaignId === snapshot.selectedCampaignId) ?? snapshot?.campaigns[0] ?? null;
  const selectedCard = snapshot?.selectedCard ?? null;
  const acquisition = selectedCampaign?.acquisition ?? null;
  const rewardAccess = acquisition?.mode === "sponsored_reward" ? acquisition : null;
  const rewardClaim = snapshot?.activeRewardClaim ?? null;
  const activeRewardHistory = rewardClaim ? snapshot?.history.find((entry) =>
    entry.mode === "sponsored_reward" && entry.operationId === rewardClaim.identity.operationId) ?? null : null;
  const activeRewardPayout = activeRewardHistory?.mode === "sponsored_reward"
    ? activeRewardHistory.rewardPayout : null;
  const claimableReward = selectedCampaign ? stockPacksHasClaimableReward(selectedCampaign) : false;
  const earnedReward = Boolean(!claimableReward && rewardClaim?.selection && selectedCard);
  const showingRewardPreview = Boolean(rewardAccess && selectedCampaign?.rewardPreview && !earnedReward);
  const cards = earnedReward && selectedCard
    ? [selectedCard]
    : selectedCampaign ? stockPacksCampaignPresentationPreview(selectedCampaign).cards : [];
  const phase = snapshot ? stockPacksPlayerPhase(snapshot) : "browse";
  const actionLabel = claimableReward ? "EARNED ROUND READY" : phaseLabel(phase);
  const delivered = selectedCard?.delivery?.state === "delivered" || rewardClaim?.state === "delivered";
  const operationPending = snapshot?.activeOpen !== null && snapshot?.activeOpen !== undefined
    && snapshot.activeOpen.selection === null;
  const busy = journey.pendingAction !== null;
  const price = selectedCampaign?.campaign.preview.recipe.exactPackPrincipalQuoteUnits ?? null;
  const quoteAsset = selectedCampaign?.campaign.preview.recipe.quoteAsset ?? null;
  const purchaseAffordable = journey.purchaseReview
    ? BigInt(journey.purchaseReview.availableBalance.rawAmount) >= BigInt(journey.purchaseReview.total.rawAmount)
    : false;
  const includedFeeBps = selectedCampaign
    ? selectedCampaign.campaign.preview.recipe.protocolFeeBps
      + selectedCampaign.campaign.preview.recipe.creatorFeeBps
      + selectedCampaign.campaign.preview.recipe.chaseFeeBps
    : 0;

  if (!selectedCampaign) {
    if (!actorConnected) {
      return (
        <section className="stockPacksPlayer royaleNormalPackContents__state" role="status">
          <strong>Connect with Privy to open a Stock Pack</strong>
          <small>Your verified Solana wallet receives the selected token directly.</small>
          <button type="button" className="stockPacksPlayer__primary" onClick={onConnect}>Connect with Privy</button>
        </section>
      );
    }
    return (
      <section className="stockPacksPlayer royaleNormalPackContents__state" role="status">
        <strong>{journey.pendingAction === "load" ? "Loading Stock Packs…" : "No funded Stock Packs available"}</strong>
        <small>Platform-operated pools appear here after funded inventory is verified.</small>
      </section>
    );
  }

  return (
    <section className="stockPacksPlayer" aria-label="Stock Pack details" data-phase={phase}>
      {snapshot && snapshot.campaigns.length > 1 ? (
        <nav className="stockPacksPlayer__campaigns" aria-label="Choose a Stock Pack">
          {snapshot.campaigns.map((entry) => {
            const selected = entry.campaign.campaignId === selectedCampaign.campaign.campaignId;
            const accessLabel = entry.access.mode === "sponsored_reward"
              ? "Sponsored · no USDC charge"
              : `Paid · ${stockPacksFormatAmount({
                asset: entry.campaign.preview.recipe.quoteAsset,
                rawAmount: entry.campaign.preview.recipe.exactPackPrincipalQuoteUnits,
              })}`;
            return (
              <button
                aria-pressed={selected}
                className="stockPacksPlayer__campaign"
                disabled={busy || snapshot.activeOpen !== null || snapshot.activeRewardClaim !== null}
                key={entry.campaign.campaignId}
                onClick={() => journey.selectCampaign(entry.campaign.campaignId)}
                type="button"
              >
                <strong>{entry.title}</strong>
                <span>{accessLabel}</span>
              </button>
            );
          })}
        </nav>
      ) : null}
      <section className="royaleNormalPackContents__section" aria-labelledby="stock-packs-outcomes">
        <div className="royaleNormalPackContents__sectionHead">
          <div><span>{earnedReward ? "Earned delivery" : showingRewardPreview ? "Earned rewards" : "Published rewards"}</span><h3 id="stock-packs-outcomes">{selectedCampaign.title}</h3><p>{selectedCampaign.description}</p></div>
          <small>{earnedReward ? "Exact awarded token quantity" : showingRewardPreview
            ? "Original approved quantities and odds" : "Exact quantities and odds"}</small>
        </div>
        <div className="stockPacksPlayer__summary">
          <strong>{rewardAccess
            ? "Sponsored · no USDC charge"
            : price && quoteAsset ? `Paid · ${stockPacksFormatAmount({ asset: quoteAsset, rawAmount: price })}` : "Paid · price unavailable"}</strong>
          <dl>
            <div><dt>Rewards</dt><dd>{cards.length}</dd></div>
            <div><dt>{rewardAccess ? "Claim state" : "Purchase limit"}</dt><dd>{rewardAccess?.state.replaceAll("_", " ").toUpperCase()
              ?? selectedCampaign.campaign.preview.maximumPurchaseCount}</dd></div>
            <StockPacksRewardPayoutDetails campaign={selectedCampaign} />
            {!rewardAccess ? <div><dt>Pack fees</dt><dd>{includedFeeBps} bps</dd></div> : null}
          </dl>
        </div>
        <StockPayoffSurface
          acquisition={selectedCampaign.acquisition}
          key={`${claimableReward ? selectedCampaign.rewardPayout?.epochId
            : snapshot?.activeOpen?.selection?.selectionDigest
              ?? snapshot?.activeRewardClaim?.selection?.selectionDigest ?? "preview"}:${journey.replayNonce}`}
          cards={cards}
          earnedDelivery={earnedReward}
          selection={claimableReward ? null
            : snapshot?.activeOpen?.selection ?? snapshot?.activeRewardClaim?.selection ?? null}
          sale={snapshot?.sale ?? null}
        />
      </section>

      <section className="royaleNormalPackContents__section" aria-labelledby="stock-packs-action">
        <div className="royaleNormalPackContents__sectionHead">
          <div><span>Your pack</span><h3 id="stock-packs-action">{actionLabel}</h3></div>
          <small>{shortWallet(selectedCard?.delivery?.recipientWallet
            ?? rewardClaim?.receipt?.recipientWallet
            ?? snapshot?.actor.wallet
            ?? "Privy wallet")}</small>
        </div>

        {selectedCard && (selectedCard.delivery || rewardClaim?.selection) ? (
          <div className="stockPacksPlayer__receipt">
            <dl>
              <div><dt>Asset</dt><dd>{selectedCard.lot.asset.displayMetadata?.symbol ?? selectedCard.lot.asset.assetAddress}</dd></div>
              {activeRewardPayout ? <div><dt>Earned round</dt><dd>{activeRewardPayout.roundNumber}</dd></div> : null}
              <div><dt>Exact token delivery</dt><dd>{formatStockPackDisplayAmount(selectedCard.lot.exactAssetAmount, selectedCard.instrument)}</dd></div>
              <div><dt>Delivery</dt><dd>{(selectedCard.delivery?.state ?? rewardClaim?.state)?.replaceAll("_", " ").toUpperCase()}</dd></div>
              <div><dt>Transactions</dt><dd>{selectedCard.delivery?.transactionIds.length ?? rewardClaim?.receipt?.transactionIds.length ?? 0}</dd></div>
            </dl>
            <div className="stockPacksPlayer__actions">
              <button type="button" onClick={journey.replayReveal}>Replay reveal</button>
              {phase === "delivery_pending" || phase === "delivery_reconciling" || phase === "sale_reconciling"
                ? <button type="button" disabled={busy} onClick={() => void (rewardClaim ? journey.recoverReward() : journey.recover())}>Refresh receipt</button>
                : null}
            </div>
          </div>
        ) : null}

        {delivered && saleController ? <StockPackSalePanel {...saleController} /> : null}

        <div className="stockPacksPlayer__purchase">
          {rewardAccess ? <p><strong>Sponsored opening</strong> · no USDC charge</p>
            : snapshot?.walletBalance ? <p><strong>Paid opening</strong> · wallet balance {stockPacksFormatAmount(snapshot.walletBalance)}</p> : null}
          {!rewardAccess && actorConnected && purchaseDisabledReason
            ? <p className="stockPacksPlayer__error" role="alert">{purchaseDisabledReason}</p>
            : null}
          {rewardAccess ? <StockPacksRewardClaimActions
            busy={busy}
            campaign={selectedCampaign}
            onClaim={journey.claimReward}
            onRecover={journey.recoverReward}
            pendingAction={journey.pendingAction}
            pendingClaim={rewardClaim}
            pendingPayout={activeRewardPayout}
          /> : operationPending ? (
            <div className="stockPacksPlayer__savedOperation" role="status">
              <strong>Saved purchase in progress</strong>
              <span>Refresh this paid opening without starting another payment.</span>
              <button type="button" disabled={busy} onClick={() => void journey.recover()}>
                {journey.pendingAction === "recover" ? "Checking saved purchase…" : "Check saved purchase"}
              </button>
            </div>
          ) : !actorConnected ? (
            <button type="button" className="stockPacksPlayer__primary" onClick={onConnect}>Connect with Privy</button>
          ) : journey.purchaseReview ? (
            <div className="stockPacksPlayer__review">
              <dl>
                <div><dt>Pack</dt><dd>{stockPacksFormatAmount(journey.purchaseReview.principal)}</dd></div>
                <div><dt>Add-on fees</dt><dd>{journey.purchaseReview.fees.length === 0 ? "None" : journey.purchaseReview.fees.map(stockPacksFormatAmount).join(" + ")}</dd></div>
                <div><dt>Sponsored bonus chance per paid open</dt><dd>{(journey.purchaseReview.bonusChanceBps ?? 0) / 100}%</dd></div>
                <div><dt>Total</dt><dd>{stockPacksFormatAmount(journey.purchaseReview.total)}</dd></div>
              </dl>
              <button type="button" className="stockPacksPlayer__primary" disabled={busy || !purchaseAffordable || Boolean(purchaseDisabledReason)} onClick={() => void journey.purchase()}>
                {journey.pendingAction === "purchase" ? "Waiting for approval…" : purchaseAffordable ? "Approve purchase" : "Insufficient wallet balance"}
              </button>
            </div>
          ) : (
            <button type="button" className="stockPacksPlayer__primary" disabled={busy || Boolean(purchaseDisabledReason) || selectedCampaign.campaign.state !== "published"} onClick={() => void journey.reviewPurchase(selectedCampaign.campaign.campaignId)}>
              {journey.pendingAction === "review_purchase" ? "Checking pack…" : "Review purchase"}
            </button>
          )}
        </div>

        {(phase === "received" || phase === "sale_rejected") ? <button type="button" className="stockPacksPlayer__keep" onClick={onClose}>Keep in wallet</button> : null}
        {(phase === "received" || phase === "sold" || phase === "sale_rejected") ? <button type="button" className="stockPacksPlayer__openAnother" onClick={journey.openAnother}>Open another</button> : null}
        {journey.error ? <p className="stockPacksPlayer__error" role="alert">{journey.error.message}</p> : null}
      </section>

      <section className="royaleNormalPackContents__section" aria-labelledby="stock-packs-profit">
        <div className="royaleNormalPackContents__sectionHead">
          <div><span>LP fees</span><h3 id="stock-packs-profit">Profit</h3></div>
          <small>EARNED · PENDING · CLAIMABLE · CLAIMED</small>
        </div>
        <div className="stockPacksPlayer__savedOperation" role="status">
          <strong>{STOCK_PACKS_PROFIT_UNAVAILABLE.label}</strong>
          <span>{STOCK_PACKS_PROFIT_UNAVAILABLE.description}</span>
          <small>{STOCK_PACKS_PROFIT_UNAVAILABLE.detail}</small>
        </div>
      </section>

      {snapshot?.history.length ? (
        <section className="royaleNormalPackContents__section" aria-labelledby="stock-packs-history">
          <div className="royaleNormalPackContents__sectionHead"><div><span>Collection history</span><h3 id="stock-packs-history">Recent Stock Packs</h3></div></div>
          <div className="stockPacksPlayer__history">
            {snapshot.history.map((entry) => (
              <button type="button" key={entry.operationId} onClick={() => journey.viewHistory(entry.operationId)}>
                <strong>{entry.card?.lot.asset.displayMetadata?.symbol ?? "PENDING PULL"}</strong>
                <small>{entry.mode === "sponsored_reward"
                  ? stockPacksRewardPayoutStatus(entry.rewardPayout, entry.rewardClaim.state)
                  : (entry.sale?.state ?? entry.card?.delivery?.state ?? "payment pending").replaceAll("_", " ").toUpperCase()}</small>
              </button>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}
