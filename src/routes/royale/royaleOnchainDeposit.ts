// USDC-config-aware prepared on-chain deposit path for Pack Royale.
//
// The no-token MVP credits a local demo ledger (see royaleDepositLedger). This
// module adds the honest *next rung* toward a real hosted canary: when the
// environment actually wires a Solana USDC deposit target (mint + treasury USDC
// token account + cluster), the single Add Game USDC entrypoint additionally
// PREPARES an unsigned, non-broadcasting SPL USDC transfer descriptor — reusing
// the repo's buildUsdcTransferActionPacket — which is the closest safe on-chain
// action available without a funded, connected wallet to sign.
//
// CUSTODY BOUNDARY (unchanged): a prepared packet is NOT a broadcast. No funds
// move from this preview — the packet is built for a connected wallet to sign
// later, and serverWillBroadcast/automaticFundsMovement are false. The demo
// balance credit stays play money. When the config is absent, the deposit stays
// a pure local demo credit and this module reports the EXACT missing-config
// blocker so the boundary is operator- and smoke-readable.

import {
  buildUsdcTransferActionPacket,
  type SolanaUsdcPaymentPlan,
  type UsdcTransferActionPacket,
} from "../../lib/payment/solanaUsdcTransfer";
import { formatUsd } from "../../lib/formatUsd";

export type RoyaleOnchainCluster = SolanaUsdcPaymentPlan["cluster"];

/** Canonical SPL Token program id (USDC uses the classic token program). */
export const SPL_TOKEN_PROGRAM_ID = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
/** USDC is a 6-decimal SPL token. */
export const USDC_DECIMALS = 6 as const;

const VALID_CLUSTERS: RoyaleOnchainCluster[] = ["mainnet-beta", "devnet", "localnet"];

/** Raw environment map (Vite import.meta.env at runtime; an explicit object in tests). */
export type RoyaleRawEnv = Record<string, string | undefined>;

/** Read import.meta.env defensively — returns {} under node/test where it is absent. */
export function getRoyaleOnchainEnv(): RoyaleRawEnv {
  try {
    return ((import.meta as unknown as { env?: RoyaleRawEnv }).env ?? {}) as RoyaleRawEnv;
  } catch {
    return {};
  }
}

function readEnv(env: RoyaleRawEnv, ...keys: string[]): string {
  for (const key of keys) {
    const value = env[key];
    if (typeof value === "string" && value.trim().length > 0) return value.trim();
  }
  return "";
}

/** Convert a USD amount to a base-unit (6-decimal) integer string with no float drift. */
export function toUsdcRawAmount(amountUsd: number): string {
  return String(Math.round(amountUsd * 10 ** USDC_DECIMALS));
}

export type RoyaleOnchainState =
  | "not_configured"
  | "configured_awaiting_wallet"
  | "prepared"
  | "signer_ready"
  | "signed_devnet_ready"
  | "signed_devnet_sent";

export type RoyaleOnchainPreview = {
  amountUsd: number;
  amountRaw: string;
  decimals: typeof USDC_DECIMALS;
  cluster: RoyaleOnchainCluster;
  usdcMint: string;
  destinationTokenAccount: string;
  memo: string;
};

// Clusters on which a signed send is permitted at this tier. Mainnet is NEVER
// signable here, so a misconfigured/real mint can never expose a button that
// moves real funds — the signed path stays a non-mainnet (devnet/localnet) action.
const SIGNABLE_CLUSTERS: RoyaleOnchainCluster[] = ["devnet", "localnet"];

/** Request handed to a wallet signer when the user clicks "sign & send on devnet". */
export type RoyaleSignSendRequest = {
  cluster: RoyaleOnchainCluster;
  amountRaw: string;
  usdcMint: string;
  destinationTokenAccount: string;
  ownerWallet: string;
  memo: string;
  /** Deterministic hash of the prepared packet being signed (audit trail). */
  packetHash: string | null;
};

/** Outcome of a user-clicked sign+send. The DEV synthetic signer never broadcasts. */
export type RoyaleSignSendResult = {
  signature: string;
  cluster: RoyaleOnchainCluster;
  /** True only if the signature actually hit a real chain. DEV synthetic = false. */
  broadcast: boolean;
  sentAtIso: string;
  /** Honest method label, e.g. dev_synthetic_non_broadcast | privy_solana_devnet. */
  method: string;
};

