// STONKPACKS standalone entry. Derived from apps/web/src/main.tsx in attn-packs
// (see PROVENANCE.md). Only the public STONKPACKS pages are mounted here: home
// (rip, reveal, keep or sell), token history and docs. Operator, launchpad and
// pool tooling is not part of this repository; those paths resolve to home.
//
// STONKPACKS strict CSP: Zod jitless must be set before any schema module evaluates.
import "./features/stockPacks/branding/stockPacksCspRuntime";
// Install the browser Buffer shim before imports that evaluate Solana token code.
import "./routes/royale/privySolanaBrowserRuntime";
import { stockHostRoute } from "./features/stockPacks/branding/stockPacksRoutes";
import { stockPacksMetaDescription } from "./features/stockPacks/site/stockPacksSiteLinks";
import { StockPacksFooter } from "./features/stockPacks/site/StockPacksFooter";
import { StockPacksHistoryHeader } from "./features/stockPacks/site/StockPacksHistoryHeader";
import {
  resolveStockPacksBrand,
  resolveStockPacksPlatformToken,
  StockPacksBrandProvider,
} from "./features/stockPacks/branding/stockPacksBrand";
import {
  Component,
  createContext,
  lazy,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createRoot, type Root } from "react-dom/client";
import {
  PrivyProvider,
  type PrivyClientConfig,
  useConnectWallet,
  useIdentityToken,
  useLinkAccount,
  usePrivy,
} from "@privy-io/react-auth";
import {
  useFundWallet as useSolanaFundWallet,
  useSignAndSendTransaction as useSolanaSignAndSendTransaction,
  useSignTransaction as useSolanaSignTransaction,
  useWallets as useSolanaWallets,
} from "@privy-io/react-auth/solana";
import { stockPacksPrivyClientConfig } from "./features/stockPacks/auth/stockPacksPrivyConfig";
import { installChunkLoadRecovery } from "./lib/chunkLoadRecovery";
import "./routes/royale/royaleMoneyDisplay.css";
import { RoyalePageFallback } from "./routes/royale/pages/RoyalePageFallback";
import { matchRoyaleDocsPath } from "./routes/royale/pages/royaleDocsPath";
import { ROYALE_BACKEND_RAIL } from "./routes/royale/royaleBackendRailEnv";
import {
  extractPrivyEvmWalletAddress,
  extractPrivySolanaWalletAddress,
  isPrivyUnifiedSolanaWallet,
} from "./routes/royale/royaleAuth";
import {
  base58Encode,
  buildPrivySolanaSignerCapability,
  resolvePrivySolanaDevnetTransactionMode,
  unwiredPrivySolanaSigner,
  type PrivySignAndSendTransaction,
  type RoyaleSignerCapability,
} from "./routes/royale/royaleOnchainDeposit";
import {
  createPrivySolanaMainnetConfig,
  PRIVY_SOLANA_DEVNET_CONFIG,
  PRIVY_SOLANA_DEVNET_RPC_URL,
} from "./routes/royale/privySolanaDevnetConfig";
import {
  connectXUnavailableMessage,
  clearLinkedXProfile,
  extractXProfileFromPrivyUser,
  saveLinkedXProfile,
} from "./routes/royale/royaleXProfile";
import "./styles.css";
import "./features/stockPacks/branding/stockPacksTheme.css";
import "./features/stockPacks/branding/stockPacksStonksTheme.css";
import "./features/stockPacks/board/stonksFooter.css";
import { applyStockPacksStonksTheme } from "./features/stockPacks/branding/stockPacksStonksThemeDocument";
import { STOCK_PACKS_SHARE_DESCRIPTION } from "./features/stockPacks/branding/stockPacksShareCopy";

// This repository only builds STONKPACKS, so the brand resolver always returns the
// STONKPACKS profile (see stockPacksBrand.tsx).
const stockPacksBrand = resolveStockPacksBrand({ hostname: window.location.hostname,
  deployment: import.meta.env.PROD ? "production" : "development",
  stockPreview: true });

const stockPacksPlatformToken = stockPacksBrand.id === "stonkpacks"
  ? resolveStockPacksPlatformToken({
    mint: import.meta.env.VITE_STOCK_PACKS_PLATFORM_TOKEN_MINT,
    symbol: import.meta.env.VITE_STOCK_PACKS_PLATFORM_TOKEN_SYMBOL,
    name: import.meta.env.VITE_STOCK_PACKS_PLATFORM_TOKEN_NAME,
    logoUrl: import.meta.env.VITE_STOCK_PACKS_PLATFORM_TOKEN_LOGO_URL,
  })
  : resolveStockPacksPlatformToken();
