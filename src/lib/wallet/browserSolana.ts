import { getWallets } from "@wallet-standard/app";
import bs58 from "bs58";

const SOLANA_MOBILE_WALLET_ADAPTER_WALLET_NAME = "Mobile Wallet Adapter";

export type SolanaPublicKeyLike = {
  toString(): string;
};

type WalletStandardAccountLike = Readonly<{
  address: string;
  publicKey: Uint8Array;
  chains: readonly string[];
  features: readonly string[];
}>;

type WalletStandardConnectOutput = Readonly<{
  accounts: readonly WalletStandardAccountLike[];
}>;

type WalletStandardWalletLike = Readonly<{
  name: string;
  accounts: readonly WalletStandardAccountLike[];
  features: Readonly<Record<string, unknown>>;
}>;

type WalletStandardTransactionOptions = Readonly<{
  chain?: string;
  preflightCommitment?: "processed" | "confirmed" | "finalized";
  minContextSlot?: number;
  skipPreflight?: boolean;
  maxRetries?: number;
}>;

export type SolanaBrowserProvider = {
  isConnected?: boolean;
  isPhantom?: boolean;
  isSolflare?: boolean;
  name?: string;
  publicKey?: SolanaPublicKeyLike | string | null;
  connect?: (options?: { onlyIfTrusted?: boolean }) => Promise<{ publicKey?: SolanaPublicKeyLike | string | null } | void>;
  disconnect?: () => Promise<void> | void;
  signAndSendTransaction?: (transaction: unknown, options?: unknown) => Promise<{ signature?: string } | string>;
  signTransaction?: (transaction: unknown) => Promise<{ serialize?: () => Uint8Array }>;
};

export type DetectedSolanaWallet = {
  id: string;
  label: string;
  provider: SolanaBrowserProvider;
  readyState: "installed";
  canConnect: boolean;
  canSignAndSend: boolean;
  detectionSource: "window.solana" | "phantom.solana" | "solflare" | "wallet-standard";
};

type WindowWithSolana = Window & {
  phantom?: { solana?: unknown };
  solana?: unknown;
  solflare?: unknown;
};

type NavigatorWithWallets = Navigator & {
  wallets?: {
    get?: () => unknown[];
  };
};

export function detectSolanaWallets(): DetectedSolanaWallet[] {
  if (typeof window === "undefined") return [];

  return detectSolanaWalletsFromSources({
    browserWindow: window as WindowWithSolana,
    legacyWallets: (window.navigator as NavigatorWithWallets).wallets?.get?.() ?? [],
    standardWallets: getWallets().get(),
  });
}

type WalletRegistryListener = Pick<ReturnType<typeof getWallets>, "on">;

export function onSolanaWalletRegistryChange(
  listener: () => void,
  wallets: WalletRegistryListener = getWallets(),
): () => void {
  const offRegister = wallets.on("register", listener);
  const offUnregister = wallets.on("unregister", listener);
  return () => {
    offRegister();
    offUnregister();
  };
}

export function detectSolanaWalletsFromSources(input: Readonly<{
  browserWindow: WindowWithSolana;
  legacyWallets?: readonly unknown[];
  standardWallets?: readonly unknown[];
}>): DetectedSolanaWallet[] {
  const { browserWindow } = input;

  const detected: DetectedSolanaWallet[] = [];
  const seen = new Set<SolanaBrowserProvider>();
  const seenIds = new Set<string>();

  addProvider(detected, seen, seenIds, browserWindow.solana, "window.solana");
  addProvider(detected, seen, seenIds, browserWindow.phantom?.solana, "phantom.solana");
  addProvider(detected, seen, seenIds, browserWindow.solflare, "solflare");

  for (const wallet of [...(input.standardWallets ?? []), ...(input.legacyWallets ?? [])]) {
    const provider = readWalletStandardProvider(wallet);
    if (provider) addProvider(detected, seen, seenIds, provider, "wallet-standard");
  }

  return detected;
}

export async function connectSolanaWallet(wallet: DetectedSolanaWallet): Promise<string> {
  const response = await wallet.provider.connect?.();
  const publicKey = readPublicKey(response?.publicKey ?? wallet.provider.publicKey);
  if (!publicKey) throw new Error("wallet_public_key_missing");
  return publicKey;
}

