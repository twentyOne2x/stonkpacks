// Two-tier account truth for Pack Royale.
//
// The app already ships a Privy hosted-auth preview layer (see main.tsx
// HostedAuthPreviewProvider / useHostedAuthPreview). The royale surface consumes
// it through this structural contract so it does not depend on main.tsx
// internals. Auth has two honest tiers:
//   - Privy-backed account when VITE_ENABLE_PRIVY_AUTH=true + VITE_PRIVY_APP_ID
//     is configured and a user completes login;
//   - a clearly-labelled local demo account fallback otherwise, surfacing the
//     exact env blocker.
//
// The USDC ledger itself is ALWAYS a local demo ledger at this tier — even when
// Privy auth is live, deposits/payouts/custody/settlement are not claimed. Every
// money action therefore carries an explicit demo-vs-Privy backing label.

import type { RoyaleSignerCapability } from "./royaleOnchainDeposit";
/** Card sell-back is not part of the STONKPACKS repository; the field stays for shape compatibility. */
type RoyaleSellBackSignCapability = unknown;

/** Structural subset of main.tsx HostedAuthPreviewState that royale consumes. */
export type RoyaleHostedAuth = {
  status: "blocked_missing_public_config" | "sdk_initializing" | "ready_for_login" | "authenticated" | "sdk_error";
  currentTier: string;
  enabledByEnv: boolean;
  publicAppIdConfigured: boolean;
  clientIdConfigured: boolean;
  ready: boolean;
  authenticated: boolean;
  userId: string | null;
  /**
   * Embedded/linked Solana wallet address extracted from the Privy user, when an
   * authenticated session exposes one. Optional and null-safe: it is absent or
   * null in every state except a real (or DEV-proof) authenticated session that
   * actually carries a Solana wallet. This is the seam that lets the prepared
   * on-chain deposit use the REAL Privy wallet instead of a synthetic placeholder.
   */
  walletAddress?: string | null;
  /** Verified-session EVM wallet selected only for Robinhood Chain/Pons flows. */
  evmWalletAddress?: string | null;
  /**
   * Sign+send capability of the real Privy app shell, when one is wired. The
   * current hosted-auth bridge supplies an `available: false` capability naming
   * the exact missing method (@privy-io/react-auth/solana useSignAndSendTransaction
   * + embedded Solana wallets), so an authenticated session over a configured
   * devnet target reaches `signer_ready` honestly rather than claiming a signed
   * broadcast. Optional/null-safe: absent in every non-Privy state.
   */
  signerCapability?: RoyaleSignerCapability | null;
  /** Privy sign-only bridge for a server-authored card-return transaction.
   * Unlike signerCapability, this never broadcasts from the browser: the
   * server co-signs, submits, and returns the terminal sell-back receipt. */
  sellBackSignCapability?: RoyaleSellBackSignCapability | null;
  /** Privy-owned raw transaction bridge; no key material crosses this seam. */
  signDevnetTransaction?: (
    transaction: Uint8Array,
  ) => Promise<{ signature: string }>;
  /** User-clicked sign-and-send bridge for the currently mounted Solana rail. */
  signSolanaTransaction?: (
    transaction: Uint8Array,
  ) => Promise<{ signature: string }>;
  /** Privy-owned sign-only bridge for a server-authored Solana transaction.
   * The browser returns signed bytes to the originating feature so its backend
   * can re-verify policy and perform the separately authorized broadcast. */
  signSolanaTransactionOnly?: (
    transaction: Uint8Array,
  ) => Promise<{ signedTransaction: Uint8Array }>;
  /** Exact app and unified-wallet eligibility for Privy devnet sponsorship. */
  devnetTransactionSponsorship?: boolean;
  /**
   * Returns the current Privy access token for server-authoritative Pack Royale
   * actions. The caller must attach it transiently as an Authorization bearer
   * token and never store or render the raw token.
   */
  getAccessToken?: () => Promise<string | null>;
  /** Current verified Privy identity token; callers attach it transiently. */
  getIdentityToken?: () => Promise<string | null>;
  loginAvailable: boolean;
  logoutAvailable: boolean;
  missingForHostedPreview: string[];
  strongestClaimAllowed: string;
  login?: () => void;
  logout?: () => void;
  /** Stock host only: opens Privy's link-wallet modal limited to Solana wallets for an
   * authenticated user whose login carries no Solana wallet. */
  linkSolanaWallet?: () => void;
  /** Stock host only: opens Privy's funding modal for the user's own Solana wallet
   * (USDC). Privy and its onramp partner run the flow; no attn money moves. */
  fundSolanaWallet?: (input: Readonly<{ address: string; amountUsdc?: string }>) => Promise<void>;
  /** Opens Privy's EVM-only connector; configured default network is Robinhood Chain. */
  connectRobinhoodWalletAvailable?: boolean;
  connectRobinhoodWallet?: () => Promise<void>;
  /**
   * "Connect X" portrait upgrade (owner ask 2026-07-11) — see
   * royaleXProfile.ts. True once the Privy SDK is ready (regardless of
   * authenticated state: connectX itself decides whether to route to a fresh
   * Twitter login or to link Twitter onto the existing session). Optional so
   * every existing RoyaleHostedAuth literal across the codebase (dev-proof
   * seams, test fixtures) stays valid unchanged — absent reads as false/null.
   */
  connectXAvailable?: boolean;
  connectX?: () => void;
  /** Honest message from the last failed connect attempt, or null/absent.
   *  Always CONNECT_X_UNAVAILABLE_MESSAGE (royaleXProfile.ts) — never a raw
   *  Privy error code, never dev-caveat wording. */
  xConnectError?: string | null;
};