if (stockPacksBrand.id === "stonkpacks") {
  document.documentElement.dataset.brand = "stonkpacks";
  applyStockPacksStonksTheme(document);
  document.title = stockPacksBrand.metadata.title;
  // The stonks-theme build ships a static STONKPACKS head (no inline scripts under its CSP); keep the runtime copy identical to it.
  const stockPacksDescription = import.meta.env.VITE_STOCK_PACKS_THEME === "stonks"
    ? STOCK_PACKS_SHARE_DESCRIPTION
    : stockPacksMetaDescription(stockPacksBrand.metadata.description);
  document.querySelectorAll<HTMLLinkElement>('link[rel="icon"],link[rel="apple-touch-icon"]').forEach(link => {
    link.setAttribute("href", link.rel === "apple-touch-icon" ? "/stonkpacks-apple-touch.png" : "/stonkpacks-icon.svg");
    link.setAttribute("type", link.rel === "apple-touch-icon" ? "image/png" : "image/svg+xml");
    link.setAttribute("sizes", link.rel === "apple-touch-icon" ? "180x180" : "any");
  });
  for (const [selector, content] of [
    ['meta[name="theme-color"]', "#071013"],
    ['meta[name="description"]', stockPacksDescription],
    ['meta[name="apple-mobile-web-app-title"]', stockPacksBrand.metadata.title],
    ['meta[property="og:image"]', "/stonkpacks-og.png"],
    ['meta[property="og:image:width"]', "1200"],
    ['meta[property="og:image:height"]', "630"],
    ['meta[name="twitter:image"]', "/stonkpacks-og.png"],
    ['meta[property="og:image:alt"]', stockPacksBrand.metadata.imageAlt],
    ['meta[name="twitter:image:alt"]', stockPacksBrand.metadata.imageAlt],
    ['meta[property="og:title"]', stockPacksBrand.metadata.title],
    ['meta[property="og:site_name"]', stockPacksBrand.metadata.siteName],
    ['meta[property="og:description"]', stockPacksDescription],
    ['meta[name="twitter:title"]', stockPacksBrand.metadata.title],
    ['meta[name="twitter:description"]', stockPacksDescription],
  ] as const) document.querySelector(selector)?.setAttribute("content", content);
}

// The Seeker launcher uses the same document as the web product, but must
// advertise its dedicated PWA identity. The session marker also survives the
// existing board's same-tab links back to `/`, which intentionally omit query
// parameters.
document
  .querySelector<HTMLLinkElement>("#attn-pwa-manifest")
  ?.setAttribute("href", stockPacksBrand.id === "stonkpacks" ? "/stonkpacks.webmanifest" : "/manifest.webmanifest");

// Start the Seeker wallet bridge on Android only, keeping Solana Mobile's adapter
// out of the entry chunk and out of desktop browsers.
if (/Android/iu.test(window.navigator.userAgent)) {
  void import("./lib/wallet/mobileWalletAdapter")
    .then(({ registerAttnMobileWalletAdapter }) => {
      registerAttnMobileWalletAdapter();
    })
    .catch((error: unknown) => {
      console.warn("Solana Mobile wallet support could not start", error);
    });
}

declare global {
  var __attnPacksRoot: Root | undefined;
}

// Stale-tab chunk-skew self-heal: installed before the first lazy chunk can reject.
installChunkLoadRecovery();

const StockPacksPlayerRouteLazy = lazy(() =>
  import("./features/stockPacks/player/StockPacksPlayerRoute").then((m) => ({ default: m.StockPacksPlayerRoute })),
);
const StockPacksCollectionSectionLazy = lazy(() =>
  import("./features/stockPacks/player/StockPacksPlayerRoute").then((m) => ({ default: m.StockPacksCollectionSection })),
);
const DocsRouteLazy = lazy(() =>
  import("./routes/royale/pages/RoyaleDocsRoute").then((m) => ({ default: m.RoyaleDocsRoute })),
);

type AppRoute =
  | { kind: "stockPacks" }
  | { kind: "stockPacksCollection" }
  | ({ kind: "royaleDocs" } & NonNullable<ReturnType<typeof matchRoyaleDocsPath>>);

