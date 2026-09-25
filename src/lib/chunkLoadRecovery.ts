// Self-healing for STALE-BUILD CHUNK SKEW (owner bug 2026-07-10: "packs don't
// always render"). Every route (and the pack scene loader) is code-split, and
// dist is rebuilt in place many times a day while tabs stay open on it: a tab
// from an older build — or a load that lands inside vite's empty-outDir→write
// rebuild window — requests a content-hashed chunk that no longer exists on
// disk. The dynamic import rejects, React.lazy throws into a `<Suspense
// fallback={null}>` with no error boundary, and the page (or the lazily loaded
// subtree) silently blanks: no message, no retry, fixed only by a hard refresh.
// Proven with playwright interception in
// docs/reports/fable/2026-07-10-pack-render-reliability.md.
//
// Vite funnels EVERY failed dynamic-import — the chunk itself and its
// css/js dependency preloads — through a cancelable `vite:preloadError`
// window event before rethrowing (vite 6 preload helper:
// `baseModule().catch(handlePreloadError)`), which makes one global listener
// the canonical cure: swallow the first failure and reload once, so the tab
// re-reads the no-cache index.html and picks up the current hashes.
//
// LOOP GUARD: a reload can only re-fail (e.g. the rebuild is still running, or
// the server is down). We persist the reload timestamp in sessionStorage and
// never auto-reload twice inside RELOAD_GUARD_WINDOW_MS — the second failure
// falls through to vite's rethrow (visible console error), never a reload
// loop. If sessionStorage cannot be WRITTEN (private-mode quota, disabled
// storage) the guard could not survive the reload, so we do not reload at all
// rather than risk an unguarded loop.

const RELOAD_GUARD_KEY = "attnChunkSkewReloadAt";
/** Minimum spacing between auto-reloads. Long enough that a genuinely broken
 * server cannot loop; short enough that a long-lived tab that skews AGAIN on a
 * later rebuild (hours apart) still self-heals. */
const RELOAD_GUARD_WINDOW_MS = 60_000;

function readLastReloadAt(): number {
  try {
    return Number(window.sessionStorage.getItem(RELOAD_GUARD_KEY) ?? "0") || 0;
  } catch {
    return Number.NaN; // storage unreadable — treat as "guard unavailable"
  }
}

/** Returns true only when the guard timestamp was durably persisted. */
function writeReloadGuard(now: number): boolean {
  try {
    window.sessionStorage.setItem(RELOAD_GUARD_KEY, String(now));
    return window.sessionStorage.getItem(RELOAD_GUARD_KEY) === String(now);
  } catch {
    return false;
  }
}

/** Idempotent; called once at app bootstrap (main.tsx), before any lazy route
 * can resolve, so even the entry-most import failure is covered. */
export function installChunkLoadRecovery(): void {
  if (typeof window === "undefined") return;
  const w = window as Window & { __attnChunkRecoveryInstalled?: boolean };
  if (w.__attnChunkRecoveryInstalled) return;
  w.__attnChunkRecoveryInstalled = true;

  // Once a recovery reload is in flight the current document is ABANDONED, but
  // its JS keeps running until the navigation commits: preventDefault() makes
  // the failed import RESOLVE (undefined), so a lazy `.then((m) => m.Export)`
  // mapper throws a stray TypeError into the void. Swallow uncaught errors /
  // rejections for the dying document only — never before a reload is chosen.
  let reloading = false;
  window.addEventListener("error", (e) => {
    if (reloading) e.preventDefault();
  });
  window.addEventListener("unhandledrejection", (e) => {
    if (reloading) e.preventDefault();
  });

  window.addEventListener("vite:preloadError", (event) => {
    const now = Date.now();
    const lastReloadAt = readLastReloadAt();
    if (Number.isNaN(lastReloadAt) || now - lastReloadAt < RELOAD_GUARD_WINDOW_MS) {
      // Recently reloaded already (or the guard can't be trusted): let vite
      // rethrow so the failure stays visible instead of looping.
      console.error(
        "[attn] chunk failed to load again after an auto-reload; giving up (stale build skew?)",
        event.payload,
      );
      return;
    }
    if (!writeReloadGuard(now)) {
      console.error("[attn] chunk failed to load and reload-guard storage is unavailable; not auto-reloading", event.payload);
      return;
    }
    event.preventDefault(); // swallow vite's rethrow — we own recovery now
    reloading = true;
    console.warn("[attn] stale build chunk failed to load; auto-reloading once to pick up the current build", event.payload);
    window.location.reload();
  });
}
