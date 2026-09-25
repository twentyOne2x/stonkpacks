/**
 * The owner-locked D1 Index Mix table ($25 pack, odds 75/20/4/1), used only to
 * paint the ambient stonks board behind the pack. Display only: the purchase,
 * the draw and every receipt keep reading the server's campaign. The same
 * targets are pinned by stonksBoardTable.test.ts against the locked values.
 */
export type StonksBoardTier = "common" | "uncommon" | "rare" | "jackpot";

export type StonksBoardRow = Readonly<{
  ticker: string;
  tier: StonksBoardTier;
  /** Selection weight out of 10000. */
  weight: number;
  /** Value at pull in USDC quote units (6 decimals). */
  valueQuoteUnits: string;
}>;

export const STONKS_BOARD_PACK_PRICE_QUOTE_UNITS = "25000000";

export const STONKS_BOARD_ROWS: readonly StonksBoardRow[] = Object.freeze([
  { ticker: "NVDAx", tier: "jackpot", weight: 100, valueQuoteUnits: "159080000" },
  { ticker: "TSLAx", tier: "rare", weight: 400, valueQuoteUnits: "67025000" },
  { ticker: "MSFTx", tier: "uncommon", weight: 2000, valueQuoteUnits: "34700000" },
  { ticker: "SPYx", tier: "common", weight: 1154, valueQuoteUnits: "24800000" },
  { ticker: "QQQx", tier: "common", weight: 1586, valueQuoteUnits: "21400000" },
  { ticker: "AAPLx", tier: "common", weight: 1875, valueQuoteUnits: "17800000" },
  { ticker: "GLDx", tier: "common", weight: 2885, valueQuoteUnits: "13240000" },
]);

export type StonksBoardQuote = Readonly<{
  ticker: string;
  /** Value at pull, rounded half up to cents, without the dollar sign: "159.08". */
  value: string;
  /** Change against the pack price: "+536.32%" or "−47.04%" (U+2212 minus). */
  change: string;
  /** Value over pack price, rounded half up to hundredths: "6.36x". */
  multiplier: string;
  /** True when the pull is worth more than the pack. */
  up: boolean;
}>;

function units(value: string): bigint {
  if (!/^[1-9][0-9]*$/u.test(value)) throw new Error("stonks_board_quote_units_invalid");
  return BigInt(value);
}

function roundHalfUp(numerator: bigint, denominator: bigint): bigint {
  const negative = numerator < 0n;
  const magnitude = negative ? -numerator : numerator;
  const rounded = (magnitude * 2n + denominator) / (denominator * 2n);
  return negative ? -rounded : rounded;
}

function hundredths(value: bigint): string {
  const magnitude = value < 0n ? -value : value;
  return `${magnitude / 100n}.${(magnitude % 100n).toString().padStart(2, "0")}`;
}

export function stonksBoardQuote(row: StonksBoardRow, priceQuoteUnits = STONKS_BOARD_PACK_PRICE_QUOTE_UNITS): StonksBoardQuote {
  const amount = units(row.valueQuoteUnits);
  const price = units(priceQuoteUnits);
  const cents = roundHalfUp(amount, 10_000n);
  const multiplier = roundHalfUp(amount * 100n, price);
  const changeBasis = roundHalfUp((amount - price) * 10_000n, price);
  const sign = changeBasis > 0n ? "+" : changeBasis < 0n ? "−" : "";
  return {
    ticker: row.ticker,
    value: hundredths(cents),
    change: `${sign}${hundredths(changeBasis)}%`,
    multiplier: `${hundredths(multiplier)}x`,
    up: amount > price,
  };
}

export const STONKS_BOARD_QUOTES: readonly StonksBoardQuote[] = Object.freeze(STONKS_BOARD_ROWS.map((row) => stonksBoardQuote(row)));
