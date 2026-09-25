import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { Plugin } from "vite";
import { STONKPACKS_BRAND } from "./src/features/stockPacks/branding/stockPacksBrand";
import {
  stockPacksPullOnlyEnabled,
  stockPacksStonksThemeEnabled,
} from "./src/features/stockPacks/branding/stockPacksThemeFlags";
import { stockPacksMetaDescription } from "./src/features/stockPacks/site/stockPacksSiteLinks";
import { STOCK_PACKS_SHARE_DESCRIPTION } from "./src/features/stockPacks/branding/stockPacksShareCopy";

const STOCK_TITLE = "STONKPACKS";
const STOCK_DESCRIPTION = STOCK_PACKS_SHARE_DESCRIPTION;
const STOCK_IMAGE_ALT = "STONKPACKS packs of real xStock tokens";
const STOCK_BRAND_ASSET_OUTPUTS = [
  ["stonkpacks-icon.svg", "stonkpacks-icon.svg"],
  ["stonkpacks-maskable.svg", "stonkpacks-maskable.svg"],
  ["stonkpacks-mask-icon.svg", "stonkpacks-mask-icon.svg"],
  ["stonkpacks-favicon-16x16.png", "stonkpacks-favicon-16x16.png"],
  ["stonkpacks-favicon-32x32.png", "stonkpacks-favicon-32x32.png"],
  ["stonkpacks-favicon-48x48.png", "stonkpacks-favicon-48x48.png"],
  ["stonkpacks-favicon.ico", "stonkpacks-favicon.ico"],
  ["stonkpacks-apple-touch.png", "stonkpacks-apple-touch.png"],
  ["stonkpacks-192.png", "stonkpacks-192.png"],
  ["stonkpacks-512.png", "stonkpacks-512.png"],
  ["stonkpacks-maskable-512.png", "stonkpacks-maskable-512.png"],
  ["stonkpacks-og.png", "stonkpacks-og.png"],
  ["stonkpacks-og.svg", "stonkpacks-og.svg"],
  ["stonkpacks.webmanifest", "stonkpacks.webmanifest"],
  ["stonkpacks-favicon.ico", "favicon.ico"],
  ["stonkpacks-icon.svg", "favicon.svg"],
  ["stonkpacks-favicon-16x16.png", "favicon-16x16.png"],
  ["stonkpacks-favicon-32x32.png", "favicon-32x32.png"],
  ["stonkpacks-favicon-48x48.png", "favicon-48x48.png"],
  ["stonkpacks-apple-touch.png", "apple-touch-icon.png"],
  ["stonkpacks-mask-icon.svg", "safari-pinned-tab.svg"],
  ["stonkpacks.webmanifest", "manifest.webmanifest"],
] as const;

function escapeAttribute(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

function upsertMeta(html: string, attribute: "name" | "property", key: string, value: string): string {
  const matcher = new RegExp(`<meta\\b(?=[^>]*\\b${attribute}="${escapeRegExp(key)}")[^>]*\\/?\\s*>`, "u");
  const safeValue = escapeAttribute(value);
  const existing = html.match(matcher)?.[0];
  if (existing) {
    const updated = /\bcontent="[^"]*"/u.test(existing)
      ? existing.replace(/\bcontent="[^"]*"/u, `content="${safeValue}"`)
      : existing.replace(/\s*\/?\s*>$/u, ` content="${safeValue}" />`);
    return html.replace(matcher, updated);
  }
  const tag = `    <meta ${attribute}="${key}" content="${safeValue}" />`;
  return html.replace("</head>", `${tag}\n  </head>`);
}