/**
 * Safely extract an embedded or linked Solana wallet address from a Privy `user`
 * object without depending on the Privy SDK types. Privy exposes wallets in two
 * shapes: the primary embedded `user.wallet` (`{ address, chainType }`) and the
 * `user.linkedAccounts` array (entries of `{ type: "wallet", chainType, address }`).
 * Only a `chainType === "solana"` wallet is returned — an Ethereum address must
 * never be handed to a Solana SPL transfer. Fails CLOSED to null for any other
 * shape (missing user, missing wallet, non-solana chain, blank address).
 */
export function extractPrivySolanaWalletAddress(user: unknown): string | null {
  if (!user || typeof user !== "object") return null;
  const record = user as Record<string, unknown>;

  // 1. Primary embedded wallet.
  const fromEmbedded = readSolanaWalletAddress(record.wallet);
  if (fromEmbedded) return fromEmbedded;

  // 2. First Solana wallet among the linked accounts.
  const linked = record.linkedAccounts;
  if (Array.isArray(linked)) {
    for (const account of linked) {
      const address = readSolanaWalletAddress(account);
      if (address) return address;
    }
  }
  return null;
}

/**
 * Select an EVM address for Robinhood Chain without ever treating it as a
 * Solana wallet or a generic signer. The address is canonicalized to lower
 * case so later owner-binding comparisons cannot depend on checksum casing.
 */
export function extractPrivyEvmWalletAddress(user: unknown): string | null {
  if (!user || typeof user !== "object") return null;
  const record = user as Record<string, unknown>;
  const fromEmbedded = readEvmWalletAddress(record.wallet);
  if (fromEmbedded) return fromEmbedded;
  const linked = record.linkedAccounts;
  if (!Array.isArray(linked)) return null;
  for (const account of linked) {
    const address = readEvmWalletAddress(account);
    if (address) return address;
  }
  return null;
}

/** Fail-closed unified-wallet check used before enabling Privy sponsorship. */
export function isPrivyUnifiedSolanaWallet(
  user: unknown,
  walletAddress: string | null,
): boolean {
  if (!user || typeof user !== "object" || !walletAddress) return false;
  const record = user as Record<string, unknown>;
  const candidates = [
    record.wallet,
    ...(Array.isArray(record.linkedAccounts) ? record.linkedAccounts : []),
  ];
  return candidates.some((candidate) => {
    if (!candidate || typeof candidate !== "object") return false;
    const wallet = candidate as Record<string, unknown>;
    const address = typeof wallet.address === "string" ? wallet.address.trim() : "";
    const chainType = wallet.chainType ?? wallet.chain_type;
    const walletClientType = wallet.walletClientType ?? wallet.wallet_client_type;
    const recoveryMethod = wallet.recoveryMethod ?? wallet.recovery_method;
    return address === walletAddress
      && chainType === "solana"
      && walletClientType === "privy"
      && typeof wallet.id === "string"
      && wallet.id.length > 0
      && recoveryMethod === "privy-v2";
  });
}

