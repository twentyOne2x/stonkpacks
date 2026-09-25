import * as z from "zod/v4";

/**
 * Turn off Zod's JIT fast path, which probes `new Function("")` once. Behavior and
 * results are identical; only the compiled fast path is skipped. Browser hosts with a
 * strict Content-Security-Policy (no 'unsafe-eval') call this before the first parse so
 * the probe never runs and never reports a CSP violation.
 */
export function configureZodJitless(): void {
  z.config({ jitless: true });
}
