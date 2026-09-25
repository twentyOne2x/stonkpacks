import assert from "node:assert/strict";
import test from "node:test";

import {
  STOCK_PACKS_PULL_ONLY,
  STOCK_PACKS_STONKS_THEME,
  stockPacksPullOnlyEnabled,
  stockPacksStonksThemeEnabled,
} from "./stockPacksThemeFlags";

test("every direction F flag defaults off", () => {
  assert.equal(stockPacksStonksThemeEnabled({}), false);
  assert.equal(stockPacksPullOnlyEnabled({}), false);
  // No Vite env under the test runner: the module constants stay off.
  assert.equal(STOCK_PACKS_STONKS_THEME, false);
  assert.equal(STOCK_PACKS_PULL_ONLY, false);
});

test("the theme flag turns on only for the exact stonks value", () => {
  assert.equal(stockPacksStonksThemeEnabled({ VITE_STOCK_PACKS_THEME: "stonks" }), true);
  assert.equal(stockPacksStonksThemeEnabled({ VITE_STOCK_PACKS_THEME: " STONKS " }), true);
  for (const value of ["", "true", "1", "stonk", "stonks-v2", "royale"]) {
    assert.equal(stockPacksStonksThemeEnabled({ VITE_STOCK_PACKS_THEME: value }), false, value);
  }
});

test("the pull-only flag follows the existing true/1 flag pattern", () => {
  assert.equal(stockPacksPullOnlyEnabled({ VITE_STOCK_PACKS_PULL_ONLY: "true" }), true);
  assert.equal(stockPacksPullOnlyEnabled({ VITE_STOCK_PACKS_PULL_ONLY: "1" }), true);
  assert.equal(stockPacksPullOnlyEnabled({ VITE_STOCK_PACKS_PULL_ONLY: " TRUE " }), true);
  for (const value of ["", "false", "0", "yes", "on"]) {
    assert.equal(stockPacksPullOnlyEnabled({ VITE_STOCK_PACKS_PULL_ONLY: value }), false, value);
  }
});
