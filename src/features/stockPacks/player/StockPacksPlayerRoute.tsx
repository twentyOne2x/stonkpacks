import { useStockPacksBrand } from "../branding/stockPacksBrand";
import { Connection } from "@solana/web3.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { StockPackActorV1, StockPackPayoffCardV1 } from "@attn-packs/pack-network";

import type { RoyaleHostedAuth } from "../../../routes/royale/royaleAuth";
import { RoyaleBrandMark } from "../../../routes/royale/RoyaleBrandMark";
import { buildRoyaleUsdcTransferUnsignedTx } from "../../../routes/royale/royaleOnchainDeposit";
import { NormalPackStage3D } from "../../../routes/royale/normalOpening/NormalPackStage3D";
import { RoyaleSurfaceNav } from "../../../routes/royale/pages/RoyaleSurfaceNav";
import { StockPayoffCard } from "../payoffs";
import { STOCK_PACKS_STONKS_THEME } from "../branding/stockPacksThemeFlags";
import { StonksBoardBand } from "../hero/StonksBoardBand";
import { StonksFactsRow, StonksLowerPage } from "../board/StonksLowerPage";
import { STONKS_HERO_CHIP_END, stonksHeroChipStart } from "../hero/stonksHeroModel";
import { createStockPackSaleActions, type StockPackSaleViewState } from "../sale/stockPackSaleActions";
import { StockPacksPlayerPanel, type StockPacksSaleController } from "./StockPacksPlayerPanel";
import { createStockPacksHttpClients } from "./stockPacksHttpClient";
import {
  broadcastStockPackPayment,
  stockPackPaymentRecipientTokenAccount,
  stockPacksCollectionEntries,
  stockPacksSaleDeliveryReceipt,
  stockPacksStageView,
} from "./stockPacksPlayerRouteModel";
import { useStockPacksPlayer } from "./useStockPacksPlayer";
import {
  StockPacksAccountBar,
  StockPacksConnectButton,
  useStockPacksWalletSetupGrace,
  type StockPacksSessionIssue,
} from "../site/StockPacksAccountBar";
import { StockPacksConfigAlert } from "../site/StockPacksConfigAlert";
import {
  STOCK_PACKS_PURCHASES_OPEN,
  stockPacksErrorCopy,
  stockPacksLoginState,
} from "../site/stockPacksSiteStatus";
import "../../../routes/royale/royaleStyles.css";
import "../../../routes/royale/royaleDarkTheme.css";
import "../../../routes/royale/normalOpening/royaleNormalPackOpening.css";

const IDLE_SALE: StockPackSaleViewState = { phase: "idle", prepared: null, message: null };

function stockSessionErrorMessage(error: Readonly<{ code: string; message: string }>): string {
  if (error.code === "unauthorized") return "Connect your Privy wallet.";
  if (error.code === "invalid_contract") return "Couldn't verify pack data. Refresh and try again.";
  if (error.code === "missing_evidence") return "Wallet sign-in is unavailable. Try again.";
  return error.message;
}

const browserStorage: Pick<Storage, "getItem" | "setItem" | "removeItem"> = {
  getItem: key => typeof window === "undefined" ? null : window.localStorage.getItem(key),
  setItem: (key, value) => {
    if (typeof window === "undefined") throw new Error("browser_storage_unavailable");
    window.localStorage.setItem(key, value);
  },
  removeItem: key => {
    if (typeof window !== "undefined") window.localStorage.removeItem(key);
  },
};

export type StockPacksPlayerRouteProps = Readonly<{
  hostedAuth: RoyaleHostedAuth;
  apiBaseUrl: string;
  rpcUrl: string;
  network: "devnet" | "mainnet";
  stockOnly?: boolean;
  /** Stock host only; defaults to the VITE_STOCK_PACKS_THEME=stonks build flag. */
  stonksTheme?: boolean;
}>;

