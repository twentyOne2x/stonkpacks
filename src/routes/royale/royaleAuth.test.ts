// Deterministic checks for the two-tier auth model (Privy vs local demo).
// Run: npx tsx --test apps/web/src/routes/royale/royaleAuth.test.ts
import assert from "node:assert/strict";
import { test } from "node:test";

import {
  backingLabel,
  deriveAuthModel,
  deriveCustodyReadback,
  deriveDepositAction,
  detectInjectedSolanaWallet,
  extractPrivyEvmWalletAddress,
  extractPrivySolanaWalletAddress,
  fundingSource,
  isConnectedForPlay,
  localFallbackHostedAuth,
  PRODUCTION_CUSTODY_CEILING,
  type RoyaleHostedAuth,
} from "./royaleAuth";
import { deriveRoyaleOnchainDeposit } from "./royaleOnchainDeposit";

function hosted(overrides: Partial<RoyaleHostedAuth>): RoyaleHostedAuth {
  return { ...localFallbackHostedAuth(), ...overrides };
}

const PRIVY_AWAITING = hosted({
  enabledByEnv: true,
  publicAppIdConfigured: true,
  status: "ready_for_login",
  ready: true,
  loginAvailable: true,
});
const PRIVY_AUTHED = hosted({
  enabledByEnv: true,
  publicAppIdConfigured: true,
  status: "authenticated",
  ready: true,
  authenticated: true,
  userId: "did:privy:x",
  logoutAvailable: true,
});

test("no Privy config -> local demo fallback with exact env blockers", () => {
  const model = deriveAuthModel(localFallbackHostedAuth());
  assert.equal(model.tier, "local_demo_fallback");
  assert.equal(model.connectVia, "local_demo");
  assert.ok(model.envBlockers.some((b) => b.includes("VITE_PRIVY_APP_ID")));
  assert.ok(model.envBlockers.some((b) => b.includes("VITE_ENABLE_PRIVY_AUTH")));
  assert.match(model.ledgerLabel, /demo/i);
});

test("Privy enabled but not logged in -> ready_for_login, connect via privy", () => {
  const model = deriveAuthModel(
    hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "ready_for_login", ready: true, loginAvailable: true }),
  );
  assert.equal(model.tier, "privy_ready_for_login");
  assert.equal(model.connectVia, "privy");
  assert.equal(model.privyLoginAvailable, true);
  assert.equal(model.envBlockers.length, 0);
});

test("Privy authenticated -> privy_authenticated; ledger stays demo and claim is honest", () => {
  const model = deriveAuthModel(
    hosted({
      enabledByEnv: true,
      publicAppIdConfigured: true,
      status: "authenticated",
      ready: true,
      authenticated: true,
      userId: "did:privy:abcdef1234567890",
      logoutAvailable: true,
    }),
  );
  assert.equal(model.tier, "privy_authenticated");
  assert.match(model.authLabel, /Privy account/);
  assert.equal(backingLabel(model), "privy_account_demo_ledger");
  // Even authed, deposits/custody/settlement must NOT be claimed.
  assert.match(model.strongestClaim, /demo ledger/i);
  assert.match(model.strongestClaim, /no chain broadcast/i);
});