/**
 * Structural capability describing whether a CALLABLE sign+send is wired into the
 * current app shell. The honest real-Privy path supplies `available: false` with
 * the exact missing method, because the hosted-auth bridge does not (yet) wire
 * @privy-io/react-auth/solana useSignAndSendTransaction + embedded Solana wallets.
 * A DEV proof seam supplies an `available: true` NON-BROADCASTING signer so the
 * signed devnet flow can be exercised without real funds. The callable is never
 * auto-invoked — only a user click runs it (see useRoyaleGame.signDevnetDeposit).
 */
export type RoyaleSignerCapability = {
  /** Is a callable sign+send actually usable right now? */
  available: boolean;
  /** Stable identifier of the signing method for honest readback. */
  method: string;
  /** Does invoking it broadcast to a real chain? DEV synthetic signer = false. */
  broadcasts: boolean;
  /** Exact missing method/steps when not available (empty when available). */
  missing: string[];
  /** The callable sign+send. Present only when available; never auto-invoked. */
  signAndSend?: (request: RoyaleSignSendRequest) => Promise<RoyaleSignSendResult>;
};

/** Serializable subset of a signer capability surfaced on the readback. */
export type RoyaleSignerSummary = {
  available: boolean;
  method: string;
  broadcasts: boolean;
};

/**
 * The EXACT method an honest real-Privy app shell must wire to make a staged
 * signer callable. The current hosted-auth bridge only authenticates and reads
 * the user's wallet address — it does not wire a Solana signer — so an
 * authenticated session over a configured devnet target stops at `signer_ready`
 * naming this step rather than claiming a signed broadcast.
 */
export const PRIVY_SOLANA_SIGNER_MISSING_METHOD =
  "wire @privy-io/react-auth/solana useSignAndSendTransaction() + enable embedded Solana wallets in the Privy dashboard/PrivyProvider so useWallets() returns a signer for the authenticated address";

/**
 * The real-Privy signer capability as it honestly stands in this app shell:
 * staged but NOT callable. Supplied by main.tsx for an authenticated session so
 * the on-chain readback reaches `signer_ready` with the exact missing method,
 * never a silent or claimed broadcast.
 */
export function unwiredPrivySolanaSigner(): RoyaleSignerCapability {
  return {
    available: false,
    method: "privy_solana_useSignAndSendTransaction",
    broadcasts: true,
    missing: [PRIVY_SOLANA_SIGNER_MISSING_METHOD],
  };
}

// ---------------------------------------------------------------------------
// Real Privy Solana signer wiring (devnet-only, user-clicked, no-secret bridge)
// ---------------------------------------------------------------------------
//
// The honest *next rung* the supervisor asked for: actually wire
// @privy-io/react-auth/solana useSignAndSendTransaction() + useWallets() so an
// authenticated Privy session that carries an embedded Solana wallet gets a REAL,
// broadcast-capable signer instead of the unwired stub above. main.tsx calls the
// Privy hooks (which must live inside PrivyProvider) and hands the results to the
// pure factory below — keeping this module SDK-agnostic and unit-testable.
//
// SAFETY (no-secret-signer-bridge + crypto-speed-ladder):
//   * DEVNET ONLY. signAndSend throws on any cluster other than `devnet` — mainnet
//     can NEVER be signed/broadcast through this path (the chain handed to Privy is
//     a literal `solana:devnet`, never derived from a mainnet cluster).
//   * Codex never sees a private key — Privy custodies the embedded wallet key and
//     performs the sign+broadcast; we only build and hand over the unsigned tx.
//   * User-clicked only — invoked solely from the explicit Sign & send action.
//   * No embedded wallet → `available:false` naming the exact remaining external
//     step, so the readback honestly stays signer_ready rather than claiming a send.

/** Structural subset of a Privy ConnectedStandardSolanaWallet this module consumes. */
export type PrivySolanaWalletLike = { address: string };

export const PRIVY_SOLANA_DEVNET_SPONSOR_OPTIONS = Object.freeze({
  sponsor: true,
});