function readSolanaWalletAddress(candidate: unknown): string | null {
  if (!candidate || typeof candidate !== "object") return null;
  const record = candidate as Record<string, unknown>;
  // Linked accounts carry a `type` discriminator; the embedded wallet does not.
  // Reject any explicitly non-wallet linked account.
  if (typeof record.type === "string" && record.type !== "wallet") return null;
  // Only a Solana wallet is usable for the SPL transfer; everything else fails closed.
  if (record.chainType !== "solana") return null;
  const address = typeof record.address === "string" ? record.address.trim() : "";
  return address.length > 0 ? address : null;
}

function readEvmWalletAddress(candidate: unknown): string | null {
  if (!candidate || typeof candidate !== "object") return null;
  const record = candidate as Record<string, unknown>;
  if (typeof record.type === "string" && record.type !== "wallet" && record.type !== "smart_wallet") return null;
  if ((record.chainType ?? record.chain_type) !== "ethereum") return null;
  const address = typeof record.address === "string" ? record.address.trim() : "";
  return /^0x[0-9a-fA-F]{40}$/u.test(address) ? address.toLowerCase() : null;
}

/**
 * Injected Solana wallet detection (mobile auth simplification, owner ask
 * 2026-07-12: "ideally auto-detect the wallet if possible"). Wallet in-app
 * browsers (Phantom/Solflare/Backpack on mobile) inject a provider onto
 * window before the app boots. This detection only informs the LABEL of the
 * mobile login button ("Connect wallet" vs "Log in") — the actual connect
 * always routes through the existing auth plumbing (Privy's modal does its
 * own injected-wallet detection; no new wallet-adapter infrastructure).
 * Pure function of a window-like host, fails closed to not-detected.
 */
export type InjectedSolanaWalletDetection = {
  detected: boolean;
  providerName: "Phantom" | "Solflare" | "Backpack" | "Solana wallet" | null;
};

export function detectInjectedSolanaWallet(host: unknown = globalThis): InjectedSolanaWalletDetection {
  const none: InjectedSolanaWalletDetection = { detected: false, providerName: null };
  if (!host || typeof host !== "object") return none;
  const w = host as Record<string, unknown>;

  // Phantom's canonical injection point (window.phantom.solana).
  const phantom = w.phantom && typeof w.phantom === "object" ? (w.phantom as Record<string, unknown>).solana : null;
  if (isInjectedWalletProvider(phantom)) return { detected: true, providerName: "Phantom" };
  if (isInjectedWalletProvider(w.solflare)) return { detected: true, providerName: "Solflare" };
  if (isInjectedWalletProvider(w.backpack)) return { detected: true, providerName: "Backpack" };

  // Generic window.solana (Phantom legacy + most in-app wallet browsers).
  if (isInjectedWalletProvider(w.solana)) {
    const solana = w.solana as Record<string, unknown>;
    return { detected: true, providerName: solana.isPhantom === true ? "Phantom" : "Solana wallet" };
  }
  return none;
}

function isInjectedWalletProvider(candidate: unknown): boolean {
  if (!candidate || typeof candidate !== "object") return false;
  const record = candidate as Record<string, unknown>;
  // Every real injected Solana provider exposes connect(); the named flags
  // cover providers that gate connect behind a proxy. Anything else — including
  // an EVM-only window.ethereum-style object — fails closed.
  return (
    typeof record.connect === "function" ||
    record.isPhantom === true ||
    record.isSolflare === true ||
    record.isBackpack === true
  );
}

export type RoyaleAuthTier =
  | "privy_authenticated"
  | "privy_ready_for_login"
  | "privy_initializing"
  | "privy_error"
  | "local_demo_fallback";

