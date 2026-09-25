// Deterministic checks for the prepared (unsigned, non-broadcast) on-chain
// USDC deposit path.
// Run: npx tsx --test apps/web/src/routes/royale/royaleOnchainDeposit.test.ts
import assert from "node:assert/strict";
import { test } from "node:test";

import {
  base58Encode,
  buildPrivySolanaSignerCapability,
  buildRoyaleUsdcTransferUnsignedTx,
  buildSignSendRequest,
  deriveRoyaleOnchainDeposit,
  formatRawUsdc,
  PRIVY_SOLANA_NO_EMBEDDED_WALLET_MISSING,
  shortAddress,
  toUsdcRawAmount,
  unwiredPrivySolanaSigner,
  type PrivySolanaSignerDeps,
  type RoyaleRawEnv,
  type RoyaleSignSendRequest,
  type RoyaleSignSendResult,
  type RoyaleSignerCapability,
} from "./royaleOnchainDeposit";

const MINT = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";
const TREASURY = "RoyaLeTestTreasury1111111111111111111111111";
const WALLET = "RoyaLeTestWa11et2222222222222222222222222222";

/** A callable, NON-BROADCASTING signer for tests — mirrors the DEV proof seam. */
function callableSigner(): RoyaleSignerCapability {
  return {
    available: true,
    method: "test_non_broadcast_devnet",
    broadcasts: false,
    missing: [],
    signAndSend: async (request: RoyaleSignSendRequest): Promise<RoyaleSignSendResult> => ({
      signature: `TESTSIG${request.packetHash ?? "nohash"}`,
      cluster: request.cluster,
      broadcast: false,
      sentAtIso: "2026-06-27T00:00:00.000Z",
      method: "test_non_broadcast_devnet",
    }),
  };
}

function configuredEnv(overrides: RoyaleRawEnv = {}): RoyaleRawEnv {
  return {
    VITE_ROYALE_USDC_MINT: MINT,
    VITE_ROYALE_USDC_TREASURY: TREASURY,
    VITE_ROYALE_SOLANA_CLUSTER: "devnet",
    ...overrides,
  };
}

test("empty env → not_configured with the exact missing-config blocker", () => {
  const readback = deriveRoyaleOnchainDeposit({ env: {}, amountUsd: 100, accountId: "guest_x" });
  assert.equal(readback.state, "not_configured");
  assert.equal(readback.configured, false);
  assert.equal(readback.preview, null);
  assert.equal(readback.packet, null);
  assert.equal(readback.broadcast, false);
  // Names both missing env keys so the operator knows exactly what to set.
  assert.ok(readback.missingConfig.some((line) => line.includes("VITE_ROYALE_USDC_MINT")));
  assert.ok(readback.missingConfig.some((line) => line.includes("VITE_ROYALE_USDC_TREASURY")));
});

test("partial env (mint only) → still not_configured, names the treasury blocker", () => {
  const readback = deriveRoyaleOnchainDeposit({
    env: { VITE_ROYALE_USDC_MINT: MINT },
    amountUsd: 100,
    accountId: "guest_x",
  });
  assert.equal(readback.state, "not_configured");
  assert.ok(readback.missingConfig.some((line) => line.includes("VITE_ROYALE_USDC_TREASURY")));
  assert.ok(!readback.missingConfig.some((line) => line.includes("VITE_ROYALE_USDC_MINT")));
});

test("configured env without a wallet → configured_awaiting_wallet, no packet", () => {
  const readback = deriveRoyaleOnchainDeposit({ env: configuredEnv(), amountUsd: 100, accountId: "guest_x" });
  assert.equal(readback.state, "configured_awaiting_wallet");
  assert.equal(readback.configured, true);
  assert.equal(readback.cluster, "devnet");
  assert.equal(readback.packet, null);
  assert.ok(readback.preview);
  assert.equal(readback.preview?.amountRaw, "100000000");
  assert.equal(readback.preview?.destinationTokenAccount, TREASURY);
  // The remaining gap is a signer, not config.
  assert.equal(readback.missingConfig.length, 0);
  assert.ok(readback.missingForBroadcast.some((line) => line.toLowerCase().includes("wallet")));
});

