import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { stockPacksBrandArtifact } from "./stockPacksBrandArtifact";
import { stockPacksAssetFileName, stockPacksChunkFileName } from "./stockPacksChunkNames";

const root = fileURLToPath(new URL(".", import.meta.url));

// Public build flags for the live STONKPACKS look. An explicit value in the
// environment (or a local .env file, never committed) wins over these defaults.
process.env.VITE_STOCK_PACKS_THEME ??= "stonks";
process.env.VITE_STOCK_PACKS_PULL_ONLY ??= "true";

const PRODUCTION_API_ORIGIN = "https://stonkpacks-api-production.up.railway.app";
// Same-origin /api calls are proxied to this origin in dev and preview.
// Default: the production STONKPACKS API (public read endpoints).
const apiProxyTarget = process.env.STONKPACKS_API_PROXY_TARGET?.trim() || PRODUCTION_API_ORIGIN;
const devPort = Number(process.env.STONKPACKS_WEB_PORT ?? 5173);
const proxy = {
  "/api": { target: apiProxyTarget, changeOrigin: true, secure: true },
  "/creator/stonkfun/": { target: apiProxyTarget, changeOrigin: true, secure: true },
};

export default defineConfig(({ command }) => {
  // The Stock API origin and a mainnet RPC are required by the site config check
  // (royaleBackendRail.ts). In dev the browser talks to the local origin and the
  // proxy above forwards /api to the API; a build talks to the API origin directly.
  process.env.VITE_ATTN_PACKS_MAINNET_API_BASE_URL ??= command === "serve"
    ? `http://127.0.0.1:${devPort}`
    : PRODUCTION_API_ORIGIN;
  process.env.VITE_SOLANA_MAINNET_RPC_URL ??= "https://api.mainnet-beta.solana.com";
  return {
    envPrefix: ["VITE_", "NEXT_PUBLIC_"],
    publicDir: "public",
    resolve: {
      alias: [
        // Solana's browser SDK imports `buffer` by its Node name; pin the browser package.
        { find: /^buffer$/u, replacement: resolve(root, "node_modules/buffer/index.js") },
      // Vendored, tree-shaken API contract from attn-packs (see PROVENANCE.md).
      { find: /^@attn-packs\/pack-network\/zod-runtime$/u, replacement: resolve(root, "src/vendor/pack-network/zodRuntime.ts") },
      { find: /^@attn-packs\/pack-network$/u, replacement: resolve(root, "src/vendor/pack-network/index.js") },
    ],
    },
    plugins: [react(), stockPacksBrandArtifact()],
    build: {
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          chunkFileNames: stockPacksChunkFileName,
          assetFileNames: stockPacksAssetFileName,
          manualChunks(id) {
            if (id.includes("/node_modules/three/examples/")) return "pack3d-three-addons";
            if (id.includes("/node_modules/three/")) return "pack3d-three";
            if (/\/node_modules\/(react|react-dom|scheduler)\//u.test(id)) return "vendor-react";
            if (id.includes("/node_modules/@privy-io/")) return "vendor-privy";
            return undefined;
          },
        },
      },
    },
    server: { host: "127.0.0.1", port: devPort, strictPort: true, proxy },
    preview: { host: "127.0.0.1", proxy },
  };
});
