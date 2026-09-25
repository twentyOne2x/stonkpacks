import {
  resolveRoyaleBackendRailConfig,
  resolveStockHostBackendRailConfig,
  royaleBackendRequestUrl,
  type RoyaleBackendBuildEnv,
} from "./royaleBackendRail";
import { resolveStockPacksBrand } from "../../features/stockPacks/branding/stockPacksBrand";

type RailEnv = RoyaleBackendBuildEnv & Readonly<{
  VITE_SOLANA_MAINNET_RPC_URL?: string;
  VITE_STOCK_PACKS_PREVIEW?: string;
  PROD?: boolean;
}>;

function readViteEnv(): RailEnv {
  try {
    return (
      (import.meta as unknown as { env?: RailEnv }).env ?? {}
    );
  } catch {
    return {};
  }
}

const env = readViteEnv();

function isStockHostBuild(): boolean {
  if (typeof window === "undefined") return false;
  return resolveStockPacksBrand({
    hostname: window.location.hostname,
    deployment: env.PROD ? "production" : "development",
    stockPreview: env.VITE_STOCK_PACKS_PREVIEW === "true",
  }).id === "stonkpacks";
}

const STOCK_HOST_RAIL = isStockHostBuild() ? resolveStockHostBackendRailConfig(env) : null;

/** Operator-facing Stock host config error, or null (always null on royale.cards). */
export const STOCK_HOST_RAIL_CONFIG_ERROR = STOCK_HOST_RAIL?.configError ?? null;
if (STOCK_HOST_RAIL_CONFIG_ERROR) {
  console.error(`[stonkpacks] site config error: ${STOCK_HOST_RAIL_CONFIG_ERROR}`);
}

export const ROYALE_BACKEND_RAIL = STOCK_HOST_RAIL?.config ?? resolveRoyaleBackendRailConfig(env);

export function royaleBackendApiUrl(input: string): string {
  return royaleBackendRequestUrl(input, ROYALE_BACKEND_RAIL);
}
