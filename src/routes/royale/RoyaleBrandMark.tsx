// THE brand lockup (owner 2026-07-13: "lets call the product just `attn
// ROYALE`", and 2026-07-16: "ensure the attn royale styling in the header is
// consistent in all header/navigators"). One component renders the two-part
// pack-wrapper mark everywhere — ink lowercase "attn" + gold tracked deco caps
// "ROYALE" — so the board header and every standalone page mast share the exact
// same treatment instead of hand-rolled small-caps copies.
//
// Inner <b>/<i> (not spans) so header tier CSS that targets direct-child spans
// still sizes only the OUTER span; the em-based --royaleHero/--royaleEyebrow
// knobs in royaleBrandMark.css scale the lockup from the base font-size, which
// context variants (e.g. "page") step down.
import { memo } from "react";
import { useStockPacksBrand } from "../../features/stockPacks/branding/stockPacksBrand";
import { t, useRoyaleLocale } from "./royaleI18n";
import "./royaleBrandMark.css";

type RoyaleBrandMarkProps = {
  /** Rendering context: "header" is the board header's full-size lockup;
   *  "page" is the standalone page-mast scale (results/ladder/collection/
   *  profile/chase/referrals). */
  variant?: "header" | "page";
};

function RoyaleBrandMarkImpl({ variant = "header" }: RoyaleBrandMarkProps) {
  // Re-render this lockup on a language switch: its aria-label + tooltip are
  // t()-derived (the visible "attn ROYALE" wordmark itself is brand, never
  // translated), and t() is a plain function with no reactivity of its own.
  useRoyaleLocale();
  const brand = useStockPacksBrand();
  const ariaLabel = brand.id === "attn-royale" ? t("misc.brandMark.ariaLabel") : brand.wordmark.accessibleName;
  const title = brand.id === "attn-royale" ? t("misc.brandMark.title") : brand.wordmark.accessibleName;
  // The lockup is a LINK home (owner 2026-07-21: "make `attn royale` clickable
  // to go back to the board") — on the board header and every page mast alike,
  // the mark returns you to /lab/royale. Plain anchor (full reload is fine and
  // route-safe from any surface); styling stays byte-identical via the same
  // classes, with link resets + a hover lift in royaleBrandMark.css.
  return (
    <a
      className={variant === "page" ? "royaleBrandMark royaleBrandMark--page" : "royaleBrandMark"}
      data-testid="royale-brand-mark"
      href="/"
      aria-label={ariaLabel}
      title={title}
    >
      {brand.wordmark.prefix ? <b>{brand.wordmark.prefix}</b> : null}{" "}
      <i>{brand.wordmark.name}</i>
    </a>
  );
}

// PERF: Props are a single optional literal `variant`, so memo() bails on every
// board re-render. The lockup is static brand markup - it only ever needs to
// re-render on a locale switch, which useRoyaleLocale drives from inside.
export const RoyaleBrandMark = memo(RoyaleBrandMarkImpl);
