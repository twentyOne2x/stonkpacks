import assert from "node:assert/strict";
import { test } from "node:test";

import {
  createPrivySolanaDevnetConfig,
  createPrivySolanaMainnetConfig,
  PRIVY_SOLANA_DEVNET_CHAIN,
  PRIVY_SOLANA_DEVNET_EXPLORER_URL,
  PRIVY_SOLANA_DEVNET_RPC_SUBSCRIPTIONS_URL,
  PRIVY_SOLANA_DEVNET_RPC_URL,
  PRIVY_SOLANA_MAINNET_CHAIN,
  PRIVY_SOLANA_MAINNET_EXPLORER_URL,
  PRIVY_ROBINHOOD_MAINNET_CHAIN_ID,
  PRIVY_ROBINHOOD_MAINNET_EXPLORER_URL,
  PRIVY_ROBINHOOD_MAINNET_RPC_URL,
  PRIVY_ROBINHOOD_TESTNET_CHAIN_ID,
  PRIVY_ROBINHOOD_TESTNET_EXPLORER_URL,
  PRIVY_ROBINHOOD_TESTNET_RPC_URL,
} from "./privySolanaDevnetConfig";

test("Privy receives one explicit Solana devnet RPC mapping", () => {
  const config = createPrivySolanaDevnetConfig();
  const rpcs = config.solana?.rpcs;

  assert.deepEqual(Object.keys(rpcs ?? {}), [PRIVY_SOLANA_DEVNET_CHAIN]);
  assert.ok(rpcs?.[PRIVY_SOLANA_DEVNET_CHAIN]?.rpc);
  assert.ok(rpcs?.[PRIVY_SOLANA_DEVNET_CHAIN]?.rpcSubscriptions);
  assert.equal(rpcs?.[PRIVY_SOLANA_DEVNET_CHAIN]?.blockExplorerUrl, PRIVY_SOLANA_DEVNET_EXPLORER_URL);
  assert.equal(rpcs?.["solana:mainnet"], undefined);
  assert.equal(rpcs?.["solana:testnet"], undefined);
});

test("hosted beta offers explicit Solana and Robinhood-chain wallets under one Privy identity", () => {
  const config = createPrivySolanaDevnetConfig();

  assert.deepEqual(config.loginMethods, ["wallet", "email"]);
  assert.deepEqual(config.appearance, {
    showWalletLoginFirst: true,
    walletChainType: "ethereum-and-solana",
  });
  assert.equal(config.externalWallets?.disableAllExternalWallets, false);
  assert.deepEqual(config.externalWallets?.walletConnect, { enabled: true });
  assert.equal(typeof config.externalWallets?.solana?.connectors?.get, "function");
  assert.equal(typeof config.externalWallets?.solana?.connectors?.onMount, "function");
  assert.equal(typeof config.externalWallets?.solana?.connectors?.onUnmount, "function");
  assert.deepEqual(config.embeddedWallets, {
    solana: { createOnLogin: "users-without-wallets" },
    ethereum: { createOnLogin: "users-without-wallets" },
  });
  assert.deepEqual(config.supportedChains?.map((chain) => chain.id), [
    PRIVY_ROBINHOOD_TESTNET_CHAIN_ID,
  ]);
  assert.equal(config.defaultChain?.id, PRIVY_ROBINHOOD_TESTNET_CHAIN_ID);
  assert.deepEqual(
    config.defaultChain?.rpcUrls.default.http,
    [PRIVY_ROBINHOOD_TESTNET_RPC_URL],
  );
  assert.equal(
    config.defaultChain?.blockExplorers?.default.url,
    PRIVY_ROBINHOOD_TESTNET_EXPLORER_URL,
  );
});

