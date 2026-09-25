/**
 * Display data for the direction F lower page: the facts row, the "Every
 * possible pull" board, the tier cells and the two example pulls. Every
 * number comes from the owner-locked D1 Index Mix table ($25 pack, odds
 * 75/20/4/1, NVDAx $159.08 top pull, GLDx $13.24), the published values at
 * pull. Display only: purchases, draws and receipts read the server campaign.
 */
import {
  STONKS_BOARD_PACK_PRICE_QUOTE_UNITS,
  STONKS_BOARD_ROWS,
  stonksBoardQuote,
  type StonksBoardRow,
  type StonksBoardTier,
} from "../hero/stonksBoardTable";
import { stonksCardArt } from "./stonksCardArt";

/** Company or fund names for the Index Mix tickers. */
export const STONKS_TICKER_NAMES: Readonly<Record<string, string>> = Object.freeze({
  NVDAx: "NVIDIA",
  TSLAx: "Tesla",
  MSFTx: "Microsoft",
  SPYx: "S&P 500",
  QQQx: "Nasdaq 100",
  AAPLx: "Apple",
  GLDx: "Gold",
});

export const STONKS_TIERS: readonly StonksBoardTier[] = Object.freeze(["common", "uncommon", "rare", "jackpot"]);

function hundredths(value: bigint): string {
  const magnitude = value < 0n ? -value : value;
  return `${magnitude / 100n}.${(magnitude % 100n).toString().padStart(2, "0")}`;
}

function roundHalfUp(numerator: bigint, denominator: bigint): bigint {
  const negative = numerator < 0n;
  const magnitude = negative ? -numerator : numerator;
  const rounded = (magnitude * 2n + denominator) / (denominator * 2n);
  return negative ? -rounded : rounded;
}

/** "$159.08" from six-decimal USDC quote units, rounded half up to cents. */
export function stonksUsd(quoteUnits: bigint): string {
  return `$${hundredths(roundHalfUp(quoteUnits, 10_000n))}`;
}

/** "28.85%" from a weight out of 10000. */
export function stonksOdds(weight: number): string {
  return `${hundredths(BigInt(weight))}%`;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

/** 7500 out of 10000 reads "3 in 4 rips". */
export function stonksCadence(weight: number): string {
  const divisor = gcd(weight, 10_000);
  return `${weight / divisor} in ${10_000 / divisor} rips`;
}

const PRICE = BigInt(STONKS_BOARD_PACK_PRICE_QUOTE_UNITS);
/** "$25" */
export const STONKS_PACK_PRICE_LABEL = stonksUsd(PRICE).replace(/\.00$/u, "");

export type StonksPull = Readonly<{
  ticker: string;
  name: string;
  tier: StonksBoardTier;
  weight: number;
  odds: string;
  /** Odds bar width against the most likely pull, "0.00" to "100.00". */
  oddsBar: string;
  value: string;
  multiplier: string;
  /** "+$134.08" or "−$11.76" (U+2212) against the pack price. */
  versus: string;
  up: boolean;
  thumb: string | null;
  art: string | null;
}>;

function pull(row: StonksBoardRow, maxWeight: number): StonksPull {
  const quote = stonksBoardQuote(row);
  const change = BigInt(row.valueQuoteUnits) - PRICE;
  const art = stonksCardArt(row.ticker);
  return {
    ticker: row.ticker,
    name: STONKS_TICKER_NAMES[row.ticker] ?? row.ticker,
    tier: row.tier,
    weight: row.weight,
    odds: stonksOdds(row.weight),
    oddsBar: ((row.weight / maxWeight) * 100).toFixed(2),
    value: `$${quote.value}`,
    multiplier: quote.multiplier,
    versus: `${change > 0n ? "+" : change < 0n ? "−" : ""}${stonksUsd(change < 0n ? -change : change)}`,
    up: quote.up,
    thumb: art?.front ?? null,
    art: art?.threeQuarter ?? null,
  };
}

const MAX_WEIGHT = Math.max(...STONKS_BOARD_ROWS.map((row) => row.weight));

/** Every possible pull, highest value first. */
export const STONKS_PULLS: readonly StonksPull[] = Object.freeze(
  [...STONKS_BOARD_ROWS]
    .sort((a, b) => (BigInt(b.valueQuoteUnits) > BigInt(a.valueQuoteUnits) ? 1 : -1))
    .map((row) => pull(row, MAX_WEIGHT)),
);

export function stonksPull(ticker: string): StonksPull | null {
  return STONKS_PULLS.find((entry) => entry.ticker === ticker) ?? null;
}

export type StonksTierCell = Readonly<{ tier: StonksBoardTier; percent: string; cadence: string }>;

export const STONKS_TIER_CELLS: readonly StonksTierCell[] = Object.freeze(STONKS_TIERS.map((tier) => {
  const weight = STONKS_BOARD_ROWS.filter((row) => row.tier === tier).reduce((sum, row) => sum + row.weight, 0);
  return { tier, percent: String(weight / 100), cadence: stonksCadence(weight) };
}));

const expectedValue = STONKS_BOARD_ROWS.reduce((sum, row) => sum + BigInt(row.weight) * BigInt(row.valueQuoteUnits), 0n) / 10_000n;
const payoutTenths = roundHalfUp(expectedValue * 1_000n, PRICE);
const underWeight = STONKS_PULLS.filter((entry) => !entry.up).reduce((sum, entry) => sum + entry.weight, 0);
const topPull = STONKS_PULLS[0];

export const STONKS_FACTS = Object.freeze({
  topPull: topPull?.value ?? "",
  topPullTicker: topPull?.ticker ?? "",
  /** "98.5%" */
  averagePayout: `${payoutTenths / 10n}${payoutTenths % 10n === 0n ? "" : `.${payoutTenths % 10n}`}%`,
  /** "75/20/4/1" */
  odds: STONKS_TIER_CELLS.map((cell) => cell.percent).join("/"),
  /** "3 in 4 rips pay under $25" */
  underPrice: `${stonksCadence(underWeight)} pay under ${STONKS_PACK_PRICE_LABEL}`,
});

/** "JACKPOT · 1 IN 100" for the rarest tiers, "COMMON · 28.85%" otherwise. */
export function stonksTierTag(entry: StonksPull): string {
  const cadence = stonksCadence(entry.weight).replace(/ rips$/u, "").toUpperCase();
  return entry.tier === "jackpot" || entry.tier === "rare"
    ? `${entry.tier.toUpperCase()} · ${cadence}`
    : `${entry.tier.toUpperCase()} · ${entry.odds}`;
}
