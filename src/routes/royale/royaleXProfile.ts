// Linked X (Twitter) profile — Pack Royale portrait upgrade.
//
// Owner ask (2026-07-11): "instead of just random portraits can you enable to
// connect with twitter oauth and then show the portrait there" — the player's
// own avatar (today a deterministic generated initials/hue chip — see
// avatarStyle/avatarHue in RoyaleBoard.tsx/RoyaleBoardV2.tsx) should become
// their real X profile picture once they connect their account.
//
// CHOSEN PATH: Privy's OWN Twitter social login/link (see main.tsx's
// HostedAuthPreviewBridge → useLinkAccount().linkTwitter() for an already-
// authenticated session, or the existing Privy login() modal — which offers
// "Continue with X" once the owner enables Twitter as a login method in the
// Privy dashboard — for a fresh session). Privy's `user.twitter` already
// carries `{ subject, username, name, profilePictureUrl }` once an account is
// linked: no separate X API app client id/secret, no OAuth2 PKCE dance, and no
// apps/api token-exchange seam is needed for THIS surface — Privy's own
// backend holds the X API app credentials in the Privy dashboard, not in this
// repo's env. See royaleAuth.ts's RoyaleHostedAuth (connectXAvailable /
// connectX / xConnectError) for the structural contract this module feeds.
//
// Persisted independently of the live Privy SDK state, mirroring
// royaleBalanceLedger.ts / royaleDepositLedger.ts's localStorage pattern
// (SSR-safe try/catch), so every surface that shows the player's own portrait
// (board tile self-marker, chat, profile, account bar) can read it WITHOUT
// threading the live hostedAuth object through each one. A window CustomEvent
// lets every mounted reader update the instant a connect completes.

// i18n (runtime.xProfile.*). t() resolves inside the getters below so the copy
// follows the ACTIVE locale, never the one that was set at import time.
import { t } from "./royaleI18n";

export const X_PROFILE_STORAGE_KEY = "attn-packs.x-profile.v1";
export const X_PROFILE_UPDATED_EVENT = "attn-packs:x-profile-updated";

/** Single honest message for every "can't connect X right now" case — missing
 *  Privy config, Twitter not yet enabled as a login/link method in the Privy
 *  dashboard, or any other rejection. Never a dev-caveat string, never a raw
 *  SDK error code. Localized: CALL this, never capture it in a const. */
export function connectXUnavailableMessage(): string {
  return t("runtime.xProfile.connectUnavailable");
}

/**
 * The ENGLISH source form of {@link connectXUnavailableMessage}. Kept as a
 * plain const because main.tsx and RoyaleConnectXControl.tsx still import it
 * by name (both outside this lane's fence). Rendering it freezes the copy in
 * English; those two call sites should switch to
 * connectXUnavailableMessage() and add useRoyaleLocale() where they render.
 */
export const CONNECT_X_UNAVAILABLE_MESSAGE = "X connection isn't available yet.";

export type LinkedXProfile = {
  /** Privy's Twitter `sub` claim — a stable per-account id. Never displayed. */
  subject: string;
  /** Handle without the leading "@", or null if X didn't return one. */
  handle: string | null;
  name: string | null;
  /** Full-resolution photo URL (the Privy/X `_normal` 48px suffix stripped). */
  avatarUrl: string | null;
  linkedAt: string;
};

type StoredXProfile = LinkedXProfile & { version: 1 };