test("browser RPC mapping is public devnet-only and contains no credential material", () => {
  const rpcUrl = new URL(PRIVY_SOLANA_DEVNET_RPC_URL);
  const subscriptionsUrl = new URL(PRIVY_SOLANA_DEVNET_RPC_SUBSCRIPTIONS_URL);
  const explorerUrl = new URL(PRIVY_SOLANA_DEVNET_EXPLORER_URL);

  assert.equal(rpcUrl.protocol, "https:");
  assert.equal(rpcUrl.hostname, "api.devnet.solana.com");
  assert.equal(rpcUrl.username, "");
  assert.equal(rpcUrl.password, "");
  assert.equal(rpcUrl.search, "");
  assert.equal(rpcUrl.hash, "");

  assert.equal(subscriptionsUrl.protocol, "wss:");
  assert.equal(subscriptionsUrl.hostname, "api.devnet.solana.com");
  assert.equal(subscriptionsUrl.username, "");
  assert.equal(subscriptionsUrl.password, "");
  assert.equal(subscriptionsUrl.search, "");
  assert.equal(subscriptionsUrl.hash, "");

  assert.equal(explorerUrl.hostname, "explorer.solana.com");
  assert.equal(explorerUrl.searchParams.get("cluster"), "devnet");
});

test("mainnet config uses only the selected HTTPS RPC and derives its WSS transport", () => {
  const config = createPrivySolanaMainnetConfig(
    "https://rpc.example.invalid/solana-mainnet",
  );
  const rpcs = config.solana?.rpcs;
  assert.deepEqual(Object.keys(rpcs ?? {}), [PRIVY_SOLANA_MAINNET_CHAIN]);
  assert.ok(rpcs?.[PRIVY_SOLANA_MAINNET_CHAIN]?.rpc);
  assert.ok(rpcs?.[PRIVY_SOLANA_MAINNET_CHAIN]?.rpcSubscriptions);
  assert.equal(
    rpcs?.[PRIVY_SOLANA_MAINNET_CHAIN]?.blockExplorerUrl,
    PRIVY_SOLANA_MAINNET_EXPLORER_URL,
  );
  assert.equal(rpcs?.[PRIVY_SOLANA_DEVNET_CHAIN], undefined);
  assert.deepEqual(config.loginMethods, ["wallet", "email"]);
  assert.equal(config.externalWallets?.disableAllExternalWallets, false);
  assert.deepEqual(config.supportedChains?.map((chain) => chain.id), [
    PRIVY_ROBINHOOD_MAINNET_CHAIN_ID,
  ]);
  assert.equal(config.defaultChain?.id, PRIVY_ROBINHOOD_MAINNET_CHAIN_ID);
  assert.deepEqual(
    config.defaultChain?.rpcUrls.default.http,
    [PRIVY_ROBINHOOD_MAINNET_RPC_URL],
  );
  assert.equal(
    config.defaultChain?.blockExplorers?.default.url,
    PRIVY_ROBINHOOD_MAINNET_EXPLORER_URL,
  );
});

test("official Robinhood Chain mappings stay HTTPS, credential-free, and chain-specific", () => {
  for (const [rpc, explorer] of [
    [PRIVY_ROBINHOOD_MAINNET_RPC_URL, PRIVY_ROBINHOOD_MAINNET_EXPLORER_URL],
    [PRIVY_ROBINHOOD_TESTNET_RPC_URL, PRIVY_ROBINHOOD_TESTNET_EXPLORER_URL],
  ] as const) {
    for (const raw of [rpc, explorer]) {
      const url = new URL(raw);
      assert.equal(url.protocol, "https:");
      assert.equal(url.username, "");
      assert.equal(url.password, "");
      assert.equal(url.search, "");
      assert.equal(url.hash, "");
    }
  }
  assert.notEqual(PRIVY_ROBINHOOD_MAINNET_CHAIN_ID, PRIVY_ROBINHOOD_TESTNET_CHAIN_ID);
});

test("mainnet config fails closed without a valid HTTPS RPC", () => {
  assert.throws(
    () => createPrivySolanaMainnetConfig(""),
    /mainnet_rpc_invalid/u,
  );
  assert.throws(
    () => createPrivySolanaMainnetConfig("http://rpc.example.invalid"),
    /must_use_https/u,
  );
});
