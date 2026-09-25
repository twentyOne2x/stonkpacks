import { STOCK_HOST_RAIL_CONFIG_ERROR } from "../../../routes/royale/royaleBackendRailEnv";
import { STOCK_PACKS_PULL_ONLY } from "../branding/stockPacksThemeFlags";
import "./stockPacksSite.css";

/**
 * Visible notice when the Stock host build cannot reach its mainnet API. The
 * operator detail goes to the console (logged once by royaleBackendRailEnv);
 * visitors see one short line instead of a page that looks healthy but is dead.
 * Pull-only (VITE_STOCK_PACKS_PULL_ONLY) has no launches to mention.
 */
export function StockPacksConfigAlert({ configError = STOCK_HOST_RAIL_CONFIG_ERROR, pullOnly = STOCK_PACKS_PULL_ONLY }: Readonly<{
  configError?: string | null;
  pullOnly?: boolean;
}>) {
  if (!configError) return null;
  return <p className="stockPacksSiteAlert" role="alert">{pullOnly ? "Site config error. Packs are offline." : "Site config error. Packs and launches are offline."}</p>;
}
