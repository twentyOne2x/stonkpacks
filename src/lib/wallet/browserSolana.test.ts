import assert from "node:assert/strict";
import test from "node:test";

import bs58 from "bs58";

import {
  connectSolanaWallet,
  detectSolanaWalletsFromSources,
  onSolanaWalletRegistryChange,
} from "./browserSolana";

test("the existing web wallet rail adapts Mobile Wallet Adapter Wallet Standard calls", async () => {
  const account = {
    address: "7YWHMfk9JZe0LM0g1w4P5mYB7UzKj4M6F4hrc1p9jyk",
    publicKey: new Uint8Array(32).fill(7),
    chains: ["solana:devnet", "solana:mainnet"],
    features: ["solana:signAndSendTransaction"],
  };
  const calls: unknown[] = [];
  const signatureBytes = new Uint8Array(64).fill(9);
  const standardWallet = {
    name: "Mobile Wallet Adapter",
    accounts: [] as typeof account[],
    features: {
      "standard:connect": {
        connect: async (input?: { silent?: boolean }) => {
          calls.push({ connect: input });
          standardWallet.accounts = [account];
          return { accounts: [account] };
        },
      },
      "solana:signAndSendTransaction": {
        signAndSendTransaction: async (...inputs: unknown[]) => {
          calls.push({ signAndSendTransaction: inputs });
          return [{ signature: signatureBytes }];
        },
      },
    },
  };

  const [wallet] = detectSolanaWalletsFromSources({
    browserWindow: {} as Window,
    standardWallets: [standardWallet],
  });
  assert.ok(wallet);
  assert.equal(wallet.id, "mobile-wallet-adapter");
  assert.equal(wallet.label, "Use Installed Wallet");
  assert.equal(await connectSolanaWallet(wallet), account.address);

  let serializationOptions: unknown = null;
  const sent = await wallet.provider.signAndSendTransaction?.(
    {
      serialize: (options: unknown) => {
        serializationOptions = options;
        return new Uint8Array([1, 2, 3]);
      },
    },
    { chain: "solana:mainnet", preflightCommitment: "confirmed" },
  );

  assert.deepEqual(serializationOptions, {
    requireAllSignatures: false,
    verifySignatures: false,
  });
  assert.deepEqual(sent, { signature: bs58.encode(signatureBytes) });
  assert.deepEqual(calls[0], { connect: { silent: false } });
  assert.deepEqual(calls[1], {
    signAndSendTransaction: [{
      account,
      transaction: new Uint8Array([1, 2, 3]),
      chain: "solana:mainnet",
      options: { preflightCommitment: "confirmed" },
    }],
  });
});

test("late Wallet Standard registration refreshes the existing wallet rail", () => {
  const listeners = new Map<string, () => void>();
  const removed: string[] = [];
  let refreshes = 0;
  const off = onSolanaWalletRegistryChange(
    () => {
      refreshes += 1;
    },
    {
      on: (event, listener) => {
        listeners.set(event, listener as () => void);
        return () => removed.push(event);
      },
    },
  );

  listeners.get("register")?.();
  listeners.get("unregister")?.();
  assert.equal(refreshes, 2);
  off();
  assert.deepEqual(removed.sort(), ["register", "unregister"]);
});
