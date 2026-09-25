// Stock-host builds name Royale-derived chunks and assets by content hash only, so the
// STONKPACKS page source and network panel never list files such as
// RoyaleSellBackPanel-<hash>.js. The switch is an explicit build-time flag that only the
// STONKPACKS build sets; every other build (royale.cards, attn) keeps Vite's default names.
export const STOCK_PACKS_NEUTRAL_CHUNK_NAMES_ENV = "STOCK_PACKS_NEUTRAL_CHUNK_NAMES";

const BRANDED_NAME = /royale/iu;

export function stockPacksNeutralChunkNamesEnabled(env: Readonly<Record<string, string | undefined>>): boolean {
  return env[STOCK_PACKS_NEUTRAL_CHUNK_NAMES_ENV]?.trim() === "true";
}

// Same patterns as Vite's defaults (assetsDir "assets"), with a hash-only name for branded files.
export function stockPacksChunkFileName(chunk: Readonly<{ name: string }>): string {
  return BRANDED_NAME.test(chunk.name) ? "assets/c-[hash].js" : "assets/[name]-[hash].js";
}

export function stockPacksAssetFileName(asset: Readonly<{
  name?: string | undefined;
  names?: readonly string[] | undefined;
  originalFileNames?: readonly string[] | undefined;
}>): string {
  const names = [...(asset.names ?? []), asset.name ?? "", ...(asset.originalFileNames ?? [])];
  return names.some((name) => BRANDED_NAME.test(name)) ? "assets/a-[hash][extname]" : "assets/[name]-[hash][extname]";
}
