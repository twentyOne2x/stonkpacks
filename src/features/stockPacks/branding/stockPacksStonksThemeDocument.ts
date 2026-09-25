import { STOCK_PACKS_STONKS_THEME } from "./stockPacksThemeFlags";

/**
 * STONKPACKS stonks theme switch (VITE_STOCK_PACKS_THEME=stonks), Stock host only.
 * The styles live in stockPacksStonksTheme.css and apply only under
 * html[data-stock-theme="stonks"], which nothing but this function sets.
 */
export const STOCK_PACKS_STONKS_FONT_FAMILY = "STONKPACKS Sora";
export const STOCK_PACKS_STONKS_FONT_URL = "/stonkpacks/fonts/stonkpacks-sora-latin-wght.woff2";
export const STOCK_PACKS_STONKS_GROTESK_FONT_FAMILY = "STONKPACKS Space Grotesk";
export const STOCK_PACKS_STONKS_GROTESK_FONT_URL = "/stonkpacks/fonts/stonkpacks-space-grotesk-latin-wght.woff2";

/** Both faces are small latin variable subsets (about 34 KB and 22 KB), so both preload. */
export const STOCK_PACKS_STONKS_PRELOAD_FONT_URLS: readonly string[] = Object.freeze([
  STOCK_PACKS_STONKS_FONT_URL,
  STOCK_PACKS_STONKS_GROTESK_FONT_URL,
]);

type ThemeDocument = Pick<Document, "createElement" | "documentElement" | "head">;

/** Marks the document for the stonks theme and preloads its faces. Flag off: touches nothing. */
export function applyStockPacksStonksTheme(doc: ThemeDocument, enabled: boolean = STOCK_PACKS_STONKS_THEME): boolean {
  if (!enabled) return false;
  doc.documentElement.dataset.stockTheme = "stonks";
  for (const href of STOCK_PACKS_STONKS_PRELOAD_FONT_URLS) {
    const preload = doc.createElement("link");
    preload.rel = "preload";
    preload.as = "font";
    preload.type = "font/woff2";
    preload.crossOrigin = "anonymous";
    preload.href = href;
    doc.head.append(preload);
  }
  return true;
}
