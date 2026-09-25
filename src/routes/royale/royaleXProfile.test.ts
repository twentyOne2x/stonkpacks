// Deterministic checks for the linked-X-profile portrait upgrade.
// Run: npx tsx --test apps/web/src/routes/royale/royaleXProfile.test.ts
import assert from "node:assert/strict";
import { test } from "node:test";

import {
  CONNECT_X_UNAVAILABLE_MESSAGE,
  clearLinkedXProfile,
  deriveConnectXViewState,
  displayHandle,
  extractXProfileFromPrivyUser,
  loadLinkedXProfile,
  saveLinkedXProfile,
  upgradeTwitterAvatarUrl,
  type LinkedXProfile,
} from "./royaleXProfile";

// Minimal in-memory Storage stub — no jsdom/localStorage in the node:test runner.
function memoryStorage(): Storage {
  const store = new Map<string, string>();
  return {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => void store.set(key, value),
    removeItem: (key: string) => void store.delete(key),
    clear: () => store.clear(),
    key: () => null,
    get length() {
      return store.size;
    },
  } as Storage;
}

test("extractXProfileFromPrivyUser: no twitter linked -> null", () => {
  assert.equal(extractXProfileFromPrivyUser({ id: "did:privy:x" }), null);
  assert.equal(extractXProfileFromPrivyUser(null), null);
  assert.equal(extractXProfileFromPrivyUser("not an object"), null);
});

test("extractXProfileFromPrivyUser: real Privy user.twitter shape -> profile with upgraded avatar", () => {
  const profile = extractXProfileFromPrivyUser({
    id: "did:privy:abc",
    twitter: {
      subject: "1234567890",
      username: "packroyale",
      name: "Pack Royale",
      profilePictureUrl: "https://pbs.twimg.com/profile_images/1/photo_normal.jpg",
    },
  });
  assert.ok(profile);
  assert.equal(profile.subject, "1234567890");
  assert.equal(profile.handle, "packroyale");
  assert.equal(profile.name, "Pack Royale");
  assert.equal(profile.avatarUrl, "https://pbs.twimg.com/profile_images/1/photo.jpg");
});

test("extractXProfileFromPrivyUser: missing subject -> null (never a half-filled profile)", () => {
  assert.equal(
    extractXProfileFromPrivyUser({ twitter: { username: "x", profilePictureUrl: "https://x.example/a.jpg" } }),
    null,
  );
});

test("upgradeTwitterAvatarUrl: strips the _normal thumbnail suffix only", () => {
  assert.equal(upgradeTwitterAvatarUrl("https://pbs.twimg.com/a/b_normal.jpg"), "https://pbs.twimg.com/a/b.jpg");
  assert.equal(upgradeTwitterAvatarUrl("https://pbs.twimg.com/a/b_normal.png?x=1"), "https://pbs.twimg.com/a/b.png?x=1");
  // No _normal suffix: unchanged.
  assert.equal(upgradeTwitterAvatarUrl("https://pbs.twimg.com/a/b.jpg"), "https://pbs.twimg.com/a/b.jpg");
  assert.equal(upgradeTwitterAvatarUrl(null), null);
});

test("save/load/clear round-trip through a Storage-shaped stub", () => {
  const storage = memoryStorage();
  assert.equal(loadLinkedXProfile(storage), null);
  const profile: LinkedXProfile = {
    subject: "1",
    handle: "royale",
    name: "Royale",
    avatarUrl: "https://x.example/a.jpg",
    linkedAt: new Date(0).toISOString(),
  };
  saveLinkedXProfile(profile, storage);
  assert.deepEqual(loadLinkedXProfile(storage), profile);
  clearLinkedXProfile(storage);
  assert.equal(loadLinkedXProfile(storage), null);
});

test("loadLinkedXProfile: corrupt/foreign JSON fails closed to null, never throws", () => {
  const storage = memoryStorage();
  storage.setItem("attn-packs.x-profile.v1", "{not json");
  assert.equal(loadLinkedXProfile(storage), null);
  storage.setItem("attn-packs.x-profile.v1", JSON.stringify({ version: 1, subject: "" }));
  assert.equal(loadLinkedXProfile(storage), null);
  storage.setItem("attn-packs.x-profile.v1", JSON.stringify({ version: 2, subject: "1", handle: null, name: null, avatarUrl: null, linkedAt: "x" }));
  assert.equal(loadLinkedXProfile(storage), null);
});

test("displayHandle: prefers @handle, falls back to name, then a generic label", () => {
  const base = { subject: "1", linkedAt: "x", avatarUrl: null } as const;
  assert.equal(displayHandle({ ...base, handle: "royale", name: "Royale Player" }), "@royale");
  assert.equal(displayHandle({ ...base, handle: null, name: "Royale Player" }), "Royale Player");
  assert.equal(displayHandle({ ...base, handle: null, name: null }), "Connected");
});

test("deriveConnectXViewState: connected wins regardless of config", () => {
  const profile: LinkedXProfile = { subject: "1", handle: "a", name: "A", avatarUrl: null, linkedAt: "x" };
  const state = deriveConnectXViewState({ privyConfigured: false, connectXAvailable: false, profile });
  assert.deepEqual(state, { kind: "connected", profile });
});

test("deriveConnectXViewState: Privy not configured -> unavailable", () => {
  assert.deepEqual(
    deriveConnectXViewState({ privyConfigured: false, connectXAvailable: false, profile: null }),
    { kind: "unavailable" },
  );
});

test("deriveConnectXViewState: configured + SDK ready -> connectable", () => {
  assert.deepEqual(
    deriveConnectXViewState({ privyConfigured: true, connectXAvailable: true, profile: null }),
    { kind: "connectable" },
  );
});

test("deriveConnectXViewState: configured but a prior connect failed -> unavailable (never a distinct error UI)", () => {
  assert.deepEqual(
    deriveConnectXViewState({
      privyConfigured: true,
      connectXAvailable: true,
      profile: null,
      xConnectError: CONNECT_X_UNAVAILABLE_MESSAGE,
    }),
    { kind: "unavailable" },
  );
});