function useAuthenticatedStockPacksJourney({
  hostedAuth,
  apiBaseUrl,
  rpcUrl,
  network,
}: StockPacksPlayerRouteProps) {
  const stockCopy = useStockPacksBrand().id === "stonkpacks";
  const [actor, setActor] = useState<StockPackActorV1 | null>(null);
  const [sessionState, setSessionState] = useState<"idle" | "loading" | "ready" | "unavailable">("idle");
  const [sessionMessage, setSessionMessage] = useState<string | null>(null);
  const [sessionIssue, setSessionIssue] = useState<StockPacksSessionIssue | null>(null);
  const [sessionAttempt, setSessionAttempt] = useState(0);
  const actorRef = useRef(actor);
  const authRef = useRef(hostedAuth);
  actorRef.current = actor;
  authRef.current = hostedAuth;

  const connection = useMemo(() => rpcUrl.trim() ? new Connection(rpcUrl.trim(), "confirmed") : null, [rpcUrl]);
  const apiUrl = useMemo(() => {
    const origin = apiBaseUrl.trim().replace(/\/+$/u, "");
    return (path: string) => origin ? `${origin}${path}` : path;
  }, [apiBaseUrl]);
  const clients = useMemo(() => createStockPacksHttpClients({
    auth: () => authRef.current,
    actor: () => actorRef.current,
    apiUrl,
    storage: browserStorage,
    async createPaymentTransaction({ actor: paymentActor, amount, recipient, memo }) {
      if (!connection) throw new Error("stock_pack_rpc_unavailable");
      if (amount.asset.namespace !== "solana" || amount.asset.assetStandard !== "spl_token") {
        throw new Error("stock_pack_payment_asset_invalid");
      }
      const expectedChain = network === "mainnet" ? "solana:mainnet-beta" : "solana:devnet";
      if (amount.asset.chainId !== expectedChain) throw new Error("stock_pack_payment_network_changed");
      const latest = await connection.getLatestBlockhash("finalized");
      const destinationTokenAccount = stockPackPaymentRecipientTokenAccount({
        mint: amount.asset.assetAddress,
        recipientWallet: recipient,
      });
      const unsigned = await buildRoyaleUsdcTransferUnsignedTx({
        cluster: network === "mainnet" ? "mainnet-beta" : "devnet",
        amountRaw: amount.rawAmount,
        usdcMint: amount.asset.assetAddress,
        destinationTokenAccount,
        ownerWallet: paymentActor.wallet,
        memo,
        packetHash: null,
      }, { recentBlockhash: latest.blockhash, rpcUrl: rpcUrl.trim(), createSourceAtaIdempotently: false });
      if (unsigned.recentBlockhash !== latest.blockhash) throw new Error("stock_pack_payment_blockhash_changed");
      return { unsignedTransaction: unsigned.bytes, blockhash: latest.blockhash,
        lastValidBlockHeight: latest.lastValidBlockHeight };
    },
    async signOnly(bytes) {
      const sign = authRef.current.signSolanaTransactionOnly;
      if (!sign) throw new Error("privy_sign_only_unavailable");
      return sign(bytes);
    },
    async broadcastSignedTransaction(input) {
      if (!connection) throw new Error("stock_pack_rpc_unavailable");
      await broadcastStockPackPayment(connection, input);
    },
  }), [apiUrl, connection, network, rpcUrl]);

  useEffect(() => {
    let cancelled = false;
    void sessionAttempt; // retrySession() re-runs the session read
    setActor(null);
    setSessionMessage(null);
    setSessionIssue(null);
    if (!hostedAuth.authenticated) {
      setSessionState("idle");
      return undefined;
    }
    if (!hostedAuth.userId) {
      setSessionState("unavailable");
      setSessionIssue("account");
      setSessionMessage(stockCopy ? "Privy account unavailable. Sign in again." : "Your verified Privy account is unavailable.");
      return undefined;
    }
    if (!hostedAuth.walletAddress) {
      setSessionState("unavailable");
      setSessionIssue("no_wallet");
      setSessionMessage(stockCopy ? "Connect your Privy Solana wallet." : "Your verified Privy Solana wallet is unavailable.");
      return undefined;
    }
    setSessionState("loading");
    void clients.session().then((result) => {
      if (cancelled) return;
      if (!result.ok || result.value.actor.wallet !== hostedAuth.walletAddress) {
        setSessionState("unavailable");
        setSessionIssue(result.ok ? "wallet_changed" : "error");
        setSessionMessage(result.ok
          ? stockCopy ? "Wallet changed. Reconnect your Privy wallet." : "The connected Privy wallet changed."
          : stockCopy ? stockSessionErrorMessage(result.error) : result.error.message);
        return;
      }
      const expectedNetwork = network === "mainnet" ? "solana:mainnet-beta" : "solana:devnet";
      if (result.value.network !== expectedNetwork) {
        setSessionState("unavailable");
        setSessionIssue("network");
        setSessionMessage(stockCopy ? "Switch to the Stock Pack network." : "The Stock Packs network does not match this player route.");
        console.error(`[stonkpacks] network mismatch: page ${expectedNetwork}, API ${result.value.network}`);
        return;
      }
      setActor(result.value.actor);
      setSessionState("ready");
    }).catch(() => {
      if (!cancelled) {
        setSessionState("unavailable");
        setSessionIssue("error");
        setSessionMessage(stockCopy ? "Wallet sign-in is unavailable. Try again." : "Stock Packs authentication is temporarily unavailable.");
      }
    });
    return () => { cancelled = true; };
  }, [clients, hostedAuth.authenticated, hostedAuth.userId, hostedAuth.walletAddress, network, sessionAttempt, stockCopy]);

  const retrySession = useCallback(() => setSessionAttempt((attempt) => attempt + 1), []);
  const journey = useStockPacksPlayer({ actor, client: clients.player, stockCopy });
  return { actor, clients, connection, journey, retrySession, sessionIssue, sessionMessage, sessionState } as const;
}

