import assert from "node:assert/strict";
import { test } from "node:test";

import {
  DEFAULT_ROYALE_DEVNET_API_BASE_URL,
  DEFAULT_ROYALE_DEVNET_CLUSTER_ID,
  DEFAULT_ROYALE_MAINNET_API_BASE_URL,
  DEFAULT_ROYALE_MAINNET_CLUSTER_ID,
  evaluateRoyaleBackendGate,
  normalizeRoyaleBackendNetwork,
  normalizeRoyaleBackendUrl,
  resolveRoyaleBackendApiUrls,
  resolveRoyaleBackendRailConfig,
  resolveRoyaleRuntimeBackendTarget,
  resolveStockHostBackendRailConfig,
  royaleBackendRequestUrl,
  type RoyaleBackendReadiness,
  type RoyaleRuntimeBackendTarget,
} from "./royaleBackendRail";

test("backend network parsing defaults to devnet", () => {
  assert.equal(normalizeRoyaleBackendNetwork(undefined), "devnet");
  assert.equal(normalizeRoyaleBackendNetwork("DEVNET"), "devnet");
  assert.equal(normalizeRoyaleBackendNetwork("mainnet"), "mainnet");
  assert.equal(normalizeRoyaleBackendNetwork("anything-else"), "devnet");
  assert.equal(
    normalizeRoyaleBackendUrl(" https://devnet.example.test/// "),
    "https://devnet.example.test",
  );
});

test("public API origins resolve with exact hosted defaults", () => {
  assert.deepEqual(resolveRoyaleBackendApiUrls({}), {
    devnet: DEFAULT_ROYALE_DEVNET_API_BASE_URL,
    mainnet: DEFAULT_ROYALE_MAINNET_API_BASE_URL,
  });
  assert.deepEqual(
    resolveRoyaleBackendApiUrls({
      VITE_ATTN_PACKS_API_BASE_URL: " https://generic.example.test/ ",
      VITE_ATTN_PACKS_DEVNET_API_BASE_URL:
        " https://devnet.example.test/// ",
      VITE_ATTN_PACKS_MAINNET_API_BASE_URL:
        " https://mainnet.example.test/// ",
    }),
    {
      devnet: "https://devnet.example.test",
      mainnet: "https://mainnet.example.test",
    },
  );
});

test("mainnet is fully off by default and partial flags cannot select it", () => {
  const defaults = resolveRoyaleBackendRailConfig({});
  assert.equal(defaults.mainnetEnabled, false);
  assert.equal(defaults.requestedNetwork, "devnet");
  assert.equal(defaults.active.network, "devnet");
  assert.equal(defaults.active.apiBaseUrl, DEFAULT_ROYALE_DEVNET_API_BASE_URL);
  assert.equal(defaults.devnet.clusterId, DEFAULT_ROYALE_DEVNET_CLUSTER_ID);
  assert.equal(defaults.mainnet.clusterId, DEFAULT_ROYALE_MAINNET_CLUSTER_ID);

  assert.equal(
    resolveRoyaleBackendRailConfig({
      VITE_PACK_ROYALE_BACKEND_NETWORK: "mainnet",
    }).active.network,
    "devnet",
  );
  assert.equal(
    resolveRoyaleBackendRailConfig({
      VITE_PACK_ROYALE_MAINNET_ENABLED: "true",
    }).active.network,
    "devnet",
  );
  assert.equal(
    resolveRoyaleBackendRailConfig({
      VITE_PACK_ROYALE_BACKEND_NETWORK: "mainnet",
      VITE_PACK_ROYALE_MAINNET_ENABLED: "1",
    }).active.network,
    "devnet",
  );
});

test("mainnet requires both explicit flags and consumes its dedicated URL", () => {
  const config = resolveRoyaleBackendRailConfig({
    VITE_ATTN_PACKS_DEVNET_API_BASE_URL: "https://devnet.example.test",
    VITE_ATTN_PACKS_MAINNET_API_BASE_URL: "https://mainnet.example.test",
    VITE_PACK_ROYALE_BACKEND_NETWORK: "mainnet",
    VITE_PACK_ROYALE_MAINNET_ENABLED: "true",
    VITE_PACK_ROYALE_DEVNET_CLUSTER_ID: "solana:devnet",
    VITE_PACK_ROYALE_MAINNET_CLUSTER_ID: "solana:mainnet",
  });
  assert.equal(config.mainnetEnabled, true);
  assert.equal(config.active.network, "mainnet");
  assert.equal(config.active.apiBaseUrl, "https://mainnet.example.test");
  assert.equal(config.active.clusterId, "solana:mainnet");
  assert.equal(
    royaleBackendRequestUrl("/api/pack-royale/round", config),
    "https://mainnet.example.test/api/pack-royale/round",
  );
  assert.equal(
    royaleBackendRequestUrl("https://images.example.test/card.png", config),
    "https://images.example.test/card.png",
  );
});

