import { STOCK_PACKS_DEFAULT_PRICE_LABEL } from "../branding/stockPacksCopy";
import { STOCK_PACKS_PULL_ONLY } from "../branding/stockPacksThemeFlags";

/**
 * STONKPACKS site chrome (Stock host only). Kept free of React and CSS imports
 * so the entry chunk can use it without pulling any Royale page styles.
 * VITE_STOCK_PACKS_PULL_ONLY hides the launchpad links; the routes stay in code.
 */
export type StockPacksSiteLink = Readonly<{ href: string; label: string }>;

/** Launchpad surfaces the pull-only cut hides: launch, pools and create. */
export const STOCK_PACKS_LAUNCHPAD_PATHS: readonly string[] = Object.freeze([
  "/stock-packs/launch",
  "/stock-packs/lp",
  "/stock-packs/create",
]);

export function stockPacksLaunchpadPath(href: string): boolean {
  return STOCK_PACKS_LAUNCHPAD_PATHS.includes(href);
}

/** Pull-only drops every launchpad link; flag off returns the same list untouched. */
export function stockPacksPullOnlyLinks<Link extends Readonly<{ href: string }>>(
  links: readonly Link[],
  pullOnly: boolean = STOCK_PACKS_PULL_ONLY,
): readonly Link[] {
  return pullOnly ? links.filter(({ href }) => !stockPacksLaunchpadPath(href)) : links;
}

/** Token history header sections; the same six sections as the shared STONKPACKS nav. */
const STOCK_PACKS_HISTORY_LINKS: readonly StockPacksSiteLink[] = Object.freeze([
  { href: "/", label: "Stock Packs" },
  { href: "/stock-packs/collection", label: "Token history" },
  { href: "/stock-packs/launch", label: "Launch" },
  { href: "/stock-packs/lp", label: "Pools" },
  { href: "/stock-packs/create", label: "Create" },
  { href: "/docs", label: "Docs" },
]);

const STOCK_PACKS_FOOTER_LINKS: readonly StockPacksSiteLink[] = Object.freeze([
  { href: "/", label: "Stock Packs" },
  { href: "/stock-packs/collection", label: "Token history" },
  { href: "/stock-packs/lp", label: "Pools" },
  { href: "/stock-packs/create", label: "Create" },
  { href: "/docs", label: "Docs" },
]);

export function stockPacksHistoryLinks(pullOnly: boolean = STOCK_PACKS_PULL_ONLY): readonly StockPacksSiteLink[] {
  return stockPacksPullOnlyLinks(STOCK_PACKS_HISTORY_LINKS, pullOnly);
}

export function stockPacksFooterLinks(pullOnly: boolean = STOCK_PACKS_PULL_ONLY): readonly StockPacksSiteLink[] {
  return stockPacksPullOnlyLinks(STOCK_PACKS_FOOTER_LINKS, pullOnly);
}

export function stockPacksFooterTagline(pullOnly: boolean = STOCK_PACKS_PULL_ONLY): string {
  return pullOnly ? "Open packs. Pull stock tokens." : "Launch tokens. Open packs.";
}

/** Pull-only page description; the default brand description mentions pools and creating packs. */
export const STOCK_PACKS_PULL_ONLY_DESCRIPTION = `Rip ${STOCK_PACKS_DEFAULT_PRICE_LABEL} Stock Packs. Your pull is sent to your wallet.`;

export function stockPacksMetaDescription(description: string, pullOnly: boolean = STOCK_PACKS_PULL_ONLY): string {
  return pullOnly ? STOCK_PACKS_PULL_ONLY_DESCRIPTION : description;
}