function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(() => {
    try {
      return typeof window !== "undefined"
        && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      return false;
    }
  });
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);
  return reducedMotion;
}

/**
 * Actual hosted adapter for the existing Royale player surface. It composes
 * the shared mast and current pack renderer around exact Stock Pack terms.
 */
export function StockPacksPlayerRoute(props: StockPacksPlayerRouteProps) {
  const lpVisible = useStockPacksBrand().id === "stonkpacks";
  const { hostedAuth } = props;
  const { actor, clients, connection, journey, retrySession, sessionIssue, sessionMessage, sessionState } =
    useAuthenticatedStockPacksJourney(props);
  // Stock host only: honest day-one state, login states and the account strip.
  const stockHost = lpVisible;
  const stonksTheme = stockHost && (props.stonksTheme ?? STOCK_PACKS_STONKS_THEME);
  const purchasesOpen = stockHost ? STOCK_PACKS_PURCHASES_OPEN : true;
  const loginState = stockPacksLoginState(hostedAuth);
  const walletSetup = useStockPacksWalletSetupGrace(hostedAuth);
  const OpeningHeading = stockHost ? "h1" : "h2";
  const saleController = useStockPacksSaleController({
    stockCopy: lpVisible,
    actor,
    client: clients.sale,
    signOnly: hostedAuth.signSolanaTransactionOnly,
    card: journey.snapshot?.selectedCard ?? null,
    deliveryReceipt: stockPacksSaleDeliveryReceipt(journey.snapshot),
    usdcDigest: journey.snapshot?.walletBalance?.asset.identityDigest
      ?? journey.snapshot?.campaigns[0]?.campaign.preview.recipe.quoteAsset.identityDigest
      ?? null,
  });
  const purchaseDisabledReason = !connection
    ? lpVisible ? "Pack payment is unavailable." : "Stock Packs payment connection is unavailable."
    : !hostedAuth.signSolanaTransactionOnly
      ? lpVisible ? "This wallet cannot approve transactions." : "Privy transaction approval is unavailable for this wallet."
      : null;
  const stage = stockPacksStageView(journey.snapshot, journey.pendingAction);
  const reducedMotion = useReducedMotion();
  const visualPhase = stage.phase === "opening"
    ? "opening"
    : journey.snapshot?.selectedCard ? "revealed" : stage.phase === "committing" ? "committed" : "chooser";

  return (
    <section
      className="royaleV2Route royaleV2Route--simplified royaleResultsRoute stockPacksPlayerRoute"
      data-testid="stock-packs-player-route"
    >
      <header className="royaleResultsHead">
        <RoyaleBrandMark variant="page" />
        <strong>Stock Packs</strong>
        <RoyaleSurfaceNav />
      </header>

      {/* RoyaleNormalPackOpening receipts assert board placement and reward
          semantics that Stock Packs do not own. Reuse its real renderer and
          layout directly while the Stock API remains the sole receipt source. */}
      <section
        className="royaleNormalPackOpening stockPacksPlayerOpening"
        aria-label={lpVisible ? "Rip a Stock Pack" : "Open a Stock Pack"}
        aria-busy={journey.pendingAction !== null || sessionState === "loading"}
        data-visual-phase={visualPhase}
        data-reduced-motion={reducedMotion || undefined}
      >
        <OpeningHeading className="royaleNormalPackOpening__heading">{lpVisible ? "Rip a Stock Pack" : "Open a Stock Pack"}</OpeningHeading>
        <div className="royaleNormalPackOpening__studio">
          <div className="royaleNormalPackOpening__experience">
            <div className="royaleNormalPackOpening__stage" data-stage-step={stage.phase} aria-live="polite">
              <div className="royaleNormalPackOpening__sealedResult">
                {stonksTheme ? (
                  <StonksBoardBand
                    reducedMotion={reducedMotion}
                    chipStart={stonksHeroChipStart(journey.snapshot, stage.label)}
                    chipEnd={STONKS_HERO_CHIP_END}
                  >
                    <NormalPackStage3D
                      packId={stage.packId}
                      label={stage.label}
                      imageUrl=""
                      phase={stage.phase}
                      quickReveal={false}
                      reducedMotion={reducedMotion}
                      className="royaleNormalPackOpening__livePack"
                      stonksHero
                    />
                  </StonksBoardBand>
                ) : (
                  <NormalPackStage3D
                    packId={stage.packId}
                    label={stage.label}
                    imageUrl=""
                    phase={stage.phase}
                    quickReveal={false}
                    reducedMotion={reducedMotion}
                    className="royaleNormalPackOpening__livePack"
                  />
                )}
                <div className="royaleNormalPackOpening__stageCopy">
                  <span>STOCK PACK</span>
                  <strong className="stockPacksPlayerStageTitle">{stage.label}</strong>
                  <small>{!purchasesOpen
                    ? "Packs drop soon."
                    : lpVisible
                      ? "1 pack, 1 reward. Sent to your verified Solana wallet."
                      : "One published reward is drawn and delivered to your verified Solana wallet."}</small>
                </div>
              </div>
            </div>

            {stockHost ? <StockPacksConfigAlert /> : null}
            {stockHost ? (
              <StockPacksAccountBar auth={hostedAuth} issue={sessionIssue} walletSetup={walletSetup}
                onRetry={retrySession} />
            ) : null}
            {sessionState === "loading" ? (
              <section className="stockPacksPlayer royaleNormalPackContents__state" role="status">
                <strong>Loading your Stock Packs…</strong>
                <small>Verifying your Privy account and Solana wallet.</small>
              </section>
            ) : (
              <>
                {sessionMessage && !stockHost ? <p className="stockPacksPlayer__error" role="alert">{sessionMessage}</p> : null}
                <StockPacksPlayerPanel
                  actorConnected={sessionState === "ready" && actor !== null}
                  journey={journey}
                  saleController={saleController}
                  purchaseDisabledReason={purchaseDisabledReason}
                  purchasesOpen={purchasesOpen}
                  loginState={loginState}
                  onFundWallet={hostedAuth.fundSolanaWallet
                    ? (input) => { void hostedAuth.fundSolanaWallet?.(input).catch(() => undefined); }
                    : null}
                  onConnect={() => hostedAuth.login?.()}
                  onClose={openRoyaleCollection}
                />
                {stonksTheme ? <StonksFactsRow /> : null}
              </>
            )}
          </div>
        </div>
      </section>
      {stonksTheme ? <StonksLowerPage reducedMotion={reducedMotion} /> : null}
    </section>
  );
}

