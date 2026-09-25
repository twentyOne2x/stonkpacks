import { Buffer } from "buffer";

type PrivySolanaBrowserGlobals = {
  Buffer?: typeof Buffer;
};

/**
 * Privy's Solana signer serializes transactions with the Node-compatible
 * `Buffer` API. Vite does not provide that global in browsers, so install the
 * audited browser implementation before any hosted signer action can run.
 */
export function installPrivySolanaBufferGlobal(
  target: PrivySolanaBrowserGlobals = globalThis as PrivySolanaBrowserGlobals,
): typeof Buffer {
  if (typeof target.Buffer === "undefined") {
    target.Buffer = Buffer;
  }
  return target.Buffer;
}

// This module is imported before Privy's Solana entry point. Install at module
// evaluation time so transitive Solana packages that reference the global
// during their own initialization cannot race `main.tsx`.
installPrivySolanaBufferGlobal();