test("Privy initializing and error map to their own tiers", () => {
  const init = deriveAuthModel(hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_initializing" }));
  assert.equal(init.tier, "privy_initializing");
  const err = deriveAuthModel(hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_error" }));
  assert.equal(err.tier, "privy_error");
});

test("Privy initializing stays on the Privy connect path (transient, may recover to login)", () => {
  const init = deriveAuthModel(hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_initializing" }));
  assert.equal(init.connectVia, "privy");
});

test("Privy SDK error falls back to a playable local-demo connect, no env blocker, honest backing", () => {
  const err = deriveAuthModel(hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_error" }));
  // Configured-but-erroring Privy must not dead-end the game on a disabled connect.
  assert.equal(err.connectVia, "local_demo");
  // Config IS present, so this is an SDK error, not an env blocker.
  assert.equal(err.envBlockers.length, 0);
  assert.match(err.authLabel, /local demo/i);
  // Deposits in this state must carry the local_demo backing, never a Privy claim.
  assert.equal(backingLabel(err), "local_demo");
});

test("local demo never claims a Privy backing", () => {
  const model = deriveAuthModel(localFallbackHostedAuth());
  assert.equal(backingLabel(model), "local_demo");
});

// ---- deposit action: the honest single Add Game USDC entrypoint ----------

test("deposit action: no Privy config -> credits the local demo ledger", () => {
  const action = deriveDepositAction(deriveAuthModel(localFallbackHostedAuth()));
  assert.equal(action.mode, "credit_local_demo");
  assert.equal(action.credits, true);
  assert.equal(action.backing, "local_demo");
});

test("deposit action: Privy configured but NOT authed -> routes to login, credits NOTHING", () => {
  const action = deriveDepositAction(deriveAuthModel(PRIVY_AWAITING));
  assert.equal(action.mode, "privy_connect");
  assert.equal(action.credits, false);
});

test("deposit action: Privy still initializing -> routes to login, never silent demo credit", () => {
  const action = deriveDepositAction(
    deriveAuthModel(hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_initializing" })),
  );
  assert.equal(action.mode, "privy_connect");
  assert.equal(action.credits, false);
});

test("deposit action: Privy authenticated -> credits with a Privy-session-backed receipt", () => {
  const action = deriveDepositAction(deriveAuthModel(PRIVY_AUTHED));
  assert.equal(action.mode, "credit_privy_demo_ledger");
  assert.equal(action.credits, true);
  assert.equal(action.backing, "privy_account_demo_ledger");
});

test("deposit action: Privy SDK error falls back to the playable local demo credit (not a dead end)", () => {
  const action = deriveDepositAction(
    deriveAuthModel(hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_error" })),
  );
  assert.equal(action.mode, "credit_local_demo");
  assert.equal(action.credits, true);
  assert.equal(action.backing, "local_demo");
});

// ---- connected-for-play gate: guest free-play must be bettable (owner 2026-07-23)

test("connected-for-play: guest local session is bettable even under a configured Privy build", () => {
  const privyReady = deriveAuthModel(PRIVY_AWAITING);
  assert.equal(privyReady.connectVia, "privy");
  // Regression guard for "i cant click on a tile to bet": a Privy build with no
  // login and no guest session is NOT connected — the player must onboard first.
  assert.equal(isConnectedForPlay(privyReady, false, false), false);
  // THE FIX: "Skip and play as guest" opens a local session (demoSignedIn) →
  // connected under Privy, so the $25 free-play balance is bettable without login.
  assert.equal(isConnectedForPlay(privyReady, false, true), true);
  // A real Privy login is connected with or without a local session.
  assert.equal(isConnectedForPlay(privyReady, true, false), true);
});

test("connected-for-play: local-demo build is connected iff a local session is open", () => {
  const demo = deriveAuthModel(localFallbackHostedAuth());
  assert.equal(demo.connectVia, "local_demo");
  assert.equal(isConnectedForPlay(demo, false, false), false);
  assert.equal(isConnectedForPlay(demo, false, true), true);
  // A Privy SDK error also routes via local_demo — a guest session still plays.
  const sdkError = deriveAuthModel(hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_error" }));
  assert.equal(sdkError.connectVia, "local_demo");
  assert.equal(isConnectedForPlay(sdkError, false, true), true);
});

test("funding source: privy_session only when authenticated, demo otherwise", () => {
  assert.equal(fundingSource(deriveAuthModel(localFallbackHostedAuth())), "demo");
  assert.equal(fundingSource(deriveAuthModel(PRIVY_AWAITING)), "demo");
  assert.equal(fundingSource(deriveAuthModel(PRIVY_AUTHED)), "privy_session");
});

// ---- custody readback: explicit three-state account/credit truth ----------

test("custody readback: no Privy config -> local demo credit, boundary not configured, exact env notes", () => {
  const custody = deriveCustodyReadback(deriveAuthModel(localFallbackHostedAuth()));
  assert.equal(custody.creditTier, "local_demo_credit");
  assert.equal(custody.realPrivyBoundary, "real_privy_not_configured");
  assert.equal(custody.realPrivyAuthenticated, false);
  assert.equal(custody.privyConfigured, false);
  // The env blockers must be carried through so the boundary is operator-readable.
  assert.ok(custody.operatorNotes.some((note) => note.includes("VITE_PRIVY_APP_ID")));
  assert.ok(custody.operatorNotes.some((note) => note.includes("VITE_ENABLE_PRIVY_AUTH")));
});

test("custody readback: Privy configured awaiting login -> still local demo credit", () => {
  const custody = deriveCustodyReadback(
    deriveAuthModel(hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "ready_for_login", ready: true, loginAvailable: true })),
  );
  assert.equal(custody.creditTier, "local_demo_credit");
  assert.equal(custody.realPrivyBoundary, "real_privy_configured_awaiting_login");
  assert.equal(custody.realPrivyAuthenticated, false);
  assert.equal(custody.privyConfigured, true);
});

test("custody readback: Privy initializing maps to its own boundary", () => {
  const custody = deriveCustodyReadback(
    deriveAuthModel(hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_initializing" })),
  );
  assert.equal(custody.realPrivyBoundary, "real_privy_initializing");
  assert.equal(custody.creditTier, "local_demo_credit");
});

test("custody readback: Privy SDK error surfaces a dashboard-readable note, stays local demo credit", () => {
  const custody = deriveCustodyReadback(
    deriveAuthModel(hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_error" })),
  );
  assert.equal(custody.realPrivyBoundary, "real_privy_sdk_error");
  assert.equal(custody.creditTier, "local_demo_credit");
  assert.ok(custody.operatorNotes.some((note) => /rejected by the Privy SDK/i.test(note)));
});

test("custody readback: Privy authenticated -> privy preview demo credit, custody ceiling still rendered", () => {
  const custody = deriveCustodyReadback(
    deriveAuthModel(
      hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "authenticated", ready: true, authenticated: true, userId: "did:privy:x" }),
    ),
  );
  assert.equal(custody.creditTier, "privy_preview_demo_credit");
  assert.equal(custody.realPrivyBoundary, "real_privy_authenticated");
  assert.equal(custody.realPrivyAuthenticated, true);
  // Even authenticated, production custody must never be claimed.
  assert.equal(custody.custodyLine, PRODUCTION_CUSTODY_CEILING);
  assert.match(custody.custodyLine, /not live/i);
});

// ---- Privy Solana wallet extraction (the real on-chain deposit seam) ------

const SOLANA_WALLET = "RoyaLeUnitTestPrivyWa11et55555555555555555555";

test("extractPrivySolanaWalletAddress: embedded Solana wallet is returned", () => {
  const address = extractPrivySolanaWalletAddress({
    id: "did:privy:x",
    wallet: { address: SOLANA_WALLET, chainType: "solana" },
  });
  assert.equal(address, SOLANA_WALLET);
});

test("extractPrivySolanaWalletAddress: linked Solana wallet is found when no embedded one", () => {
  const address = extractPrivySolanaWalletAddress({
    id: "did:privy:x",
    linkedAccounts: [
      { type: "email", address: "user@example.com" },
      { type: "wallet", chainType: "ethereum", address: "0xabc" },
      { type: "wallet", chainType: "solana", address: SOLANA_WALLET },
    ],
  });
  assert.equal(address, SOLANA_WALLET);
});

test("extractPrivySolanaWalletAddress: an Ethereum-only wallet is rejected (fails closed to null)", () => {
  const address = extractPrivySolanaWalletAddress({
    id: "did:privy:x",
    wallet: { address: "0xdeadbeef", chainType: "ethereum" },
  });
  assert.equal(address, null);
});

test("extractPrivySolanaWalletAddress: unknown/empty shapes fail closed to null, never throw", () => {
  assert.equal(extractPrivySolanaWalletAddress(undefined), null);
  assert.equal(extractPrivySolanaWalletAddress(null), null);
  assert.equal(extractPrivySolanaWalletAddress(42), null);
  assert.equal(extractPrivySolanaWalletAddress({}), null);
  assert.equal(extractPrivySolanaWalletAddress({ wallet: {} }), null);
  assert.equal(extractPrivySolanaWalletAddress({ wallet: { chainType: "solana", address: "   " } }), null);
  assert.equal(extractPrivySolanaWalletAddress({ linkedAccounts: "not-an-array" }), null);
});

test("extractPrivyEvmWalletAddress: selects only a canonical Ethereum address for Robinhood Chain", () => {
  const address = extractPrivyEvmWalletAddress({
    linkedAccounts: [
      { type: "wallet", chainType: "solana", address: SOLANA_WALLET },
      { type: "wallet", chainType: "ethereum", address: "0xAAbbccDDeeFf0011223344556677889900AAbbCC" },
    ],
  });
  assert.equal(address, "0xaabbccddeeff0011223344556677889900aabbcc");
});

test("extractPrivyEvmWalletAddress: rejects malformed and non-EVM candidates", () => {
  assert.equal(extractPrivyEvmWalletAddress(null), null);
  assert.equal(extractPrivyEvmWalletAddress({ wallet: { chainType: "solana", address: SOLANA_WALLET } }), null);
  assert.equal(extractPrivyEvmWalletAddress({ wallet: { chainType: "ethereum", address: "0x1234" } }), null);
  assert.equal(extractPrivyEvmWalletAddress({ linkedAccounts: [{ type: "email", chainType: "ethereum", address: "0xAAbbccDDeeFf0011223344556677889900AAbbCC" }] }), null);
});

test("auth model + custody: walletAddress only surfaces when authenticated, trimmed", () => {
  const authed = deriveAuthModel(hosted({ ...PRIVY_AUTHED, walletAddress: ` ${SOLANA_WALLET} ` }));
  assert.equal(authed.privyWalletAddress, SOLANA_WALLET);
  assert.equal(deriveCustodyReadback(authed).walletAddress, SOLANA_WALLET);

  // Awaiting login must NOT leak a wallet address even if one is somehow present.
  const awaiting = deriveAuthModel(hosted({ ...PRIVY_AWAITING, walletAddress: SOLANA_WALLET }));
  assert.equal(awaiting.privyWalletAddress, null);
  assert.equal(deriveCustodyReadback(awaiting).walletAddress, null);
});

test("seam: ?onchain=config alone -> awaiting wallet; authenticated wallet -> prepared", () => {
  const env = {
    VITE_ROYALE_USDC_MINT: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
    VITE_ROYALE_USDC_TREASURY: "RoyaLeUnitTestTreasury666666666666666666666",
    VITE_ROYALE_SOLANA_CLUSTER: "devnet",
  };

  // Configured env but NO authenticated wallet (the ?onchain=config case): the
  // auth model yields no wallet, so the deposit stays configured_awaiting_wallet.
  const noWallet = deriveAuthModel(localFallbackHostedAuth()).privyWalletAddress;
  const awaiting = deriveRoyaleOnchainDeposit({ env, amountUsd: 100, accountId: "acct", walletAddress: noWallet });
  assert.equal(awaiting.state, "configured_awaiting_wallet");
  assert.equal(awaiting.packet, null);

  // Same env, but an authenticated Privy session carries a Solana wallet (the
  // ?privy=auth&onchain=config case): the SAME derive reaches "prepared" using the
  // session wallet — proving the real code path consumes hostedAuth.walletAddress.
  const sessionWallet = deriveAuthModel(hosted({ ...PRIVY_AUTHED, walletAddress: SOLANA_WALLET })).privyWalletAddress;
  assert.equal(sessionWallet, SOLANA_WALLET);
  const prepared = deriveRoyaleOnchainDeposit({ env, amountUsd: 100, accountId: "acct", walletAddress: sessionWallet });
  assert.equal(prepared.state, "prepared");
  assert.equal(prepared.broadcast, false);
  assert.equal(prepared.packet?.serverWillBroadcast, false);
  assert.equal(prepared.packet?.automaticFundsMovement, false);
  assert.match(prepared.packet?.deterministicPacketHash ?? "", /^fnv1a32:[0-9a-f]{8}$/);
});

test("custody readback: custody ceiling is present and honest in EVERY state", () => {
  const states: RoyaleHostedAuth[] = [
    localFallbackHostedAuth(),
    hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "ready_for_login", ready: true }),
    hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_initializing" }),
    hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "sdk_error" }),
    hosted({ enabledByEnv: true, publicAppIdConfigured: true, status: "authenticated", ready: true, authenticated: true }),
  ];
  for (const state of states) {
    const custody = deriveCustodyReadback(deriveAuthModel(state));
    assert.equal(custody.custodyLine, PRODUCTION_CUSTODY_CEILING);
    // A funded-wallet next step is always part of the operator notes.
    assert.ok(custody.operatorNotes.some((note) => /funded mainnet\/devnet USDC wallet/i.test(note)));
  }
});

// ---- injected Solana wallet detection (mobile login button label) ----------

test("wallet detect: fails closed on empty/odd hosts", () => {
  assert.deepEqual(detectInjectedSolanaWallet(null), { detected: false, providerName: null });
  assert.deepEqual(detectInjectedSolanaWallet(undefined), { detected: false, providerName: null });
  assert.deepEqual(detectInjectedSolanaWallet("window"), { detected: false, providerName: null });
  assert.deepEqual(detectInjectedSolanaWallet({}), { detected: false, providerName: null });
  // An EVM-only injection (no connect(), no Solana flags) must not count.
  assert.deepEqual(
    detectInjectedSolanaWallet({ ethereum: { request: () => {} }, solana: { isConnected: false } }),
    { detected: false, providerName: null },
  );
});

test("wallet detect: recognizes Phantom via window.phantom.solana and legacy window.solana", () => {
  const viaPhantomNs = detectInjectedSolanaWallet({ phantom: { solana: { isPhantom: true, connect: () => {} } } });
  assert.deepEqual(viaPhantomNs, { detected: true, providerName: "Phantom" });
  const viaLegacy = detectInjectedSolanaWallet({ solana: { isPhantom: true, connect: () => {} } });
  assert.deepEqual(viaLegacy, { detected: true, providerName: "Phantom" });
});

test("wallet detect: recognizes Solflare, Backpack, and a generic window.solana provider", () => {
  assert.deepEqual(detectInjectedSolanaWallet({ solflare: { isSolflare: true, connect: () => {} } }), {
    detected: true,
    providerName: "Solflare",
  });
  assert.deepEqual(detectInjectedSolanaWallet({ backpack: { isBackpack: true, connect: () => {} } }), {
    detected: true,
    providerName: "Backpack",
  });
  assert.deepEqual(detectInjectedSolanaWallet({ solana: { connect: () => {} } }), {
    detected: true,
    providerName: "Solana wallet",
  });
});
