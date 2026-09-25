import { useStockPacksBrand } from "../branding/stockPacksBrand";
import { STOCK_PACKS_PULL_ONLY } from "../branding/stockPacksThemeFlags";
import { StockPacksPlayerPanelRoyale } from "./StockPacksPlayerPanelRoyale";
import { formatStockPackDisplayAmount, StockPayoffSurface } from "../payoffs";
import { StockPackSalePanel } from "../sale/StockPackSalePanel";
import type { StockPackSaleViewState } from "../sale/stockPackSaleActions";
import { stockPacksFormatAmount } from "./StockPacksRewardPayoutDetails";
import { stockPacksPlayerPhase } from "./stockPacksPlayerModel";
import { stockPacksCampaignPresentationPreview } from "./stockPacksPlayerRouteModel";
import type { StockPacksPlayerJourney } from "./useStockPacksPlayer";
import { StockPacksCopyAddress } from "../site/StockPacksAccountBar";
import {
  STOCK_PACKS_LAUNCH_HREF,
  STOCK_PACKS_LOGIN_DOWN_COPY,
  STOCK_PACKS_TERMS_HREF,
  stockPacksCampaignAction,
  stockPacksErrorCopy,
  stockPacksOpenInFlight,
  stockPacksShortfallRaw,
  type StockPacksLoginState,
} from "../site/stockPacksSiteStatus";
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
    case "selected": return "PULL SELECTED";
    case "delivery_pending": return "DELIVERY PENDING";
    case "delivery_reconciling": return "CHECKING DELIVERY";
    case "received": return "RECEIVED IN YOUR WALLET";
    case "sale_prepared": return "SWAP READY FOR REVIEW";
    case "sale_pending": return "SWAP PENDING";
    case "sale_reconciling": return "CHECKING SWAP";
    case "intermediate_held": return "INTERMEDIATE TOKEN RECEIVED";
    case "sold": return "USDC RECEIVED";
    case "sale_rejected": return "TOKEN KEPT IN WALLET";
    default: return "Choose a Stock Pack";
  }
}

/** Connect button that is never a silent no-op: loading and down states are disabled and say why. */
function StockPacksPanelConnect({ loginState, onConnect }: Readonly<{
  loginState: StockPacksLoginState;
  onConnect: () => void;
}>) {
  if (loginState === "authenticated") return null;
  return <>
    <button type="button" className="stockPacksPlayer__primary" disabled={loginState !== "ready"} onClick={onConnect}>
      {loginState === "loading" ? "Loading login..." : "Connect with Privy"}
    </button>
    {loginState === "down" ? <small className="stockPacksPlayer__note" role="status">{STOCK_PACKS_LOGIN_DOWN_COPY}</small> : null}
  </>;
}

/**
 * Day-one state while pack sales are off: say so, and point at the live launchpad.
 * Pull-only (VITE_STOCK_PACKS_PULL_ONLY) has no launchpad, so no launch link.
 */
function StockPacksClosedCard({ pullOnly }: Readonly<{ pullOnly: boolean }>) {
  if (pullOnly) {
    return (
      <section className="stockPacksPlayer royaleNormalPackContents__state stockPacksPlayer__closed" role="status">
        <strong>Packs drop soon</strong>
        <small>One pack. One stock token. Sent to your wallet.</small>
      </section>
    );
  }
  return (
    <section className="stockPacksPlayer royaleNormalPackContents__state stockPacksPlayer__closed" role="status">
      <strong>Packs drop soon</strong>
      <small>Launch a token now.</small>
      <a className="stockPacksPlayer__primary stockPacksPlayer__link" href={STOCK_PACKS_LAUNCH_HREF}>Launch a token</a>
    </section>
  );
}

/**
 * Stock-specific content for the established Pack Royale opener. The route
 * keeps ownership of the shell, navigation, pack selection and reveal cinema;
 * this component adds only exact Stock Pack terms and durable action state.
 */
