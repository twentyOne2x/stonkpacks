import {
  createDefaultAuthorizationCache,
  createDefaultChainSelector,
  createDefaultWalletNotFoundHandler,
  registerMwa,
} from "@solana-mobile/wallet-standard-mobile";

const REGISTRATION_KEY = "__attnPacksMwaRegistered";

type MobileWalletHost = typeof globalThis & {
  [REGISTRATION_KEY]?: boolean;
  location?: Location;
};

type RegisterMwa = typeof registerMwa;

export const ATTN_MWA_CHAINS = Object.freeze([
  "solana:devnet",
  "solana:mainnet",
] as const);

export function attnMobileWalletIdentity(origin: string) {
  const normalizedOrigin = new URL(origin).origin;
  return Object.freeze({
    name: "attn Packs",
    uri: normalizedOrigin,
    icon: "royale-pwa-192.png",
  });
}

/**
 * Registers Solana Mobile's Wallet Standard adapter before the player shell
 * inspects available wallets. Unsupported browsers remain unchanged; the
 * adapter itself owns the supported-environment check.
 */
export function registerAttnMobileWalletAdapter(
  host: MobileWalletHost = globalThis as MobileWalletHost,
  register: RegisterMwa = registerMwa,
): boolean {
  if (host[REGISTRATION_KEY] || !host.location) return false;

  register({
    appIdentity: attnMobileWalletIdentity(host.location.origin),
    authorizationCache: createDefaultAuthorizationCache(),
    chains: ATTN_MWA_CHAINS,
    chainSelector: createDefaultChainSelector(),
    onWalletNotFound: createDefaultWalletNotFoundHandler(),
  });
  host[REGISTRATION_KEY] = true;
  return true;
}
