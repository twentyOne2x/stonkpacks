import type {
  ChainAssetV1,
  StockPackAmountV1,
  StockPackAssetV1,
  StockPackPayoffCardV1,
} from "@attn-packs/pack-network";

const CANONICAL_UINT = /^(?:0|[1-9][0-9]*)$/u;
const DISPLAY_SIGNIFICANT_DIGITS = 4;
const COMPACT_AMOUNT_SUFFIXES: Readonly<Record<number, string>> = {
  6: "M",
  9: "B",
  12: "T",
  15: "Qa",
  18: "Qi",
  21: "Sx",
  24: "Sp",
  27: "Oc",
  30: "No",
};

function assertCanonicalUint(value: string, label: string): bigint {
  if (!CANONICAL_UINT.test(value)) throw new Error(`${label} must be a canonical unsigned integer`);
  return BigInt(value);
}

export function stockPackAssetLabel(asset: ChainAssetV1): string {
  return asset.displayMetadata?.symbol ?? asset.displayMetadata?.name ?? `${asset.assetAddress.slice(0, 6)}…${asset.assetAddress.slice(-4)}`;
}

export function formatStockPackRawAmount(rawAmount: string, asset: ChainAssetV1): string {
  assertCanonicalUint(rawAmount, "raw amount");
  const decimals = asset.decimals;
  const padded = rawAmount.padStart(decimals + 1, "0");
  const integer = decimals === 0 ? padded : padded.slice(0, -decimals);
  const fraction = decimals === 0 ? "" : padded.slice(-decimals).replace(/0+$/u, "");
  return `${integer}${fraction ? `.${fraction}` : ""} ${stockPackAssetLabel(asset)}`;
}

function powerOfTenPlaces(value: string): number {
  if (!/^10*$/u.test(value)) {
    throw new Error("Stock Pack display multiplier denominator must be a power of ten");
  }
  return value.length - 1;
}

function scaledIntegerParts(value: bigint, decimalPlaces: number): Readonly<{ integer: string; fraction: string }> {
  const digits = value.toString().padStart(decimalPlaces + 1, "0");
  const integer = (decimalPlaces === 0 ? digits : digits.slice(0, -decimalPlaces)).replace(/^0+(?=\d)/u, "");
  const fraction = decimalPlaces === 0 ? "" : digits.slice(-decimalPlaces).replace(/0+$/u, "");
  return { integer, fraction };
}

function groupThousands(integer: string): string {
  return integer.replace(/\B(?=(\d{3})+(?!\d))/gu, ",");
}

function formatTruncatedParts(
  value: bigint,
  decimalPlaces: number,
  maximumFractionDigits: number,
): string {
  const { integer, fraction } = scaledIntegerParts(value, decimalPlaces);
  const displayedFraction = fraction.slice(0, maximumFractionDigits).replace(/0+$/u, "");
  return `${groupThousands(integer)}${displayedFraction ? `.${displayedFraction}` : ""}`;
}

function decimalExponent(integer: string, fraction: string): number | null {
  if (integer !== "0") return integer.length - 1;
  const firstNonZero = fraction.search(/[1-9]/u);
  return firstNonZero < 0 ? null : -firstNonZero - 1;
}

function formatHumanAmount(value: bigint, decimalPlaces: number, symbol: string): string {
  const { integer, fraction } = scaledIntegerParts(value, decimalPlaces);
  const exponent = decimalExponent(integer, fraction);
  if (exponent === null) return `0 ${symbol}`;

  if (exponent < 0) {
    const firstNonZero = fraction.search(/[1-9]/u);
    const fractionDigits = fraction.slice(0, firstNonZero + DISPLAY_SIGNIFICANT_DIGITS).replace(/0+$/u, "");
    return `0.${fractionDigits} ${symbol}`;
  }

  if (exponent < 6) {
    const maximumFractionDigits = Math.max(0, DISPLAY_SIGNIFICANT_DIGITS - integer.length);
    return `${formatTruncatedParts(value, decimalPlaces, maximumFractionDigits)} ${symbol}`;
  }

  const groupExponent = Math.floor(exponent / 3) * 3;
  const suffix = COMPACT_AMOUNT_SUFFIXES[groupExponent];
  if (!suffix) {
    const mantissa = formatTruncatedParts(value, decimalPlaces + exponent, DISPLAY_SIGNIFICANT_DIGITS - 1);
    return `${mantissa}e${exponent} ${symbol}`;
  }
  const mantissaIntegerDigits = exponent - groupExponent + 1;
  const maximumFractionDigits = Math.max(0, DISPLAY_SIGNIFICANT_DIGITS - mantissaIntegerDigits);
  const mantissa = formatTruncatedParts(value, decimalPlaces + groupExponent, maximumFractionDigits);
  return `${mantissa}${suffix} ${symbol}`;
}

