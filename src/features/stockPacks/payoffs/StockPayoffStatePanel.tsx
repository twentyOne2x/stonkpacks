import type {
  StockPackPayoffCardV1,
  StockPackSaleV1,
} from "@attn-packs/pack-network";
import {
  formatStockPackRawAmount,
  formatStockPackTimestamp,
  stockPackReasonLabel,
} from "./stockPayoffPresentation";

type PanelState = Readonly<{
  key: string;
  kicker: string;
  title: string;
  copy: string;
}>;

function payoffPanelState(card: StockPackPayoffCardV1 | null, sale: StockPackSaleV1 | null, stockCopy: boolean): PanelState {
  if (sale?.state === "intermediate_held") return {
    key: "intermediate-held",
    kicker: stockCopy ? "SWAP PAUSED" : "SALE ROUTE PAUSED SAFELY",
    title: stockCopy ? "TOKEN RECEIVED" : "STOCK LEG RECEIVED",
    copy: stockCopy ? "First swap is final. Your token balance is below. Resume the next swap only."
      : "The first route leg finalized. The actual stock-token holding is shown below; only the unfinished leg may resume.",
  };
  if (!card) return {
    key: "preview",
    kicker: stockCopy ? "ODDS LOCKED" : "PAYOFF TABLE LOCKED",
    title: stockCopy ? "PUBLISHED REWARDS" : "POSSIBLE FUNDED PULLS",
    copy: stockCopy ? "Rewards and odds are set before packs open. This screen does not pick your reward."
      : "Published quantities and odds are supplied by the immutable snapshot. This view does not draw a reward.",
  };
  if (card.delivery?.state === "pending") return {
    key: "delivery-pending",
    kicker: stockCopy ? "PULL LOCKED" : "SELECTION RECORDED",
    title: "DELIVERY PENDING",
    copy: stockCopy ? "Your pull cannot be rerolled. Checking delivery to your wallet."
      : "The drawn reward cannot be rerolled. Waiting for authoritative wallet delivery readback.",
  };
  if (card.delivery?.state === "reconciling") return {
    key: "delivery-reconciling",
    kicker: stockCopy ? "PULL PRESERVED" : "SELECTION PRESERVED",
    title: stockCopy ? "CHECKING DELIVERY" : "DELIVERY NEEDS RECONCILIATION",
    copy: stockCopy ? "Transaction status is unclear. Keep this action and check before retrying."
      : "The transaction state is ambiguous. Keep the same operation and reconcile it before any retry.",
  };
  if (card.delivery?.state === "delivered") {
    if (card.saleQuote.state === "expired") return {
      key: "quote-expired",
      kicker: stockCopy ? "TOKEN RECEIVED" : "ASSET RECEIVED",
      title: stockCopy ? "SWAP QUOTE EXPIRED" : "SALE QUOTE EXPIRED",
      copy: stockCopy ? "Your token stays in your wallet. Refresh the exact quote before swapping."
        : "The received asset remains in the wallet. Refresh the exact-size quote before requesting a sale authorization.",
    };
    return {
      key: "delivered",
      kicker: stockCopy ? "TOKEN DELIVERY CONFIRMED" : "FINAL DELIVERY CONFIRMED",
      title: stockCopy ? "SENT TO YOUR WALLET" : "RECEIVED IN PRIVY WALLET",
      copy: stockCopy ? "Receipt confirms the token and exact amount. Keep it in your wallet with no extra steps."
        : "The receipt binds the selected mint and exact quantity. Keeping the asset requires no further action.",
    };
  }
  return {
    key: "selected",
    kicker: stockCopy ? "PULL RECORDED" : "SERVER SELECTION RECORDED",
    title: stockCopy ? "YOU PULLED" : "REWARD REVEALED",
    copy: stockCopy ? "Your pull is locked. Replay only replays the reveal animation."
      : "This supplied selection is immutable. Replaying presentation animation cannot select or reroll it.",
  };
}

export function StockPayoffStatePanel({
  selectedCard,
  sale = null,
  illustrative = false,
  stockCopy = false,
  onRefreshQuote,
  onResumeSale,
}: Readonly<{
  selectedCard: StockPackPayoffCardV1 | null;
  sale?: StockPackSaleV1 | null;
  illustrative?: boolean;
  stockCopy?: boolean;
  onRefreshQuote?: () => void;
  onResumeSale?: () => void;
}>) {
  const state = payoffPanelState(selectedCard, sale, stockCopy);
  const holding = sale?.state === "intermediate_held" ? sale.actualHolding : null;
  const quoteUnavailable = selectedCard?.saleQuote.state === "unavailable" ? selectedCard.saleQuote.reason : null;
  return (
    <aside className="sp-payoff-state" data-state={state.key} aria-live="polite" aria-atomic="true">
      <div className="sp-payoff-state__heading">
        <p>{state.kicker}</p>
        <h3>{state.title}</h3>
        <p>{state.copy}</p>
      </div>
      <div className="sp-payoff-state__body">
        {illustrative ? <p className="sp-payoff-state__notice">{stockCopy
          ? <><strong>Demo only.</strong> No live wallet, token, quote or transaction.</>
          : <><strong>Illustrative fixture.</strong> No wallet, inventory, quote, delivery, or transaction is live.</>}</p> : null}
        {holding ? (
          <dl className="sp-payoff-state__holding">
            <dt>{stockCopy ? "Stock token in wallet" : "Actual stock-token holding"}</dt>
            <dd>{formatStockPackRawAmount(holding.rawAmount, holding.asset)}</dd>
            {sale?.observedAt ? <><dt>Observed</dt><dd><time dateTime={sale.observedAt}>{formatStockPackTimestamp(sale.observedAt)}</time></dd></> : null}
            {sale?.transactionIds.map((transactionId) => (
              <div className="sp-payoff-state__transaction" key={transactionId}>
                <dt>Finalized route transaction</dt>
                <dd>{transactionId}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {quoteUnavailable ? <p className="sp-payoff-state__notice">{stockPackReasonLabel(quoteUnavailable, stockCopy)}.</p> : null}
        {state.key === "quote-expired" && onRefreshQuote ? <button type="button" onClick={onRefreshQuote}>{stockCopy ? "Refresh swap quote" : "Refresh exact sale quote"}</button> : null}
        {state.key === "intermediate-held" && holding && onResumeSale ? <button type="button" onClick={onResumeSale}>{stockCopy ? "Review next swap" : "Review remaining sale leg"}</button> : null}
      </div>
    </aside>
  );
}