export type PrivySolanaDevnetTransactionMode =
  | Readonly<{
      sponsored: false;
      privyOptions: undefined;
    }>
  | Readonly<{
      sponsored: true;
      privyOptions: typeof PRIVY_SOLANA_DEVNET_SPONSOR_OPTIONS;
    }>;

/**
 * Resolve one immutable mode for both the Privy call and durable recovery
 * metadata. Sponsorship is admitted only when both the public app setting and
 * the exact authenticated unified-wallet shape opt in.
 */
export function resolvePrivySolanaDevnetTransactionMode(input: Readonly<{
  appSponsorshipEnabled: boolean;
  unifiedWalletEligible: boolean;
}>): PrivySolanaDevnetTransactionMode {
  if (
    input.appSponsorshipEnabled
    && input.unifiedWalletEligible
  ) {
    return Object.freeze({
      sponsored: true,
      privyOptions: PRIVY_SOLANA_DEVNET_SPONSOR_OPTIONS,
    });
  }
  return Object.freeze({
    sponsored: false,
    privyOptions: undefined,
  });
}

/** The callable returned by Privy's solana useSignAndSendTransaction() hook. */
export type PrivySignAndSendTransaction = (input: {
  transaction: Uint8Array;
  wallet: PrivySolanaWalletLike;
  chain: "solana:devnet";
}) => Promise<{ signature: Uint8Array }>;

/** Inputs main.tsx threads from the Privy solana hooks into the pure factory. */
export type PrivySolanaSignerDeps = {
  /** Connected standard Solana wallets from useWallets() (solana subpath). */
  wallets: PrivySolanaWalletLike[];
  /** Whether useWallets() reports the wallet list as ready. */
  walletsReady: boolean;
  /** The authenticated session's Solana wallet address (from the Privy user). */
  authenticatedWalletAddress: string | null;
  /** Privy's signAndSendTransaction callable (custodies the key, signs + broadcasts). */
  signAndSendTransaction: PrivySignAndSendTransaction;
  /**
   * Overridable unsigned-tx-bytes builder. Defaults to the real devnet SPL transfer
   * builder (which fetches a fresh devnet blockhash). Injected in unit tests so the
   * devnet gate + Privy-call wiring can be exercised hermetically (no network).
   */
  buildTransactionBytes?: (request: RoyaleSignSendRequest) => Promise<Uint8Array>;
};

/**
 * The exact remaining external step when the Privy hooks ARE wired but the
 * authenticated user has no usable embedded Solana wallet (none created/linked, or
 * embedded Solana wallets not enabled in the Privy dashboard). With this wired, the
 * code-side blocker is gone; only this funding/account step remains before a real
 * devnet broadcast.
 */
export const PRIVY_SOLANA_NO_EMBEDDED_WALLET_MISSING =
  "no embedded Solana wallet on the authenticated Privy session: enable embedded Solana wallets in the Privy dashboard and create/link one for this user, then fund it with USDC + SOL";

/**
 * Pure factory: turns the (live) Privy solana hook results into a RoyaleSigner
 * capability. Returns a CALLABLE, broadcast-capable signer only when an embedded
 * wallet matching the authenticated address is ready; otherwise an honest
 * `available:false` capability naming the exact remaining step. The returned
 * signAndSend is devnet-hard-gated and never auto-invoked.
 */
export function buildPrivySolanaSignerCapability(deps: PrivySolanaSignerDeps): RoyaleSignerCapability {
  const wallet = selectAuthenticatedEmbeddedWallet(deps);
  if (!wallet) {
    return {
      available: false,
      method: "privy_solana_useSignAndSendTransaction",
      broadcasts: true,
      missing: [PRIVY_SOLANA_NO_EMBEDDED_WALLET_MISSING],
    };
  }

  return {
    available: true,
    method: "privy_solana_useSignAndSendTransaction",
    broadcasts: true,
    missing: [],
    signAndSend: async (request: RoyaleSignSendRequest): Promise<RoyaleSignSendResult> => {
      // Hard devnet gate: mainnet (and anything that is not devnet) can never be
      // signed or broadcast through the real Privy path. This is the custody
      // ceiling enforced in code, not just config.
      if (request.cluster !== "devnet") {
        throw new Error(
          `royale_privy_signer_devnet_only: refusing to sign+send on ${request.cluster}; only devnet is permitted at this tier`,
        );
      }
      const buildBytes = deps.buildTransactionBytes ?? buildUsdcTransferTransactionBytes;
      const transaction = await buildBytes(request);
      const { signature } = await deps.signAndSendTransaction({
        transaction,
        wallet,
        chain: "solana:devnet",
      });
      return {
        signature: base58Encode(signature),
        cluster: "devnet",
        broadcast: true,
        sentAtIso: new Date().toISOString(),
        method: "privy_solana_useSignAndSendTransaction",
      };
    },
  };
}