test("wrong cluster ids fail back to the exact network domains", () => {
  const config = resolveRoyaleBackendRailConfig({
    VITE_PACK_ROYALE_BACKEND_NETWORK: "mainnet",
    VITE_PACK_ROYALE_MAINNET_ENABLED: "true",
    VITE_PACK_ROYALE_DEVNET_CLUSTER_ID: "solana:mainnet",
    VITE_PACK_ROYALE_MAINNET_CLUSTER_ID: "solana:devnet",
  });
  assert.equal(config.devnet.clusterId, "solana:devnet");
  assert.equal(config.mainnet.clusterId, "solana:mainnet");
  assert.equal(config.mainnetEnabled, false);
  assert.equal(config.active.network, "devnet");
});

test("runtime network selection resolves the complete rail and fails closed", () => {
  const devnet = {
    network: "devnet" as const,
    apiBaseUrl: "https://devnet.example.test",
    privyAppId: "devnet-app",
    rpcUrl: "https://devnet-rpc.example.test",
  };
  const mainnet = {
    network: "mainnet" as const,
    apiBaseUrl: "https://mainnet.example.test",
    privyAppId: "mainnet-app",
    rpcUrl: "https://mainnet-rpc.example.test",
  };

  assert.equal(resolveRoyaleRuntimeBackendTarget({
    devnet,
    mainnet,
    mainnetEnabled: true,
    requestedNetwork: "mainnet",
  }), mainnet);
  assert.equal(resolveRoyaleRuntimeBackendTarget({
    devnet,
    mainnet,
    mainnetEnabled: false,
    requestedNetwork: "mainnet",
  }), devnet);
});

const DEVNET: RoyaleRuntimeBackendTarget = Object.freeze({
  network: "devnet",
  apiBaseUrl: "https://devnet-api.example.test",
  privyAppId: "privy-app",
  rpcUrl: "https://devnet-rpc.example.test",
});
const MAINNET: RoyaleRuntimeBackendTarget = Object.freeze({
  network: "mainnet",
  apiBaseUrl: "https://mainnet-api.example.test",
  privyAppId: "privy-app",
  rpcUrl: "https://mainnet-rpc.example.test",
});

test("routed devnet is admitted only at the full T4 release contract", () => {
  const readiness: RoyaleBackendReadiness = {
    ...baseReadiness(),
    inventoryProviderMode: "routed_devnet",
    canonicalDevnetCanaryExecutionReady: false,
    releaseReady: true,
    requiredTier: "T4_testnet_execution",
    currentTier: "T4_testnet_execution",
  };
  assert.deepEqual(evaluateRoyaleBackendGate({
    activePrivyAppId: "privy-app",
    network: "devnet",
    target: DEVNET,
    otherTarget: MAINNET,
    readiness,
  }).code, "devnet_authorized");
  assert.deepEqual(evaluateRoyaleBackendGate({
    activePrivyAppId: "privy-app",
    network: "devnet",
    target: DEVNET,
    otherTarget: MAINNET,
    readiness: { ...readiness, releaseReady: false },
  }).code, "backend_devnet_canary_not_authorized");
});

test("routed production requires full T6 without borrowing the direct Slabz canary flag", () => {
  const readiness: RoyaleBackendReadiness = {
    ...baseReadiness(),
    inventoryProviderMode: "routed_production",
    canonicalProductionCanaryExecutionReady: false,
    releaseReady: true,
    requiredTier: "T6_authorized_production",
    currentTier: "T6_authorized_production",
  };
  assert.deepEqual(evaluateRoyaleBackendGate({
    activePrivyAppId: "privy-app",
    network: "mainnet",
    target: MAINNET,
    otherTarget: DEVNET,
    readiness,
  }).code, "mainnet_authorized");
});