/**
 * Applies the provider-authenticated Token-2022 display multiplier without
 * converting exact transfer units through Number. Raw units remain available
 * in the card details and are never replaced in transaction data.
 */
export function formatStockPackDisplayAmount(rawAmount: string, instrument: StockPackAssetV1): string {
  const raw = assertCanonicalUint(rawAmount, "raw amount");
  const numerator = assertCanonicalUint(instrument.displayMultiplier.numerator, "display multiplier numerator");
  if (numerator <= 0n) throw new Error("display multiplier numerator must be positive");
  const multiplierPlaces = powerOfTenPlaces(instrument.displayMultiplier.denominator);
  const value = raw * numerator;
  return formatHumanAmount(value, instrument.asset.decimals + multiplierPlaces, stockPackAssetLabel(instrument.asset));
}

export type StockPayoffAcquisitionContext =
  | Readonly<{
      mode: "sponsored_reward";
      providerLabel: string;
      rewardCampaignId: string;
      state: "entitled" | "ineligible" | "claim_pending" | "claimed" | "delivery_pending" | "delivered";
    }>
  | Readonly<{
      mode: "paid";
      providerLabel: string;
      price: StockPackAmountV1;
      state: "payment_pending" | "paid" | "delivery_pending" | "delivered";
    }>;

export type StockPayoffAcquisitionPresentation = Readonly<{
  eyebrow: string;
  title: string;
  detail: string;
}>;

function providerLabel(value: string): string {
  const label = value.trim();
  if (!label || label.length > 80) throw new Error("Stock Pack provider label is invalid");
  return label;
}

export function stockPayoffAcquisitionPresentation(
  context: StockPayoffAcquisitionContext,
  stockCopy = false,
): StockPayoffAcquisitionPresentation {
  const provider = providerLabel(context.providerLabel);
  if (context.mode === "paid") {
    const price = formatStockPackRawAmount(context.price.rawAmount, context.price.asset);
    const states: Readonly<Record<typeof context.state, readonly [string, string]>> = stockCopy ? {
      payment_pending: ["PAYMENT PENDING", `${price} payment is not confirmed yet.`],
      paid: ["PACK PAID", `${price} payment confirmed.`],
      delivery_pending: ["PACK PAID · DELIVERY PENDING", `${price} payment confirmed. Token delivery is pending.`],
      delivered: ["PACK PAID · DELIVERED", `${price} payment and token delivery confirmed.`],
    } : {
      payment_pending: ["PAYMENT PENDING", `${price} has not been confirmed as paid.`],
      paid: ["PAID PACK", `${price} payment confirmed.`],
      delivery_pending: ["PAID PACK · DELIVERY PENDING", `${price} payment confirmed; token delivery is still pending.`],
      delivered: ["PAID PACK · DELIVERED", `${price} payment and token delivery confirmed.`],
    };
    const [title, detail] = states[context.state];
    return { eyebrow: provider, title, detail };
  }
  if (!context.rewardCampaignId.trim()) throw new Error("Stock Pack reward campaign id is required");
  const states: Readonly<Record<typeof context.state, readonly [string, string]>> = stockCopy ? {
    entitled: ["SPONSORED REWARD READY", "Your Privy account can claim this reward."],
    ineligible: ["SPONSORED REWARD UNAVAILABLE", "Your Privy account cannot claim this reward."],
    claim_pending: ["SPONSORED CLAIM PENDING", "Your saved claim is still being checked."],
    claimed: ["SPONSORED REWARD CLAIMED", "Claim recorded. Token delivery is tracked separately."],
    delivery_pending: ["SPONSORED REWARD · DELIVERY PENDING", "Your claimed token is on the way."],
    delivered: ["SPONSORED REWARD · DELIVERED", "Reward claim and token delivery confirmed."],
  } : {
    entitled: ["SPONSORED REWARD AVAILABLE", "The server reports this Privy account is entitled to claim."],
    ineligible: ["SPONSORED REWARD UNAVAILABLE", "The server reports this Privy account is not eligible."],
    claim_pending: ["SPONSORED CLAIM PENDING", "A saved claim is awaiting authoritative reconciliation."],
    claimed: ["SPONSORED REWARD CLAIMED", "The reward claim is recorded; delivery is tracked separately."],
    delivery_pending: ["SPONSORED REWARD · DELIVERY PENDING", "The claimed token delivery is still pending."],
    delivered: ["SPONSORED REWARD · DELIVERED", "The reward claim and token delivery are confirmed."],
  };
  const [title, detail] = states[context.state];
  return { eyebrow: provider, title, detail };
}

