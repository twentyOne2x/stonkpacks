import type { StockPackPayoffCardV1, StockPackSaleV1 } from "@attn-packs/pack-network";
import { StockPayoffCard } from "./StockPayoffCard";
import {
  StockPayoffDistribution,
  type StockPayoffDistributionSegment,
} from "./StockPayoffDistribution";
import { StockPayoffStatePanel } from "./StockPayoffStatePanel";
import {
  formatStockPackDisplayAmount,
  formatStockPackProbability,
  stockPackAssetLabel,
  stockPackFinish,
  type StockPayoffAcquisitionContext,
} from "./stockPayoffPresentation";

function validateCards(cards: readonly StockPackPayoffCardV1[]): readonly StockPackPayoffCardV1[] {
  if (cards.length === 0) throw new Error("Stock Pack payoff surface requires at least one card");
  const ids = new Set(cards.map((card) => card.cardId));
  if (ids.size !== cards.length) throw new Error("Stock Pack payoff card ids must be unique");
  const snapshotDigests = new Set(cards.map((card) => card.snapshotDigest));
  if (snapshotDigests.size !== 1) throw new Error("Stock Pack payoff cards must share one immutable snapshot");
  const total = cards.reduce((sum, card) => sum + BigInt(card.probability.weight), 0n);
  if (total !== 10_000n || cards.some((card) => card.probability.total !== "10000")) {
    throw new Error("Stock Pack payoff card weights must total 10000");
  }
  return cards;
}

export type StockPayoffSelection = Readonly<{
  selectedLotId: string;
  snapshotDigest: string;
  selectionDigest: string;
}>;

const HEX_DIGEST = /^[0-9a-f]{64}$/u;

/**
 * Shared structural projection for already-parsed paid and sponsored reward
 * selections. It contains no paid acceptance or randomness evidence.
 */
export function stockPayoffSelectionProjection(selection: StockPayoffSelection): StockPayoffSelection {
  if (!selection.selectedLotId.trim()
    || !HEX_DIGEST.test(selection.snapshotDigest)
    || !HEX_DIGEST.test(selection.selectionDigest)) {
    throw new Error("Stock Pack payoff selection projection is invalid");
  }
  return Object.freeze({
    selectedLotId: selection.selectedLotId,
    snapshotDigest: selection.snapshotDigest,
    selectionDigest: selection.selectionDigest,
  });
}

export function StockPayoffSurface({
  cards,
  acquisition = null,
  selection = null,
  sale = null,
  illustrative = false,
  className = "",
  onRefreshQuote,
  onResumeSale,
  earnedDelivery = false,
  singleCertificate = false,
  stockCopy = false,
}: Readonly<{
  cards: readonly StockPackPayoffCardV1[];
  acquisition?: StockPayoffAcquisitionContext | null;
  selection?: StockPayoffSelection | null;
  sale?: StockPackSaleV1 | null;
  illustrative?: boolean;
  className?: string;
  onRefreshQuote?: () => void;
  onResumeSale?: () => void;
  earnedDelivery?: boolean;
  /** Stock player results show one certificate, with the full table kept as plain odds. */
  singleCertificate?: boolean;
  stockCopy?: boolean;
}>) {
  const outcomes = validateCards(cards);
  const projectedSelection = selection ? stockPayoffSelectionProjection(selection) : null;
  const selectedCard = projectedSelection
    ? outcomes.find((card) => card.cardId === projectedSelection.selectedLotId) ?? null
    : null;
  if (projectedSelection && (!selectedCard || selectedCard.snapshotDigest !== projectedSelection.snapshotDigest)) {
    throw new Error("Stock Pack selection does not belong to this payoff snapshot");
  }
  if (earnedDelivery && (!projectedSelection || outcomes.length !== 1
    || outcomes[0]?.cardId !== selectedCard?.cardId)) {
    throw new Error("Earned Stock Pack delivery requires one exact selected card");
  }
  const distribution: readonly StockPayoffDistributionSegment[] = outcomes.map((card) => ({
    id: card.cardId,
    label: stockPackAssetLabel(card.instrument.asset),
    weight: Number(card.probability.weight),
  }));
  return (
    <section
      className={["sp-payoffs", className].filter(Boolean).join(" ")}
      data-single-certificate={singleCertificate || undefined}
      data-illustrative={illustrative || undefined}
      data-selection-id={projectedSelection?.selectionDigest}
      aria-label={stockCopy ? "Stock Pack rewards and odds" : "Stock Pack payoff details"}
    >
      {!earnedDelivery && !singleCertificate ? <StockPayoffDistribution segments={distribution} stockCopy={stockCopy} /> : null}
      {!singleCertificate || selectedCard ? <section className="sp-payoffs__layout" aria-label={singleCertificate
        ? stockCopy ? "Your pull" : "Your certificate" : undefined}>
        <div className="sp-payoffs__deck">
          {(singleCertificate ? (selectedCard ? [selectedCard] : []) : outcomes).map((card) => (
            <StockPayoffCard
              acquisition={!projectedSelection || card.cardId === selectedCard?.cardId ? acquisition : null}
              card={card}
              finish={stockPackFinish(outcomes.indexOf(card))}
              certificate={singleCertificate}
              earnedDelivery={earnedDelivery}
              stockCopy={stockCopy}
              key={card.cardId}
              selected={card.cardId === selectedCard?.cardId}
            />
          ))}
        </div>
        <StockPayoffStatePanel
          illustrative={illustrative}
          sale={sale}
          selectedCard={selectedCard}
          stockCopy={stockCopy}
          {...(onRefreshQuote ? { onRefreshQuote } : {})}
          {...(onResumeSale ? { onResumeSale } : {})}
        />
      </section> : null}
      {singleCertificate && !earnedDelivery ? (
        <details className="sp-payoffs__odds" open={!projectedSelection}>
          <summary>Pack odds</summary>
          <p>{stockCopy ? "1 pack, 1 reward. Tap odds to see what's inside." : "One pack. One certificate. Published rewards and odds."}</p>
          <table aria-label="Pack odds">
            <thead><tr><th scope="col">{stockCopy ? "Reward" : "Stock"}</th><th scope="col">Amount</th><th scope="col">{stockCopy ? "Odds" : "Chance"}</th></tr></thead>
            <tbody>{outcomes.map((card) => (
              <tr key={card.cardId} data-weight={card.probability.weight}>
                <th scope="row">{stockPackAssetLabel(card.instrument.asset)}<small>{card.instrument.asset.displayMetadata?.name}</small></th>
                <td>{formatStockPackDisplayAmount(card.lot.exactAssetAmount, card.instrument)}</td>
                <td>{formatStockPackProbability(card.probability.weight, card.probability.total)}</td>
              </tr>
            ))}</tbody>
          </table>
        </details>
      ) : null}
    </section>
  );
}
