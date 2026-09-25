import { formatStockPackSaleAmount, type StockPackSaleViewState } from "./stockPackSaleActions";

const FEE_LABELS: Record<string, string> = { venue: "Venue fee", network: "Network fee", platform: "Platform route fee" };

/** Venue and network costs grouped per asset; the platform route fee is shown only for the execution that carries it. */
function feeRows(review: NonNullable<StockPackSaleViewState["prepared"]>["review"]) {
  const grouped = new Map<string, (typeof review.quote.fees)[number]>();
  for (const fee of review.quote.fees) {
    if (fee.kind === "platform") continue;
    const key = `${fee.kind}:${fee.amount.asset.identityDigest}`, previous = grouped.get(key);
    grouped.set(key, { ...fee, amount: { ...fee.amount,
      rawAmount: (BigInt(previous?.amount.rawAmount ?? "0") + BigInt(fee.amount.rawAmount)).toString() } });
  }
  return [...grouped.entries()];
}

/** Reusable content for the existing player container; no wallet provider or separate shell. */
export function StockPackSalePanel(props: {
  state: StockPackSaleViewState; now: string; onQuote: () => void; onRefresh: () => void;
  onConfirm: () => void; onRecover: () => void; stockCopy?: boolean;
}) {
  const stockCopy = props.stockCopy === true;
  const { state } = props, sale = state.prepared?.sale, review = state.prepared?.review;
  const busy = ["quoting", "signing", "submitting"].includes(state.phase);
  const expired = !review || Date.parse(props.now) >= Date.parse(review.quote.expiresAt);
  const pending = state.phase === "reconciling" || sale?.state === "pending" || sale?.state === "reconciling";
  const intermediate = sale?.state === "intermediate_held";
  const remainingReview = intermediate && review?.legIds.length === 1 && review.legIds[0] === sale.quote.legs[1]?.legId;
  const ready = !busy && !pending && !expired && (sale?.state === "prepared" || remainingReview);
  const executedMinimum = review?.quote.legs.find(leg => leg.legId === review.legIds.at(-1))?.minimumOutput;
  const firstConversion = review?.quote.execution === "sequential" && review.quote.legs.length === 2 && !intermediate;
  const setupRent = (review?.accountSetup ?? []).reduce((sum, account) => sum + BigInt(account.rentLamports), 0n);
  const routeFee = review?.routeFee ?? null;
  const minimumAfterFee = routeFee && executedMinimum
    ? { ...executedMinimum, rawAmount: (BigInt(executedMinimum.rawAmount) - BigInt(routeFee.amount.rawAmount)).toString() } : null;
  const completed = sale?.state === "completed";
  return <section className="stock-sale" aria-label={stockCopy ? "Swap wallet tokens" : "Sell wallet asset"}>
    <h3>{stockCopy
      ? completed ? "Swap complete" : intermediate ? "Finish USDC swap" : "Swap for USDC"
      : completed ? "Market sale completed" : intermediate ? "Finish market conversion to USDC" : "Sell on the market for USDC"}</h3>
    <p>{stockCopy
      ? "Selling is optional. Quotes expire, and the final amount may change before approval."
      : "Optional market sale, not a guaranteed buyback. Quotes can expire and final proceeds may change before authorization."}</p>
    {sale?.actualHolding && (completed || intermediate) && <p className="stock-sale__holding">
      <strong>{formatStockPackSaleAmount(sale.actualHolding)} {sale.actualHolding.asset.displayMetadata?.symbol ?? "tokens"}</strong>
      <span>{stockCopy
        ? intermediate ? "Stock token in your wallet" : routeFee ? "USDC sent to your wallet after fees" : "USDC sent to your wallet"
        : intermediate ? "Actual stock-token holding in your wallet" : routeFee ? "Finalized proceeds after fee in your wallet" : "Finalized market-sale proceeds in your wallet"}</span>
    </p>}
    {intermediate && <p>{stockCopy
      ? "First swap is final. Only the next swap will submit."
      : "The first swap is finalized. Only the remaining conversion will be submitted."}</p>}
    {firstConversion && <p>{stockCopy
      ? "This takes two approvals. Swap one gets the quoted token. Swap two needs a fresh USDC quote."
      : "This route needs two approvals. The first swap receives the quoted stock token; conversion to USDC needs a fresh market quote."}</p>}
    {review && (!intermediate || remainingReview) && !completed && <dl>
      <dt>Minimum received in this step</dt><dd>{executedMinimum ? formatStockPackSaleAmount(executedMinimum) : "Unavailable"} {executedMinimum?.asset.identityDigest === review.quote.minimumOutput.asset.identityDigest ? "USDC" : executedMinimum?.asset.displayMetadata?.symbol ?? "tokens"}</dd>
      <dt>Quote expires</dt><dd><time dateTime={review.quote.expiresAt}>{review.quote.expiresAt}</time>{expired ? " EXPIRED" : ""}</dd>
      {setupRent > 0n && <><dt>Token account setup estimate</dt><dd>{`${setupRent / 1_000_000_000n}.${(setupRent % 1_000_000_000n).toString().padStart(9, "0")} SOL`}</dd></>}
      {feeRows(review).map(([key, fee]) => <div className="stock-sale__fee" key={key}>
        <dt>{FEE_LABELS[fee.kind] ?? "Fee"}</dt><dd>{formatStockPackSaleAmount(fee.amount)} {fee.amount.asset.displayMetadata?.symbol ?? "tokens"}</dd>
      </div>)}
      {routeFee && minimumAfterFee && <>
        <div className="stock-sale__fee"><dt>Platform route fee</dt><dd>{formatStockPackSaleAmount(routeFee.amount)} USDC</dd></div>
        <dt>{stockCopy ? "Minimum USDC after fees" : "Minimum proceeds after fee"}</dt><dd>{formatStockPackSaleAmount(minimumAfterFee)} USDC</dd>
      </>}
    </dl>}
    {routeFee && !completed && <p>{stockCopy
      ? "The route fee is in the transaction. Any amount above the minimum stays yours."
      : "The platform route fee is included in the transaction you sign. Any fill above the minimum stays with you."}</p>}
    <p role="status" aria-live="polite">{state.message ?? (stockCopy
      ? state.phase === "signing" ? "Approve this exact swap in Privy."
        : state.phase === "submitting" ? "Sending your approved swap."
          : pending ? "Checking the saved transaction. USDC is not confirmed yet."
            : state.phase === "quoting" ? "Getting a swap quote." : ""
      : state.phase === "signing" ? "Confirm this exact sale in Privy."
        : state.phase === "submitting" ? "Submitting your authorized sale."
          : pending ? "Checking the saved transaction. Proceeds are not yet finalized."
            : state.phase === "quoting" ? "Getting an executable quote." : "")}</p>
    {!completed && <div className="stock-sale__actions royaleCardDetailActions">
      {!sale && <button className="royaleCardDetailCcLink" type="button" disabled={busy} onClick={props.onQuote}>{stockCopy ? "Get swap quote" : "Get sale quote"}</button>}
      {sale && !pending && <button className="royaleCardDetailCloseBtn" type="button" disabled={busy} onClick={props.onRefresh}>Refresh quote</button>}
      {sale && !pending && <button className="royaleCardDetailCcLink" type="button" disabled={!ready} onClick={props.onConfirm}>{stockCopy
        ? intermediate ? "Approve next swap" : firstConversion ? "Approve first swap" : "Approve swap with Privy"
        : intermediate ? "Authorize remaining conversion" : firstConversion ? "Authorize first conversion" : "Authorize sale with Privy"}</button>}
      {pending && <button className="royaleCardDetailCloseBtn" type="button" disabled={busy} onClick={props.onRecover}>{stockCopy ? "Check saved swap" : "Check saved sale"}</button>}
    </div>}
    {sale && <details><summary>{stockCopy ? "Swap receipt" : "Sale receipt"}</summary><p>Operation: {sale.identity.operationId}</p>
      {sale.transactionIds.map(id => <p key={id}>Transaction: {id}</p>)}
      {completed && routeFee && <p>Platform route fee paid: {formatStockPackSaleAmount(routeFee.amount)} USDC</p>}
      {completed && sale.actualHolding && <p>{stockCopy ? "USDC received after fees" : "Proceeds after fee"}: {formatStockPackSaleAmount(sale.actualHolding)} {sale.actualHolding.asset.displayMetadata?.symbol ?? "USDC"}</p>}
      <p>{stockCopy ? "Your pack delivery receipt is separate." : "Your original Pack delivery receipt remains separate."}</p>
    </details>}
  </section>;
}
