import type {
  StockPackPayoffCardV1,
} from "@attn-packs/pack-network";
import {
  formatStockPackDisplayAmount,
  formatStockPackProbability,
  formatStockPackRawAmount,
  formatStockPackTimestamp,
  stockPayoffAcquisitionPresentation,
  stockPackAssetLabel,
  stockPackClassification,
  stockPackReasonLabel,
  type StockPayoffAcquisitionContext,
} from "./stockPayoffPresentation";

function ReferenceValue({ card, stockCopy }: Readonly<{ card: StockPackPayoffCardV1; stockCopy: boolean }>) {
  if (card.reference.state === "unavailable") {
    return (
      <div className="sp-payoff-card__value" data-value-state="unavailable">
        <dt>{stockCopy ? "USD price estimate" : "Indicative USD estimate"}</dt>
        <dd>UNAVAILABLE</dd>
        <p>{stockPackReasonLabel(card.reference.reason, stockCopy)}.{" "}{stockCopy
          ? "Your reward is an exact token amount. No USD payout is promised."
          : "The exact token delivery remains separate; no cash floor is implied."}</p>
      </div>
    );
  }
  const stale = card.reference.state === "stale";
  return (
    <div className="sp-payoff-card__value" data-value-state={card.reference.state}>
      <dt>{stockCopy ? stale ? "Stale USD price estimate" : "USD price estimate"
        : stale ? "Stale indicative USD estimate" : "Indicative USD estimate"}</dt>
      <dd>{formatStockPackRawAmount(card.reference.value.rawAmount, card.reference.value.asset)}</dd>
      <p>{stockCopy
        ? <>{stale ? "Stale price data" : "Price checked"} <time dateTime={card.reference.observedAt}>{formatStockPackTimestamp(card.reference.observedAt)}</time>. Estimate only. Your reward is an exact token amount. No USD payout is promised.</>
        : <>{stale ? "Stale evidence" : "Observed"} <time dateTime={card.reference.observedAt}>{formatStockPackTimestamp(card.reference.observedAt)}</time>. Indicative value only; your fixed delivery is the exact token quantity, not USD or a cash floor.</>}</p>
    </div>
  );
}

function SaleQuote({ card, stockCopy }: Readonly<{ card: StockPackPayoffCardV1; stockCopy: boolean }>) {
  if (card.saleQuote.state === "unavailable") {
    return (
      <div className="sp-payoff-card__value" data-quote-state="unavailable">
        <dt>{stockCopy ? "Swap quote" : "Market sale estimate"}</dt>
        <dd>UNAVAILABLE</dd>
        <p>{stockPackReasonLabel(card.saleQuote.reason, stockCopy)}.{" "}{stockCopy
          ? "No swap amount is promised."
          : "No guaranteed buyback is available."}</p>
      </div>
    );
  }
  const { quote } = card.saleQuote;
  const stateLabel = stockCopy
    ? card.saleQuote.state === "expired" ? "QUOTE EXPIRED"
      : card.saleQuote.state === "indicative" ? "ESTIMATE ONLY" : "SWAP READY"
    : card.saleQuote.state === "expired" ? "EXPIRED QUOTE"
      : card.saleQuote.state === "indicative" ? "INDICATIVE ROUTE" : "EXECUTABLE ROUTE";
  return (
    <div className="sp-payoff-card__value" data-quote-state={card.saleQuote.state}>
      <dt>{stockCopy ? "Swap quote" : "Market sale estimate"}</dt>
      <dd>{stateLabel}</dd>
      <p>
        {stockCopy ? "Minimum swap output" : "Minimum output"}{" "}<strong>{formatStockPackRawAmount(quote.minimumOutput.rawAmount, quote.minimumOutput.asset)}</strong> · expires{" "}
        <time dateTime={quote.expiresAt}>{formatStockPackTimestamp(quote.expiresAt)}</time>
        {stockCopy ? " · Market swap. Final amount may change." : " · Market route, not a guaranteed buyback."}
      </p>
    </div>
  );
}

function DeliveryValue({ card, stockCopy }: Readonly<{ card: StockPackPayoffCardV1; stockCopy: boolean }>) {
  if (!card.delivery) return null;
  const label = {
    selected: stockCopy ? "PULL RECORDED" : "REWARD DRAWN",
    pending: "DELIVERY PENDING",
    reconciling: "DELIVERY RECONCILING",
    delivered: "RECEIVED IN WALLET",
  }[card.delivery.state];
  return (
    <div className="sp-payoff-card__delivery" data-delivery-state={card.delivery.state}>
      <dt>Delivery</dt>
      <dd>{label}</dd>
    </div>
  );
}