export function formatStockPackProbability(weight: string, total: string): string {
  const parsedWeight = assertCanonicalUint(weight, "probability weight");
  const parsedTotal = assertCanonicalUint(total, "probability total");
  if (parsedTotal !== 10_000n || parsedWeight <= 0n || parsedWeight > parsedTotal) {
    throw new Error("Stock Pack probability must be a positive weight out of 10000");
  }
  const whole = parsedWeight / 100n;
  const hundredths = (parsedWeight % 100n).toString().padStart(2, "0").replace(/0+$/u, "");
  return `${whole}${hundredths ? `.${hundredths}` : ""}%`;
}

export function formatStockPackTimestamp(timestamp: string): string {
  const parsed = new Date(timestamp);
  if (!Number.isFinite(parsed.getTime())) throw new Error("Stock Pack timestamp is invalid");
  return parsed.toISOString().replace("T", " ").replace(/\.000Z$/u, " UTC");
}

export function stockPackReasonLabel(reason: string, stockCopy = false): string {
  const stockLabels: Readonly<Record<string, string>> = {
    delivery_pending: "Wait for delivery before getting a swap quote",
    missing_evidence: "Token price data is unavailable",
    reconciliation_required: "Check transaction status before retrying",
    route_unavailable: "No swap route is available right now",
    stale_evidence: "Token price data is stale",
  };
  const royaleLabels: Readonly<Record<string, string>> = {
    delivery_pending: "Delivery must finish before a sale quote is available",
    missing_evidence: "Reference evidence is unavailable",
    reconciliation_required: "Authoritative reconciliation is required",
    route_unavailable: "No current sale route is available",
    stale_evidence: "Reference evidence is stale",
  };
  const labels = stockCopy ? stockLabels : royaleLabels;
  return labels[reason] ?? reason.replaceAll("_", " ");
}

export function stockPackPairingAsset(card: StockPackPayoffCardV1): ChainAssetV1 | null {
  if (card.instrument.kind !== "community_token" || card.saleQuote.state === "unavailable") return null;
  const firstLeg = card.saleQuote.quote.legs[0];
  const lastLeg = card.saleQuote.quote.legs.at(-1);
  if (!firstLeg || !lastLeg || card.saleQuote.quote.legs.length < 2) return null;
  return firstLeg.minimumOutput.asset.identityDigest === lastLeg.minimumOutput.asset.identityDigest
    ? null
    : firstLeg.minimumOutput.asset;
}

export function stockPackClassification(card: StockPackPayoffCardV1, stockCopy = false): string {
  if (card.instrument.kind === "stock_token") return "Stock token";
  const pair = stockPackPairingAsset(card);
  if (stockCopy) return pair
    ? `Community token · Not company stock · Quote in ${stockPackAssetLabel(pair)} token`
    : "Community token · Not company stock · Stock-token quote";
  return pair
    ? `Community token · Not issuer equity · Quote uses ${stockPackAssetLabel(pair)} stock token`
    : "Community token · Not issuer equity · Stock-token market quote";
}

export function stockPackFinish(index: number): "standard" | "gold" | "foil" {
  if (index === 2) return "gold";
  if (index >= 3) return "foil";
  return "standard";
}
