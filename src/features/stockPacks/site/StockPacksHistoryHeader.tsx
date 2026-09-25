import { STOCK_PACKS_PULL_ONLY } from "../branding/stockPacksThemeFlags";
import { stockPacksHistoryLinks } from "./stockPacksSiteLinks";

const HISTORY_HREF = "/stock-packs/collection";

/** Token history page header on the Stock host. Pull-only drops Launch, Pools and Create. */
export function StockPacksHistoryHeader({ pullOnly = STOCK_PACKS_PULL_ONLY }: Readonly<{ pullOnly?: boolean }>) {
  return (
    <header className="royaleResultsHead">
      <a className="royaleBrandMark" href="/">STONKPACKS</a>
      <strong>Token history</strong>
      <nav className="royaleSurfaceNav" aria-label="STONKPACKS sections">
        {stockPacksHistoryLinks(pullOnly).map(({ href, label }) => href === HISTORY_HREF
          ? <a key={href} href={href} aria-current="page">{label}</a>
          : <a key={href} href={href}>{label}</a>)}
      </nav>
    </header>
  );
}