function stockHead(html: string, description: string): string {
  const metadata: ReadonlyArray<readonly ["name" | "property", string, string]> = [
    ["name", "description", description],
    ["name", "apple-mobile-web-app-title", STOCK_TITLE],
    ["name", "theme-color", "#071013"],
    ["property", "og:type", "website"],
    ["property", "og:site_name", STOCK_TITLE],
    ["property", "og:title", STOCK_TITLE],
    ["property", "og:description", description],
    ["property", "og:image", "/stonkpacks-og.png"],
    ["property", "og:image:width", "1200"],
    ["property", "og:image:height", "630"],
    ["property", "og:image:alt", STOCK_IMAGE_ALT],
    ["property", "og:url", "https://stonkpacks.xyz/"],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", STOCK_TITLE],
    ["name", "twitter:description", description],
    ["name", "twitter:image", "/stonkpacks-og.png"],
    ["name", "twitter:image:alt", STOCK_IMAGE_ALT],
  ];

  let updated = html.replace(/<title>[^<]*<\/title>/u, `<title>${STOCK_TITLE}</title>`);
  for (const [attribute, key, value] of metadata) updated = upsertMeta(updated, attribute, key, value);
  updated = updated.replace(
    /<link\b(?=[^>]*\brel="manifest")[^>]*\/?>/giu,
    '<link id="stock-pwa-manifest" rel="manifest" href="/manifest.webmanifest" />',
  );
  if (!/id="stock-pwa-manifest"/u.test(updated)) {
    updated = updated.replace("</head>", '    <link id="stock-pwa-manifest" rel="manifest" href="/manifest.webmanifest" />\n  </head>');
  }
  updated = updated.replace(
    /<link\b(?=[^>]*\brel="(?:icon|shortcut icon|apple-touch-icon|mask-icon)")[^>]*\/?>/giu,
    "",
  );
  const icons = [
    '<link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />',
    '<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />',
    '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />',
    '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />',
    '<link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico" />',
    '<link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/apple-touch-icon.png" />',
    '<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3ce3ab" />',
  ].join("\n    ");
  updated = updated.replace("</head>", `    ${icons}\n  </head>`);
  updated = updated
    .replace(/#07090d/gu, "#071013")
    .replace(/(name=")[a-z0-9-]*-build(" content=)/giu, "$1stonkpacks-build$2")
    .replace(/console\.info\("[^"]*\s+build\s/gu, 'console.info("stonkpacks build ')
    .replace(/<!--[^]*?-->/gu, "");
  if (!/<noscript\b/iu.test(updated)) {
    updated = updated.replace("</body>", "  <noscript>STONKPACKS needs JavaScript to load.</noscript>\n  </body>");
  }
  // No inline scripts on the Stock host: its CSP allows script-src 'self' only. The head
  // above is already fully STONKPACKS, so the build-stamp console.info is dropped (the
  // stamp stays in the stonkpacks-build meta tag) and no runtime head rewrite is needed.
  updated = updated.replace(/\s*<script>console\.info\([^<]*\)<\/script>/gu, "");
  return updated;
}

/**
 * Emits the host-specific document and, when the Stock theme flag is on,
 * points conventional browser paths at the same STONKPACKS assets.
 */
export function stockPacksBrandArtifact(options: Readonly<{ pullOnly?: boolean; stonksTheme?: boolean }> = {}): Plugin {
  let pullOnly = options.pullOnly ?? false;
  let stonksTheme = options.stonksTheme ?? false;
  let brandAssetsDir = "";
  return {
    name: "stock-packs-host-document",
    enforce: "post",
    configResolved(config) {
      if (options.pullOnly === undefined) pullOnly = stockPacksPullOnlyEnabled(config.env);
      if (options.stonksTheme === undefined) stonksTheme = stockPacksStonksThemeEnabled(config.env);
      brandAssetsDir = stonksTheme ? resolve(config.root, "src/features/stockPacks/branding/assets") : "";
    },
    async generateBundle(_options, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset") return;
      if (stonksTheme) {
        if (!brandAssetsDir) throw new Error("Stock brand assets require a configured source directory");
        for (const [sourceName, destinationName] of STOCK_BRAND_ASSET_OUTPUTS) {
          this.emitFile({
            type: "asset",
            fileName: destinationName,
            source: await readFile(resolve(brandAssetsDir, sourceName)),
          });
        }
      }
      const description = stonksTheme
        ? STOCK_DESCRIPTION
        : stockPacksMetaDescription(STONKPACKS_BRAND.metadata.description, pullOnly);
      const html = stockHead(String(index.source), description);
      if (stonksTheme) index.source = html;
      this.emitFile({ type: "asset", fileName: "stonkpacks.html", source: html });
    },
  };
}