/**
 * Pick the connected Solana wallet that matches the authenticated session address.
 * Fails CLOSED to null (no ready list, no authed address, or no exact match) so a
 * send can never bind to a non-authenticated or external wallet.
 */
function selectAuthenticatedEmbeddedWallet(deps: PrivySolanaSignerDeps): PrivySolanaWalletLike | null {
  if (!deps.walletsReady) return null;
  const authed = deps.authenticatedWalletAddress?.trim();
  if (!authed) return null;
  return deps.wallets.find((wallet) => wallet?.address?.trim() === authed) ?? null;
}

/** Default devnet RPC used when the caller does not supply a recent blockhash. */
export const ROYALE_DEVNET_RPC_URL = "https://api.devnet.solana.com";

/** Structured result of building the unsigned devnet USDC transfer. */
export type RoyaleUsdcTransferUnsignedTx = {
  /** Serialized unsigned wire bytes (Privy adds the signature). */
  bytes: Uint8Array;
  /** Recent blockhash baked into the transaction (live-fetched when not supplied). */
  recentBlockhash: string;
  /** Owner's derived USDC associated token account (the transfer source). */
  sourceTokenAccount: string;
};

/**
 * Build the unsigned legacy SPL USDC transfer_checked (+ memo) transaction for the
 * prepared request. This is the SINGLE source of truth for the bytes that get
 * signed+broadcast: the real Privy devnet signer (buildUsdcTransferTransactionBytes
 * below) and the live-devnet readback canary
 * (scripts/runRoyaleDevnetUsdcReadback.ts) both call it, so the readback proves the
 * exact bytes Privy would broadcast.
 *
 * The recent blockhash is live-fetched from devnet by default; tests/readbacks may
 * inject `options.recentBlockhash` to stay hermetic or to assert a known value. No
 * signing or broadcasting happens here — the returned bytes are unsigned.
 */
export async function buildRoyaleUsdcTransferUnsignedTx(
  request: RoyaleSignSendRequest,
  options: {
    recentBlockhash?: string;
    rpcUrl?: string;
    createSourceAtaIdempotently?: boolean;
  } = {},
): Promise<RoyaleUsdcTransferUnsignedTx> {
  const [{ Connection, PublicKey, Transaction, TransactionInstruction }, splToken] = await Promise.all([
    import("@solana/web3.js"),
    import("@solana/spl-token"),
  ]);
  const {
    createAssociatedTokenAccountIdempotentInstruction,
    createTransferCheckedInstruction,
    getAssociatedTokenAddressSync,
  } = splToken;

  const owner = new PublicKey(request.ownerWallet);
  const mint = new PublicKey(request.usdcMint);
  const tokenProgram = new PublicKey(SPL_TOKEN_PROGRAM_ID);
  const source = getAssociatedTokenAddressSync(mint, owner, false, tokenProgram);
  const destination = new PublicKey(request.destinationTokenAccount);

  let recentBlockhash = options.recentBlockhash?.trim() || "";
  if (!recentBlockhash) {
    const connection = new Connection(options.rpcUrl ?? ROYALE_DEVNET_RPC_URL, "confirmed");
    ({ blockhash: recentBlockhash } = await connection.getLatestBlockhash("confirmed"));
  }

  const transaction = new Transaction({ feePayer: owner, recentBlockhash });
  if (options.createSourceAtaIdempotently) {
    transaction.add(
      createAssociatedTokenAccountIdempotentInstruction(
        owner,
        source,
        owner,
        mint,
        tokenProgram,
      ),
    );
  }
  transaction.add(
    createTransferCheckedInstruction(
      source,
      mint,
      destination,
      owner,
      BigInt(request.amountRaw),
      USDC_DECIMALS,
      [],
      tokenProgram,
    ),
  );
  transaction.add(
    new TransactionInstruction({
      keys: [],
      programId: new PublicKey(MEMO_PROGRAM_ID),
      data: new TextEncoder().encode(request.memo) as never,
    }),
  );

  // Unsigned wire bytes — Privy adds the signature. Never require/verify sigs here.
  const bytes = transaction.serialize({ requireAllSignatures: false, verifySignatures: false });
  return { bytes, recentBlockhash, sourceTokenAccount: source.toBase58() };
}

