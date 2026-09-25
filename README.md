# STONKPACKS

Open $25 packs of tokenized stocks on Solana. Each pack reveals one xStock via
onchain VRF, delivered to your wallet to keep or sell back at market. Public
odds, token-backed payouts, and every pull shows its multiplier and PnL.

This repository is the STONKPACKS web app (the site at stonkpacks.xyz): a
standalone Vite + React + TypeScript single page app. It holds the pages,
components, styles, fonts, pack art and brand assets, the Privy login config
and the typed HTTP client that talks to the public STONKPACKS API. The API,
the payout and custody services and all operator tooling live elsewhere and
are not part of this repository. See PROVENANCE.md for exactly what was taken
from where.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home: the pack, rip, reveal, keep or sell, payouts and odds |
| `/stock-packs/collection` (also `/collection`) | Token history for the logged-in wallet |
| `/docs`, `/docs/<section>/<page>` | Docs |

Every other path renders the home page.

## Setup

Requirements: Node 20 or newer and pnpm 9 (`corepack enable` picks up the
pinned `packageManager` version).

```sh
pnpm install
pnpm dev        # http://127.0.0.1:5173
```

`pnpm dev` serves the site locally and proxies same-origin `/api/*` requests to
the production STONKPACKS API (`https://stonkpacks-api-production.up.railway.app`),
so public reads such as the pack list, odds and payouts work out of the box.
Nothing is bought or sold unless you log in and confirm a transaction in your
own wallet. Set `STONKPACKS_API_PROXY_TARGET` to point the proxy at another API.

Login needs a Privy app whose allowed origins include your dev origin. Without
`VITE_ENABLE_PRIVY_AUTH=true` and `VITE_STOCK_PACKS_PRIVY_APP_ID`, the site
renders read-only and the login button reports that login is unavailable.

Other scripts:

```sh
pnpm typecheck  # tsc --noEmit
pnpm test       # unit tests (node:test via tsx)
pnpm build      # production build into dist/
pnpm preview    # serve dist/ locally
```

## Environment variables

Names only. All `VITE_*` values are compiled into the public bundle, so they
must never hold secrets. Put local overrides in `.env.local` (git ignored); see
`.env.example`.

| Name | Purpose | Default |
| --- | --- | --- |
| `VITE_ENABLE_PRIVY_AUTH` | Turn on Privy login (`true`) | off |
| `VITE_STOCK_PACKS_PRIVY_APP_ID` | Public Privy app id for STONKPACKS | none |
| `VITE_STOCK_PACKS_PRIVY_CLIENT_ID` | Optional public Privy client id | none |
| `VITE_ATTN_PACKS_MAINNET_API_BASE_URL` | STONKPACKS API origin used by the browser | dev: local origin (proxied); build: production API origin |
| `VITE_SOLANA_MAINNET_RPC_URL` | Solana mainnet RPC (https) for wallet reads and transactions | `https://api.mainnet-beta.solana.com` |
| `VITE_STOCK_PACKS_THEME` | `stonks` enables the STONKPACKS visual layer | `stonks` |
| `VITE_STOCK_PACKS_PULL_ONLY` | `true` hides launch and pool links | `true` |
| `VITE_STOCK_PACKS_PLATFORM_TOKEN_MINT`, `_SYMBOL`, `_NAME`, `_LOGO_URL` | Optional platform token shown on the site | none |
| `STONKPACKS_API_PROXY_TARGET` | Dev and preview proxy target for `/api` | production API |
| `STONKPACKS_WEB_PORT` | Dev server port | `5173` |

Use a keyed RPC provider for production. An RPC URL that carries an API key is
visible to every visitor, so restrict that key by origin at the provider.

## Deploy

`vercel.json` holds the production routing: API rewrites to the STONKPACKS
API, the SPA fallback, cache headers and the security headers (strict CSP with
no inline scripts, `X-Frame-Options: DENY`, `nosniff`, strict referrer). This
repository is not connected to any Vercel project yet.

## Build

BUILD_PROOF_PLACEHOLDER

## Repository layout

```
src/                 app source (entry: src/main.tsx)
src/features/stockPacks/   STONKPACKS pages, payouts, sale flow, branding, site chrome
src/components/pack3d/hero/stonkpacks/   the 3D pack (three.js)
src/routes/royale/   shared UI modules the pages use (brand mark, docs, i18n, wallet and Privy wiring)
src/vendor/pack-network/   generated API contract: response schemas and client-side checks
public/              fonts, pack and card art, icons, llms.txt, robots, sitemap
brand/               source brand images, 3D renders and the unboxing film (not served)
stockPacksBrandArtifact.ts   build plugin that writes the STONKPACKS head and icons
```

Some shared modules keep their upstream `royale` file names so they can be
compared with the source monorepo; they carry no other product's pages.

## License

All rights reserved; see LICENSE. Third-party components and fonts are listed
in THIRD_PARTY_NOTICES.md.
