import assert from "node:assert/strict";
import test from "node:test";

import {
  ATTN_MWA_CHAINS,
  attnMobileWalletIdentity,
  registerAttnMobileWalletAdapter,
} from "./mobileWalletAdapter";

test("Seeker registers one Wallet Standard MWA provider for the existing web player", () => {
  const host = {
    location: { origin: "https://seeker.attnpacks.com/path" },
  } as unknown as typeof globalThis & { __attnPacksMwaRegistered?: boolean };
  const calls: unknown[] = [];
  const register = (config: unknown) => calls.push(config);

  assert.equal(registerAttnMobileWalletAdapter(host, register), true);
  assert.equal(registerAttnMobileWalletAdapter(host, register), false);
  assert.equal(calls.length, 1);

  const config = calls[0] as {
    appIdentity: ReturnType<typeof attnMobileWalletIdentity>;
    chains: readonly string[];
  };
  assert.deepEqual(config.appIdentity, {
    name: "attn Packs",
    uri: "https://seeker.attnpacks.com",
    icon: "royale-pwa-192.png",
  });
  assert.deepEqual(config.chains, ATTN_MWA_CHAINS);
});

test("the MWA app identity rejects non-URL origins", () => {
  assert.throws(() => attnMobileWalletIdentity("not an origin"), /Invalid URL/);
});