export async function tryTrustedSolanaReconnect(wallet: DetectedSolanaWallet): Promise<string | null> {
  if (!wallet.provider.connect) return readPublicKey(wallet.provider.publicKey);
  try {
    const response = await wallet.provider.connect({ onlyIfTrusted: true });
    return readPublicKey(response?.publicKey ?? wallet.provider.publicKey);
  } catch {
    return readPublicKey(wallet.provider.publicKey);
  }
}

export function readPublicKey(value: SolanaPublicKeyLike | string | null | undefined): string | null {
  if (!value) return null;
  const normalized = typeof value === "string" ? value : value.toString();
  return normalized.trim() || null;
}

function addProvider(
  detected: DetectedSolanaWallet[],
  seen: Set<SolanaBrowserProvider>,
  seenIds: Set<string>,
  candidate: unknown,
  detectionSource: DetectedSolanaWallet["detectionSource"],
) {
  if (!isSolanaProvider(candidate) || seen.has(candidate)) return;
  const id = walletId(candidate, detectionSource);
  if (seenIds.has(id)) return;
  seen.add(candidate);
  seenIds.add(id);
  detected.push({
    id,
    label: walletLabel(candidate, detectionSource),
    provider: candidate,
    readyState: "installed",
    canConnect: typeof candidate.connect === "function",
    canSignAndSend: typeof candidate.signAndSendTransaction === "function" || typeof candidate.signTransaction === "function",
    detectionSource,
  });
}

function readWalletStandardProvider(wallet: unknown): SolanaBrowserProvider | null {
  if (!wallet || typeof wallet !== "object") return null;
  const row = wallet as WalletStandardWalletLike;
  const features = row.features ?? {};
  const connectFeature = features["standard:connect"] as
    | { connect?: (input?: { silent?: boolean }) => Promise<WalletStandardConnectOutput> }
    | undefined;
  const disconnectFeature = features["standard:disconnect"] as
    | { disconnect?: () => Promise<void> }
    | undefined;
  const signAndSendFeature = features["solana:signAndSendTransaction"] as
    | {
        signAndSendTransaction?: (...inputs: readonly Readonly<{
          account: WalletStandardAccountLike;
          transaction: Uint8Array;
          chain: string;
          options?: Omit<WalletStandardTransactionOptions, "chain">;
        }>[]) => Promise<readonly Readonly<{ signature: Uint8Array }>[]>
      }
    | undefined;
  const signFeature = features["solana:signTransaction"] as
    | {
        signTransaction?: (...inputs: readonly Readonly<{
          account: WalletStandardAccountLike;
          transaction: Uint8Array;
          chain?: string;
          options?: Omit<WalletStandardTransactionOptions, "chain">;
        }>[]) => Promise<readonly Readonly<{ signedTransaction: Uint8Array }>[]>
      }
    | undefined;

  if (!connectFeature?.connect) return null;

  let currentAccount = row.accounts[0] ?? null;
  const provider: SolanaBrowserProvider = {
    name: row.name,
    publicKey: currentAccount?.address ?? null,
    connect: async (options) => {
      const output = await connectFeature.connect?.({ silent: options?.onlyIfTrusted === true });
      currentAccount = output?.accounts[0] ?? row.accounts[0] ?? null;
      provider.publicKey = currentAccount?.address ?? null;
      return currentAccount ? { publicKey: currentAccount.address } : undefined;
    },
  };

  if (disconnectFeature?.disconnect) {
    provider.disconnect = async () => {
      await disconnectFeature.disconnect?.();
      currentAccount = null;
      provider.publicKey = null;
    };
  }

  if (signAndSendFeature?.signAndSendTransaction) {
    provider.signAndSendTransaction = async (transaction, rawOptions) => {
      const account = await requireWalletStandardAccount(provider, row, currentAccount);
      currentAccount = account;
      const options = readWalletStandardOptions(rawOptions);
      const chain = options.chain ?? account.chains.find((value) => value.startsWith("solana:"));
      if (!chain) throw new Error("wallet_standard_chain_missing");
      const [output] = await signAndSendFeature.signAndSendTransaction?.({
        account,
        transaction: serializeWalletStandardTransaction(transaction),
        chain,
        options: withoutChain(options),
      }) ?? [];
      if (!output?.signature) throw new Error("wallet_signature_missing");
      return { signature: bs58.encode(output.signature) };
    };
  }

  if (signFeature?.signTransaction) {
    provider.signTransaction = async (transaction) => {
      const account = await requireWalletStandardAccount(provider, row, currentAccount);
      currentAccount = account;
      const chain = account.chains.find((value) => value.startsWith("solana:"));
      const [output] = await signFeature.signTransaction?.({
        account,
        transaction: serializeWalletStandardTransaction(transaction),
        ...(chain ? { chain } : {}),
      }) ?? [];
      if (!output?.signedTransaction) throw new Error("wallet_signed_transaction_missing");
      return { serialize: () => output.signedTransaction };
    };
  }

  return provider;
}