const ROYALE_DEVNET_API_BASE_URL = ROYALE_BACKEND_RAIL.devnet.apiBaseUrl;
const ROYALE_MAINNET_API_BASE_URL = ROYALE_BACKEND_RAIL.mainnet.apiBaseUrl;
const ROYALE_DEFAULT_BACKEND_NETWORK = ROYALE_BACKEND_RAIL.active.network;
const SOLANA_RPC_URL = (import.meta.env.VITE_SOLANA_RPC_URL ?? import.meta.env.NEXT_PUBLIC_SOLANA_RPC_URL ?? "").trim();
const ROYALE_DEVNET_RPC_URL = (
  import.meta.env.VITE_SOLANA_DEVNET_RPC_URL
    ?? SOLANA_RPC_URL
    ?? PRIVY_SOLANA_DEVNET_RPC_URL
).trim() || PRIVY_SOLANA_DEVNET_RPC_URL;
const ROYALE_MAINNET_RPC_URL = String(
  import.meta.env.VITE_SOLANA_MAINNET_RPC_URL ?? "",
).trim();
const PRIVY_AUTH_ENABLED =
  import.meta.env.VITE_ENABLE_PRIVY_AUTH === "true" || import.meta.env.VITE_ATTN_PACKS_ENABLE_PRIVY === "true";
const PRIVY_APP_ID = String(import.meta.env.VITE_PRIVY_APP_ID ?? "").trim();
const PRIVY_CLIENT_ID = String(import.meta.env.VITE_PRIVY_CLIENT_ID ?? "").trim();
const STOCK_PACKS_PRIVY_APP_ID = String(import.meta.env.VITE_STOCK_PACKS_PRIVY_APP_ID ?? "").trim();
const STOCK_PACKS_PRIVY_CLIENT_ID = String(import.meta.env.VITE_STOCK_PACKS_PRIVY_CLIENT_ID ?? "").trim();
const ROYALE_MAINNET_PRIVY_APP_ID = String(
  import.meta.env.VITE_PACK_ROYALE_MAINNET_PRIVY_APP_ID ?? "",
).trim();
const PRIVY_SOLANA_DEVNET_SPONSORSHIP_CONFIGURED =
  import.meta.env.VITE_PRIVY_SOLANA_DEVNET_SPONSORSHIP_ENABLED === "true";

type HostedAuthPreviewState = {
  provider: "privy";
  requiredTier: "T4_hosted_auth_preview";
  currentTier: "T2_runtime" | "T4_hosted_auth_preview";
  status: "blocked_missing_public_config" | "sdk_initializing" | "ready_for_login" | "authenticated" | "sdk_error";
  enabledByEnv: boolean;
  publicAppIdConfigured: boolean;
  clientIdConfigured: boolean;
  sdkInstalled: boolean;
  ready: boolean;
  authenticated: boolean;
  userId: string | null;
  /** Authenticated Privy Solana wallet address, when one is exposed (else null). */
  walletAddress: string | null;
  /** Authenticated Privy EVM wallet for Robinhood Chain/Pons, else null. */
  evmWalletAddress: string | null;
  /**
   * Sign+send capability handed to the royale surface. This shell authenticates
   * and reads the wallet address but does NOT wire a Solana signer, so an
   * authenticated session gets an honest `available:false` capability naming the
   * exact missing method (the royale on-chain readback then reaches `signer_ready`
   * rather than claiming a signed broadcast). null in every non-authenticated state.
   */
  signerCapability: RoyaleSignerCapability | null;
  /** Card sell-back belongs to another product; STONKPACKS sells through its own sale flow. */
  sellBackSignCapability: null;
  signDevnetTransaction?: (
    transaction: Uint8Array,
  ) => Promise<{ signature: string }>;
  signArenaDevnetTransaction?: (
    transaction: Uint8Array,
  ) => Promise<{ signedTransaction: Uint8Array }>;
  signSolanaTransaction?: (
    transaction: Uint8Array,
  ) => Promise<{ signature: string }>;
  signSolanaTransactionOnly?: (
    transaction: Uint8Array,
  ) => Promise<{ signedTransaction: Uint8Array }>;
  devnetTransactionSponsorship: boolean;
  loginAvailable: boolean;
  logoutAvailable: boolean;
  missingForHostedPreview: string[];
  strongestClaimAllowed: string;
  rawTokensRetained: false;
  productionAuthClaimed: false;
  getAccessToken?: () => Promise<string | null>;
  getIdentityToken?: () => Promise<string | null>;
  login?: () => void;
  logout?: () => void;
  linkSolanaWallet?: () => void;
  fundSolanaWallet?: (input: Readonly<{ address: string; amountUsdc?: string }>) => Promise<void>;
  connectRobinhoodWalletAvailable: boolean;
  connectRobinhoodWallet?: () => Promise<void>;
  /** "Connect X" portrait upgrade (owner ask 2026-07-11) — see royaleXProfile.ts. */
  connectXAvailable: boolean;
  connectX?: () => void;
  xConnectError: string | null;
};

