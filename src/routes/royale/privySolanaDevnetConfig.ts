import type { PrivyClientConfig } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";
import { createSolanaRpc, createSolanaRpcSubscriptions } from "@solana/kit";

export const PRIVY_SOLANA_DEVNET_CHAIN = "solana:devnet" as const;
export const PRIVY_SOLANA_MAINNET_CHAIN = "solana:mainnet" as const;
export const PRIVY_SOLANA_DEVNET_RPC_URL = "https://api.devnet.solana.com";
export const PRIVY_SOLANA_DEVNET_RPC_SUBSCRIPTIONS_URL = "wss://api.devnet.solana.com";
export const PRIVY_SOLANA_DEVNET_EXPLORER_URL = "https://explorer.solana.com?cluster=devnet";
export const PRIVY_SOLANA_MAINNET_EXPLORER_URL = "https://explorer.solana.com";
export const PRIVY_ROBINHOOD_MAINNET_CHAIN_ID = 4_663 as const;
export const PRIVY_ROBINHOOD_TESTNET_CHAIN_ID = 46_630 as const;
export const PRIVY_ROBINHOOD_MAINNET_RPC_URL = "https://rpc.mainnet.chain.robinhood.com";
export const PRIVY_ROBINHOOD_TESTNET_RPC_URL = "https://rpc.testnet.chain.robinhood.com";
export const PRIVY_ROBINHOOD_MAINNET_EXPLORER_URL = "https://robinhoodchain.blockscout.com";
export const PRIVY_ROBINHOOD_TESTNET_EXPLORER_URL = "https://explorer.testnet.chain.robinhood.com";

const PRIVY_SOLANA_WALLET_CONNECTORS = toSolanaWalletConnectors({ shouldAutoConnect: true });

type PrivyEvmChain = NonNullable<PrivyClientConfig["supportedChains"]>[number];

function robinhoodChain(testnet: boolean): PrivyEvmChain {
  return {
    id: testnet ? PRIVY_ROBINHOOD_TESTNET_CHAIN_ID : PRIVY_ROBINHOOD_MAINNET_CHAIN_ID,
    name: testnet ? "Robinhood Chain Testnet" : "Robinhood Chain",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: {
        http: [testnet ? PRIVY_ROBINHOOD_TESTNET_RPC_URL : PRIVY_ROBINHOOD_MAINNET_RPC_URL],
      },
    },
    blockExplorers: {
      default: {
        name: testnet ? "Robinhood Chain Testnet Explorer" : "Robinhood Chain Explorer",
        url: testnet
          ? PRIVY_ROBINHOOD_TESTNET_EXPLORER_URL
          : PRIVY_ROBINHOOD_MAINNET_EXPLORER_URL,
      },
    },
    testnet,
  };
}

export const PRIVY_ROBINHOOD_MAINNET_CHAIN = robinhoodChain(false);
export const PRIVY_ROBINHOOD_TESTNET_CHAIN = robinhoodChain(true);

function commonPrivySolanaConfig(robinhood: PrivyEvmChain): Pick<
  PrivyClientConfig,
  "appearance" | "defaultChain" | "embeddedWallets" | "externalWallets" | "loginMethods" | "supportedChains"
> {
  return {
    // Wallet-standard supplies Backpack, Phantom, Solflare, and other installed
    // Solana wallets through Privy's wallet-first picker. Email creates an
    // embedded wallet for players who prefer an app-managed account.
    loginMethods: ["wallet", "email"],
    appearance: {
      showWalletLoginFirst: true,
      walletChainType: "ethereum-and-solana",
    },
    externalWallets: {
      disableAllExternalWallets: false,
      walletConnect: { enabled: true },
      // Privy's wallet catalog can render Solana wallet names without this
      // adapter, but it cannot bind a selected entry to the locally registered
      // Wallet Standard provider. Mount the supported connector registry so an
      // installed Backpack is selected by name even when Brave owns the legacy
      // generic window.solana injection.
      solana: {
        connectors: PRIVY_SOLANA_WALLET_CONNECTORS,
      },
    },
    embeddedWallets: {
      solana: { createOnLogin: "users-without-wallets" },
      ethereum: { createOnLogin: "users-without-wallets" },
    },
    supportedChains: [robinhood],
    defaultChain: robinhood,
  };
}

/**
 * Privy's Solana signing hooks do not infer a devnet RPC from the transaction
 * chain. Give them an explicit public-only mapping so hosted beta signatures
 * can be simulated, broadcast, and confirmed without exposing a private RPC
 * credential in the browser bundle.
 */
export function createPrivySolanaDevnetConfig(): PrivyClientConfig {
  return {
    ...commonPrivySolanaConfig(PRIVY_ROBINHOOD_TESTNET_CHAIN),
    solana: {
      rpcs: {
        [PRIVY_SOLANA_DEVNET_CHAIN]: {
          rpc: createSolanaRpc(PRIVY_SOLANA_DEVNET_RPC_URL),
          rpcSubscriptions: createSolanaRpcSubscriptions(PRIVY_SOLANA_DEVNET_RPC_SUBSCRIPTIONS_URL),
          blockExplorerUrl: PRIVY_SOLANA_DEVNET_EXPLORER_URL,
        },
      },
    },
  };
}

/**
 * Mainnet is intentionally config-driven: there is no public-RPC fallback on
 * the money rail. The selected rail therefore fails closed before Privy mounts
 * when VITE_SOLANA_MAINNET_RPC_URL is absent or is not an HTTPS endpoint.
 */
export function createPrivySolanaMainnetConfig(
  rpcUrl: string,
): PrivyClientConfig {
  const normalizedRpcUrl = rpcUrl.trim();
  let parsed: URL;
  try {
    parsed = new URL(normalizedRpcUrl);
  } catch {
    throw new Error("privy_solana_mainnet_rpc_invalid");
  }
  if (parsed.protocol !== "https:") {
    throw new Error("privy_solana_mainnet_rpc_must_use_https");
  }
  parsed.protocol = "wss:";

  return {
    ...commonPrivySolanaConfig(PRIVY_ROBINHOOD_MAINNET_CHAIN),
    solana: {
      rpcs: {
        [PRIVY_SOLANA_MAINNET_CHAIN]: {
          rpc: createSolanaRpc(normalizedRpcUrl),
          rpcSubscriptions: createSolanaRpcSubscriptions(parsed.toString()),
          blockExplorerUrl: PRIVY_SOLANA_MAINNET_EXPLORER_URL,
        },
      },
    },
  };
}

export const PRIVY_SOLANA_DEVNET_CONFIG = createPrivySolanaDevnetConfig();
