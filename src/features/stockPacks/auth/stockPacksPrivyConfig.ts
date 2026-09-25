export const STOCK_PACKS_TERMS_URL = "https://stonkpacks.xyz/terms";
export const STOCK_PACKS_PRIVACY_URL = "https://stonkpacks.xyz/privacy";

/** Solana wallets offered on stonkpacks.xyz, installed wallets first. */
export const STOCK_PACKS_PRIVY_WALLET_LIST = [
  "detected_solana_wallets",
  "phantom",
  "solflare",
  "backpack",
  "wallet_connect",
] as const;

/** Structural subset of Privy's client config; this module stays outside the Privy adapter boundary. */
type PrivyConfigLike = Readonly<{
  appearance?: object | undefined;
  embeddedWallets?: object | undefined;
  supportedChains?: unknown;
  defaultChain?: unknown;
}>;

/**
 * Privy client config for stonkpacks.xyz only, derived from the rail config
 * (RPC map and Solana connectors stay as built for the selected network).
 *
 * - Solana-only wallet picker with Phantom, Solflare and Backpack listed, so
 *   phone browsers without an injected wallet still see Solana wallets, and
 *   an EVM wallet can no longer be the login (it had no Solana wallet).
 * - Email logins get an embedded Solana wallet. Wallet logins keep only their
 *   own wallet: the server binds the embedded wallet first, so giving a
 *   Phantom login a second (embedded) wallet would split client and server.
 * - No EVM embedded wallet and no Robinhood Chain default on this host.
 * - Terms and privacy links shown in the login modal.
 *
 * royale.cards never calls this; its config stays exactly as built. Apply any
 * other Stock appearance (theme, logo) to `base` first: it is spread here.
 */
export function stockPacksPrivyClientConfig<T extends PrivyConfigLike>(base: T) {
  const { supportedChains: _supportedChains, defaultChain: _defaultChain, ...rest } = base;
  return {
    ...rest,
    loginMethods: ["email", "wallet"] as Array<"email" | "wallet">,
    appearance: {
      ...base.appearance,
      showWalletLoginFirst: false,
      walletChainType: "solana-only" as const,
      walletList: [...STOCK_PACKS_PRIVY_WALLET_LIST],
    },
    embeddedWallets: {
      ...base.embeddedWallets,
      solana: { createOnLogin: "users-without-wallets" as const },
      ethereum: { createOnLogin: "off" as const },
    },
    legal: {
      termsAndConditionsUrl: STOCK_PACKS_TERMS_URL,
      privacyPolicyUrl: STOCK_PACKS_PRIVACY_URL,
    },
  };
}