const HostedAuthPreviewContext = createContext<HostedAuthPreviewState>(buildBlockedHostedAuthPreviewState());

// The Privy SDK throws synchronously during render when handed an invalid app id
// (bad id, wrong allowed-origins, etc.). Without a boundary that crash blanks the
// whole app — the opposite of the honest two-tier contract. This boundary catches
// it and re-renders the tree with an honest sdk_error hosted-auth state, so the
// royale surface degrades to its playable local-demo fallback instead of a blank
// screen. Scoped to the hosted-auth preview only.
class HostedAuthErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { errored: boolean }
> {
  state = { errored: false };

  static getDerivedStateFromError() {
    return { errored: true };
  }

  componentDidCatch() {
    console.warn("privy_hosted_auth_initialization_failed");
  }

  render() {
    return this.state.errored ? this.props.fallback : this.props.children;
  }
}

function HostedAuthPreviewProvider({
  children,
  network,
}: {
  children: ReactNode;
  network: "devnet" | "mainnet";
}) {
  const isStockPacksBrand = stockPacksBrand.id === "stonkpacks";
  const appId = isStockPacksBrand
    ? STOCK_PACKS_PRIVY_APP_ID
    : network === "mainnet"
      ? ROYALE_MAINNET_PRIVY_APP_ID
      : PRIVY_APP_ID;
  const clientId = isStockPacksBrand ? STOCK_PACKS_PRIVY_CLIENT_ID : PRIVY_CLIENT_ID;
  const baseState = useMemo(
    () => buildBlockedHostedAuthPreviewState(appId, clientId),
    [appId, clientId],
  );
  const erroredState = useMemo(
    () => buildErroredHostedAuthPreviewState(appId, clientId),
    [appId, clientId],
  );
  const config = useMemo<PrivyClientConfig | null>(() => {
    const networkConfig: PrivyClientConfig | null = (() => {
      if (network === "devnet") return PRIVY_SOLANA_DEVNET_CONFIG;
      if (!ROYALE_MAINNET_RPC_URL) return null;
      try {
        return createPrivySolanaMainnetConfig(ROYALE_MAINNET_RPC_URL);
      } catch {
        return null;
      }
    })();
    if (!networkConfig || !isStockPacksBrand) return networkConfig;
    // stonkpacks.xyz: STONKPACKS appearance first (replacing any inherited Royale appearance),
    // then the Solana-first Stock Privy config spreads it. Every other host keeps its config.
    const brandedConfig: PrivyClientConfig = {
      ...networkConfig,
      appearance: {
        theme: "#071013",
        accentColor: "#3ce3ab",
        logo: "https://stonkpacks.xyz/stonkpacks-512.png",
        landingHeader: "Log in to STONKPACKS",
      },
    };
    return stockPacksPrivyClientConfig(brandedConfig);
  }, [isStockPacksBrand, network]);
  if (!PRIVY_AUTH_ENABLED || !appId || !config) {
    return <HostedAuthPreviewContext.Provider value={baseState}>{children}</HostedAuthPreviewContext.Provider>;
  }

  const privyProps = clientId
    ? { appId, clientId, config }
    : { appId, config };
  return (
    <HostedAuthErrorBoundary
      key={`privy-boundary-${network}-${appId}`}
      fallback={<HostedAuthPreviewContext.Provider value={erroredState}>{children}</HostedAuthPreviewContext.Provider>}
    >
      <PrivyProvider key={`privy-${network}-${appId}`} {...privyProps}>
        <HostedAuthPreviewBridge network={network}>{children}</HostedAuthPreviewBridge>
      </PrivyProvider>
    </HostedAuthErrorBoundary>
  );
}