/** Stock cards for the canonical collection route, projected from authenticated API history. */
export function StockPacksCollectionSection(props: StockPacksPlayerRouteProps) {
  const { hostedAuth } = props;
  const { actor, journey, retrySession, sessionIssue, sessionMessage, sessionState } = useAuthenticatedStockPacksJourney(props);
  const walletSetup = useStockPacksWalletSetupGrace(hostedAuth);
  // Stock host history page only; the Royale host renders this section unchanged.
  const brandId = useStockPacksBrand().id;
  const stockOnly = props.stockOnly === true && brandId === "stonkpacks";
  const HeadingTag = stockOnly ? "h1" : "h2";
  const entries = stockPacksCollectionEntries(journey.snapshot).filter((entry) =>
    props.stockOnly ? entry.acquisition.mode === "paid" : true);
  return (
    <section className="stockPacksCollection" aria-labelledby="stock-packs-collection-title">
      {props.stockOnly ? <RoyaleSurfaceNav current="collection" /> : null}
      <header className="stockPacksCollection__head">
        <div><span>Stock Packs</span><HeadingTag id="stock-packs-collection-title">{props.stockOnly ? "Tokens from your packs" : "Tokens in your Stock history"}</HeadingTag></div>
        <small>{props.stockOnly ? "Wallet delivery and swap status" : "Authoritative delivery and sale state"}</small>
      </header>
      {stockOnly ? <StockPacksAccountBar auth={hostedAuth} issue={sessionIssue} walletSetup={walletSetup} onRetry={retrySession} /> : null}
      {sessionState === "loading" ? (
        <p className="stockPacksCollection__state" role="status">Loading Stock Pack history…</p>
      ) : sessionMessage && stockOnly && hostedAuth.authenticated ? (
        null
      ) : sessionMessage ? (
        <p className="stockPacksPlayer__error" role="alert">{sessionMessage}</p>
      ) : sessionState !== "ready" || actor === null ? (
        <div className="stockPacksCollection__state">
          <p>Connect with Privy to read Stock Pack token deliveries in your wallet.</p>
          {stockOnly ? (
            <StockPacksConnectButton auth={hostedAuth} className="stockPacksPlayer__primary stockPacksCollection__connect" />
          ) : (
            <button type="button" className="stockPacksPlayer__primary stockPacksCollection__connect" onClick={() => hostedAuth.login?.()}>
              Connect with Privy
            </button>
          )}
        </div>
      ) : stockOnly && journey.pendingAction === "load" && !journey.snapshot ? (
        <p className="stockPacksCollection__state" role="status">Loading Stock Pack history…</p>
      ) : stockOnly && journey.error && !journey.snapshot ? (
        <div className="stockPacksCollection__state" role="alert">
          <p>History did not load. {stockPacksErrorCopy(journey.error)}</p>
          <button type="button" className="stockPacksPlayer__primary stockPacksCollection__connect" onClick={journey.reload}>Retry</button>
        </div>
      ) : entries.length === 0 ? (
        <p className="stockPacksCollection__state">{props.stockOnly ? "No Stock Pack pulls yet." : "No drawn Stock Pack rewards yet."}</p>
      ) : (
        <div className="stockPacksCollection__grid">
          {entries.map((entry) => (
            <div className="stockPacksCollection__item" key={entry.operationId} data-state={entry.state}>
              <div className="stockPacksCollection__meta">
                <strong>{entry.state.replaceAll("_", " ")}</strong>
                <time dateTime={entry.updatedAt}>{new Date(entry.updatedAt).toLocaleString()}</time>
              </div>
              <StockPayoffCard acquisition={entry.acquisition} card={entry.card} selected stockCopy={props.stockOnly === true} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function useStockPacksSaleController(input: Readonly<{
  stockCopy: boolean;
  actor: StockPackActorV1 | null;
  client: ReturnType<typeof createStockPacksHttpClients>["sale"];
  signOnly: RoyaleHostedAuth["signSolanaTransactionOnly"];
  card: StockPackPayoffCardV1 | null;
  deliveryReceipt: Parameters<typeof createStockPackSaleActions>[0]["deliveryReceipt"];
  usdcDigest: string | null;
}>): StockPacksSaleController | null {
  const [state, setState] = useState<StockPackSaleViewState>(IDLE_SALE);
  const [now, setNow] = useState(() => new Date().toISOString());
  const actorRef = useRef(input.actor);
  actorRef.current = input.actor;
  const delivered = input.deliveryReceipt;
  const saleKey = input.actor && input.card && delivered && input.usdcDigest && input.signOnly
    ? `${input.actor.actorAccountId}:${input.card.cardId}:${delivered.terminalDigest}`
    : null;
  const saleKeyRef = useRef(saleKey);
  const actions = useMemo(() => {
    if (!saleKey || !input.actor || !input.card || !delivered || !input.usdcDigest || !input.signOnly) return null;
    return createStockPackSaleActions({
      stockCopy: input.stockCopy,
      actor: () => actorRef.current,
      client: input.client,
      amount: { asset: input.card.lot.asset, rawAmount: input.card.lot.exactAssetAmount },
      deliveryReceipt: delivered,
      usdcDigest: input.usdcDigest,
      signOnly: input.signOnly,
      storage: browserStorage,
      withLock: async (name, work) => {
        if (typeof navigator === "undefined" || !navigator.locks) throw new Error(input.stockCopy
          ? "Swap recovery is unavailable in another tab."
          : "Cross-tab sale recovery is unavailable.");
        return navigator.locks.request(name, work);
      },
      onChange: setState,
    });
  }, [delivered, input.actor, input.card, input.client, input.signOnly, input.stockCopy, input.usdcDigest, saleKey]);

  useEffect(() => {
    if (saleKeyRef.current === saleKey) return;
    saleKeyRef.current = saleKey;
    setState(IDLE_SALE);
  }, [saleKey]);
  useEffect(() => {
    if (!actions) return undefined;
    const timer = window.setInterval(() => setNow(new Date().toISOString()), 15_000);
    return () => window.clearInterval(timer);
  }, [actions]);
  if (!actions) return null;
  return { state, now,
    onQuote: () => { void actions.prepare(); },
    onRefresh: () => { void actions.refresh(); },
    onConfirm: () => { void actions.confirm(); },
    onRecover: () => { void actions.recover(); } };
}

function openRoyaleCollection() {
  if (typeof window === "undefined") return;
  window.history.pushState({}, "", "/stock-packs/collection");
  window.dispatchEvent(new PopStateEvent("popstate"));
}
