export type RoyaleBackendNetwork = "devnet" | "mainnet";

export const DEFAULT_ROYALE_DEVNET_API_BASE_URL =
  "https://api-production-f2c84.up.railway.app";
export const DEFAULT_ROYALE_MAINNET_API_BASE_URL =
  "https://mainnet-readiness-api-production.up.railway.app";
export const DEFAULT_ROYALE_DEVNET_CLUSTER_ID = "solana:devnet" as const;
export const DEFAULT_ROYALE_MAINNET_CLUSTER_ID = "solana:mainnet" as const;

export type RoyaleBackendBuildEnv = {
  VITE_ATTN_PACKS_API_BASE_URL?: string;
  NEXT_PUBLIC_ATTN_PACKS_API_BASE_URL?: string;
  VITE_ATTN_PACKS_DEVNET_API_BASE_URL?: string;
  VITE_ATTN_PACKS_MAINNET_API_BASE_URL?: string;
  VITE_PACK_ROYALE_BACKEND_NETWORK?: string;
  VITE_PACK_ROYALE_MAINNET_ENABLED?: string;
  VITE_PACK_ROYALE_DEVNET_CLUSTER_ID?: string;
  VITE_PACK_ROYALE_MAINNET_CLUSTER_ID?: string;
};

export type RoyaleBackendTarget = Readonly<{
  network: RoyaleBackendNetwork;
  apiBaseUrl: string;
  clusterId:
    | typeof DEFAULT_ROYALE_DEVNET_CLUSTER_ID
    | typeof DEFAULT_ROYALE_MAINNET_CLUSTER_ID;
}>;

export type RoyaleBackendRailConfig = Readonly<{
  active: RoyaleBackendTarget;
  devnet: RoyaleBackendTarget;
  mainnet: RoyaleBackendTarget;
  mainnetEnabled: boolean;
  requestedNetwork: RoyaleBackendNetwork;
}>;

/**
 * Fully bound browser target used by the hosted wallet rail. The flag-gated
 * API selector above intentionally needs only an origin and cluster id; the
 * wallet rail additionally fails closed unless its Privy app and RPC identity
 * are explicit.
 */
export type RoyaleRuntimeBackendTarget = Readonly<{
  network: RoyaleBackendNetwork;
  apiBaseUrl: string;
  privyAppId: string;
  rpcUrl: string;
}>;

export function resolveRoyaleRuntimeBackendTarget(input: Readonly<{
  devnet: RoyaleRuntimeBackendTarget;
  mainnet: RoyaleRuntimeBackendTarget;
  mainnetEnabled: boolean;
  requestedNetwork: RoyaleBackendNetwork;
}>): RoyaleRuntimeBackendTarget {
  return input.mainnetEnabled && input.requestedNetwork === "mainnet"
    ? input.mainnet
    : input.devnet;
}

export type RoyaleBackendReadiness = {
  ok?: boolean;
  schema?: string;
  enabled?: boolean;
  routeMounted?: boolean;
  inventoryProviderMode?: string;
  fixtureInventory?: boolean;
  providerLifecycleReady?: boolean;
  canonicalDevnetCanaryExecutionReady?: boolean;
  canonicalProductionCanaryExecutionReady?: boolean;
  releaseReady?: boolean;
  requiredTier?: string;
  currentTier?: string;
  ready?: boolean;
  moneyGateOpen?: boolean;
  secretsIncluded?: boolean;
};

export type RoyaleBackendGate = {
  allowed: boolean;
  code:
    | "devnet_authorized"
    | "backend_target_missing"
    | "backend_rpc_missing"
    | "backend_privy_missing"
    | "backend_privy_mismatch"
    | "backend_cross_rail_collision"
    | "backend_rpc_cluster_mismatch"
    | "backend_readiness_pending"
    | "backend_readiness_unavailable"
    | "backend_schema_mismatch"
    | "backend_not_devnet_mode"
    | "backend_not_production_mode"
    | "backend_fixture_inventory"
    | "backend_provider_not_ready"
    | "backend_devnet_canary_not_authorized"
    | "backend_production_canary_not_authorized"
    | "backend_release_receipt_missing"
    | "backend_tier_below_t6"
    | "backend_money_gate_closed"
    | "backend_not_ready"
    | "backend_secret_contract_failed"
    | "mainnet_authorized";
  detail: string;
};

