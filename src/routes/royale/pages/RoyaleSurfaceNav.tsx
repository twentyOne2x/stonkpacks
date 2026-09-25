// Small, tasteful cross-surface nav for Pack Royale. A single compact row of
// links that reaches the board and every standalone surface (results / ladder /
// collection / profile). It is meant to sit INLINE inside a header row (the
// board's account bar, or a standalone page's header) rather than as its own
// bordered strip — see royalePages.css `.royaleSurfaceNav`. `current` is
// optional: leaf pages with no matching surface render it with nothing active.
//
// 2026-07-10 (owner): WINNINGS + ANALYTICS + PROFILE merged into the single
// PROFILE surface (they showed the same numbers three ways). The old
// /lab/royale/winnings and /lab/royale/analytics paths still resolve — they
// land on the matching PROFILE section (see RoyaleProfileRoute.tsx).

import { memo } from "react";
import { useStockPacksBrand } from "../../../features/stockPacks/branding/stockPacksBrand";
import { STOCK_PACKS_PULL_ONLY } from "../../../features/stockPacks/branding/stockPacksThemeFlags";
import { stockPacksPullOnlyLinks } from "../../../features/stockPacks/site/stockPacksSiteLinks";
import { t, useRoyaleLocale } from "../royaleI18n";
import "./royalePages.css";

export type RoyaleSurface = "board" | "arena" | "results" | "ladder" | "collection" | "profile" | "docs";

// RESULTS sits right after BOARD: the round-results page is the immediate
// follow-on to a settled board round (the cards each tile opened), so it reads
// as "the board, then what just happened" before the browse/economy surfaces.
//
// `short` is the DELIBERATE compact label for the 641-1279px board-header band
// (audit-postdeploy-wave nav fix, 2026-07-15): real short WORDS, never CSS
// ellipsis or bare initials (owner taste: icon/tooltip-only is not enough).
// RANKS/CARDS are chosen over abbreviations ("RANK.", "COLL.") so nothing ever
// reads as mid-cut. Both spans render; royaleHeaderSingleLine.css swaps which
// one shows, and the <a>'s aria-label always carries the full surface name.
//
// i18n Phase 1: labels/short labels are t()-derived (built at render time so
// they re-render on a locale switch — see the useRoyaleLocale() call below).
function links(showArena: boolean): { key: RoyaleSurface; href: string; label: string; short: string }[] {
  return [
    { key: "board", href: "/", label: t("nav.board"), short: t("nav.board") },
    // ARENA sits beside BOARD: it is the second PLAY surface (stake cards, not
    // USDC), so the two ways to play read together before the browse surfaces.
    ...(showArena ? [{ key: "arena" as const, href: "/card-arena", label: t("nav.arena"), short: t("nav.arena") }] : []),
    { key: "results", href: "/results", label: t("nav.results"), short: t("nav.results") },
    { key: "ladder", href: "/ladder", label: t("nav.rankingsFull"), short: t("nav.rankingsShort") },
    { key: "collection", href: "/collection", label: t("nav.collectionFull"), short: t("nav.collectionShort") },
    { key: "profile", href: "/profile", label: t("nav.profile"), short: t("nav.profile") },
    // DOCS (owner 2026-07-24: "add an faq / question/docs link in the header/
    // navigator so we can onboard"). "DOCS" is already as short as any word on
    // this list (shorter than RESULTS/PROFILE/COLLECTION), so full and short are
    // identical - no truncation tier needed for it.
    { key: "docs", href: "/docs", label: t("nav.docs"), short: t("nav.docs") },
  ];
}

/**
 * Default posture: renders the OTHER surfaces only — a link to the page the
 * reader is already on is dead weight ("why is there a board button in that
 * header navigator while we are literally on the board", owner, 2026-07-10).
 *
 * `showCurrent` (arena nav pass, 2026-07-22, owner: "make the navigator for
 * the acrd arena nicer its cramped right now"): the current surface renders
 * as an INERT you-are-here pill (a <span> with aria-current, never a link
 * that can't fire) in its canonical position, giving the row a clear active
 * state. Opt-in per page so the board's tight single-line header band keeps
 * its exact item count.
 */
function RoyaleSurfaceNavImpl({ current, showCurrent = false, stockPullOnly = STOCK_PACKS_PULL_ONLY }: {
  current?: RoyaleSurface;
  showCurrent?: boolean;
  /** Stock host only: VITE_STOCK_PACKS_PULL_ONLY drops Launch, Pools and Create. */
  stockPullOnly?: boolean;
}) {
  // i18n Phase 1: subscribe so this nav re-renders on a language switch.
  useRoyaleLocale();
  const brand = useStockPacksBrand();
  if (brand.id === "stonkpacks") {
    const stockLinks = stockPacksPullOnlyLinks([
      { href: "/", label: "Stock Packs" },
      { href: "/stock-packs/collection", label: "Token history" },
      { href: "/stock-packs/launch", label: "Launch" },
      { href: "/stock-packs/lp", label: "Pools" },
      { href: "/stock-packs/create", label: "Create" },
      { href: "/docs", label: "Docs" },
    ], stockPullOnly);
    const currentPath = typeof window === "undefined" ? "" : window.location.pathname;
    return <nav className="royaleSurfaceNav" aria-label="STONKPACKS sections" data-testid="royale-surface-nav">
      {stockLinks.map(({ href, label }) => href === currentPath
        ? <span key={href} className="royaleSurfaceNavLink royaleSurfaceNavCurrent" aria-current="page">{label}</span>
        : <a key={href} className="royaleSurfaceNavLink" href={href}>{label}</a>)}
    </nav>;
  }
  const allLinks = links(brand.navigation.showArena);
  const visibleLinks = current && !showCurrent ? allLinks.filter((link) => link.key !== current) : allLinks;
  return (
    <nav className="royaleSurfaceNav" aria-label={t("nav.ariaLabel")} data-testid="royale-surface-nav">
      {visibleLinks.map((link) => {
        const labels = (
          <>
            <span className="royaleSurfaceNavLabelFull" aria-hidden="true">
              {link.label}
            </span>
            <span className="royaleSurfaceNavLabelShort" aria-hidden="true">
              {link.short}
            </span>
          </>
        );
        if (showCurrent && link.key === current) {
          // a11y loop 2026-07-25: this pill is an inert <span> (generic role),
          // and aria-label is PROHIBITED there — assistive tech dropped it, so
          // with both visible labels aria-hidden the current surface announced
          // as NOTHING (axe: aria-prohibited-attr, serious). aria-current is a
          // global attribute and stays; the name now comes from real
          // screen-reader-only text, which survives the compact-band word swap.
          return (
            <span key={link.href} className="royaleSurfaceNavLink royaleSurfaceNavCurrent" aria-current="page">
              {labels}
              <span className="royaleSrOnly">{link.label}</span>
            </span>
          );
        }
        // aria-label carries the full surface name at every width, so the
        // compact-band span swap never changes the accessible name.
        return (
          <a key={link.href} href={link.href} className="royaleSurfaceNavLink" aria-label={link.label}>
            {labels}
          </a>
        );
      })}
    </nav>
  );
}

// PERF: The board passes a constant `current="board"` and no `showCurrent`, so
// memo() bails on every bot-bid re-render of the route. Locale switches still
// flow through useRoyaleLocale inside.
export const RoyaleSurfaceNav = memo(RoyaleSurfaceNavImpl);
