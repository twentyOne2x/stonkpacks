import type { CSSProperties } from "react";

export const STOCK_PACK_WEIGHT_TOTAL = 10_000;

export type StockPayoffDistributionSegment = Readonly<{
  id: string;
  label: string;
  weight: number;
}>;

export function validateStockPayoffDistribution(
  segments: readonly StockPayoffDistributionSegment[],
): readonly StockPayoffDistributionSegment[] {
  if (segments.length === 0) throw new Error("Stock Pack odds require at least one reward");
  const ids = new Set<string>();
  let total = 0;
  for (const segment of segments) {
    if (!segment.id.trim() || ids.has(segment.id)) throw new Error("Stock Pack reward ids must be unique and non-empty");
    if (!segment.label.trim()) throw new Error(`Stock Pack reward ${segment.id} requires a label`);
    if (!Number.isSafeInteger(segment.weight) || segment.weight <= 0) {
      throw new Error(`Stock Pack reward ${segment.id} requires a positive integer weight`);
    }
    ids.add(segment.id);
    total += segment.weight;
  }
  if (total !== STOCK_PACK_WEIGHT_TOTAL) {
    throw new Error(`Stock Pack reward weights must total ${STOCK_PACK_WEIGHT_TOTAL}; received ${total}`);
  }
  return segments;
}

function formatWeight(weight: number): string {
  const percent = weight / 100;
  return `${Number.isInteger(percent) ? percent.toFixed(0) : percent.toFixed(2).replace(/0+$/u, "").replace(/\.$/u, "")}%`;
}

/** Exact-width probability bar for the existing ATTN pack contents/detail host. */
export function StockPayoffDistribution({
  segments,
  stockCopy = false,
}: Readonly<{ segments: readonly StockPayoffDistributionSegment[]; stockCopy?: boolean }>) {
  const outcomes = validateStockPayoffDistribution(segments);
  const ariaLabel = `Odds distribution: ${outcomes.map((outcome) => `${outcome.label} ${formatWeight(outcome.weight)}`).join(", ")}`;
  return (
    <div className="sp-payoff-distribution">
      <div className="sp-payoff-distribution__bar" role="img" aria-label={ariaLabel}>
        {outcomes.map((outcome, index) => (
          <span
            aria-hidden="true"
            className="sp-payoff-distribution__segment"
            data-outcome-index={index}
            data-weight={outcome.weight}
            key={outcome.id}
            style={{ "--sp-outcome-weight": outcome.weight } as CSSProperties}
          />
        ))}
      </div>
      <ul className="sp-payoff-distribution__legend" aria-label={stockCopy ? "Exact reward odds" : "Exact reward chances"}>
        {outcomes.map((outcome, index) => (
          <li data-outcome-index={index} key={outcome.id}>
            <span>{outcome.label}</span>
            <strong>{formatWeight(outcome.weight)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