const READINESS_SCHEMA = "attn.packRoyale.usdcRoundEngineReadiness.v1";

export function normalizeRoyaleBackendNetwork(
  value: string | null | undefined,
): RoyaleBackendNetwork {
  return value?.trim().toLowerCase() === "mainnet" ? "mainnet" : "devnet";
}

export function normalizeRoyaleBackendUrl(
  value: string | null | undefined,
): string {
  return value?.trim().replace(/\/+$/, "") ?? "";
}

function firstRoyaleBackendUrl(
  ...values: Array<string | null | undefined>
): string {
  for (const value of values) {
    const normalized = normalizeRoyaleBackendUrl(value);
    if (normalized) return normalized;
  }
  return "";
}

/**
 * Resolve both public API origins without ever selecting mainnet. Selection is
 * owned by resolveRoyaleBackendRailConfig, where two independent build flags
 * are required before the mainnet target can become active.
 */
export function resolveRoyaleBackendApiUrls(
  env: RoyaleBackendBuildEnv,
): Readonly<{ devnet: string; mainnet: string }> {
  const generic = firstRoyaleBackendUrl(
    env.VITE_ATTN_PACKS_API_BASE_URL,
    env.NEXT_PUBLIC_ATTN_PACKS_API_BASE_URL,
  );
  return Object.freeze({
    devnet: firstRoyaleBackendUrl(
      env.VITE_ATTN_PACKS_DEVNET_API_BASE_URL,
      generic,
      DEFAULT_ROYALE_DEVNET_API_BASE_URL,
    ),
    mainnet: firstRoyaleBackendUrl(
      env.VITE_ATTN_PACKS_MAINNET_API_BASE_URL,
      DEFAULT_ROYALE_MAINNET_API_BASE_URL,
    ),
  });
}

function exactClusterId(
  _value: string | null | undefined,
  expected:
    | typeof DEFAULT_ROYALE_DEVNET_CLUSTER_ID
    | typeof DEFAULT_ROYALE_MAINNET_CLUSTER_ID,
): typeof expected {
  // The browser bundle accepts only the canonical cluster domains. An absent
  // or contradictory override cannot change the target's chain identity.
  return expected;
}

/**
 * Mainnet is fail-closed: it becomes active only when BOTH the explicit enable
 * flag is the exact string "true" and the requested network is "mainnet".
 * Missing, blank, misspelled, or partially configured values stay on devnet.
 */
export function resolveRoyaleBackendRailConfig(
  env: RoyaleBackendBuildEnv,
): RoyaleBackendRailConfig {
  const urls = resolveRoyaleBackendApiUrls(env);
  const requestedNetwork = normalizeRoyaleBackendNetwork(
    env.VITE_PACK_ROYALE_BACKEND_NETWORK,
  );
  const mainnetClusterOverride =
    env.VITE_PACK_ROYALE_MAINNET_CLUSTER_ID?.trim();
  const mainnetEnabled =
    env.VITE_PACK_ROYALE_MAINNET_ENABLED?.trim().toLowerCase() === "true"
    && (!mainnetClusterOverride
      || mainnetClusterOverride === DEFAULT_ROYALE_MAINNET_CLUSTER_ID)
    && urls.mainnet !== urls.devnet;
  const devnet: RoyaleBackendTarget = Object.freeze({
    network: "devnet",
    apiBaseUrl: urls.devnet,
    clusterId: exactClusterId(
      env.VITE_PACK_ROYALE_DEVNET_CLUSTER_ID,
      DEFAULT_ROYALE_DEVNET_CLUSTER_ID,
    ),
  });
  const mainnet: RoyaleBackendTarget = Object.freeze({
    network: "mainnet",
    apiBaseUrl: urls.mainnet,
    clusterId: exactClusterId(
      env.VITE_PACK_ROYALE_MAINNET_CLUSTER_ID,
      DEFAULT_ROYALE_MAINNET_CLUSTER_ID,
    ),
  });
  return Object.freeze({
    active:
      mainnetEnabled && requestedNetwork === "mainnet" ? mainnet : devnet,
    devnet,
    mainnet,
    mainnetEnabled,
    requestedNetwork,
  });
}