test("configured env + wallet → prepared, full unsigned non-broadcast packet", () => {
  const readback = deriveRoyaleOnchainDeposit({
    env: configuredEnv(),
    amountUsd: 100,
    accountId: "guest_x",
    walletAddress: WALLET,
  });
  assert.equal(readback.state, "prepared");
  assert.equal(readback.broadcast, false);
  const packet = readback.packet;
  assert.ok(packet, "expected a prepared packet");
  // The packet is the safe, unsigned, non-broadcasting kind.
  assert.equal(packet?.serverWillBroadcast, false);
  assert.equal(packet?.automaticFundsMovement, false);
  assert.equal(packet?.requiresUserWalletSignature, true);
  assert.equal(packet?.usdcMint, MINT);
  assert.equal(packet?.destinationTokenAccount, TREASURY);
  assert.equal(packet?.amountRaw, "100000000");
  assert.equal(packet?.cluster, "devnet");
  assert.match(packet?.deterministicPacketHash ?? "", /^fnv1a32:[0-9a-f]{8}$/);
});

test("prepared packet is deterministic for the same input (stable hash)", () => {
  const input = { env: configuredEnv(), amountUsd: 100, accountId: "guest_x", walletAddress: WALLET };
  const a = deriveRoyaleOnchainDeposit(input);
  const b = deriveRoyaleOnchainDeposit(input);
  assert.equal(a.packet?.deterministicPacketHash, b.packet?.deterministicPacketHash);
});

test("a configured target with no cluster defaults to devnet, never mainnet", () => {
  const readback = deriveRoyaleOnchainDeposit({
    env: { VITE_ROYALE_USDC_MINT: MINT, VITE_ROYALE_USDC_TREASURY: TREASURY },
    amountUsd: 100,
    accountId: "guest_x",
  });
  assert.equal(readback.configured, true);
  assert.equal(readback.cluster, "devnet");
});

test("an invalid cluster is rejected as a config blocker, not silently coerced", () => {
  const readback = deriveRoyaleOnchainDeposit({
    env: configuredEnv({ VITE_ROYALE_SOLANA_CLUSTER: "testnet" }),
    amountUsd: 100,
    accountId: "guest_x",
    walletAddress: WALLET,
  });
  assert.equal(readback.state, "not_configured");
  assert.ok(readback.missingConfig.some((line) => line.includes("VITE_ROYALE_SOLANA_CLUSTER")));
});

test("VITE_SOLANA_CLUSTER is honored as a fallback cluster source", () => {
  const readback = deriveRoyaleOnchainDeposit({
    env: { VITE_ROYALE_USDC_MINT: MINT, VITE_ROYALE_USDC_TREASURY: TREASURY, VITE_SOLANA_CLUSTER: "mainnet-beta" },
    amountUsd: 100,
    accountId: "guest_x",
    walletAddress: WALLET,
  });
  assert.equal(readback.cluster, "mainnet-beta");
  assert.equal(readback.packet?.cluster, "mainnet-beta");
});

test("no signer (backward compatible) → prepared, never a signed state", () => {
  const readback = deriveRoyaleOnchainDeposit({
    env: configuredEnv(),
    amountUsd: 100,
    accountId: "guest_x",
    walletAddress: WALLET,
  });
  assert.equal(readback.state, "prepared");
  assert.equal(readback.signer, null);
  assert.equal(readback.canSignDevnet, false);
  assert.equal(readback.sentSignature, null);
});

test("staged-but-unavailable signer → signer_ready with the exact missing method", () => {
  const readback = deriveRoyaleOnchainDeposit({
    env: configuredEnv(),
    amountUsd: 100,
    accountId: "guest_x",
    walletAddress: WALLET,
    signer: unwiredPrivySolanaSigner(),
  });
  assert.equal(readback.state, "signer_ready");
  assert.equal(readback.canSignDevnet, false);
  assert.equal(readback.broadcast, false);
  assert.equal(readback.signer?.available, false);
  assert.ok(readback.packet, "packet is still prepared");
  // Names the exact next method to wire — not a dead end.
  assert.ok(
    readback.missingForSignedDeposit.some((line) => line.includes("useSignAndSendTransaction")),
    "signer_ready names the exact missing Privy method",
  );
});

test("callable signer on devnet → signed_devnet_ready with a buildable request", () => {
  const readback = deriveRoyaleOnchainDeposit({
    env: configuredEnv(),
    amountUsd: 100,
    accountId: "guest_x",
    walletAddress: WALLET,
    signer: callableSigner(),
  });
  assert.equal(readback.state, "signed_devnet_ready");
  assert.equal(readback.canSignDevnet, true);
  assert.equal(readback.broadcast, false);
  assert.equal(readback.signer?.available, true);
  const request = buildSignSendRequest(readback);
  assert.ok(request, "a sign+send request is buildable");
  assert.equal(request?.cluster, "devnet");
  assert.equal(request?.amountRaw, "100000000");
  assert.equal(request?.destinationTokenAccount, TREASURY);
  assert.equal(request?.ownerWallet, WALLET);
  assert.equal(request?.packetHash, readback.packet?.deterministicPacketHash);
});

