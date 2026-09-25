import { STOCK_PACKS_DEFAULT_PRICE_LABEL } from "../branding/stockPacksCopy";
import type { StockPacksPlayerSnapshot } from "../player/stockPacksPlayerTypes";

/** Fixed product rule, shown on the band: one pack delivers one reward. */
export const STONKS_HERO_CHIP_END = "1 pack · 1 reward";

/** "$25.00" for a USDC price; otherwise the exact amount and symbol. */
export function stonksHeroPriceLabel(rawAmount: string, decimals: number, symbol: string | null | undefined): string | null {
  if (!/^(0|[1-9][0-9]*)$/u.test(rawAmount) || !Number.isSafeInteger(decimals) || decimals < 0 || decimals > 18) return null;
  const raw = BigInt(rawAmount);
  const scale = 10n ** BigInt(decimals);
  if (symbol === "USDC" && decimals >= 2) {
    const cents = (raw * 100n + scale / 2n) / scale;
    return `$${cents / 100n}.${(cents % 100n).toString().padStart(2, "0")}`;
  }
  const whole = raw / scale;
  const fraction = decimals === 0 ? "" : (raw % scale).toString().padStart(decimals, "0").replace(/0+$/u, "");
  return `${whole}${fraction ? `.${fraction}` : ""}${symbol ? ` ${symbol}` : ""}`;
}

/**
 * Top-left band chip: the selected pack's name and its server price. Before a
 * campaign loads, the default $25 price label stands in, as in the rest of the
 * Stock static copy.
 */
export function stonksHeroChipStart(snapshot: StockPacksPlayerSnapshot | null, label: string): string {
  const selected = snapshot?.campaigns.find(({ campaign }) => campaign.campaignId === snapshot.selectedCampaignId)
    ?? snapshot?.campaigns[0] ?? null;
  const recipe = selected?.campaign.preview.recipe;
  const price = recipe
    ? stonksHeroPriceLabel(recipe.exactPackPrincipalQuoteUnits, recipe.quoteAsset.decimals, recipe.quoteAsset.displayMetadata?.symbol)
    : null;
  return `${label} · ${price ?? STOCK_PACKS_DEFAULT_PRICE_LABEL}`;
}