export type RoyaleAuthModel = {
  /** True when Privy is enabled by env AND a public app id is configured. */
  privyConfigured: boolean;
  tier: RoyaleAuthTier;
  /** Whether the connect action should route to Privy or the local demo toggle. */
  connectVia: "privy" | "local_demo";
  /** Is a Privy login action currently available to click? */
  privyLoginAvailable: boolean;
  privyLogoutAvailable: boolean;
  privyUserId: string | null;
  /**
   * Solana wallet address from the authenticated Privy session, or null. Only
   * populated when a Privy login is actually active AND the user carries a Solana
   * wallet — it is null in every demo/awaiting/error state, so a deposit can never
   * silently use a stale or non-authenticated wallet.
   */
  privyWalletAddress: string | null;
  /** Exact env blockers when Privy is not configured (empty otherwise). */
  envBlockers: string[];
  /** Honest one-line label for the auth backing. */
  authLabel: string;
  /** Honest label for the money ledger (always local demo at this tier). */
  ledgerLabel: string;
  /** Strongest honest capability claim for the current state. */
  strongestClaim: string;
  /**
   * "Connect X" portrait upgrade (owner ask 2026-07-11): true only when Privy
   * itself is configured AND its SDK reports ready — false whenever Privy is
   * unconfigured, still booting, or errored, so the affordance's own
   * "unavailable" honesty never depends on the hostedAuth field alone.
   */
  connectXAvailable: boolean;
  /** Honest message from the last failed connect attempt, or null. */
  xConnectError: string | null;
};

/** Blocked/local fallback used when no hosted-auth value is supplied. */
export function localFallbackHostedAuth(): RoyaleHostedAuth {
  return {
    status: "blocked_missing_public_config",
    currentTier: "T2_runtime",
    enabledByEnv: false,
    publicAppIdConfigured: false,
    clientIdConfigured: false,
    ready: false,
    authenticated: false,
    userId: null,
    walletAddress: null,
    loginAvailable: false,
    logoutAvailable: false,
    missingForHostedPreview: ["set VITE_ENABLE_PRIVY_AUTH=true", "set VITE_PRIVY_APP_ID from the Privy dashboard"],
    strongestClaimAllowed:
      "Local demo only: no Privy login, token verification, deposits, payouts, custody, or settlement claimed.",
  };
}

const LEDGER_LABEL = "Local demo USDC ledger · no chain broadcast";

export function deriveAuthModel(hostedAuth: RoyaleHostedAuth): RoyaleAuthModel {
  const privyConfigured = hostedAuth.enabledByEnv && hostedAuth.publicAppIdConfigured;

  let tier: RoyaleAuthTier;
  if (!privyConfigured) {
    tier = "local_demo_fallback";
  } else if (hostedAuth.status === "authenticated") {
    tier = "privy_authenticated";
  } else if (hostedAuth.status === "sdk_error") {
    tier = "privy_error";
  } else if (hostedAuth.status === "sdk_initializing") {
    tier = "privy_initializing";
  } else {
    tier = "privy_ready_for_login";
  }

  const authLabel =
    tier === "privy_authenticated"
      ? `Privy account${hostedAuth.userId ? ` · ${hostedAuth.userId.slice(0, 10)}…` : ""}`
      : tier === "privy_ready_for_login"
        ? "Privy ready: connect to sign in"
        : tier === "privy_initializing"
          ? "Privy SDK starting…"
          : tier === "privy_error"
            ? "Privy SDK error: using local demo"
            : "Local demo account (Privy not configured)";

  const strongestClaim =
    tier === "privy_authenticated"
      ? "Privy login is live (hosted-auth preview tier). USDC, deposits, payouts, custody, and settlement remain a local demo ledger: no chain broadcast."
      : hostedAuth.strongestClaimAllowed;

  return {
    privyConfigured,
    tier,
    // A configured-but-erroring Privy SDK must not dead-end the game: route the
    // Connect action to the playable local demo while the label stays honest
    // about the SDK error (deposits then carry the local_demo backing, never a
    // Privy-account claim). Initializing is transient and stays on the Privy
    // path so a healthy SDK still lands on real login.
    connectVia: privyConfigured && tier !== "privy_error" ? "privy" : "local_demo",
    privyLoginAvailable: hostedAuth.loginAvailable,
    privyLogoutAvailable: hostedAuth.logoutAvailable,
    privyUserId: hostedAuth.userId,
    // Only surface a wallet address when the Privy login is actually active — never
    // from an awaiting/error/demo state — so an on-chain deposit binds to a real
    // authenticated session. Trim + fail closed to null.
    privyWalletAddress:
      tier === "privy_authenticated" && typeof hostedAuth.walletAddress === "string" && hostedAuth.walletAddress.trim()
        ? hostedAuth.walletAddress.trim()
        : null,
    envBlockers: privyConfigured ? [] : hostedAuth.missingForHostedPreview,
    authLabel,
    ledgerLabel: LEDGER_LABEL,
    strongestClaim,
    connectXAvailable: privyConfigured && Boolean(hostedAuth.connectXAvailable),
    xConnectError: hostedAuth.xConnectError ?? null,
  };
}