/**
 * Build the wire bytes of an unsigned legacy SPL USDC transfer_checked (+ memo)
 * transaction for the prepared request, with a fresh devnet blockhash. Thin wrapper
 * over buildRoyaleUsdcTransferUnsignedTx that returns just the bytes for Privy's
 * signAndSendTransaction, which custodies the key, signs, and broadcasts on devnet.
 */
async function buildUsdcTransferTransactionBytes(request: RoyaleSignSendRequest): Promise<Uint8Array> {
  const { bytes } = await buildRoyaleUsdcTransferUnsignedTx(request);
  return bytes;
}

/** Canonical Memo program id (matches lib/payment/solanaUsdcTransfer). */
const MEMO_PROGRAM_ID = "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr";

const BASE58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

/** Minimal base58 encode for a Solana signature (no extra dependency). */
export function base58Encode(bytes: Uint8Array): string {
  if (bytes.length === 0) return "";
  const digits: number[] = [0];
  for (const byte of bytes) {
    let carry = byte;
    for (let index = 0; index < digits.length; index += 1) {
      carry += (digits[index] ?? 0) * 256;
      digits[index] = carry % 58;
      carry = Math.floor(carry / 58);
    }
    while (carry > 0) {
      digits.push(carry % 58);
      carry = Math.floor(carry / 58);
    }
  }
  let leadingZeros = "";
  for (const byte of bytes) {
    if (byte === 0) leadingZeros += "1";
    else break;
  }
  let encoded = "";
  for (let index = digits.length - 1; index >= 0; index -= 1) {
    encoded += BASE58_ALPHABET[digits[index] ?? 0];
  }
  return leadingZeros + encoded;
}

export type RoyaleOnchainReadback = {
  state: RoyaleOnchainState;
  /** True when mint + treasury + a valid cluster are all present. */
  configured: boolean;
  cluster: RoyaleOnchainCluster | null;
  usdcMint: string | null;
  treasuryUsdcTokenAccount: string | null;
  /** Exact missing env keys/steps when not fully configured (empty when configured). */
  missingConfig: string[];
  /** What still blocks an actual broadcast even when fully configured. */
  missingForBroadcast: string[];
  /** Deterministic prepared-transfer preview (present whenever configured). */
  preview: RoyaleOnchainPreview | null;
  /** Complete unsigned, non-broadcasting packet — only when a wallet is connected. */
  packet: UsdcTransferActionPacket | null;
  /** Serializable signer capability for the current shell, or null when irrelevant. */
  signer: RoyaleSignerSummary | null;
  /** True when a user can click to sign+send on devnet/localnet right now. */
  canSignDevnet: boolean;
  /** Exact missing method/steps before a signed devnet send is possible. */
  missingForSignedDeposit: string[];
  /** Recorded signature once a user-clicked send completed (else null). */
  sentSignature: string | null;
  /** ISO timestamp of the completed send, or null. */
  sentAtIso: string | null;
  /** Whether the completed send actually broadcast to a real chain (DEV = false). */
  sentBroadcast: boolean;
  /** Honest one-line summary of the current on-chain readiness. */
  summary: string;
  /**
   * Whether THIS readback path auto-broadcasts or moves funds. Always false: the
   * derivation never signs or broadcasts on its own — a send only ever happens
   * from an explicit, stateful user click via the (optional) signer capability.
   */
  broadcast: false;
};