export type StockHostBackendRail = Readonly<{
  config: RoyaleBackendRailConfig;
  /** Operator-facing reason the Stock host cannot reach its mainnet API, or null. */
  configError: string | null;
}>;

/**
 * stonkpacks.xyz is mainnet only. Bind its mainnet rail directly instead of
 * running the flag-gated selector above: that selector turns mainnet OFF when
 * the generic and mainnet API origins are equal (the runbook's env shape) and
 * would fall back to Royale's mainnet API when the Stock origin is missing.
 * A missing or Royale-owned API origin, or a missing mainnet RPC, is reported
 * as a config error so the page can say so instead of looking healthy.
 */
export function resolveStockHostBackendRailConfig(
  env: RoyaleBackendBuildEnv & Readonly<{ VITE_SOLANA_MAINNET_RPC_URL?: string }>,
): StockHostBackendRail {
  const royale = resolveRoyaleBackendRailConfig(env);
  const stockApi = normalizeRoyaleBackendUrl(env.VITE_ATTN_PACKS_MAINNET_API_BASE_URL);
  const royaleOwned = stockApi === DEFAULT_ROYALE_MAINNET_API_BASE_URL
    || stockApi === DEFAULT_ROYALE_DEVNET_API_BASE_URL;
  const rpc = env.VITE_SOLANA_MAINNET_RPC_URL?.trim() ?? "";
  const configError = !stockApi
    ? "VITE_ATTN_PACKS_MAINNET_API_BASE_URL is not set to the Stock API origin"
    : royaleOwned
      ? "VITE_ATTN_PACKS_MAINNET_API_BASE_URL points at a Royale API, not the Stock API"
      : !/^https:\/\//iu.test(rpc)
        ? "VITE_SOLANA_MAINNET_RPC_URL is missing or not https"
        : null;
  const mainnet: RoyaleBackendTarget = Object.freeze({
    network: "mainnet",
    // Never a Royale default: an empty origin keeps requests on the Stock
    // host's own same-origin /api rewrites.
    apiBaseUrl: royaleOwned ? "" : stockApi,
    clusterId: DEFAULT_ROYALE_MAINNET_CLUSTER_ID,
  });
  return Object.freeze({
    config: Object.freeze({
      active: mainnet,
      devnet: royale.devnet,
      mainnet,
      mainnetEnabled: configError === null,
      requestedNetwork: "mainnet",
    }),
    configError,
  });
}

export function royaleBackendRequestUrl(
  input: string,
  config: RoyaleBackendRailConfig,
): string {
  if (!input.startsWith("/api/")) return input;
  return `${config.active.apiBaseUrl}${input}`;
}