test("a recorded send → signed_devnet_sent carrying the signature, still broadcast=false", () => {
  const sent: RoyaleSignSendResult = {
    signature: "DEVSIGdevnetabc",
    cluster: "devnet",
    broadcast: false,
    sentAtIso: "2026-06-27T00:00:00.000Z",
    method: "test_non_broadcast_devnet",
  };
  const readback = deriveRoyaleOnchainDeposit({
    env: configuredEnv(),
    amountUsd: 100,
    accountId: "guest_x",
    walletAddress: WALLET,
    signer: callableSigner(),
    sent,
  });
  assert.equal(readback.state, "signed_devnet_sent");
  assert.equal(readback.canSignDevnet, false);
  assert.equal(readback.sentSignature, "DEVSIGdevnetabc");
  assert.equal(readback.sentBroadcast, false);
  // The readback's own auto-broadcast flag is always false.
  assert.equal(readback.broadcast, false);
});

test("MAINNET is never signable, even with a callable signer (stays prepared)", () => {
  const readback = deriveRoyaleOnchainDeposit({
    env: configuredEnv({ VITE_ROYALE_SOLANA_CLUSTER: "mainnet-beta" }),
    amountUsd: 100,
    accountId: "guest_x",
    walletAddress: WALLET,
    signer: callableSigner(),
  });
  assert.equal(readback.cluster, "mainnet-beta");
  assert.equal(readback.state, "prepared");
  assert.equal(readback.canSignDevnet, false);
  assert.ok(
    readback.missingForSignedDeposit.some((line) => line.toLowerCase().includes("mainnet")),
    "names the mainnet sign/send restriction",
  );
});

test("no wallet → buildSignSendRequest returns null (cannot sign without a wallet)", () => {
  const readback = deriveRoyaleOnchainDeposit({
    env: configuredEnv(),
    amountUsd: 100,
    accountId: "guest_x",
    signer: callableSigner(),
  });
  assert.equal(readback.state, "configured_awaiting_wallet");
  assert.equal(buildSignSendRequest(readback), null);
});

test("the unwired Privy signer is honest: not available, names the wallet/dashboard step", () => {
  const signer = unwiredPrivySolanaSigner();
  assert.equal(signer.available, false);
  assert.equal(typeof signer.signAndSend, "undefined");
  assert.ok(signer.missing[0]?.includes("embedded Solana wallets"));
});

test("toUsdcRawAmount converts dollars to 6-decimal base units without float drift", () => {
  assert.equal(toUsdcRawAmount(100), "100000000");
  assert.equal(toUsdcRawAmount(5), "5000000");
  assert.equal(toUsdcRawAmount(25), "25000000");
  assert.equal(toUsdcRawAmount(0.1), "100000");
});

test("display helpers are honest and compact", () => {
  assert.equal(formatRawUsdc("100000000"), "$100");
  assert.equal(shortAddress(TREASURY), `${TREASURY.slice(0, 4)}…${TREASURY.slice(-4)}`);
  assert.equal(shortAddress("short"), "short");
});

// ---------------------------------------------------------------------------
// Real Privy Solana signer factory (devnet-only, user-clicked, no-secret bridge)
// ---------------------------------------------------------------------------

function signSendRequest(cluster: RoyaleSignSendRequest["cluster"] = "devnet"): RoyaleSignSendRequest {
  return {
    cluster,
    amountRaw: toUsdcRawAmount(100),
    usdcMint: MINT,
    destinationTokenAccount: TREASURY,
    ownerWallet: WALLET,
    memo: "attn.packRoyale.deposit.onchain.devnet | acct",
    packetHash: "fnv1a32:deadbeef",
  };
}

/** Factory deps with an injected (hermetic) tx-byte builder + a fake Privy signer. */
function signerDeps(overrides: Partial<PrivySolanaSignerDeps> = {}): {
  deps: PrivySolanaSignerDeps;
  calls: Array<{ chain: string; walletAddress: string }>;
} {
  const calls: Array<{ chain: string; walletAddress: string }> = [];
  const deps: PrivySolanaSignerDeps = {
    wallets: [{ address: WALLET }],
    walletsReady: true,
    authenticatedWalletAddress: WALLET,
    // Hermetic: never touches the network; returns fixed unsigned bytes.
    buildTransactionBytes: async () => new Uint8Array([1, 2, 3, 4]),
    // Fake Privy signer: records the call and returns a deterministic signature.
    signAndSendTransaction: async ({ wallet, chain }) => {
      calls.push({ chain, walletAddress: wallet.address });
      return { signature: new Uint8Array(64).fill(7) };
    },
    ...overrides,
  };
  return { deps, calls };
}

