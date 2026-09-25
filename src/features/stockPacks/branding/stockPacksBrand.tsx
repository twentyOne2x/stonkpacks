import { STOCK_PACKS_DEFAULT_PRICE_LABEL } from "./stockPacksCopy";
import { createContext, createElement, type ReactNode, useContext } from "react";

export type StockPacksBrandId = "attn-royale" | "stonkpacks";

export type StockPacksPlatformToken = Readonly<{
  name: string;
  symbol: string | null;
  mint: string | null;
  logoUrl: string | null;
  canShowNumbers: boolean;
  emptyState: string | null;
}>;

export type StockPacksPlatformTokenEnv = Readonly<{
  mint?: string | null;
  symbol?: string | null;
  name?: string | null;
  logoUrl?: string | null;
}>;

const NO_STOCK_PACKS_PLATFORM_TOKEN: StockPacksPlatformToken = Object.freeze({
  name: "",
  symbol: null,
  mint: null,
  logoUrl: null,
  canShowNumbers: false,
  emptyState: null,
});

/** Resolve Stock's public token identity. A missing or invalid mint fails closed. */
export function resolveStockPacksPlatformToken(env: StockPacksPlatformTokenEnv = {}): StockPacksPlatformToken {
  const mintCandidate = env.mint?.trim() ?? "";
  const mintIsValid = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/u.test(mintCandidate) && !/royale/iu.test(mintCandidate);
  const configuredName = env.name?.trim() ?? "";
  const nameIsValid = !/royale/iu.test(configuredName);
  const name = configuredName && nameIsValid ? configuredName : "STONKPACKS";
  const symbolCandidate = env.symbol?.trim() || "$STONKPACKS";
  const symbolIsValid = /^\$?[A-Z0-9]{1,12}$/u.test(symbolCandidate) && !/royale/iu.test(symbolCandidate);
  const identityIsValid = mintIsValid && nameIsValid && symbolIsValid;
  const mint = identityIsValid ? mintCandidate : null;
  const symbol = identityIsValid
    ? (symbolCandidate.startsWith("$") ? symbolCandidate : `$${symbolCandidate}`)
    : null;
  const logoCandidate = env.logoUrl?.trim() ?? "";
  const logoUrl = identityIsValid && !/royale/iu.test(logoCandidate) && (logoCandidate.startsWith("/") || /^https:\/\//iu.test(logoCandidate))
    ? logoCandidate
    : null;
  return Object.freeze({
    name,
    symbol,
    mint,
    logoUrl,
    canShowNumbers: identityIsValid,
    emptyState: identityIsValid ? null : "Coming soon",
  });
}

export type StockPacksBrandProfile = Readonly<{
  id: StockPacksBrandId;
  wordmark: Readonly<{ prefix: string | null; name: string; accessibleName: string }>;
  metadata: Readonly<{
    title: string;
    description: string;
    siteName: string;
    imageAlt: string;
  }>;
  navigation: Readonly<{ showArena: boolean }>;
  social: Readonly<{ hashtag: string; playUrl: string; downloadStem: string }>;
  docs: Readonly<{
    title: string;
    backLabel: string;
    viewLabel: string;
    howLabel: string;
    technicalLabel: string;
    howIntro: string;
    technicalIntro: string;
    navigationLabel: string;
    overviewLabel: string;
    previousLabel: string;
    nextLabel: string;
  }>;
  publicSummary: string;
}>;

export const ATTN_ROYALE_BRAND: StockPacksBrandProfile = Object.freeze({
  id: "attn-royale",
  wordmark: Object.freeze({ prefix: "attn", name: "ROYALE", accessibleName: "attn ROYALE" }),
  metadata: Object.freeze({
    title: "attn ROYALE",
    description: "Open packs, play live rounds, and manage your collection.",
    siteName: "attn ROYALE",
    imageAlt: "attn ROYALE",
  }),
  navigation: Object.freeze({ showArena: true }),
  social: Object.freeze({
    hashtag: "#attnROYALE",
    playUrl: "https://attn-royale-lab-58d2417f5065.vercel.app/",
    downloadStem: "attn-royale",
  }),
  docs: Object.freeze({
    title: "Docs",
    backLabel: "← Back to the board",
    viewLabel: "Docs view",
    howLabel: "How it works",
    technicalLabel: "Technical",
    howIntro: "The plain-language version. Read this first, then flip to Technical for the exact mechanics.",
    technicalIntro: "The exact mechanics, in plain numbers.",
    navigationLabel: "Docs sections",
    overviewLabel: "Overview",
    previousLabel: "Previous",
    nextLabel: "Next",
  }),
  publicSummary: "attn ROYALE is the shared pack-opening game and collection experience.",
});

export const STONKPACKS_BRAND: StockPacksBrandProfile = Object.freeze({
  id: "stonkpacks",
  wordmark: Object.freeze({ prefix: null, name: "STONKPACKS", accessibleName: "STONKPACKS" }),
  metadata: Object.freeze({
    title: "STONKPACKS",
    description: "Add tokens to pools, create paid Stock Packs, and rip packs for rewards sent to your wallet.",
    siteName: "STONKPACKS",
    imageAlt: "STONKPACKS token packs",
  }),
  navigation: Object.freeze({ showArena: false }),
  social: Object.freeze({
    hashtag: "#STONKPACKS",
    playUrl: "https://stonkpacks.xyz/",
    downloadStem: "stonkpacks",
  }),
  docs: Object.freeze({
    title: "STONKPACKS Docs",
    backLabel: "← Back to Stock Packs",
    viewLabel: "STONKPACKS docs view",
    howLabel: "How Stock Packs work",
    technicalLabel: "Receipts and delivery",
    howIntro: `Add eligible launcher tokens as pack rewards, deposit into pools, or rip a ${STOCK_PACKS_DEFAULT_PRICE_LABEL} pack. Your pull is sent to your wallet.`,
    technicalIntro: "Pulls, price estimates, delivery and swap quotes have separate records.",
    navigationLabel: "STONKPACKS docs sections",
    overviewLabel: "STONKPACKS overview",
    previousLabel: "Previous",
    nextLabel: "Next",
  }),
  publicSummary:
    `STONKPACKS has managed pools, launcher rewards, paid ${STOCK_PACKS_DEFAULT_PRICE_LABEL} packs, and token delivery to Privy wallets.`,
});

export type ResolveStockPacksBrandInput = Readonly<{
  hostname: string;
  deployment: "production" | "preview" | "development";
  stockPreview?: boolean | undefined;
}>;

/** Branding only. This result must never authorize purchases, claims, delivery, or sale. */
export function resolveStockPacksBrand(input: ResolveStockPacksBrandInput): StockPacksBrandProfile {
  // Standalone STONKPACKS repository: every host (production, Vercel previews,
  // localhost) is the STONKPACKS site. The upstream monorepo resolves by hostname.
  void input;
  return STONKPACKS_BRAND;
}

const StockPacksBrandContext = createContext<StockPacksBrandProfile>(ATTN_ROYALE_BRAND);
const StockPacksPlatformTokenContext = createContext<StockPacksPlatformToken>(NO_STOCK_PACKS_PLATFORM_TOKEN);

export function StockPacksBrandProvider({
  profile,
  platformToken,
  children,
}: {
  profile: StockPacksBrandProfile;
  platformToken?: StockPacksPlatformToken;
  children?: ReactNode;
}) {
  return createElement(
    StockPacksBrandContext.Provider,
    { value: profile },
    createElement(StockPacksPlatformTokenContext.Provider, {
      value: profile.id === "stonkpacks" ? platformToken ?? resolveStockPacksPlatformToken() : NO_STOCK_PACKS_PLATFORM_TOKEN,
    }, children),
  );
}

export function useStockPacksBrand(): StockPacksBrandProfile {
  return useContext(StockPacksBrandContext);
}

export function useStockPacksPlatformToken(): StockPacksPlatformToken {
  return useContext(StockPacksPlatformTokenContext);
}


// Route visibility only; economic authorization remains with the server.
export function stockPacksLpRouteKind(brand: StockPacksBrandProfile): "stockPacksLp" | "unavailable" {
  return brand.id === "stonkpacks" ? "stockPacksLp" : "unavailable";
}