async function requireWalletStandardAccount(
  provider: SolanaBrowserProvider,
  wallet: WalletStandardWalletLike,
  currentAccount: WalletStandardAccountLike | null,
): Promise<WalletStandardAccountLike> {
  if (currentAccount) return currentAccount;
  const response = await provider.connect?.();
  const address = readPublicKey(response?.publicKey ?? provider.publicKey);
  const account = wallet.accounts.find((candidate) => candidate.address === address)
    ?? wallet.accounts[0];
  if (!account) throw new Error("wallet_standard_account_missing");
  return account;
}

function serializeWalletStandardTransaction(transaction: unknown): Uint8Array {
  if (transaction instanceof Uint8Array) return transaction;
  if (!transaction || typeof transaction !== "object") {
    throw new Error("wallet_standard_transaction_invalid");
  }
  const serialize = (transaction as {
    serialize?: (config?: {
      requireAllSignatures?: boolean;
      verifySignatures?: boolean;
    }) => Uint8Array;
  }).serialize;
  if (typeof serialize !== "function") throw new Error("wallet_standard_transaction_invalid");
  return new Uint8Array(serialize.call(transaction, {
    requireAllSignatures: false,
    verifySignatures: false,
  }));
}

function readWalletStandardOptions(value: unknown): WalletStandardTransactionOptions {
  if (!value || typeof value !== "object") return {};
  const row = value as WalletStandardTransactionOptions;
  return {
    ...(typeof row.chain === "string" ? { chain: row.chain } : {}),
    ...(row.preflightCommitment ? { preflightCommitment: row.preflightCommitment } : {}),
    ...(typeof row.minContextSlot === "number" ? { minContextSlot: row.minContextSlot } : {}),
    ...(typeof row.skipPreflight === "boolean" ? { skipPreflight: row.skipPreflight } : {}),
    ...(typeof row.maxRetries === "number" ? { maxRetries: row.maxRetries } : {}),
  };
}

function withoutChain(options: WalletStandardTransactionOptions) {
  const { chain: _chain, ...transactionOptions } = options;
  return transactionOptions;
}

function isSolanaProvider(candidate: unknown): candidate is SolanaBrowserProvider {
  if (!candidate || typeof candidate !== "object") return false;
  const row = candidate as SolanaBrowserProvider;
  return (
    typeof row.connect === "function" ||
    typeof row.signAndSendTransaction === "function" ||
    typeof row.signTransaction === "function" ||
    readPublicKey(row.publicKey) !== null
  );
}

function walletId(provider: SolanaBrowserProvider, source: DetectedSolanaWallet["detectionSource"]) {
  if (provider.isPhantom) return "phantom";
  if (provider.isSolflare) return "solflare";
  return provider.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || source.replace(/[^a-z0-9]+/g, "-");
}

function walletLabel(provider: SolanaBrowserProvider, source: DetectedSolanaWallet["detectionSource"]) {
  if (provider.isPhantom) return "Phantom";
  if (provider.isSolflare) return "Solflare";
  if (provider.name === SOLANA_MOBILE_WALLET_ADAPTER_WALLET_NAME) return "Use Installed Wallet";
  if (provider.name) return provider.name;
  if (source === "wallet-standard") return "wallet-standard wallet";
  return "Solana wallet";
}
