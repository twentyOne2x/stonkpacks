import assert from "node:assert/strict";
import { test } from "node:test";
import { Buffer } from "buffer";

import { installPrivySolanaBufferGlobal } from "./privySolanaBrowserRuntime";

test("installs the browser Buffer implementation required by Privy's Solana signer", () => {
  const target: { Buffer?: typeof Buffer } = {};
  const installed = installPrivySolanaBufferGlobal(target);

  assert.equal(installed, Buffer);
  assert.equal(target.Buffer, Buffer);
  assert.equal(target.Buffer?.from([1, 2, 3]).toString("base64"), "AQID");
});

test("preserves an existing compatible Buffer global", () => {
  const target = { Buffer };

  assert.equal(installPrivySolanaBufferGlobal(target), Buffer);
  assert.equal(target.Buffer, Buffer);
});
