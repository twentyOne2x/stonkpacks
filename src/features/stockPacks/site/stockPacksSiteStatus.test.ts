import assert from "node:assert/strict";
import test from "node:test";

import {
  STOCK_PACKS_TRANSPORT_FAILURE_MESSAGE,
  stockPacksCampaignAction,
  stockPacksErrorCopy,
  stockPacksLoginState,
  stockPacksOpenInFlight,
  stockPacksPurchasesOpen,
  stockPacksShortfallRaw,
} from "./stockPacksSiteStatus";

test("pack sales are closed unless the build says exactly true", () => {
  for (const value of [undefined, "", "false", "1", "yes", "open"]) {
    assert.equal(stockPacksPurchasesOpen({ VITE_STOCK_PACKS_PURCHASES_OPEN: value }), false, String(value));
  }
  for (const value of ["true", " TRUE "]) {
    assert.equal(stockPacksPurchasesOpen({ VITE_STOCK_PACKS_PURCHASES_OPEN: value }), true, value);
  }
  assert.equal(stockPacksPurchasesOpen({}), false);
});

test("the pack button only starts a review for a published campaign on an open site", () => {
  assert.deepEqual(stockPacksCampaignAction("published", true), { label: "Review pack", blocked: false, note: null });
  assert.deepEqual(stockPacksCampaignAction("published", false), { label: "Packs open soon", blocked: true, note: null });
  assert.deepEqual(stockPacksCampaignAction("exhausted", true), { label: "Sold out", blocked: true, note: "Back soon." });
  assert.deepEqual(stockPacksCampaignAction("paused", true), { label: "Paused", blocked: true, note: "Back soon." });
  assert.equal(stockPacksCampaignAction("draft", true).blocked, true);
});

test("a paid open in flight blocks a second purchase until it lands", () => {
  for (const phase of ["payment_pending", "selected", "delivery_pending", "delivery_reconciling"]) {
    assert.equal(stockPacksOpenInFlight(phase), true, phase);
  }
  for (const phase of ["browse", "received", "sold", "sale_rejected", "sale_pending"]) {
    assert.equal(stockPacksOpenInFlight(phase), false, phase);
  }
});

test("errors map by code to short copy; server wording and false saved-operation copy never reach users", () => {
  const copy = (code: string, message = "server detail") => stockPacksErrorCopy({ code, message });
  assert.equal(copy("reconciliation_required", STOCK_PACKS_TRANSPORT_FAILURE_MESSAGE), "Can't reach STONKPACKS. Try again.");
  assert.equal(copy("reconciliation_required", "Recover the saved purchase before opening another Pack."),
    "Check your saved pack before starting another.");
  assert.equal(copy("invalid_contract", "Invalid Stock Packs response."), "Can't reach STONKPACKS. Try again.");
  assert.equal(copy("transport_unavailable"), "Can't reach STONKPACKS. Try again.");
  assert.equal(copy("not_found", "Stock Packs is unavailable."), "Packs are offline.");
  assert.equal(copy("campaign_paused", "New purchases are paused."), "Packs open soon.");
  assert.equal(copy("rate_limited", "Too many Stock Packs requests; slow down."), "Too many tries. Wait a moment.");
  assert.equal(copy("missing_evidence", "Stock Packs provider is unavailable."), "Service busy. Try again.");
  assert.equal(copy("intent_conflict", "Stock money kill switch is engaged or unreadable."), "Paused for safety. Try again later.");
  assert.equal(copy("unauthorized"), "Log in again to continue.");
  assert.equal(copy("quote_expired", "The quote expired."), "The quote expired.");
  for (const code of ["transport_unavailable", "invalid_contract", "not_found", "campaign_paused", "rate_limited", "missing_evidence"]) {
    assert.doesNotMatch(copy(code), /—|certificate|security|outcome|shares|\blot\b/iu);
  }
});

test("login state is never a silent no-op", () => {
  const base = { status: "ready_for_login" as const, ready: true, authenticated: false, login: () => {} };
  assert.equal(stockPacksLoginState(base), "ready");
  assert.equal(stockPacksLoginState({ ...base, status: "sdk_initializing", ready: false }), "loading");
  assert.equal(stockPacksLoginState({ ...base, status: "blocked_missing_public_config", ready: false }), "down");
  assert.equal(stockPacksLoginState({ ...base, status: "sdk_error", ready: false }), "down");
  const { login: _login, ...noLogin } = base;
  assert.equal(stockPacksLoginState(noLogin), "down");
  assert.equal(stockPacksLoginState({ ...base, status: "authenticated", authenticated: true }), "authenticated");
});

test("shortfall is exact in raw units", () => {
  assert.equal(stockPacksShortfallRaw("10000000", "25000000"), "15000000");
  assert.equal(stockPacksShortfallRaw("25000000", "25000000"), null);
  assert.equal(stockPacksShortfallRaw("18446744073709551615", "1"), null);
});