function HostedAuthPreviewBridge({
  children,
  network,
}: {
  children: ReactNode;
  network: "devnet" | "mainnet";
}) {
  const { authenticated, error, getAccessToken, login, logout, ready, user } = usePrivy();
  const { connectWallet } = useConnectWallet();
  const { identityToken } = useIdentityToken();
  // Real Privy Solana signer wiring. These hooks live inside PrivyProvider and are
  // side-effect free to mount (the sign hook returns a plain closure; useWallets
  // reads the connected-wallet store), so they never destabilize the login state.
  // They are what lets an authenticated session with an embedded Solana wallet get
  // a REAL, devnet-only, broadcast-capable signer instead of the unwired stub.
  const { ready: solanaWalletsReady, wallets: solanaWallets } = useSolanaWallets();
  const { signAndSendTransaction: solanaSignAndSendTransaction } = useSolanaSignAndSendTransaction();
  const { signTransaction: solanaSignTransaction } = useSolanaSignTransaction();
  const connectRobinhoodWallet = useCallback(async () => {
    await connectWallet({
      description: "Connect an EVM wallet for Robinhood Chain token launches.",
      walletChainType: "ethereum-only",
    });
  }, [connectWallet]);

  // "Connect X" portrait upgrade (owner ask 2026-07-11). linkTwitter() adds a
  // Twitter/X account to an ALREADY authenticated Privy session (real deep
  // link to X's login page — Privy's own doc). Any rejection (Twitter not yet
  // enabled as a link method in the Privy dashboard, popup blocked, etc.)
  // degrades to the SAME honest, non-technical xConnectError string — never a
  // raw SDK error code, never a crash.
  const [xConnectError, setXConnectError] = useState<string | null>(null);
  const { linkTwitter, linkWallet } = useLinkAccount({
    onSuccess: () => setXConnectError(null),
    onError: () => setXConnectError(connectXUnavailableMessage()),
  });
  const { fundWallet: fundSolanaWalletWithPrivy } = useSolanaFundWallet();
  // Stock host only: fix paths for a login without a Solana wallet and for an
  // empty wallet. Both open Privy's own modals; neither moves attn money.
  const stockHostWalletActions = useMemo(() => {
    if (stockPacksBrand.id !== "stonkpacks") return null;
    return {
      linkSolanaWallet: () => linkWallet({ walletChainType: "solana-only" }),
      fundSolanaWallet: async ({ address, amountUsdc }: Readonly<{ address: string; amountUsdc?: string }>) => {
        await fundSolanaWalletWithPrivy({
          address,
          options: {
            chain: network === "mainnet" ? "solana:mainnet" : "solana:devnet",
            asset: "USDC",
            ...(amountUsdc ? { amount: amountUsdc } : {}),
          },
        });
      },
    };
  }, [fundSolanaWalletWithPrivy, linkWallet, network]);
  const connectX = useCallback(() => {
    setXConnectError(null);
    try {
      // Already signed in: link Twitter onto this session. Not signed in yet:
      // route to the existing Privy login modal (which offers "Continue with
      // X" once the owner enables it) — either path ends with the SAME
      // `user.twitter` shape, persisted by the effect below.
      if (authenticated) linkTwitter();
      else login?.();
    } catch {
      setXConnectError(connectXUnavailableMessage());
    }
  }, [authenticated, linkTwitter, login]);

  // Persist the linked X profile the instant Privy's `user` carries one — this
  // is the ONLY write path (see royaleXProfile.ts for why every reader goes
  // through localStorage instead of this context). Runs for BOTH a fresh
  // Twitter login and a linkTwitter() call onto an existing session, since
  // both land here as user.twitter.
  //
  // Clears the persisted profile on a REAL sign-out (so a later, different
  // Privy account never inherits a stale avatar/handle) — but only once the
  // SDK has actually settled (`ready`) AND this tab had previously observed
  // an authenticated session. Without that guard, the transient
  // not-yet-authenticated instant every page load passes through while a
  // real, still-valid session is rehydrating would wipe the portrait a beat
  // before Privy confirms it, discarding a perfectly good link.
  const wasAuthenticatedRef = useRef(false);
  useEffect(() => {
    if (!ready) return;
    if (authenticated) {
      wasAuthenticatedRef.current = true;
      const profile = extractXProfileFromPrivyUser(user);
      if (profile) saveLinkedXProfile(profile);
      return;
    }
    if (wasAuthenticatedRef.current) {
      wasAuthenticatedRef.current = false;
      clearLinkedXProfile();
    }
  }, [ready, authenticated, user]);

  const value = useMemo<HostedAuthPreviewState>(() => {
    const status: HostedAuthPreviewState["status"] = error
      ? "sdk_error"
      : !ready
        ? "sdk_initializing"
        : authenticated
          ? "authenticated"
          : "ready_for_login";
    const walletAddress = authenticated ? extractPrivySolanaWalletAddress(user) : null;
    const evmWalletAddress = authenticated ? extractPrivyEvmWalletAddress(user) : null;
    const transactionWallet =
      authenticated && solanaWalletsReady && walletAddress
        ? solanaWallets.find(
            (wallet) => wallet.address.trim() === walletAddress,
          ) ?? null
        : null;
    const devnetTransactionMode =
      resolvePrivySolanaDevnetTransactionMode({
        appSponsorshipEnabled:
          PRIVY_SOLANA_DEVNET_SPONSORSHIP_CONFIGURED,
        unifiedWalletEligible:
          isPrivyUnifiedSolanaWallet(user, walletAddress),
      });
    const transactionChain = network === "mainnet"
      ? "solana:mainnet" as const
      : "solana:devnet" as const;
    const signSelectedRailTransaction = transactionWallet
      ? async (transaction: Uint8Array) => {
          const result = await solanaSignAndSendTransaction({
            transaction,
            wallet: transactionWallet,
            chain: transactionChain,
            ...(network === "devnet" && devnetTransactionMode.privyOptions
              ? { options: devnetTransactionMode.privyOptions }
              : {}),
          });
          return { signature: base58Encode(result.signature) };
        }
      : undefined;
    const signSelectedRailTransactionOnly = transactionWallet
      ? async (transaction: Uint8Array) => {
          const result = await solanaSignTransaction({
            transaction,
            wallet: transactionWallet,
            chain: transactionChain,
          });
          if (!(result.signedTransaction instanceof Uint8Array) || result.signedTransaction.byteLength === 0) {
            throw new Error("privy_solana_signed_transaction_missing");
          }
          return { signedTransaction: result.signedTransaction };
        }
      : undefined;
    return {
      provider: "privy",
      requiredTier: "T4_hosted_auth_preview",
      currentTier: authenticated ? "T4_hosted_auth_preview" : "T2_runtime",
      status,
      enabledByEnv: true,
      publicAppIdConfigured: true,
      clientIdConfigured: PRIVY_CLIENT_ID.length > 0,
      sdkInstalled: true,
      ready,
      authenticated,
      userId: typeof user?.id === "string" ? user.id : null,
      // Extract the authenticated user's Solana wallet defensively (embedded or
      // linked); fails closed to null when authenticated is false or no Solana
      // wallet is present. This is what lets the royale prepared-deposit path bind
      // to the REAL Privy wallet instead of a synthetic placeholder.
      walletAddress,
      evmWalletAddress,
      // Real signer capability: wired to @privy-io/react-auth/solana
      // useSignAndSendTransaction + useWallets. When the authenticated session has a
      // ready embedded Solana wallet matching its address, this is a CALLABLE,
      // devnet-only, broadcast-capable signer (Privy custodies the key). When no
      // embedded wallet exists yet it is honestly `available:false`, naming the exact
      // remaining external step (enable + fund an embedded Solana wallet). null until
      // authed. Any unexpected error degrades to the unwired stub, never a crash.
      signerCapability: authenticated
        ? buildAuthenticatedSolanaSignerCapability({
            wallets: solanaWallets,
            walletsReady: solanaWalletsReady,
            authenticatedWalletAddress: walletAddress,
            signAndSendTransaction: solanaSignAndSendTransaction,
          })
        : null,
      sellBackSignCapability: null,
      ...(transactionWallet
        ? {
            signSolanaTransaction: signSelectedRailTransaction!,
            signSolanaTransactionOnly: signSelectedRailTransactionOnly!,
            ...(network === "devnet"
              ? {
                  signDevnetTransaction: signSelectedRailTransaction!,
                  signArenaDevnetTransaction: async (
                    transaction: Uint8Array,
                  ) => {
                    const result = await solanaSignTransaction({
                      transaction,
                      wallet: transactionWallet,
                      chain: "solana:devnet",
                    });
                    return {
                      signedTransaction: result.signedTransaction,
                    };
                  },
                }
              : {}),
          }
        : {}),
      devnetTransactionSponsorship:
        network === "devnet" && devnetTransactionMode.sponsored,
      loginAvailable: ready && !authenticated && !error,
      logoutAvailable: ready && authenticated && !error,
      missingForHostedPreview: authenticated ? [] : ["complete Privy login in hosted browser preview"],
      strongestClaimAllowed: authenticated
        ? "T4 hosted auth preview UI state only; backend token verification, deposits, payouts, custody, settlement, and production auth remain unclaimed"
        : "T2 runtime Privy SDK wiring only until a hosted user completes login; no production auth, token verification, deposits, payouts, custody, or settlement claimed",
      rawTokensRetained: false,
      productionAuthClaimed: false,
      ...(authenticated
        ? {
            getAccessToken,
            getIdentityToken: async () => identityToken,
          }
        : {}),
      login,
      logout,
      ...(stockHostWalletActions && ready && authenticated && !error
        ? {
            linkSolanaWallet: stockHostWalletActions.linkSolanaWallet,
            ...(walletAddress ? { fundSolanaWallet: stockHostWalletActions.fundSolanaWallet } : {}),
          }
        : {}),
      connectRobinhoodWalletAvailable: ready && authenticated && !error,
      ...(ready && authenticated && !error ? { connectRobinhoodWallet } : {}),
      // "Connect X": available whenever the SDK is up and healthy, whether or
      // not the user has logged in yet (connectX itself picks login vs link).
      connectXAvailable: ready && !error,
      connectX,
      xConnectError,
    };
  }, [
    authenticated,
    connectRobinhoodWallet,
    connectX,
    error,
    getAccessToken,
    identityToken,
    login,
    logout,
    ready,
    user,
    network,
    solanaWallets,
    solanaWalletsReady,
    solanaSignAndSendTransaction,
    solanaSignTransaction,
    stockHostWalletActions,
    xConnectError,
  ]);

  return <HostedAuthPreviewContext.Provider value={value}>{children}</HostedAuthPreviewContext.Provider>;
}