function baseReadiness(): RoyaleBackendReadiness {
  return {
    ok: true,
    schema: "attn.packRoyale.usdcRoundEngineReadiness.v1",
    enabled: true,
    routeMounted: true,
    fixtureInventory: false,
    providerLifecycleReady: true,
    ready: true,
    moneyGateOpen: true,
    secretsIncluded: false,
  };
}

// The Stock launch runbook's env shape: generic and mainnet origins both set to
// the dedicated Stock API. The shared selector turns mainnet off for it.
const STOCK_RUNBOOK_ENV = {
  VITE_ATTN_PACKS_API_BASE_URL: "https://stonkpacks-api.example.test",
  VITE_ATTN_PACKS_MAINNET_API_BASE_URL: "https://stonkpacks-api.example.test",
  VITE_PACK_ROYALE_BACKEND_NETWORK: "mainnet",
  VITE_PACK_ROYALE_MAINNET_ENABLED: "true",
  VITE_PACK_ROYALE_MAINNET_CLUSTER_ID: "solana:mainnet",
  VITE_SOLANA_MAINNET_RPC_URL: "https://rpc.example.test",
};

test("the Stock host binds mainnet for the runbook env shape the shared selector would downgrade", () => {
  assert.equal(resolveRoyaleBackendRailConfig(STOCK_RUNBOOK_ENV).active.network, "devnet",
    "control: equal generic and mainnet origins keep mainnet off on other hosts");
  const { config, configError } = resolveStockHostBackendRailConfig(STOCK_RUNBOOK_ENV);
  assert.equal(configError, null);
  assert.equal(config.mainnetEnabled, true);
  assert.equal(config.requestedNetwork, "mainnet");
  assert.equal(config.active.network, "mainnet");
  assert.equal(config.active.clusterId, DEFAULT_ROYALE_MAINNET_CLUSTER_ID);
  assert.equal(config.active.apiBaseUrl, "https://stonkpacks-api.example.test");
  assert.equal(royaleBackendRequestUrl("/api/pack-royale/stock-packs/session", config),
    "https://stonkpacks-api.example.test/api/pack-royale/stock-packs/session");
  // Flags alone never matter on the Stock host: it is mainnet only.
  const { config: noFlags } = resolveStockHostBackendRailConfig({
    VITE_ATTN_PACKS_MAINNET_API_BASE_URL: "https://stonkpacks-api.example.test",
    VITE_SOLANA_MAINNET_RPC_URL: "https://rpc.example.test",
  });
  assert.equal(noFlags.active.network, "mainnet");
});

test("the Stock host never falls back to a Royale API and reports config errors", () => {
  const missing = resolveStockHostBackendRailConfig({ VITE_SOLANA_MAINNET_RPC_URL: "https://rpc.example.test" });
  assert.match(missing.configError ?? "", /VITE_ATTN_PACKS_MAINNET_API_BASE_URL is not set/);
  assert.equal(missing.config.active.network, "mainnet");
  assert.equal(missing.config.active.apiBaseUrl, "", "same-origin, never DEFAULT_ROYALE_MAINNET_API_BASE_URL");
  assert.equal(missing.config.mainnetEnabled, false);
  for (const royale of [DEFAULT_ROYALE_MAINNET_API_BASE_URL, DEFAULT_ROYALE_DEVNET_API_BASE_URL]) {
    const owned = resolveStockHostBackendRailConfig({ VITE_ATTN_PACKS_MAINNET_API_BASE_URL: royale,
      VITE_SOLANA_MAINNET_RPC_URL: "https://rpc.example.test" });
    assert.match(owned.configError ?? "", /Royale API/);
    assert.equal(owned.config.active.apiBaseUrl, "");
  }
  for (const rpc of [undefined, "", "http://rpc.example.test"]) {
    const noRpc = resolveStockHostBackendRailConfig({
      VITE_ATTN_PACKS_MAINNET_API_BASE_URL: "https://stonkpacks-api.example.test",
      ...(rpc === undefined ? {} : { VITE_SOLANA_MAINNET_RPC_URL: rpc }),
    });
    assert.match(noRpc.configError ?? "", /VITE_SOLANA_MAINNET_RPC_URL/);
  }
});
