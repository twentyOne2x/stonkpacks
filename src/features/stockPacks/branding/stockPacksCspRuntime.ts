import { configureZodJitless } from "@attn-packs/pack-network/zod-runtime";

/**
 * STONKPACKS host builds (VITE_STOCK_PACKS_THEME=stonks) ship a strict CSP without
 * 'unsafe-eval'. Zod's one-time `new Function` capability probe would be blocked and
 * reported as a violation, so the Stock build runs Zod jitless (same results). The
 * Royale build never sets the flag and is unchanged. This module imports only the
 * zod-runtime subpath and must stay the first import in main.tsx: Zod reads the flag
 * when each schema is constructed, so it has to be set before any schema module runs.
 */
if (import.meta.env.VITE_STOCK_PACKS_THEME === "stonks") configureZodJitless();