/**
 * Adapt the live Privy solana hook results into a RoyaleSignerCapability via the
 * pure factory. The live ConnectedStandardSolanaWallet objects are structural
 * supersets of PrivySolanaWalletLike, so the factory selects the authenticated
 * wallet and hands that SAME live object back through signAndSendTransaction (which
 * carries the actual signing method). Any unexpected SDK shape degrades to the
 * unwired stub rather than crashing the authenticated session.
 */
function buildAuthenticatedSolanaSignerCapability(args: {
  wallets: ReadonlyArray<{ address: string }>;
  walletsReady: boolean;
  authenticatedWalletAddress: string | null;
  signAndSendTransaction: ReturnType<typeof useSolanaSignAndSendTransaction>["signAndSendTransaction"];
}): RoyaleSignerCapability {
  try {
    const adapted: PrivySignAndSendTransaction = async ({ transaction, wallet, chain }) => {
      const result = await args.signAndSendTransaction({
        transaction,
        // `wallet` is the live ConnectedStandardSolanaWallet selected by the factory.
        wallet: wallet as never,
        chain: chain as never,
      });
      return { signature: result.signature };
    };
    return buildPrivySolanaSignerCapability({
      wallets: args.wallets as ReadonlyArray<{ address: string }> as { address: string }[],
      walletsReady: args.walletsReady,
      authenticatedWalletAddress: args.authenticatedWalletAddress,
      signAndSendTransaction: adapted,
    });
  } catch {
    return unwiredPrivySolanaSigner();
  }
}

