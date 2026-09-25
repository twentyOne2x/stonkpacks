/**
 * STONKPACKS direction F build flags. Each flag reveals a Stock-host-only
 * delta. With every flag unset, the Stock host renders exactly as it did
 * before these flags existed. Presentation only: nothing here authorizes a
 * purchase, payment, delivery or sale.
 */
export type StockPacksThemeFlagEnv = Readonly<{
  VITE_STOCK_PACKS_THEME?: string | undefined;
  VITE_STOCK_PACKS_PULL_ONLY?: string | undefined;
}>;

function readViteEnv(): StockPacksThemeFlagEnv {
  try {
    return (import.meta as unknown as { env?: StockPacksThemeFlagEnv }).env ?? {};
  } catch {
    return {};
  }
}

/** VITE_STOCK_PACKS_THEME=stonks turns on the direction F visual layer. */
export function stockPacksStonksThemeEnabled(env: StockPacksThemeFlagEnv = readViteEnv()): boolean {
  return env.VITE_STOCK_PACKS_THEME?.trim().toLowerCase() === "stonks";
}

/** VITE_STOCK_PACKS_PULL_ONLY=true turns on the owner's pack-first cut: no launch, pools or create. */
export function stockPacksPullOnlyEnabled(env: StockPacksThemeFlagEnv = readViteEnv()): boolean {
  const value = env.VITE_STOCK_PACKS_PULL_ONLY?.trim().toLowerCase();
  return value === "true" || value === "1";
}

export const STOCK_PACKS_STONKS_THEME = stockPacksStonksThemeEnabled();
export const STOCK_PACKS_PULL_ONLY = stockPacksPullOnlyEnabled();
