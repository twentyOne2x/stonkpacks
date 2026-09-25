import type { DetectedSolanaWallet } from "../wallet/browserSolana";

export type SolanaUsdcPaymentPlan = {
  orderId: string;
  chain: "solana";
  cluster: "mainnet-beta" | "devnet" | "localnet";
  paymentAsset: "USDC";
  amountUsdc: number;
  amountRaw: string;
  decimals: 6;
  usdcMint: string;
  tokenProgramId: string;
  walletAddress: string;
  buyerUsdcTokenAccount?: string;
  treasuryUsdcTokenAccount: string;
  memo: string;
  instruction: {
    kind: "spl_token_transfer_checked";
    programId: string;
    amountRaw: string;
    decimals: 6;
    accounts: {
      sourceTokenAccount?: string;
      mint: string;
      destinationTokenAccount: string;
      ownerWallet: string;
    };
  };
  unsignedOnly: true;
  broadcastByServer: false;
};

export type UsdcTransferActionPacket = {
  kind: "attn_packs_unsigned_solana_usdc_transfer";
  version: 1;
  orderId: string;
  chain: "solana";
  cluster: SolanaUsdcPaymentPlan["cluster"];
  paymentAsset: "USDC";
  amountUsdc: number;
  amountRaw: string;
  decimals: 6;
  walletAddress: string;
  sourceTokenAccount: string | null;
  destinationTokenAccount: string;
  usdcMint: string;
  tokenProgramId: string;
  memo: string;
  instructions: Array<{
    programId: string;
    name: "transfer_checked" | "memo";
    amountRaw?: string;
    decimals?: 6;
    accounts?: Record<string, string | null>;
    data?: string;
  }>;
  serverWillBroadcast: false;
  requiresUserWalletSignature: true;
  automaticFundsMovement: false;
  deterministicPacketHash: string;
};

export type SentUsdcTransfer = {
  signature: string;
  sourceTokenAccount: string;
  confirmationStatus: "finalized";
};

const MEMO_PROGRAM_ID = "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr";
export const CLASSIC_SPL_TOKEN_PROGRAM_ID = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";

type MintAccountOwner = {
  owner: { toBase58(): string };
};

type TransactionConfirmation = {
  value: { err: unknown | null };
};

export async function assertSupportedMintTokenProgram<TMint>(args: {
  mint: TMint;
  plannedTokenProgramId: string;
  readMintAccount: (mint: TMint) => Promise<MintAccountOwner | null>;
}): Promise<typeof CLASSIC_SPL_TOKEN_PROGRAM_ID> {
  if (args.plannedTokenProgramId !== CLASSIC_SPL_TOKEN_PROGRAM_ID) {
    throw new Error(`unsupported_token_program:${args.plannedTokenProgramId}`);
  }
  const mintAccount = await args.readMintAccount(args.mint);
  if (!mintAccount) throw new Error("mint_account_not_found");
  const observedTokenProgramId = mintAccount.owner.toBase58();
  if (observedTokenProgramId !== args.plannedTokenProgramId) {
    throw new Error(`token_program_mint_owner_mismatch:${observedTokenProgramId}`);
  }
  return CLASSIC_SPL_TOKEN_PROGRAM_ID;
}

export async function requireFinalizedTransactionConfirmation(
  confirm: (commitment: "finalized") => Promise<TransactionConfirmation>,
): Promise<"finalized"> {
  const confirmation = await confirm("finalized");
  if (confirmation?.value?.err !== null) {
    throw new Error(`solana_transaction_failed:${formatConfirmationError(confirmation?.value?.err)}`);
  }
  return "finalized";
}

export function buildUsdcTransferActionPacket(plan: SolanaUsdcPaymentPlan, sourceTokenAccount?: string | null): UsdcTransferActionPacket {
  const packetWithoutHash = {
    kind: "attn_packs_unsigned_solana_usdc_transfer" as const,
    version: 1 as const,
    orderId: plan.orderId,
    chain: plan.chain,
    cluster: plan.cluster,
    paymentAsset: plan.paymentAsset,
    amountUsdc: plan.amountUsdc,
    amountRaw: plan.amountRaw,
    decimals: plan.decimals,
    walletAddress: plan.walletAddress,
    sourceTokenAccount: sourceTokenAccount ?? plan.buyerUsdcTokenAccount ?? plan.instruction.accounts.sourceTokenAccount ?? null,
    destinationTokenAccount: plan.treasuryUsdcTokenAccount,
    usdcMint: plan.usdcMint,
    tokenProgramId: plan.tokenProgramId,
    memo: plan.memo,
    instructions: [
      {
        programId: plan.tokenProgramId,
        name: "transfer_checked" as const,
        amountRaw: plan.amountRaw,
        decimals: plan.decimals,
        accounts: {
          sourceTokenAccount: sourceTokenAccount ?? plan.buyerUsdcTokenAccount ?? plan.instruction.accounts.sourceTokenAccount ?? null,
          mint: plan.usdcMint,
          destinationTokenAccount: plan.treasuryUsdcTokenAccount,
          ownerWallet: plan.walletAddress,
        },
      },
      {
        programId: MEMO_PROGRAM_ID,
        name: "memo" as const,
        data: plan.memo,
      },
    ],
    serverWillBroadcast: false as const,
    requiresUserWalletSignature: true as const,
    automaticFundsMovement: false as const,
  };

  return {
    ...packetWithoutHash,
    deterministicPacketHash: stableHash(packetWithoutHash),
  };
}