test("real Privy signer: a ready embedded wallet matching the authed address → callable, broadcast-capable", () => {
  const { deps } = signerDeps();
  const signer = buildPrivySolanaSignerCapability(deps);
  assert.equal(signer.available, true);
  assert.equal(signer.method, "privy_solana_useSignAndSendTransaction");
  assert.equal(signer.broadcasts, true);
  assert.deepEqual(signer.missing, []);
  assert.equal(typeof signer.signAndSend, "function");
});

test("real Privy signer: signAndSend on devnet calls Privy with chain solana:devnet and reports a real broadcast", async () => {
  const { deps, calls } = signerDeps();
  const signer = buildPrivySolanaSignerCapability(deps);
  const result = await signer.signAndSend!(signSendRequest("devnet"));
  assert.equal(calls.length, 1);
  assert.equal(calls[0]?.chain, "solana:devnet");
  assert.equal(calls[0]?.walletAddress, WALLET);
  assert.equal(result.cluster, "devnet");
  assert.equal(result.broadcast, true);
  assert.equal(result.method, "privy_solana_useSignAndSendTransaction");
  // The Uint8Array signature is base58-encoded into a Solana-style string.
  assert.equal(result.signature, base58Encode(new Uint8Array(64).fill(7)));
  assert.ok(result.signature.length > 0);
});

test("real Privy signer: the devnet gate refuses mainnet — never calls Privy, never broadcasts", async () => {
  const { deps, calls } = signerDeps();
  const signer = buildPrivySolanaSignerCapability(deps);
  await assert.rejects(() => signer.signAndSend!(signSendRequest("mainnet-beta")), /devnet_only/);
  // Even localnet is refused by the real Privy path (Privy embedded RPC is devnet/mainnet).
  await assert.rejects(() => signer.signAndSend!(signSendRequest("localnet")), /devnet_only/);
  assert.equal(calls.length, 0, "Privy signer must not be invoked for a non-devnet cluster");
});

test("real Privy signer: no embedded wallet → honest available:false naming the exact remaining step", () => {
  for (const override of [
    { wallets: [] },
    { walletsReady: false },
    { authenticatedWalletAddress: null },
    { wallets: [{ address: "SomeOtherWa11et9999999999999999999999999999" }] }, // no match
  ] satisfies Partial<PrivySolanaSignerDeps>[]) {
    const { deps } = signerDeps(override);
    const signer = buildPrivySolanaSignerCapability(deps);
    assert.equal(signer.available, false, JSON.stringify(override));
    assert.equal(signer.broadcasts, true);
    assert.equal(typeof signer.signAndSend, "undefined");
    assert.deepEqual(signer.missing, [PRIVY_SOLANA_NO_EMBEDDED_WALLET_MISSING]);
    assert.ok(signer.missing[0]?.includes("embedded Solana wallet"));
  }
});

test("buildRoyaleUsdcTransferUnsignedTx: deterministic unsigned transfer_checked(+memo) with an injected blockhash (no network)", async () => {
  // Valid 32-byte base58 pubkeys so the @solana primitives accept them. No RPC is
  // hit because recentBlockhash is injected — this is the same builder the real
  // Privy devnet signer and the live readback canary use (single source of truth).
  const SYSTEM = "11111111111111111111111111111111";
  const request: RoyaleSignSendRequest = {
    cluster: "devnet",
    amountRaw: toUsdcRawAmount(25),
    usdcMint: MINT,
    destinationTokenAccount: MINT,
    ownerWallet: SYSTEM,
    memo: "attn.packRoyale.deposit.onchain.devnet | unit",
    packetHash: null,
  };
  const injectedBlockhash = "11111111111111111111111111111111";
  const a = await buildRoyaleUsdcTransferUnsignedTx(request, { recentBlockhash: injectedBlockhash });
  assert.equal(a.recentBlockhash, injectedBlockhash, "injected blockhash is baked in (no live fetch)");
  assert.ok(a.bytes.length > 0, "produced unsigned wire bytes");
  assert.ok(a.sourceTokenAccount.length >= 32, "derived a source USDC ATA for the owner");
  // Identical inputs → byte-identical output (deterministic, no hidden randomness).
  const b = await buildRoyaleUsdcTransferUnsignedTx(request, { recentBlockhash: injectedBlockhash });
  assert.deepEqual([...a.bytes], [...b.bytes], "builder is deterministic for identical inputs");
});

test("base58Encode matches a known vector and handles leading zero bytes", () => {
  assert.equal(base58Encode(new TextEncoder().encode("Hello World!")), "2NEpo7TZRRrLZSi2U");
  assert.equal(base58Encode(new Uint8Array([0, 0, 1])), "112");
  assert.equal(base58Encode(new Uint8Array()), "");
});
