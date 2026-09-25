import { STOCK_PACKS_PULL_ONLY, STOCK_PACKS_STONKS_THEME } from "../branding/stockPacksThemeFlags";
import { STONKS_FOOTER_LOGO } from "../board/stonksCardArt";
import { stockPacksFooterLinks, stockPacksFooterTagline } from "./stockPacksSiteLinks";

/**
 * STONKPACKS footer on every Stock-host route. Pull-only drops Pools and Create.
 * The stonks theme (VITE_STOCK_PACKS_THEME=stonks) renders the direction F
 * board-material footer with the lit logo render (styles in board/stonksFooter.css,
 * loaded by main.tsx); flag off keeps the plain one.
 */
export function StockPacksFooter({
  pullOnly = STOCK_PACKS_PULL_ONLY,
  stonksTheme = STOCK_PACKS_STONKS_THEME,
}: Readonly<{ pullOnly?: boolean; stonksTheme?: boolean }>) {
  if (stonksTheme) {
    return (
      <footer className="stonksFooter">
        <div className="stonksFooter__logo"><img src={STONKS_FOOTER_LOGO} alt="" loading="lazy" draggable={false} /></div>
        <div className="stonksFooter__col">
          <div className="stonksFooter__grid">
            <div>
              <a className="stonksFooter__brand" href="/" aria-label="STONKPACKS home">STONKPACKS</a>
              <p>{stockPacksFooterTagline(pullOnly)}</p>
            </div>
            <nav className="stonksFooter__links" aria-label="STONKPACKS footer">
              {stockPacksFooterLinks(pullOnly).map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
            </nav>
            <p className="stonksFooter__fine">Values at pull. Token prices move after.<br />Packs are random. You can get back less than you paid.</p>
          </div>
          <div className="stonksFooter__base"><span>NOT FINANCIAL ADVICE</span><span>RIP RESPONSIBLY</span></div>
        </div>
      </footer>
    );
  }
  return (
    <footer className="stockPacksFooter">
      <a className="stockPacksFooter__brand" href="/" aria-label="STONKPACKS home">STONKPACKS</a>
      <p>{stockPacksFooterTagline(pullOnly)}</p>
      <nav aria-label="STONKPACKS footer">
        {stockPacksFooterLinks(pullOnly).map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
      </nav>
    </footer>
  );
}