function getDefaultStorage(): Storage | null {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

function isLinkedXProfileShape(value: unknown): value is LinkedXProfile {
  const v = value as Partial<LinkedXProfile> | null;
  return Boolean(
    v &&
      typeof v.subject === "string" &&
      v.subject.length > 0 &&
      (v.handle === null || typeof v.handle === "string") &&
      (v.name === null || typeof v.name === "string") &&
      (v.avatarUrl === null || typeof v.avatarUrl === "string") &&
      typeof v.linkedAt === "string",
  );
}

/** Read the persisted linked-X profile, or null if none is stored (or storage
 *  is unavailable/corrupt — fails closed to "not connected", never throws). */
export function loadLinkedXProfile(storage: Storage | null = getDefaultStorage()): LinkedXProfile | null {
  if (!storage) return null;
  try {
    const raw = storage.getItem(X_PROFILE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredXProfile> | null;
    if (!parsed || parsed.version !== 1 || !isLinkedXProfileShape(parsed)) return null;
    return {
      subject: parsed.subject,
      handle: parsed.handle,
      name: parsed.name,
      avatarUrl: parsed.avatarUrl,
      linkedAt: parsed.linkedAt,
    };
  } catch {
    return null;
  }
}

/** Persist a freshly-linked X profile and notify every mounted reader. */
export function saveLinkedXProfile(
  profile: LinkedXProfile,
  storage: Storage | null = getDefaultStorage(),
): "local_storage" | "memory" {
  let persistence: "local_storage" | "memory" = "memory";
  if (storage) {
    try {
      const payload: StoredXProfile = { version: 1, ...profile };
      storage.setItem(X_PROFILE_STORAGE_KEY, JSON.stringify(payload));
      persistence = "local_storage";
    } catch {
      persistence = "memory";
    }
  }
  dispatchXProfileUpdated();
  return persistence;
}

/** Clear the persisted link (e.g. a Privy logout that ends the session it
 *  came from) so a later, different account never inherits a stale avatar. */
export function clearLinkedXProfile(storage: Storage | null = getDefaultStorage()): void {
  if (storage) {
    try {
      storage.removeItem(X_PROFILE_STORAGE_KEY);
    } catch {
      /* best-effort only — an unclearable stale entry is still overwritten on the next link */
    }
  }
  dispatchXProfileUpdated();
}

function dispatchXProfileUpdated(): void {
  try {
    globalThis.dispatchEvent?.(new Event(X_PROFILE_UPDATED_EVENT));
  } catch {
    /* non-DOM test environments never dispatch — readers keep their last read */
  }
}

/**
 * Privy's `user.twitter.profilePictureUrl` is a 48x48 `_normal` thumbnail
 * (Privy's own SDK doc comment, mirroring the X v1 media API). Strip the
 * suffix for a sharper portrait wherever the original-size photo is available.
 */
export function upgradeTwitterAvatarUrl(url: string | null): string | null {
  if (!url) return null;
  return url.replace(/_normal(?=\.[a-zA-Z0-9]+(?:[?#]|$))/, "");
}

/**
 * Extract a linked X/Twitter profile from a Privy `user` object. Defensive —
 * never assumes the SDK shape beyond a plain-object duck-type, so an
 * unexpected shape fails closed to null (no Twitter linked) rather than
 * throwing mid-render.
 */
export function extractXProfileFromPrivyUser(user: unknown): LinkedXProfile | null {
  if (!user || typeof user !== "object") return null;
  const twitter = (user as Record<string, unknown>).twitter;
  if (!twitter || typeof twitter !== "object") return null;
  const t = twitter as Record<string, unknown>;
  const subject = typeof t.subject === "string" ? t.subject.trim() : "";
  if (!subject) return null;
  const handle = typeof t.username === "string" && t.username.trim() ? t.username.trim() : null;
  const name = typeof t.name === "string" && t.name.trim() ? t.name.trim() : null;
  const rawAvatar = typeof t.profilePictureUrl === "string" ? t.profilePictureUrl.trim() : "";
  const avatarUrl = rawAvatar ? upgradeTwitterAvatarUrl(rawAvatar) : null;
  return { subject, handle, name, avatarUrl, linkedAt: new Date().toISOString() };
}

/** Pure view-state for the "Connect X" affordance — three honest states only:
 *  already connected (render the portrait + handle), connectable (wire the
 *  real flow), or unavailable (Privy not configured, its Twitter method not
 *  enabled yet, or the SDK isn't ready) — the LAST case always shows the
 *  SAME honest CONNECT_X_UNAVAILABLE_MESSAGE, never a raw error or dev caveat. */
export type ConnectXViewState =
  | { kind: "connected"; profile: LinkedXProfile }
  | { kind: "unavailable" }
  | { kind: "connectable" };

export function deriveConnectXViewState(args: {
  privyConfigured: boolean;
  connectXAvailable: boolean;
  profile: LinkedXProfile | null;
  /** A prior connect attempt already failed (Twitter not enabled in the Privy
   *  dashboard yet, SDK rejection, etc.) — folds into the same honest
   *  "unavailable" state rather than a distinct error UI. */
  xConnectError?: string | null;
}): ConnectXViewState {
  if (args.profile) return { kind: "connected", profile: args.profile };
  if (!args.privyConfigured || !args.connectXAvailable || args.xConnectError) return { kind: "unavailable" };
  return { kind: "connectable" };
}

/** "@handle" for display, or a name/short fallback when X returned no handle. */
export function displayHandle(profile: LinkedXProfile): string {
  if (profile.handle) return `@${profile.handle}`;
  if (profile.name) return profile.name;
  return t("runtime.xProfile.connected");
}