export function defaultSolanaRpcUrl(cluster: SolanaUsdcPaymentPlan["cluster"]) {
  if (cluster === "devnet") return "https://api.devnet.solana.com";
  if (cluster === "localnet") return "http://127.0.0.1:8899";
  return "https://api.mainnet-beta.solana.com";
}

export async function signAndSendUsdcTransfer(args: {
  plan: SolanaUsdcPaymentPlan;
  rpcUrl: string;
  wallet: DetectedSolanaWallet;
}): Promise<SentUsdcTransfer> {
  const [{ Connection, PublicKey, Transaction, TransactionInstruction }, splToken] = await Promise.all([
    import("@solana/web3.js"),
    import("@solana/spl-token"),
  ]);
  const { createTransferCheckedInstruction, getAssociatedTokenAddressSync } = splToken;

  const owner = new PublicKey(args.plan.walletAddress);
  const mint = new PublicKey(args.plan.usdcMint);
  const tokenProgram = new PublicKey(args.plan.tokenProgramId);
  const connection = new Connection(args.rpcUrl, "confirmed");
  await assertSupportedMintTokenProgram({
    mint,
    plannedTokenProgramId: tokenProgram.toBase58(),
    readMintAccount: (mintAddress) => connection.getAccountInfo(mintAddress, "finalized"),
  });
  const source = args.plan.buyerUsdcTokenAccount
    ? new PublicKey(args.plan.buyerUsdcTokenAccount)
    : getAssociatedTokenAddressSync(mint, owner, false, tokenProgram);
  const destination = new PublicKey(args.plan.treasuryUsdcTokenAccount);
  const latestBlockhash = await connection.getLatestBlockhash("confirmed");
  const transaction = new Transaction({
    feePayer: owner,
    recentBlockhash: latestBlockhash.blockhash,
  });

  transaction.add(
    createTransferCheckedInstruction(source, mint, destination, owner, BigInt(args.plan.amountRaw), args.plan.decimals, [], tokenProgram),
  );
  transaction.add(
    new TransactionInstruction({
      keys: [],
      programId: new PublicKey(MEMO_PROGRAM_ID),
      data: new TextEncoder().encode(args.plan.memo) as never,
    }),
  );

  const signature = await sendWithWallet(
    args.wallet,
    transaction,
    connection,
    walletStandardChain(args.plan.cluster),
  );
  const confirmationStatus = await requireFinalizedTransactionConfirmation(
    (commitment) => connection.confirmTransaction(
      {
        signature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      },
      commitment,
    ),
  );

  return {
    signature,
    sourceTokenAccount: source.toString(),
    confirmationStatus,
  };
}

async function sendWithWallet(
  wallet: DetectedSolanaWallet,
  transaction: unknown,
  connection: { sendRawTransaction: (raw: Uint8Array) => Promise<string> },
  chain: "solana:devnet" | "solana:mainnet" | "solana:localnet",
) {
  if (wallet.provider.signAndSendTransaction) {
    const response = await wallet.provider.signAndSendTransaction(transaction, {
      chain,
      preflightCommitment: "confirmed",
    });
    const signature = typeof response === "string" ? response : response.signature;
    if (!signature) throw new Error("wallet_signature_missing");
    return signature;
  }

  if (wallet.provider.signTransaction) {
    const signed = await wallet.provider.signTransaction(transaction);
    const raw = signed.serialize?.();
    if (!raw) throw new Error("wallet_signed_transaction_missing");
    return connection.sendRawTransaction(raw);
  }

  throw new Error("wallet_sign_send_unsupported");
}

function walletStandardChain(
  cluster: SolanaUsdcPaymentPlan["cluster"],
): "solana:devnet" | "solana:mainnet" | "solana:localnet" {
  if (cluster === "devnet") return "solana:devnet";
  if (cluster === "localnet") return "solana:localnet";
  return "solana:mainnet";
}

function stableHash(value: unknown) {
  const input = stableStringify(value);
  let hash = 0x811c9dc5;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return `fnv1a32:${(hash >>> 0).toString(16).padStart(8, "0")}`;
}

function formatConfirmationError(error: unknown): string {
  try {
    const serialized = JSON.stringify(error);
    return serialized === undefined ? String(error) : serialized;
  } catch {
    return String(error);
  }
}

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
  const row = value as Record<string, unknown>;
  return `{${Object.keys(row)
    .sort()
    .map((key) => `${JSON.stringify(key)}:${stableStringify(row[key])}`)
    .join(",")}}`;
}