/**
 * Whether the player has an active PLAY session — i.e. their (demo) balance is
 * bettable on the board. Owner 2026-07-23 ("make attn packs playable without
 * connecting to privy" / "i cant click on a tile to bet"): a guest who chose
 * "Skip and play as guest" opens a local session (localSession=true) and that
 * makes the tiles clickable EVEN under a configured Privy build — otherwise the
 * Privy branch tracked only the hosted login and stranded the guest's free-play
 * balance as un-bettable.
 *
 * The USDC ledger is a local demo in EVERY tier (see the module header), so a
 * guest session is exactly as real as a Privy one for play, and this never
 * claims a Privy account — `model.tier` / `authLabel` carry the honest account
 * identity independently. Pure so useRoyaleGame and its tests agree byte-for-byte.
 *
 * @param hostedAuthenticated a live Privy session (hostedAuth.authenticated).
 * @param localSession        the local demo/guest session flag (demoSignedIn).
 */
export function isConnectedForPlay(
  model: RoyaleAuthModel,
  hostedAuthenticated: boolean,
  localSession: boolean,
): boolean {
  return model.connectVia === "privy" ? hostedAuthenticated || localSession : localSession;
}

/** Honest backing label attached to each money action receipt. */
export function backingLabel(model: RoyaleAuthModel): "privy_account_demo_ledger" | "local_demo" {
  return model.tier === "privy_authenticated" ? "privy_account_demo_ledger" : "local_demo";
}

/** Honest funding-source label for a SPEND (chip-in/evolve) under the current account. */
export type RoyaleFundingSource = "privy_session" | "demo";
export function fundingSource(model: RoyaleAuthModel): RoyaleFundingSource {
  return model.tier === "privy_authenticated" ? "privy_session" : "demo";
}

/**
 * What the single "Add Game USDC" entrypoint actually does in the current
 * account state. This is the honesty contract for requirement 2: the click must
 * NEVER silently credit demo funds while a real Privy login is the configured
 * path but the user has not authenticated — there it routes to Privy login
 * instead. It is a pure function of the auth model (the tier already encodes
 * authenticated vs. awaiting-login vs. SDK-error), so the button label and the
 * game's deposit handler stay in lockstep and are unit-testable without a DOM.
 */
export type RoyaleDepositActionMode = "privy_connect" | "credit_privy_demo_ledger" | "credit_local_demo";

export type RoyaleDepositAction = {
  mode: RoyaleDepositActionMode;
  /** True when the click credits the demo balance; false when it routes to Privy login. */
  credits: boolean;
  /** Honest backing recorded on the receipt when this click credits (ignored when credits=false). */
  backing: "privy_account_demo_ledger" | "local_demo";
};

export function deriveDepositAction(model: RoyaleAuthModel): RoyaleDepositAction {
  // A real Privy login is active: credit the demo ledger with a Privy-backed receipt.
  if (model.tier === "privy_authenticated") {
    return { mode: "credit_privy_demo_ledger", credits: true, backing: "privy_account_demo_ledger" };
  }
  // Privy is the configured connect path but the user has not authenticated yet
  // (ready_for_login or still initializing). The entrypoint routes to Privy login
  // and credits NOTHING — no silent demo funds while real auth is the path.
  if (model.connectVia === "privy") {
    return { mode: "privy_connect", credits: false, backing: "local_demo" };
  }
  // Privy not configured, or its SDK errored: the playable local demo credit.
  return { mode: "credit_local_demo", credits: true, backing: "local_demo" };
}

// The always-true custody ceiling. Even when a real Privy login is active, the
// USDC ledger never broadcasts on-chain at this tier, so this line is rendered in
// every account state — it must never be conditioned away.
export const PRODUCTION_CUSTODY_CEILING =
  "Production USDC custody is not live: balances are a demo ledger only; no real funds move.";