export type RoyaleOnchainDepositInput = {
  env: RoyaleRawEnv;
  amountUsd: number;
  /** Stable account id, woven into the deterministic transfer memo. */
  accountId: string;
  /** Connected Solana wallet address (e.g. a Privy embedded wallet), if any. */
  walletAddress?: string | null;
  /** Connected wallet's USDC associated token account, if known. */
  sourceTokenAccount?: string | null;
  /**
   * Sign+send capability of the current app shell, if any. When absent the path
   * stays at the prepared (unsigned, non-broadcast) fallback — preserving every
   * existing caller. When present-but-unavailable it reaches `signer_ready` with
   * the exact missing method; when present-and-available on a non-mainnet cluster
   * it reaches `signed_devnet_ready`.
   */
  signer?: RoyaleSignerCapability | null;
  /** A prior user-clicked send result, so a completed send renders deterministically. */
  sent?: RoyaleSignSendResult | null;
};

const NOT_CONFIGURED_SUMMARY =
  "On-chain USDC deposit is not configured. Add Game USDC credits the local demo ledger only (no chain action prepared).";

/**
 * Pure readback of the on-chain deposit path for the current env + account. It
 * NEVER signs or broadcasts: when fully configured + a wallet is connected it
 * builds the unsigned, non-broadcasting transfer packet; otherwise it reports the
 * exact missing config or the wallet still required before a broadcast.
 */