function useHostedAuthPreview() {
  return useContext(HostedAuthPreviewContext);
}

function buildBlockedHostedAuthPreviewState(
  appId = PRIVY_APP_ID,
  clientId = PRIVY_CLIENT_ID,
): HostedAuthPreviewState {
  const missingForHostedPreview: string[] = [];
  if (!PRIVY_AUTH_ENABLED) missingForHostedPreview.push("set VITE_ENABLE_PRIVY_AUTH=true");
  if (!appId) missingForHostedPreview.push(stockPacksBrand.id === "stonkpacks"
    ? "set VITE_STOCK_PACKS_PRIVY_APP_ID from the STONKPACKS Privy app"
    : "set the selected rail's Privy app id from the Privy dashboard");
  return {
    provider: "privy",
    requiredTier: "T4_hosted_auth_preview",
    currentTier: "T2_runtime",
    status: "blocked_missing_public_config",
    enabledByEnv: PRIVY_AUTH_ENABLED,
    publicAppIdConfigured: appId.length > 0,
    clientIdConfigured: clientId.length > 0,
    sdkInstalled: true,
    ready: false,
    authenticated: false,
    userId: null,
    walletAddress: null,
    evmWalletAddress: null,
    signerCapability: null,
    sellBackSignCapability: null,
    devnetTransactionSponsorship: false,
    loginAvailable: false,
    logoutAvailable: false,
    connectRobinhoodWalletAvailable: false,
    missingForHostedPreview,
    strongestClaimAllowed:
      "T2 runtime hosted-auth preview wiring only; no hosted login, token verification, production auth, deposits, payouts, custody, or settlement claimed",
    rawTokensRetained: false,
    productionAuthClaimed: false,
    // Privy itself isn't configured — RoyaleConnectXControl reads this (via
    // RoyaleAuthModel.connectXAvailable) as its honest "unavailable" state.
    connectXAvailable: false,
    xConnectError: null,
  };
}