function StockPacksPlayerPanelStock({
  actorConnected,
  journey,
  saleController,
  purchaseDisabledReason = null,
  purchasesOpen = true,
  loginState = "ready",
  onFundWallet = null,
  onConnect,
  onClose,
  pullOnly = STOCK_PACKS_PULL_ONLY,
}: Readonly<{
  actorConnected: boolean;
  journey: StockPacksPlayerJourney;
  saleController: StockPacksSaleController | null;
  purchaseDisabledReason?: string | null;
  /** Stock host only: false while pack sales are off (build flag). */
  purchasesOpen?: boolean;
  /** Stock host only: VITE_STOCK_PACKS_PULL_ONLY, the site is just pull (no launch or pools copy). */
  pullOnly?: boolean;
  /** Stock host only: "authenticated" means logged in but the session is not ready. */
  loginState?: StockPacksLoginState;
  /** Stock host only: Privy funding for the buyer's own wallet. */
  onFundWallet?: ((input: Readonly<{ address: string; amountUsdc?: string }>) => void) | null;
  onConnect: () => void;
  onClose: () => void;
}>) {
  const snapshot = journey.snapshot;
  const paidCampaigns = snapshot?.campaigns.filter((entry) => entry.access.mode === "paid") ?? [];
  const selectedCampaign = paidCampaigns.find(({ campaign }) =>
    campaign.campaignId === snapshot?.selectedCampaignId) ?? paidCampaigns[0] ?? null;
  const selectedCard = snapshot?.selectedCard ?? null;
  const cards = selectedCampaign ? stockPacksCampaignPresentationPreview(selectedCampaign).cards : [];
  const phase = snapshot ? stockPacksPlayerPhase(snapshot) : "browse";
  const actionLabel = phaseLabel(phase);
  const delivered = selectedCard?.delivery?.state === "delivered";
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

  const campaignAction = selectedCampaign
    ? stockPacksCampaignAction(selectedCampaign.campaign.state, purchasesOpen)
    : null;
  const openInFlight = stockPacksOpenInFlight(phase);
  const payerWallet = snapshot?.actor.wallet ?? null;
  const shortfallRaw = journey.purchaseReview
    ? stockPacksShortfallRaw(journey.purchaseReview.availableBalance.rawAmount, journey.purchaseReview.total.rawAmount)
    : null;
  const shortfall = journey.purchaseReview && shortfallRaw
    ? stockPacksFormatAmount({ asset: journey.purchaseReview.total.asset, rawAmount: shortfallRaw })
    : null;

  if (!selectedCampaign) {
    if (!purchasesOpen && journey.pendingAction !== "load") return <StockPacksClosedCard pullOnly={pullOnly} />;
    if (!actorConnected) {
      // Logged in without a ready session: the account bar above shows the exact fix.
      if (loginState === "authenticated") return null;
      return (
        <section className="stockPacksPlayer royaleNormalPackContents__state" role="status">
          <strong>Connect with Privy to rip a Stock Pack</strong>
          <small>Your pull is sent to your verified Solana wallet.</small>
          <StockPacksPanelConnect loginState={loginState} onConnect={onConnect} />
        </section>
      );
    }
    if (journey.error && journey.pendingAction !== "load") {
      // A failed load is not an empty shop: say it did not load and offer a retry.
      return (
        <section className="stockPacksPlayer royaleNormalPackContents__state" role="alert">
          <strong>Packs did not load.</strong>
          <small>{stockPacksErrorCopy(journey.error)}</small>
          <button type="button" className="stockPacksPlayer__primary" onClick={journey.reload}>Retry</button>
        </section>
      );
    }
    return (
      <section className="stockPacksPlayer royaleNormalPackContents__state" role="status">
        <strong>{journey.pendingAction === "load" ? "Loading Stock Packs…" : "No packs ready to rip"}</strong>
        <small>{pullOnly ? "Check back soon for the next drop." : "Funded pool rewards show after token checks."}</small>
      </section>
    );
  }

  return (
      <section className="stockPacksPlayer" aria-label="Pack details" data-phase={phase}>
      {paidCampaigns.length > 1 ? (
        <nav className="stockPacksPlayer__campaigns" aria-label="Choose a pack">
          {paidCampaigns.map((entry) => {
            const selected = entry.campaign.campaignId === selectedCampaign.campaign.campaignId;
            const accessLabel = `Paid · ${stockPacksFormatAmount({
              asset: entry.campaign.preview.recipe.quoteAsset,
              rawAmount: entry.campaign.preview.recipe.exactPackPrincipalQuoteUnits,
            })}`;
            return (
              <button
                aria-pressed={selected}
                className="stockPacksPlayer__campaign"
                disabled={busy || snapshot?.activeOpen !== null}
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
          <div><span>{snapshot?.activeOpen?.selection ? "Your pull" : "Pack details"}</span><h3 id="stock-packs-outcomes">{selectedCampaign.title}</h3></div>
          <small>Rip one pack. Pull one reward.</small>
        </div>
        <div className="stockPacksPlayer__summary">
          <strong>{price && quoteAsset ? `Paid · ${stockPacksFormatAmount({ asset: quoteAsset, rawAmount: price })}` : "Paid · price unavailable"}</strong>
          <p>1 pack, 1 reward. Tap odds to see what's inside.</p>
          <dl>
            <div><dt>Rewards</dt><dd>{cards.length}</dd></div>
            <div><dt>Pack limit</dt><dd>{selectedCampaign.campaign.preview.maximumPurchaseCount}</dd></div>
            <div><dt>Pack fees</dt><dd>{includedFeeBps} bps</dd></div>
          </dl>
        </div>
        <StockPayoffSurface singleCertificate stockCopy acquisition={selectedCampaign.acquisition}
          key={`${snapshot?.activeOpen?.selection?.selectionDigest ?? "preview"}:${journey.replayNonce}`}
          cards={cards} earnedDelivery={false} selection={snapshot?.activeOpen?.selection ?? null}
          sale={snapshot?.sale ?? null} />
      </section>

      <section className="royaleNormalPackContents__section" aria-labelledby="stock-packs-action">
        <div className="royaleNormalPackContents__sectionHead">
          <div><span>Your pack</span><h3 id="stock-packs-action">{actionLabel}</h3></div>
          <small>{shortWallet(selectedCard?.delivery?.recipientWallet
            ?? snapshot?.actor.wallet
            ?? "Privy wallet")}</small>
        </div>

        {selectedCard?.delivery ? (
          <div className="stockPacksPlayer__receipt">
            <dl>
              <div><dt>Token</dt><dd>{selectedCard.lot.asset.displayMetadata?.symbol ?? selectedCard.lot.asset.assetAddress}</dd></div>
              <div><dt>Exact token delivery</dt><dd>{formatStockPackDisplayAmount(selectedCard.lot.exactAssetAmount, selectedCard.instrument)}</dd></div>
              <div><dt>Delivery</dt><dd>{selectedCard.delivery?.state.replaceAll("_", " ").toUpperCase()}</dd></div>
            </dl>
            <div className="stockPacksPlayer__actions">
              <button type="button" onClick={journey.replayReveal}>Replay reveal</button>
              {phase === "delivery_pending" || phase === "delivery_reconciling" || phase === "sale_reconciling"
                ? <button type="button" disabled={busy} onClick={() => void journey.recover()}>Refresh receipt</button>
                : null}
            </div>
          </div>
        ) : null}

        {delivered && saleController ? <StockPackSalePanel {...saleController} stockCopy /> : null}

        <div className="stockPacksPlayer__purchase">
          {snapshot?.walletBalance ? <p><strong>Pack payment</strong> · wallet balance {stockPacksFormatAmount(snapshot.walletBalance)}</p> : null}
          {actorConnected && purchaseDisabledReason
            ? <p className="stockPacksPlayer__error" role="alert">{purchaseDisabledReason}</p>
            : null}
          {operationPending ? (
            <div className="stockPacksPlayer__savedOperation" role="status">
              <strong>Saved pack payment in progress</strong>
              <span>Check this payment before starting another.</span>
              <button type="button" disabled={busy} onClick={() => void journey.recover()}>
                {journey.pendingAction === "recover" ? "Checking saved purchase…" : "Check saved purchase"}
              </button>
            </div>
          ) : openInFlight ? (
            // The paid open is still moving: no second purchase, and a manual check
            // for the "selected" phase, which has no delivery receipt yet.
            <div className="stockPacksPlayer__savedOperation" role="status">
              <strong>{phase === "payment_pending" ? "Confirming payment..." : "Sending your token..."}</strong>
              {phase === "selected" ? (
                <button type="button" disabled={busy} onClick={() => void journey.recover()}>
                  {journey.pendingAction === "recover" ? "Checking..." : "Check again"}
                </button>
              ) : null}
            </div>
          ) : !actorConnected ? (
            purchasesOpen ? <StockPacksPanelConnect loginState={loginState} onConnect={onConnect} /> : null
          ) : journey.purchaseReview ? (
            <div className="stockPacksPlayer__review">
              <dl>
                <div><dt>Pack</dt><dd>{stockPacksFormatAmount(journey.purchaseReview.principal)}</dd></div>
                <div><dt>Add-on fees</dt><dd>{journey.purchaseReview.fees.length === 0 ? "None" : journey.purchaseReview.fees.map(stockPacksFormatAmount).join(" + ")}</dd></div>
                <div><dt>Total</dt><dd>{stockPacksFormatAmount(journey.purchaseReview.total)}</dd></div>
              </dl>
              <button type="button" className="stockPacksPlayer__primary" disabled={busy || !purchaseAffordable || Boolean(purchaseDisabledReason)} onClick={() => void journey.purchase()}>
                {journey.pendingAction === "purchase" ? "Waiting for approval…" : purchaseAffordable ? "Approve payment" : shortfall ? `Add ${shortfall} to open` : "Insufficient wallet balance"}
              </button>
              {!purchaseAffordable && payerWallet ? (
                <div className="stockPacksPlayer__fund">
                  <span>Send USDC on Solana to your wallet:</span>
                  <code>{payerWallet}</code>
                  <div className="stockPacksPlayer__actions">
                    <StockPacksCopyAddress address={payerWallet} />
                    {onFundWallet ? (
                      <button type="button" onClick={() => onFundWallet({
                        address: payerWallet,
                        ...(shortfallRaw && journey.purchaseReview
                          ? { amountUsdc: stockPacksFormatAmount({ asset: journey.purchaseReview.total.asset, rawAmount: shortfallRaw }).split(" ")[0] }
                          : {}),
                      })}>Fund wallet</button>
                    ) : null}
                  </div>
                </div>
              ) : null}
              <p className="stockPacksPlayer__risk">
                {`Packs are random. You can get back less than ${stockPacksFormatAmount(journey.purchaseReview.total)}. `}
                <a href={STOCK_PACKS_TERMS_HREF}>Terms</a>
              </p>
            </div>
          ) : (
            <>
              <button type="button" className="stockPacksPlayer__primary" disabled={busy || Boolean(purchaseDisabledReason) || Boolean(campaignAction?.blocked)} onClick={() => void journey.reviewPurchase(selectedCampaign.campaign.campaignId)}>
                {journey.pendingAction === "review_purchase" ? "Checking pack…" : campaignAction?.label ?? "Review pack"}
              </button>
              {campaignAction?.note ? <small className="stockPacksPlayer__note">{campaignAction.note}</small> : null}
            </>
          )}
        </div>

        {(phase === "received" || phase === "sale_rejected") ? <button type="button" className="stockPacksPlayer__keep" onClick={onClose}>Keep in wallet</button> : null}
        {(phase === "received" || phase === "sold" || phase === "sale_rejected") ? <button type="button" className="stockPacksPlayer__openAnother" onClick={journey.openAnother}>Rip another pack</button> : null}
        {journey.error ? <p className="stockPacksPlayer__error" role="alert">{stockPacksErrorCopy(journey.error)}</p> : null}
      </section>

      {snapshot?.history.some((entry) => entry.mode === "paid") ? (
        <section className="royaleNormalPackContents__section" aria-labelledby="stock-packs-history">
          <div className="royaleNormalPackContents__sectionHead"><div><span>Collection history</span><h3 id="stock-packs-history">Recent Stock Packs</h3></div></div>
          <div className="stockPacksPlayer__history">
            {snapshot.history.filter((entry) => entry.mode === "paid").map((entry) => (
              <button type="button" key={entry.operationId} onClick={() => journey.viewHistory(entry.operationId)}>
                <strong>{entry.card?.lot.asset.displayMetadata?.symbol ?? "PENDING PULL"}</strong>
                <small>{(entry.sale?.state ?? entry.card?.delivery?.state ?? "payment pending").replaceAll("_", " ").toUpperCase()}</small>
              </button>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}

export function StockPacksPlayerPanel(props: Parameters<typeof StockPacksPlayerPanelStock>[0]) {
  const brand = useStockPacksBrand();
  return brand.id === "stonkpacks"
    ? <StockPacksPlayerPanelStock {...props} />
    : <StockPacksPlayerPanelRoyale {...props} />;
}
