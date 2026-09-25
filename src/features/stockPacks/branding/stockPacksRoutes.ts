import { matchRoyaleDocsPath } from "../../../routes/royale/pages/royaleDocsPath";
import { STOCK_PACKS_DOCS_SECTIONS } from "./stockPacksDocsContent";
import { STOCK_PACKS_PULL_ONLY } from "./stockPacksThemeFlags";

export type StockHostRouteKind = "stockPacks" | "stockPacksLp" | "stockPacksLaunch" | "stockPacksCreator" | "stockPacksCollection" | "stockPacksDocs";

export type StockPacksRouteFlags = Readonly<{
  /** VITE_STOCK_PACKS_PULL_ONLY: the site is just pull, no launchpad. */
  pullOnly?: boolean;
  /** VITE_STOCK_PACKS_OPERATOR_ENABLED: the operator funds pools through /stock-packs/create. */
  operatorEnabled?: boolean;
}>;

/**
 * Pull-only cut (route visibility only; the server stays the authority). Launch
 * and pools resolve to the Stock home. Create stays reachable only in an operator
 * build, because the operator funds pools there. Any other kind passes through.
 */
export function stockPacksPullOnlyRouteKind<Kind extends string>(
  kind: Kind,
  { pullOnly = STOCK_PACKS_PULL_ONLY, operatorEnabled = false }: StockPacksRouteFlags = {},
): Kind | "stockPacks" {
  if (!pullOnly) return kind;
  if (kind === "stockPacksLaunch" || kind === "stockPacksLp") return "stockPacks";
  if (kind === "stockPacksCreator" && !operatorEnabled) return "stockPacks";
  return kind;
}

/** Unknown Stock-host paths resolve to the paid Stock home, never Royale. */
export function stockHostRoute(path: string, flags: StockPacksRouteFlags = {}): StockHostRouteKind {
  if (path === "/stock-packs/launch") return stockPacksPullOnlyRouteKind("stockPacksLaunch", flags);
  if (path === "/stock-packs/lp") return stockPacksPullOnlyRouteKind("stockPacksLp", flags);
  if (path === "/stock-packs/create") return stockPacksPullOnlyRouteKind("stockPacksCreator", flags);
  if (path === "/collection" || path === "/stock-packs/collection") return "stockPacksCollection";
  if (path.startsWith("/docs")) {
    const docs = matchRoyaleDocsPath(path);
    if (docs && (!docs.section || STOCK_PACKS_DOCS_SECTIONS.some((section) =>
      section.id === docs.section && (!docs.page || section.pages.some((page) => page.id === docs.page))))) {
      return "stockPacksDocs";
    }
  }
  return "stockPacks";
}