export function deriveRoyaleOnchainDeposit(input: RoyaleOnchainDepositInput): RoyaleOnchainReadback {
  const { env, amountUsd, accountId } = input;
  const usdcMint = readEnv(env, "VITE_ROYALE_USDC_MINT", "NEXT_PUBLIC_ROYALE_USDC_MINT");
  const treasury = readEnv(env, "VITE_ROYALE_USDC_TREASURY", "NEXT_PUBLIC_ROYALE_USDC_TREASURY");
  const clusterRaw = readEnv(
    env,
    "VITE_ROYALE_SOLANA_CLUSTER",
    "NEXT_PUBLIC_ROYALE_SOLANA_CLUSTER",
    "VITE_SOLANA_CLUSTER",
    "NEXT_PUBLIC_SOLANA_CLUSTER",
  );
  // A configured deposit target with no explicit cluster defaults to devnet — the
  // safest non-mainnet target — never mainnet, so a missing cluster can't silently
  // point a prepared transfer at real funds.
  const clusterValue = clusterRaw || (usdcMint && treasury ? "devnet" : "");
  const clusterValid = (VALID_CLUSTERS as string[]).includes(clusterValue);
  const tokenProgramId =
    readEnv(env, "VITE_ROYALE_USDC_TOKEN_PROGRAM", "NEXT_PUBLIC_ROYALE_USDC_TOKEN_PROGRAM") || SPL_TOKEN_PROGRAM_ID;

  const missingConfig: string[] = [];
  if (!usdcMint) missingConfig.push("set VITE_ROYALE_USDC_MINT to the USDC SPL mint address");
  if (!treasury) missingConfig.push("set VITE_ROYALE_USDC_TREASURY to the destination USDC token account");
  if (clusterValue && !clusterValid) {
    missingConfig.push("set VITE_ROYALE_SOLANA_CLUSTER to one of mainnet-beta | devnet | localnet");
  }

  if (missingConfig.length > 0 || !clusterValid) {
    return {
      state: "not_configured",
      configured: false,
      cluster: clusterValid ? (clusterValue as RoyaleOnchainCluster) : null,
      usdcMint: usdcMint || null,
      treasuryUsdcTokenAccount: treasury || null,
      missingConfig,
      missingForBroadcast: [],
      preview: null,
      packet: null,
      signer: null,
      canSignDevnet: false,
      missingForSignedDeposit: [],
      sentSignature: null,
      sentAtIso: null,
      sentBroadcast: false,
      summary: NOT_CONFIGURED_SUMMARY,
      broadcast: false,
    };
  }

  const cluster = clusterValue as RoyaleOnchainCluster;
  const amountRaw = toUsdcRawAmount(amountUsd);
  const memo = `attn.packRoyale.deposit.onchain.${cluster} | ${accountId}`;
  const preview: RoyaleOnchainPreview = {
    amountUsd,
    amountRaw,
    decimals: USDC_DECIMALS,
    cluster,
    usdcMint,
    destinationTokenAccount: treasury,
    memo,
  };

  const walletAddress = input.walletAddress?.trim() || "";
  if (!walletAddress) {
    return {
      state: "configured_awaiting_wallet",
      configured: true,
      cluster,
      usdcMint,
      treasuryUsdcTokenAccount: treasury,
      missingConfig: [],
      missingForBroadcast: ["connect a funded Solana wallet to sign the prepared USDC transfer"],
      preview,
      packet: null,
      signer: null,
      canSignDevnet: false,
      missingForSignedDeposit: ["connect a funded Solana wallet before a signed devnet deposit is possible"],
      sentSignature: null,
      sentAtIso: null,
      sentBroadcast: false,
      summary: `On-chain USDC deposit is configured on ${cluster}. Connect a funded wallet to sign the prepared transfer (nothing is broadcast here).`,
      broadcast: false,
    };
  }

  const sourceTokenAccount = input.sourceTokenAccount?.trim() || null;
  const plan: SolanaUsdcPaymentPlan = {
    orderId: `royale-deposit-${accountId}-${amountRaw}`,
    chain: "solana",
    cluster,
    paymentAsset: "USDC",
    amountUsdc: amountUsd,
    amountRaw,
    decimals: USDC_DECIMALS,
    usdcMint,
    tokenProgramId,
    walletAddress,
    // Only set the optional source account when we actually know it (omitted, not
    // undefined, to satisfy exactOptionalPropertyTypes).
    ...(sourceTokenAccount ? { buyerUsdcTokenAccount: sourceTokenAccount } : {}),
    treasuryUsdcTokenAccount: treasury,
    memo,
    instruction: {
      kind: "spl_token_transfer_checked",
      programId: tokenProgramId,
      amountRaw,
      decimals: USDC_DECIMALS,
      accounts: {
        ...(sourceTokenAccount ? { sourceTokenAccount } : {}),
        mint: usdcMint,
        destinationTokenAccount: treasury,
        ownerWallet: walletAddress,
      },
    },
    unsignedOnly: true,
    broadcastByServer: false,
  };
  const packet = buildUsdcTransferActionPacket(plan, sourceTokenAccount);

  const signer = input.signer ?? null;
  const signerSummary: RoyaleSignerSummary | null = signer
    ? { available: signer.available, method: signer.method, broadcasts: signer.broadcasts }
    : null;
  const signableCluster = (SIGNABLE_CLUSTERS as string[]).includes(cluster);

  // No signer wired at all → the unchanged prepared (unsigned, non-broadcast)
  // fallback. Every existing caller (and both existing proofs) lands here.
  if (!signer) {
    return {
      state: "prepared",
      configured: true,
      cluster,
      usdcMint,
      treasuryUsdcTokenAccount: treasury,
      missingConfig: [],
      // The signature + broadcast are intentionally NOT performed here — that is the
      // custody boundary, not a config gap.
      missingForBroadcast: ["sign the prepared transfer in your wallet and broadcast; intentionally not done in this preview"],
      preview,
      packet,
      signer: null,
      canSignDevnet: false,
      missingForSignedDeposit: ["wire a Solana sign+send capability (signer) before a signed devnet deposit is possible"],
      sentSignature: null,
      sentAtIso: null,
      sentBroadcast: false,
      summary: `Prepared an unsigned ${formatRawUsdc(amountRaw)} USDC transfer on ${cluster} → ${shortAddress(
        treasury,
      )} (not signed, not broadcast).`,
      broadcast: false,
    };
  }

  // A signer is staged but mainnet is never signable at this tier: keep the
  // prepared packet and refuse to expose a send button against real funds.
  if (!signableCluster) {
    return {
      state: "prepared",
      configured: true,
      cluster,
      usdcMint,
      treasuryUsdcTokenAccount: treasury,
      missingConfig: [],
      missingForBroadcast: ["sign the prepared transfer in your wallet and broadcast; intentionally not done in this preview"],
      preview,
      packet,
      signer: signerSummary,
      canSignDevnet: false,
      missingForSignedDeposit: [
        `signed send is restricted to ${SIGNABLE_CLUSTERS.join(" / ")} at this tier; mainnet sign/send is disabled`,
      ],
      sentSignature: null,
      sentAtIso: null,
      sentBroadcast: false,
      summary: `Prepared an unsigned ${formatRawUsdc(amountRaw)} USDC transfer on ${cluster} → ${shortAddress(
        treasury,
      )} (signed send disabled off devnet/localnet).`,
      broadcast: false,
    };
  }

  // A signer is staged but its callable method is not actually wired into this app
  // shell (the honest real-Privy path): stage a signer-ready handoff naming the
  // EXACT missing method. The packet is prepared; nothing is signed.
  if (!signer.available || typeof signer.signAndSend !== "function") {
    return {
      state: "signer_ready",
      configured: true,
      cluster,
      usdcMint,
      treasuryUsdcTokenAccount: treasury,
      missingConfig: [],
      missingForBroadcast: ["sign the prepared transfer in your wallet and broadcast; intentionally not done in this preview"],
      preview,
      packet,
      signer: signerSummary,
      canSignDevnet: false,
      missingForSignedDeposit: signer.missing.length
        ? signer.missing
        : [`wire a callable ${signer.method} for the authenticated wallet`],
      sentSignature: null,
      sentAtIso: null,
      sentBroadcast: false,
      summary: `Signer-ready on ${cluster}: prepared the ${formatRawUsdc(amountRaw)} USDC transfer for ${shortAddress(
        walletAddress,
      )}. Awaiting a callable signer (${signer.method}). Not signed, not broadcast.`,
      broadcast: false,
    };
  }

  // A completed user-clicked send is recorded → signed_devnet_sent.
  if (input.sent) {
    return {
      state: "signed_devnet_sent",
      configured: true,
      cluster,
      usdcMint,
      treasuryUsdcTokenAccount: treasury,
      missingConfig: [],
      missingForBroadcast: [],
      preview,
      packet,
      signer: signerSummary,
      canSignDevnet: false,
      missingForSignedDeposit: [],
      sentSignature: input.sent.signature,
      sentAtIso: input.sent.sentAtIso,
      sentBroadcast: input.sent.broadcast,
      summary: input.sent.broadcast
        ? `Signed & sent ${formatRawUsdc(amountRaw)} USDC on ${cluster} → ${shortAddress(treasury)} · sig ${shortAddress(
            input.sent.signature,
          )}.`
        : `Signed (non-broadcast) ${formatRawUsdc(amountRaw)} USDC on ${cluster} → ${shortAddress(
            treasury,
          )} · ${signer.method} sig ${shortAddress(input.sent.signature)} (no real chain broadcast).`,
      broadcast: false,
    };
  }

  // A callable signer is wired on a non-mainnet cluster: expose an explicit,
  // user-clicked sign+send action. Still nothing happens until the user clicks.
  return {
    state: "signed_devnet_ready",
    configured: true,
    cluster,
    usdcMint,
    treasuryUsdcTokenAccount: treasury,
    missingConfig: [],
    missingForBroadcast: signer.broadcasts
      ? []
      : [`${signer.method} signs but does not broadcast; a real devnet broadcast still needs a funded wallet + RPC`],
    preview,
    packet,
    signer: signerSummary,
    canSignDevnet: true,
    missingForSignedDeposit: [],
    sentSignature: null,
    sentAtIso: null,
    sentBroadcast: false,
    summary: `Ready to sign & send ${formatRawUsdc(amountRaw)} USDC on ${cluster} → ${shortAddress(
      treasury,
    )}. Click to sign (${signer.method}). Nothing is sent until you click.`,
    broadcast: false,
  };
}

/** Build the sign+send request from a configured, signable readback (or null). */
export function buildSignSendRequest(readback: RoyaleOnchainReadback): RoyaleSignSendRequest | null {
  if (!readback.canSignDevnet || !readback.preview || !readback.packet) return null;
  return {
    cluster: readback.preview.cluster,
    amountRaw: readback.preview.amountRaw,
    usdcMint: readback.preview.usdcMint,
    destinationTokenAccount: readback.preview.destinationTokenAccount,
    ownerWallet: readback.packet.walletAddress,
    memo: readback.preview.memo,
    packetHash: readback.packet.deterministicPacketHash,
  };
}

/** Human-readable USDC amount from a 6-decimal base-unit string (display only). */
export function formatRawUsdc(amountRaw: string): string {
  const value = Number(amountRaw) / 10 ** USDC_DECIMALS;
  return Number.isFinite(value) ? formatUsd(value) : amountRaw;
}

/** Truncate a base58 address for compact display (e.g. AbCd…WxYz). */
export function shortAddress(address: string): string {
  return address.length > 12 ? `${address.slice(0, 4)}…${address.slice(-4)}` : address;
}