// Honest state when Privy IS configured but its SDK fails to initialize (invalid
// app id, rejected origin, etc.). deriveAuthModel maps status "sdk_error" to the
// privy_error tier, which now routes Connect to the playable local demo while the
// readback stays explicit that Privy did not come up.
function buildErroredHostedAuthPreviewState(
  appId = PRIVY_APP_ID,
  clientId = PRIVY_CLIENT_ID,
): HostedAuthPreviewState {
  return {
    provider: "privy",
    requiredTier: "T4_hosted_auth_preview",
    currentTier: "T2_runtime",
    status: "sdk_error",
    enabledByEnv: PRIVY_AUTH_ENABLED,
    publicAppIdConfigured: appId.length > 0,
    clientIdConfigured: clientId.length > 0,
    sdkInstalled: true,
    ready: false,
    authenticated: false,
    userId: null,
    walletAddress: null,
    evmWalletAddress: null,
    signerCapability: null,
    sellBackSignCapability: null,
    devnetTransactionSponsorship: false,
    loginAvailable: false,
    logoutAvailable: false,
    connectRobinhoodWalletAvailable: false,
    missingForHostedPreview: [stockPacksBrand.id === "stonkpacks"
      ? "the configured VITE_STOCK_PACKS_PRIVY_APP_ID was rejected by the Privy SDK. Check its allowed origins"
      : "the configured VITE_PRIVY_APP_ID was rejected by the Privy SDK. Check the app id and allowed origins in the Privy dashboard"],
    strongestClaimAllowed:
      "Privy SDK failed to initialize for the configured app id; the app fell back to the local demo ledger. No Privy login, token verification, deposits, payouts, custody, or settlement claimed.",
    rawTokensRetained: false,
    productionAuthClaimed: false,
    connectXAvailable: false,
    xConnectError: null,
  };
}

function App({ royaleBackendNetwork }: { royaleBackendNetwork: "devnet" | "mainnet" }) {
  const royaleHostedAuth = useHostedAuthPreview();
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  const route = routeFromPath(currentPath);
  const apiBaseUrl = royaleBackendNetwork === "mainnet" ? ROYALE_MAINNET_API_BASE_URL : ROYALE_DEVNET_API_BASE_URL;
  const rpcUrl = royaleBackendNetwork === "mainnet" ? ROYALE_MAINNET_RPC_URL : ROYALE_DEVNET_RPC_URL;
  const routeProps = { hostedAuth: royaleHostedAuth, network: royaleBackendNetwork, apiBaseUrl, rpcUrl };

  return (
    <main className="siteShell routeShell royaleLabShell">
      {route.kind === "stockPacks" ? (
        <Suspense fallback={<RoyalePageFallback label="LOADING STOCK PACKS" />}>
          <StockPacksPlayerRouteLazy {...routeProps} />
        </Suspense>
      ) : route.kind === "stockPacksCollection" ? (
        <section className="royaleV2Route royaleV2Route--simplified royaleResultsRoute stockPacksPlayerRoute">
          <StockPacksHistoryHeader />
          <Suspense fallback={<RoyalePageFallback label="LOADING STOCK PACK HISTORY" />}>
            <StockPacksCollectionSectionLazy stockOnly {...routeProps} />
          </Suspense>
        </section>
      ) : (
        <Suspense fallback={<RoyalePageFallback label="LOADING DOCS" />}>
          <DocsRouteLazy section={route.section} page={route.page} />
        </Suspense>
      )}
      <StockPacksFooter />
    </main>
  );
}

/** Unknown paths (including the operator-only launch, pools and create paths) resolve to home. */
function routeFromPath(pathname: string): AppRoute {
  const stockKind = stockHostRoute(pathname, { pullOnly: true, operatorEnabled: false });
  if (stockKind === "stockPacksDocs") {
    const docsPath = matchRoyaleDocsPath(pathname);
    return docsPath ? { kind: "royaleDocs", ...docsPath } : { kind: "stockPacks" };
  }
  return stockKind === "stockPacksCollection" ? { kind: "stockPacksCollection" } : { kind: "stockPacks" };
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("STONKPACKS root element is missing");
const root = globalThis.__attnPacksRoot ?? createRoot(rootElement);
globalThis.__attnPacksRoot = root;

function StonkPacksRoot() {
  const network = ROYALE_DEFAULT_BACKEND_NETWORK;
  return (
    <HostedAuthPreviewProvider network={network}>
      <App royaleBackendNetwork={network} />
    </HostedAuthPreviewProvider>
  );
}

root.render(<StockPacksBrandProvider profile={stockPacksBrand} platformToken={stockPacksPlatformToken}><StonkPacksRoot /></StockPacksBrandProvider>);