export function evaluateRoyaleBackendGate(input: {
  activePrivyAppId: string;
  network: RoyaleBackendNetwork;
  otherTarget: RoyaleRuntimeBackendTarget;
  target: RoyaleRuntimeBackendTarget;
  readiness: RoyaleBackendReadiness | null;
  requestFailed?: boolean;
}): RoyaleBackendGate {
  const target = input.target;
  if (!target.apiBaseUrl) {
    return locked("backend_target_missing", `No ${input.network} backend URL is configured for this build.`);
  }
  if (!target.rpcUrl) {
    return locked("backend_rpc_missing", `No ${input.network} Solana RPC is configured for this build.`);
  }
  if (!input.activePrivyAppId || !target.privyAppId) {
    return locked("backend_privy_missing", `No explicit ${input.network} Privy application binding is configured.`);
  }
  if (target.privyAppId !== input.activePrivyAppId) {
    return locked("backend_privy_mismatch", `The active Privy application does not match the ${input.network} rail.`);
  }
  if (target.apiBaseUrl === input.otherTarget.apiBaseUrl || target.rpcUrl === input.otherTarget.rpcUrl) {
    return locked("backend_cross_rail_collision", "Devnet and mainnet must use distinct backend and RPC targets.");
  }
  const rpc = target.rpcUrl.toLowerCase();
  if (
    (input.network === "devnet" && rpc.includes("mainnet"))
    || (input.network === "mainnet" && rpc.includes("devnet"))
  ) {
    return locked("backend_rpc_cluster_mismatch", `The configured RPC URL contradicts the selected ${input.network} rail.`);
  }
  if (input.requestFailed) {
    return locked("backend_readiness_unavailable", `The ${input.network} backend readiness endpoint could not be verified.`);
  }
  const readiness = input.readiness;
  if (!readiness) {
    return locked("backend_readiness_pending", `Checking the ${input.network} backend authorization receipt.`);
  }
  if (
    readiness.ok !== true
    || readiness.schema !== READINESS_SCHEMA
    || readiness.enabled !== true
    || readiness.routeMounted !== true
  ) {
    return locked("backend_schema_mismatch", `The ${input.network} backend did not return the canonical mounted readiness contract.`);
  }
  if (input.network === "devnet") {
    const routedDevnet = readiness.inventoryProviderMode === "routed_devnet";
    if (!routedDevnet && readiness.inventoryProviderMode !== "slabz_devnet") {
      return locked("backend_not_devnet_mode", "The backend is not mounted on an authorized devnet inventory rail.");
    }
    if (readiness.fixtureInventory !== false) {
      return locked("backend_fixture_inventory", "Fixture inventory cannot authorize the hosted devnet frontend.");
    }
    if (readiness.providerLifecycleReady !== true) {
      return locked("backend_provider_not_ready", "The devnet provider lifecycle is not ready.");
    }
    const lifecycleAuthorized = routedDevnet
      ? readiness.releaseReady === true
        && readiness.currentTier === "T4_testnet_execution"
        && readiness.requiredTier === "T4_testnet_execution"
      : readiness.canonicalDevnetCanaryExecutionReady === true
        && readiness.requiredTier === "T4_testnet_execution";
    if (!lifecycleAuthorized) {
      return locked("backend_devnet_canary_not_authorized", "The canonical devnet lifecycle is not authorized by this backend.");
    }
    if (readiness.moneyGateOpen !== true) {
      return locked("backend_money_gate_closed", "The devnet money gate is closed.");
    }
    if (readiness.ready !== true) {
      return locked("backend_not_ready", "The devnet round engine is not ready.");
    }
    if (readiness.secretsIncluded !== false) {
      return locked("backend_secret_contract_failed", "The readiness response did not affirm the no-secret contract.");
    }
    return {
      allowed: true,
      code: "devnet_authorized",
      detail: "The configured backend has an authorized canonical devnet inventory lifecycle.",
    };
  }
  const routedProduction =
    readiness.inventoryProviderMode === "routed_production";
  if (!routedProduction && readiness.inventoryProviderMode !== "slabz_production") {
    return locked("backend_not_production_mode", "The backend is not mounted on the production inventory rail.");
  }
  if (readiness.fixtureInventory !== false) {
    return locked("backend_fixture_inventory", "Fixture inventory cannot authorize the mainnet frontend.");
  }
  if (readiness.providerLifecycleReady !== true) {
    return locked("backend_provider_not_ready", "The production provider lifecycle is not ready.");
  }
  if (
    !routedProduction
    && readiness.canonicalProductionCanaryExecutionReady !== true
  ) {
    return locked("backend_production_canary_not_authorized", "The canonical production canary is not authorized.");
  }
  if (readiness.releaseReady !== true) {
    return locked("backend_release_receipt_missing", "The backend has not retained a release-ready production receipt.");
  }
  if (
    readiness.requiredTier !== "T6_authorized_production"
    || readiness.currentTier !== "T6_authorized_production"
  ) {
    return locked("backend_tier_below_t6", "The backend has not reached T6 authorized production.");
  }
  if (readiness.moneyGateOpen !== true) {
    return locked("backend_money_gate_closed", "The production money gate is closed.");
  }
  if (readiness.ready !== true) {
    return locked("backend_not_ready", "The production round engine is not ready.");
  }
  if (readiness.secretsIncluded !== false) {
    return locked("backend_secret_contract_failed", "The readiness response did not affirm the no-secret contract.");
  }
  return {
    allowed: true,
    code: "mainnet_authorized",
    detail: "The exact T6 production readiness contract is present; the frontend may mount the production API surface.",
  };
}

function locked(
  code: Exclude<RoyaleBackendGate["code"], "devnet_authorized" | "mainnet_authorized">,
  detail: string,
): RoyaleBackendGate {
  return { allowed: false, code, detail };
}