/**
 * Operator-readable boundary state of the *real* Privy integration. This is the
 * authentication boundary only; the money ledger is demo in every case.
 */
export type RoyaleRealPrivyBoundary =
  | "real_privy_not_configured"
  | "real_privy_configured_awaiting_login"
  | "real_privy_initializing"
  | "real_privy_sdk_error"
  | "real_privy_authenticated";

/**
 * Explicit three-state account/credit readback so a user (or a smoke) can always
 * tell three honest things apart:
 *   1. local demo credit (no real Privy, or Privy not logged in / erroring);
 *   2. a Privy authenticated preview over the same demo credit ledger;
 *   3. production custody — which is NEVER live at this tier (custodyLine).
 */
export type RoyaleCustodyReadback = {
  /** Money-credit tier the current account maps to. The ledger is demo in both. */
  creditTier: "local_demo_credit" | "privy_preview_demo_credit";
  /** Operator-readable state of the real Privy auth boundary. */
  realPrivyBoundary: RoyaleRealPrivyBoundary;
  /** True only when a real Privy login is active (auth only — not custody). */
  realPrivyAuthenticated: boolean;
  /** Whether the environment actually wires a real Privy app id + enable flag. */
  privyConfigured: boolean;
  /** Authenticated Privy Solana wallet address, or null (auth only — not custody). */
  walletAddress: string | null;
  /** One-line honest account/credit summary for the current state. */
  accountLine: string;
  /** Always-true production-custody ceiling (rendered in every state). */
  custodyLine: string;
  /** Exact operator-readable steps to reach real Privy and production custody. */
  operatorNotes: string[];
};

const CUSTODY_NEXT_STEP =
  "Production custody also needs a funded mainnet/devnet USDC wallet + a signed SPL transfer; that is not enabled in this tier.";

const SDK_ERROR_NOTE =
  "The configured VITE_PRIVY_APP_ID was rejected by the Privy SDK; verify the app id and allowed origins in the Privy dashboard.";

export function deriveCustodyReadback(model: RoyaleAuthModel): RoyaleCustodyReadback {
  const realPrivyAuthenticated = model.tier === "privy_authenticated";
  const realPrivyBoundary: RoyaleRealPrivyBoundary = !model.privyConfigured
    ? "real_privy_not_configured"
    : model.tier === "privy_authenticated"
      ? "real_privy_authenticated"
      : model.tier === "privy_error"
        ? "real_privy_sdk_error"
        : model.tier === "privy_initializing"
          ? "real_privy_initializing"
          : "real_privy_configured_awaiting_login";

  const accountLine =
    realPrivyBoundary === "real_privy_authenticated"
      ? "Privy authenticated preview: your login is real; the USDC balance is still a local demo ledger."
      : realPrivyBoundary === "real_privy_configured_awaiting_login"
        ? "Real Privy is configured. Connect to sign in; your balance stays a local demo ledger either way."
        : realPrivyBoundary === "real_privy_initializing"
          ? "Real Privy SDK is starting: using local demo credit until login completes."
          : realPrivyBoundary === "real_privy_sdk_error"
            ? "Real Privy is configured but its SDK failed to initialize: using local demo credit."
            : "Local demo credit: real Privy login is not configured in this environment.";

  const operatorNotes: string[] = [];
  if (realPrivyBoundary === "real_privy_not_configured") operatorNotes.push(...model.envBlockers);
  if (realPrivyBoundary === "real_privy_sdk_error") operatorNotes.push(SDK_ERROR_NOTE);
  operatorNotes.push(CUSTODY_NEXT_STEP);

  return {
    creditTier: realPrivyAuthenticated ? "privy_preview_demo_credit" : "local_demo_credit",
    realPrivyBoundary,
    realPrivyAuthenticated,
    privyConfigured: model.privyConfigured,
    walletAddress: model.privyWalletAddress,
    accountLine: model.privyWalletAddress
      ? `${accountLine} Wallet: ${model.privyWalletAddress}.`
      : accountLine,
    custodyLine: PRODUCTION_CUSTODY_CEILING,
    operatorNotes,
  };
}