function AcquisitionValue({ context, stockCopy }: Readonly<{ context: StockPayoffAcquisitionContext; stockCopy: boolean }>) {
  const presentation = stockPayoffAcquisitionPresentation(context, stockCopy);
  return (
    <div
      className="sp-payoff-card__acquisition"
      data-acquisition-mode={context.mode}
      data-acquisition-state={context.state}
    >
      <span>{presentation.eyebrow}</span>
      <strong>{presentation.title}</strong>
      <p>{presentation.detail}</p>
    </div>
  );
}

export function StockPayoffCard({
  card,
  acquisition = null,
  selected = false,
  finish = "standard",
  earnedDelivery = false,
  certificate = false,
  stockCopy = false,
}: Readonly<{
  card: StockPackPayoffCardV1;
  acquisition?: StockPayoffAcquisitionContext | null;
  selected?: boolean;
  finish?: "standard" | "gold" | "foil";
  earnedDelivery?: boolean;
  certificate?: boolean;
  stockCopy?: boolean;
}>) {
  const asset = card.instrument.asset;
  const headingId = `stock-payoff-${card.cardId.replace(/[^a-zA-Z0-9_-]/gu, "-")}`;
  const quote = card.saleQuote.state === "unavailable" ? null : card.saleQuote.quote;
  return (
    <article
      className="sp-payoff-card"
      aria-labelledby={headingId}
      data-finish={finish}
      data-selected={selected || undefined}
      data-earned-delivery={earnedDelivery || undefined}
    >
      <div className="sp-payoff-card__top">
        <span className="sp-payoff-card__selection">
          {earnedDelivery ? "Earned reward" : stockCopy
            ? selected ? (certificate ? "You pulled" : "Your pull") : "Reward"
            : selected ? (certificate ? "Your certificate" : "Drawn reward") : "Possible reward"}
        </span>
        {!earnedDelivery ? <span className="sp-payoff-card__odds">
          <span>{stockCopy ? "Pull odds" : "Chance of this pull"}</span>
          <strong>{formatStockPackProbability(card.probability.weight, card.probability.total)}</strong>
        </span> : null}
      </div>
      <div className="sp-payoff-card__identity">
        {certificate ? <strong className="sp-payoff-card__ticker">{stockPackAssetLabel(asset)}</strong> : null}
        <p className="sp-payoff-card__classification">{stockPackClassification(card, stockCopy)}</p>
        <h3 id={headingId}>{asset.displayMetadata?.name ?? stockPackAssetLabel(asset)}</h3>
        <div className="sp-payoff-card__quantity">
          {formatStockPackDisplayAmount(card.lot.exactAssetAmount, card.instrument)}
        </div>
      </div>
      {acquisition ? <AcquisitionValue context={acquisition} stockCopy={stockCopy} /> : null}
      <div className="sp-payoff-card__values">
        <dl>
          <ReferenceValue card={card} stockCopy={stockCopy} />
          <SaleQuote card={card} stockCopy={stockCopy} />
          <DeliveryValue card={card} stockCopy={stockCopy} />
        </dl>
      </div>
      <details className="sp-payoff-card__details">
        <summary>{stockCopy ? "Exact token details" : "Exact asset details"}</summary>
        <dl>
          <dt>Exact transfer units</dt>
          <dd>{card.lot.exactAssetAmount}</dd>
          <dt>Display multiplier</dt>
          <dd>{card.instrument.displayMultiplier.numerator} / {card.instrument.displayMultiplier.denominator}</dd>
          <dt>Multiplier observed</dt>
          <dd><time dateTime={card.instrument.displayMultiplier.observedAt}>{formatStockPackTimestamp(card.instrument.displayMultiplier.observedAt)}</time></dd>
          <dt>Mint</dt>
          <dd>{asset.assetAddress}</dd>
          <dt>Token program</dt>
          <dd>{card.instrument.tokenProgram}</dd>
          <dt>{stockCopy ? "Token verification ID" : "Admission evidence"}</dt>
          <dd>{card.instrument.admissionDigest}</dd>
          {quote ? <><dt>Quote ID</dt><dd>{quote.quoteId}</dd><dt>Quote digest</dt><dd>{quote.quoteDigest}</dd></> : null}
          {card.delivery?.transactionIds.map((transactionId) => (
            <div className="sp-payoff-card__transaction" key={transactionId}>
              <dt>Delivery transaction</dt>
              <dd>{transactionId}</dd>
            </div>
          ))}
          {card.delivery?.state === "delivered" ? <><dt>Delivery receipt</dt><dd>{card.delivery.receipt.terminalDigest}</dd></> : null}
        </dl>
      </details>
    </article>
  );
}
