# Provenance

This repository is a curated, single-commit snapshot of the STONKPACKS web app
taken from the private `twentyOne2x/attn-packs` monorepo. No upstream Git
history was imported, so nothing outside the paths listed below appears in
any commit here.

- Source repository: `twentyOne2x/attn-packs` (private)
- Source commit: `5b3bdb51a1509e959a08a6933223849c32a2cd8e`
  (branch `claude/sp-web-headers-brand-20260925`, the live stonkpacks.xyz web line)
- Snapshot date: 2026-09-25

## How the file set was chosen

The file set is the module graph of the STONKPACKS pages and nothing else. A
new entry (`src/main.tsx`) mounts only the public pages: home (rip, reveal,
keep or sell, payouts), token history and docs. Every file reachable from that
entry was copied, plus the type-only modules that `tsc` needs and the unit
tests of included modules that pass on their own. Anything not reachable was
left out. In practice the repository holds the same code the live site
already ships to every visitor's browser, in readable form.

Path mapping: `apps/web/src/<path>` upstream is `src/<path>` here; public
assets map `apps/web/public/<path>` to `public/<path>`.

## Left out on purpose

- The API and every backend service (`apps/api`, `packages/royale-server`,
  route handlers, migrations, workers).
- Money, custody and randomness services: payout engine, custody and signer
  services, ccvrf, the market-machine (SMM) constructor and adapters, fee
  claims, pool and creator campaign builders, pack economics generators, odds
  and inventory config builders, admission, pricing and haircut rules.
- Operator tooling: the create, launch (stonk.fun) and pools pages and their
  helpers (`features/stockPacks/{creator,lp,launch}`,
  `features/playableLaunches`, `packages/board-rewards`). Their paths render
  the home page here.
- Other products in the monorepo (game routes, their pack renderers and
  artwork, card sell-back, admin and QA pages).
- Release, recovery, QA and CI ceremony tooling (release sealer, Cellwright,
  workspace gates), internal docs, briefs, runbooks and fleet notes.
- Every `.env` file and every secret. Only public values appear (public API
  origin, public Solana program ids, the Privy app id is not committed).

## Replaced or stubbed

| File here | Change |
| --- | --- |
| `src/main.tsx` | New entry derived from upstream `apps/web/src/main.tsx`: only the Privy provider bridge (verbatim), brand head setup and the three public pages. Card sell-back signing is not wired (`sellBackSignCapability: null`). |
| `src/vendor/pack-network/index.js`, `index.d.ts` | Generated from upstream `packages/pack-network/src` at the source commit: an esbuild tree-shaken bundle of only the names the pages import (response schemas and parsers, quote, payout and receipt checks, canonical digests), with bundled type declarations. The SMM constructor, fee claims, creator campaign, fixtures and admission helpers are not in it. |
| `src/vendor/pack-network/zodRuntime.ts` | Verbatim upstream `packages/pack-network/src/zodRuntime.ts`. |
| `src/features/stockPacks/player/stockPacksHttpClient.ts` | The `RandomnessCommitment` type import from `@attn-packs/core` is replaced by a local type with the same fields. |
| `src/features/stockPacks/branding/stockPacksBrand.tsx` | The brand resolver always returns the STONKPACKS profile (upstream picks by hostname). |
| `src/features/stockPacks/branding/stockPacksRoutes.ts` | The operator flag import is removed; operator routes are always off. |
| `src/routes/royale/normalOpening/NormalPackStage3D.tsx` | Reduced to the STONKPACKS 3D pack and a plain sealed-pack fallback; other products' pack art removed. |
| `src/routes/royale/royaleAuth.ts` | The card sell-back capability type import is replaced by `unknown`. |
| `vite.config.ts`, `tsconfig.json`, `index.html`, `vercel.json`, `package.json` | New, standalone versions. `vercel.json` keeps only the STONKPACKS rewrites and the upstream STONKPACKS security headers, without host conditions. |
| `stockPacksBrandArtifact.ts`, `stockPacksChunkNames.ts` | Verbatim upstream build helpers. |

The `@attn-packs/pack-network` import specifier is kept in source and aliased
to `src/vendor/pack-network` in `vite.config.ts` and `tsconfig.json`, so files
stay diffable against upstream.

## Brand assets

`brand/` holds source artwork copied from the STONKPACKS working folders on
2026-09-25: the social set (`brand-social-20260925`, final PNGs only), the true
3D renders (`stonkpacks-3d/redo-20260924/truth-20260925`: pack hero, reward
cards, unboxing film and poster). Frame sequences, variants, work files and
render receipts were left out. The served site assets are the optimized copies
under `public/`.

## Included upstream files

365 paths.

- `apps/web/src/styles.css`
- `apps/web/src/vite-env.d.ts`
- `apps/web/src/components/pack3d/performance.ts`
- `apps/web/src/components/pack3d/hero/stonkpacks/StonkPackHero.test.tsx`
- `apps/web/src/components/pack3d/hero/stonkpacks/StonkPackHero.tsx`
- `apps/web/src/components/pack3d/hero/stonkpacks/StonkPackHeroScene.ts`
- `apps/web/src/components/pack3d/hero/stonkpacks/createStonkPackHeroMesh.test.ts`
- `apps/web/src/components/pack3d/hero/stonkpacks/createStonkPackHeroMesh.ts`
- `apps/web/src/components/pack3d/hero/stonkpacks/stonkPackHeroAssets.test.ts`
- `apps/web/src/components/pack3d/hero/stonkpacks/stonkPackHeroAssets.ts`
- `apps/web/src/components/pack3d/hero/stonkpacks/stonkPackHeroEnvironment.ts`
- `apps/web/src/components/pack3d/hero/stonkpacks/stonkPackHeroMaterial.ts`
- `apps/web/src/components/pack3d/hero/stonkpacks/stonkPackHeroMotion.test.ts`
- `apps/web/src/components/pack3d/hero/stonkpacks/stonkPackHeroMotion.ts`
- `apps/web/src/features/stockPacks/auth/stockPacksPrivyConfig.ts`
- `apps/web/src/features/stockPacks/board/StonksLowerPage.tsx`
- `apps/web/src/features/stockPacks/board/stonksCardArt.ts`
- `apps/web/src/features/stockPacks/board/stonksFooter.css`
- `apps/web/src/features/stockPacks/board/stonksLower.css`
- `apps/web/src/features/stockPacks/board/stonksLowerModel.ts`
- `apps/web/src/features/stockPacks/branding/stockPacksBrand.tsx` (modified, see above)
- `apps/web/src/features/stockPacks/branding/stockPacksCopy.ts`
- `apps/web/src/features/stockPacks/branding/stockPacksCspRuntime.ts`
- `apps/web/src/features/stockPacks/branding/stockPacksDocsContent.ts`
- `apps/web/src/features/stockPacks/branding/stockPacksRoutes.ts` (modified, see above)
- `apps/web/src/features/stockPacks/branding/stockPacksShareCopy.ts`
- `apps/web/src/features/stockPacks/branding/stockPacksStonksTheme.css`
- `apps/web/src/features/stockPacks/branding/stockPacksStonksThemeDocument.ts`
- `apps/web/src/features/stockPacks/branding/stockPacksTheme.css`
- `apps/web/src/features/stockPacks/branding/stockPacksThemeFlags.test.ts`
- `apps/web/src/features/stockPacks/branding/stockPacksThemeFlags.ts`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-192.png`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-512.png`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-apple-touch.png`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-favicon-16x16.png`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-favicon-32x32.png`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-favicon-48x48.png`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-favicon.ico`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-icon.svg`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-mask-icon.svg`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-maskable-512.png`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-maskable.svg`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-og.png`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks-og.svg`
- `apps/web/src/features/stockPacks/branding/assets/stonkpacks.webmanifest`
- `apps/web/src/features/stockPacks/hero/StonksBoardBand.tsx`
- `apps/web/src/features/stockPacks/hero/stonksBoardTable.ts`
- `apps/web/src/features/stockPacks/hero/stonksBoardTile.ts`
- `apps/web/src/features/stockPacks/hero/stonksHero.css`
- `apps/web/src/features/stockPacks/hero/stonksHeroModel.ts`
- `apps/web/src/features/stockPacks/payoffs/StockPayoffCard.tsx`
- `apps/web/src/features/stockPacks/payoffs/StockPayoffDistribution.test.tsx`
- `apps/web/src/features/stockPacks/payoffs/StockPayoffDistribution.tsx`
- `apps/web/src/features/stockPacks/payoffs/StockPayoffStatePanel.tsx`
- `apps/web/src/features/stockPacks/payoffs/StockPayoffSurface.tsx`
- `apps/web/src/features/stockPacks/payoffs/index.ts`
- `apps/web/src/features/stockPacks/payoffs/payoffs.css`
- `apps/web/src/features/stockPacks/payoffs/stockPayoffPresentation.ts`
- `apps/web/src/features/stockPacks/player/StockPacksPlayerPanel.tsx`
- `apps/web/src/features/stockPacks/player/StockPacksPlayerPanelRoyale.tsx`
- `apps/web/src/features/stockPacks/player/StockPacksPlayerRoute.tsx`
- `apps/web/src/features/stockPacks/player/StockPacksRewardClaimActions.tsx`
- `apps/web/src/features/stockPacks/player/StockPacksRewardPayoutDetails.tsx`
- `apps/web/src/features/stockPacks/player/stockPacksHttpClient.ts` (modified, see above)
- `apps/web/src/features/stockPacks/player/stockPacksPlayer.css`
- `apps/web/src/features/stockPacks/player/stockPacksPlayerModel.ts`
- `apps/web/src/features/stockPacks/player/stockPacksPlayerRouteModel.ts`
- `apps/web/src/features/stockPacks/player/stockPacksPlayerTypes.ts`
- `apps/web/src/features/stockPacks/player/useStockPacksPlayer.ts`
- `apps/web/src/features/stockPacks/sale/StockPackSalePanel.tsx`
- `apps/web/src/features/stockPacks/sale/stockPackSale.css`
- `apps/web/src/features/stockPacks/sale/stockPackSaleActions.ts`
- `apps/web/src/features/stockPacks/sale/stockPackSalePanelView.tsx`
- `apps/web/src/features/stockPacks/site/StockPacksAccountBar.tsx`
- `apps/web/src/features/stockPacks/site/StockPacksConfigAlert.tsx`
- `apps/web/src/features/stockPacks/site/StockPacksFooter.tsx`
- `apps/web/src/features/stockPacks/site/StockPacksHistoryHeader.tsx`
- `apps/web/src/features/stockPacks/site/stockPacksSite.css`
- `apps/web/src/features/stockPacks/site/stockPacksSiteLinks.ts`
- `apps/web/src/features/stockPacks/site/stockPacksSiteStatus.test.ts`
- `apps/web/src/features/stockPacks/site/stockPacksSiteStatus.ts`
- `apps/web/src/lib/chunkLoadRecovery.ts`
- `apps/web/src/lib/formatUsd.ts`
- `apps/web/src/lib/payment/solanaUsdcTransfer.test.ts`
- `apps/web/src/lib/payment/solanaUsdcTransfer.ts`
- `apps/web/src/lib/wallet/browserSolana.test.ts`
- `apps/web/src/lib/wallet/browserSolana.ts`
- `apps/web/src/lib/wallet/mobileWalletAdapter.test.ts`
- `apps/web/src/lib/wallet/mobileWalletAdapter.ts`
- `apps/web/src/routes/royale/RoyaleBrandMark.tsx`
- `apps/web/src/routes/royale/RoyaleDeco.Cinzel.OFL.txt`
- `apps/web/src/routes/royale/privySolanaBrowserRuntime.test.ts`
- `apps/web/src/routes/royale/privySolanaBrowserRuntime.ts`
- `apps/web/src/routes/royale/privySolanaDevnetConfig.test.ts`
- `apps/web/src/routes/royale/privySolanaDevnetConfig.ts`
- `apps/web/src/routes/royale/royaleAuth.test.ts`
- `apps/web/src/routes/royale/royaleAuth.ts` (modified, see above)
- `apps/web/src/routes/royale/royaleBackendRail.test.ts`
- `apps/web/src/routes/royale/royaleBackendRail.ts`
- `apps/web/src/routes/royale/royaleBackendRailEnv.ts`
- `apps/web/src/routes/royale/royaleBrandMark.css`
- `apps/web/src/routes/royale/royaleCardDetail.css`
- `apps/web/src/routes/royale/royaleDarkTheme.css`
- `apps/web/src/routes/royale/royaleI18n.ts`
- `apps/web/src/routes/royale/royaleMoneyDisplay.css`
- `apps/web/src/routes/royale/royaleOnchainDeposit.test.ts`
- `apps/web/src/routes/royale/royaleOnchainDeposit.ts`
- `apps/web/src/routes/royale/royaleRtl.css`
- `apps/web/src/routes/royale/royaleStyles.css`
- `apps/web/src/routes/royale/royaleTokens.css`
- `apps/web/src/routes/royale/royaleXProfile.test.ts`
- `apps/web/src/routes/royale/royaleXProfile.ts`
- `apps/web/src/routes/royale/i18n/ar/arena.ts`
- `apps/web/src/routes/royale/i18n/ar/board.ts`
- `apps/web/src/routes/royale/i18n/ar/chat.ts`
- `apps/web/src/routes/royale/i18n/ar/cinema.ts`
- `apps/web/src/routes/royale/i18n/ar/core.ts`
- `apps/web/src/routes/royale/i18n/ar/docs.ts`
- `apps/web/src/routes/royale/i18n/ar/index.ts`
- `apps/web/src/routes/royale/i18n/ar/misc.ts`
- `apps/web/src/routes/royale/i18n/ar/onboarding.ts`
- `apps/web/src/routes/royale/i18n/ar/pages.ts`
- `apps/web/src/routes/royale/i18n/de/arena.ts`
- `apps/web/src/routes/royale/i18n/de/board.ts`
- `apps/web/src/routes/royale/i18n/de/chat.ts`
- `apps/web/src/routes/royale/i18n/de/cinema.ts`
- `apps/web/src/routes/royale/i18n/de/core.ts`
- `apps/web/src/routes/royale/i18n/de/docs.ts`
- `apps/web/src/routes/royale/i18n/de/index.ts`
- `apps/web/src/routes/royale/i18n/de/misc.ts`
- `apps/web/src/routes/royale/i18n/de/onboarding.ts`
- `apps/web/src/routes/royale/i18n/de/pages.ts`
- `apps/web/src/routes/royale/i18n/en/arena.ts`
- `apps/web/src/routes/royale/i18n/en/board.ts`
- `apps/web/src/routes/royale/i18n/en/chat.ts`
- `apps/web/src/routes/royale/i18n/en/cinema.ts`
- `apps/web/src/routes/royale/i18n/en/core.ts`
- `apps/web/src/routes/royale/i18n/en/docs.ts`
- `apps/web/src/routes/royale/i18n/en/index.ts`
- `apps/web/src/routes/royale/i18n/en/misc.ts`
- `apps/web/src/routes/royale/i18n/en/onboarding.ts`
- `apps/web/src/routes/royale/i18n/en/pages.ts`
- `apps/web/src/routes/royale/i18n/es-419/arena.ts`
- `apps/web/src/routes/royale/i18n/es-419/board.ts`
- `apps/web/src/routes/royale/i18n/es-419/chat.ts`
- `apps/web/src/routes/royale/i18n/es-419/cinema.ts`
- `apps/web/src/routes/royale/i18n/es-419/core.ts`
- `apps/web/src/routes/royale/i18n/es-419/docs.ts`
- `apps/web/src/routes/royale/i18n/es-419/index.ts`
- `apps/web/src/routes/royale/i18n/es-419/misc.ts`
- `apps/web/src/routes/royale/i18n/es-419/onboarding.ts`
- `apps/web/src/routes/royale/i18n/es-419/pages.ts`
- `apps/web/src/routes/royale/i18n/fil/arena.ts`
- `apps/web/src/routes/royale/i18n/fil/board.ts`
- `apps/web/src/routes/royale/i18n/fil/chat.ts`
- `apps/web/src/routes/royale/i18n/fil/cinema.ts`
- `apps/web/src/routes/royale/i18n/fil/core.ts`
- `apps/web/src/routes/royale/i18n/fil/docs.ts`
- `apps/web/src/routes/royale/i18n/fil/index.ts`
- `apps/web/src/routes/royale/i18n/fil/misc.ts`
- `apps/web/src/routes/royale/i18n/fil/onboarding.ts`
- `apps/web/src/routes/royale/i18n/fil/pages.ts`
- `apps/web/src/routes/royale/i18n/fr/arena.ts`
- `apps/web/src/routes/royale/i18n/fr/board.ts`
- `apps/web/src/routes/royale/i18n/fr/chat.ts`
- `apps/web/src/routes/royale/i18n/fr/cinema.ts`
- `apps/web/src/routes/royale/i18n/fr/core.ts`
- `apps/web/src/routes/royale/i18n/fr/docs.ts`
- `apps/web/src/routes/royale/i18n/fr/index.ts`
- `apps/web/src/routes/royale/i18n/fr/misc.ts`
- `apps/web/src/routes/royale/i18n/fr/onboarding.ts`
- `apps/web/src/routes/royale/i18n/fr/pages.ts`
- `apps/web/src/routes/royale/i18n/he/arena.ts`
- `apps/web/src/routes/royale/i18n/he/board.ts`
- `apps/web/src/routes/royale/i18n/he/chat.ts`
- `apps/web/src/routes/royale/i18n/he/cinema.ts`
- `apps/web/src/routes/royale/i18n/he/core.ts`
- `apps/web/src/routes/royale/i18n/he/docs.ts`
- `apps/web/src/routes/royale/i18n/he/index.ts`
- `apps/web/src/routes/royale/i18n/he/misc.ts`
- `apps/web/src/routes/royale/i18n/he/onboarding.ts`
- `apps/web/src/routes/royale/i18n/he/pages.ts`
- `apps/web/src/routes/royale/i18n/hi/arena.ts`
- `apps/web/src/routes/royale/i18n/hi/board.ts`
- `apps/web/src/routes/royale/i18n/hi/chat.ts`
- `apps/web/src/routes/royale/i18n/hi/cinema.ts`
- `apps/web/src/routes/royale/i18n/hi/core.ts`
- `apps/web/src/routes/royale/i18n/hi/docs.ts`
- `apps/web/src/routes/royale/i18n/hi/index.ts`
- `apps/web/src/routes/royale/i18n/hi/misc.ts`
- `apps/web/src/routes/royale/i18n/hi/onboarding.ts`
- `apps/web/src/routes/royale/i18n/hi/pages.ts`
- `apps/web/src/routes/royale/i18n/id/arena.ts`
- `apps/web/src/routes/royale/i18n/id/board.ts`
- `apps/web/src/routes/royale/i18n/id/chat.ts`
- `apps/web/src/routes/royale/i18n/id/cinema.ts`
- `apps/web/src/routes/royale/i18n/id/core.ts`
- `apps/web/src/routes/royale/i18n/id/docs.ts`
- `apps/web/src/routes/royale/i18n/id/index.ts`
- `apps/web/src/routes/royale/i18n/id/misc.ts`
- `apps/web/src/routes/royale/i18n/id/onboarding.ts`
- `apps/web/src/routes/royale/i18n/id/pages.ts`
- `apps/web/src/routes/royale/i18n/it/arena.ts`
- `apps/web/src/routes/royale/i18n/it/board.ts`
- `apps/web/src/routes/royale/i18n/it/chat.ts`
- `apps/web/src/routes/royale/i18n/it/cinema.ts`
- `apps/web/src/routes/royale/i18n/it/core.ts`
- `apps/web/src/routes/royale/i18n/it/docs.ts`
- `apps/web/src/routes/royale/i18n/it/index.ts`
- `apps/web/src/routes/royale/i18n/it/misc.ts`
- `apps/web/src/routes/royale/i18n/it/onboarding.ts`
- `apps/web/src/routes/royale/i18n/it/pages.ts`
- `apps/web/src/routes/royale/i18n/ja/arena.ts`
- `apps/web/src/routes/royale/i18n/ja/board.ts`
- `apps/web/src/routes/royale/i18n/ja/chat.ts`
- `apps/web/src/routes/royale/i18n/ja/cinema.ts`
- `apps/web/src/routes/royale/i18n/ja/core.ts`
- `apps/web/src/routes/royale/i18n/ja/docs.ts`
- `apps/web/src/routes/royale/i18n/ja/index.ts`
- `apps/web/src/routes/royale/i18n/ja/misc.ts`
- `apps/web/src/routes/royale/i18n/ja/onboarding.ts`
- `apps/web/src/routes/royale/i18n/ja/pages.ts`
- `apps/web/src/routes/royale/i18n/ko/arena.ts`
- `apps/web/src/routes/royale/i18n/ko/board.ts`
- `apps/web/src/routes/royale/i18n/ko/chat.ts`
- `apps/web/src/routes/royale/i18n/ko/cinema.ts`
- `apps/web/src/routes/royale/i18n/ko/core.ts`
- `apps/web/src/routes/royale/i18n/ko/docs.ts`
- `apps/web/src/routes/royale/i18n/ko/index.ts`
- `apps/web/src/routes/royale/i18n/ko/misc.ts`
- `apps/web/src/routes/royale/i18n/ko/onboarding.ts`
- `apps/web/src/routes/royale/i18n/ko/pages.ts`
- `apps/web/src/routes/royale/i18n/pl/arena.ts`
- `apps/web/src/routes/royale/i18n/pl/board.ts`
- `apps/web/src/routes/royale/i18n/pl/chat.ts`
- `apps/web/src/routes/royale/i18n/pl/cinema.ts`
- `apps/web/src/routes/royale/i18n/pl/core.ts`
- `apps/web/src/routes/royale/i18n/pl/docs.ts`
- `apps/web/src/routes/royale/i18n/pl/index.ts`
- `apps/web/src/routes/royale/i18n/pl/misc.ts`
- `apps/web/src/routes/royale/i18n/pl/onboarding.ts`
- `apps/web/src/routes/royale/i18n/pl/pages.ts`
- `apps/web/src/routes/royale/i18n/pt-BR/arena.ts`
- `apps/web/src/routes/royale/i18n/pt-BR/board.ts`
- `apps/web/src/routes/royale/i18n/pt-BR/chat.ts`
- `apps/web/src/routes/royale/i18n/pt-BR/cinema.ts`
- `apps/web/src/routes/royale/i18n/pt-BR/core.ts`
- `apps/web/src/routes/royale/i18n/pt-BR/docs.ts`
- `apps/web/src/routes/royale/i18n/pt-BR/index.ts`
- `apps/web/src/routes/royale/i18n/pt-BR/misc.ts`
- `apps/web/src/routes/royale/i18n/pt-BR/onboarding.ts`
- `apps/web/src/routes/royale/i18n/pt-BR/pages.ts`
- `apps/web/src/routes/royale/i18n/th/arena.ts`
- `apps/web/src/routes/royale/i18n/th/board.ts`
- `apps/web/src/routes/royale/i18n/th/chat.ts`
- `apps/web/src/routes/royale/i18n/th/cinema.ts`
- `apps/web/src/routes/royale/i18n/th/core.ts`
- `apps/web/src/routes/royale/i18n/th/docs.ts`
- `apps/web/src/routes/royale/i18n/th/index.ts`
- `apps/web/src/routes/royale/i18n/th/misc.ts`
- `apps/web/src/routes/royale/i18n/th/onboarding.ts`
- `apps/web/src/routes/royale/i18n/th/pages.ts`
- `apps/web/src/routes/royale/i18n/tr/arena.ts`
- `apps/web/src/routes/royale/i18n/tr/board.ts`
- `apps/web/src/routes/royale/i18n/tr/chat.ts`
- `apps/web/src/routes/royale/i18n/tr/cinema.ts`
- `apps/web/src/routes/royale/i18n/tr/core.ts`
- `apps/web/src/routes/royale/i18n/tr/docs.ts`
- `apps/web/src/routes/royale/i18n/tr/index.ts`
- `apps/web/src/routes/royale/i18n/tr/misc.ts`
- `apps/web/src/routes/royale/i18n/tr/onboarding.ts`
- `apps/web/src/routes/royale/i18n/tr/pages.ts`
- `apps/web/src/routes/royale/i18n/uk/arena.ts`
- `apps/web/src/routes/royale/i18n/uk/board.ts`
- `apps/web/src/routes/royale/i18n/uk/chat.ts`
- `apps/web/src/routes/royale/i18n/uk/cinema.ts`
- `apps/web/src/routes/royale/i18n/uk/core.ts`
- `apps/web/src/routes/royale/i18n/uk/docs.ts`
- `apps/web/src/routes/royale/i18n/uk/index.ts`
- `apps/web/src/routes/royale/i18n/uk/misc.ts`
- `apps/web/src/routes/royale/i18n/uk/onboarding.ts`
- `apps/web/src/routes/royale/i18n/uk/pages.ts`
- `apps/web/src/routes/royale/i18n/vi/arena.ts`
- `apps/web/src/routes/royale/i18n/vi/board.ts`
- `apps/web/src/routes/royale/i18n/vi/chat.ts`
- `apps/web/src/routes/royale/i18n/vi/cinema.ts`
- `apps/web/src/routes/royale/i18n/vi/core.ts`
- `apps/web/src/routes/royale/i18n/vi/docs.ts`
- `apps/web/src/routes/royale/i18n/vi/index.ts`
- `apps/web/src/routes/royale/i18n/vi/misc.ts`
- `apps/web/src/routes/royale/i18n/vi/onboarding.ts`
- `apps/web/src/routes/royale/i18n/vi/pages.ts`
- `apps/web/src/routes/royale/i18n/zh-Hans/arena.ts`
- `apps/web/src/routes/royale/i18n/zh-Hans/board.ts`
- `apps/web/src/routes/royale/i18n/zh-Hans/chat.ts`
- `apps/web/src/routes/royale/i18n/zh-Hans/cinema.ts`
- `apps/web/src/routes/royale/i18n/zh-Hans/core.ts`
- `apps/web/src/routes/royale/i18n/zh-Hans/docs.ts`
- `apps/web/src/routes/royale/i18n/zh-Hans/index.ts`
- `apps/web/src/routes/royale/i18n/zh-Hans/misc.ts`
- `apps/web/src/routes/royale/i18n/zh-Hans/onboarding.ts`
- `apps/web/src/routes/royale/i18n/zh-Hans/pages.ts`
- `apps/web/src/routes/royale/i18n/zh-Hant/arena.ts`
- `apps/web/src/routes/royale/i18n/zh-Hant/board.ts`
- `apps/web/src/routes/royale/i18n/zh-Hant/chat.ts`
- `apps/web/src/routes/royale/i18n/zh-Hant/cinema.ts`
- `apps/web/src/routes/royale/i18n/zh-Hant/core.ts`
- `apps/web/src/routes/royale/i18n/zh-Hant/docs.ts`
- `apps/web/src/routes/royale/i18n/zh-Hant/index.ts`
- `apps/web/src/routes/royale/i18n/zh-Hant/misc.ts`
- `apps/web/src/routes/royale/i18n/zh-Hant/onboarding.ts`
- `apps/web/src/routes/royale/i18n/zh-Hant/pages.ts`
- `apps/web/src/routes/royale/normalOpening/NormalPackStage3D.tsx` (modified, see above)
- `apps/web/src/routes/royale/normalOpening/normalPackStage3D.css`
- `apps/web/src/routes/royale/normalOpening/royaleNormalPackContentsDialog.css`
- `apps/web/src/routes/royale/normalOpening/royaleNormalPackOpening.css`
- `apps/web/src/routes/royale/pages/RoyaleDocsRoute.tsx`
- `apps/web/src/routes/royale/pages/RoyalePageFallback.tsx`
- `apps/web/src/routes/royale/pages/RoyaleSurfaceNav.tsx`
- `apps/web/src/routes/royale/pages/royaleDocsContent.tsx`
- `apps/web/src/routes/royale/pages/royaleDocsPage.css`
- `apps/web/src/routes/royale/pages/royaleDocsPath.ts`
- `apps/web/src/routes/royale/pages/royalePages.css`
- `apps/web/public/stonkpacks-192.png`
- `apps/web/public/stonkpacks-512.png`
- `apps/web/public/stonkpacks-apple-touch.png`
- `apps/web/public/stonkpacks-icon.svg`
- `apps/web/public/stonkpacks-llms.txt`
- `apps/web/public/stonkpacks-og.png`
- `apps/web/public/stonkpacks-og.svg`
- `apps/web/public/stonkpacks-robots.txt`
- `apps/web/public/stonkpacks-sitemap.xml`
- `apps/web/public/stonkpacks.webmanifest`
- `apps/web/public/pack3d/stonkpacks/OFL-nunito.txt`
- `apps/web/public/pack3d/stonkpacks/card-aaplx-34.d6ccecb1b7.webp`
- `apps/web/public/pack3d/stonkpacks/card-aaplx-front.734178c9b8.webp`
- `apps/web/public/pack3d/stonkpacks/card-gldx-34.32d6447832.webp`
- `apps/web/public/pack3d/stonkpacks/card-gldx-front.c8aec51793.webp`
- `apps/web/public/pack3d/stonkpacks/card-msftx-34.6efcf5a984.webp`
- `apps/web/public/pack3d/stonkpacks/card-msftx-front.0de29f5e0f.webp`
- `apps/web/public/pack3d/stonkpacks/card-nvdax-34.991ae2d7d2.webp`
- `apps/web/public/pack3d/stonkpacks/card-nvdax-front.e3d38a3c63.webp`
- `apps/web/public/pack3d/stonkpacks/card-qqqx-34.e42d37ac6b.webp`
- `apps/web/public/pack3d/stonkpacks/card-qqqx-front.c66b99ae46.webp`
- `apps/web/public/pack3d/stonkpacks/card-spyx-34.795ddf0bf8.webp`
- `apps/web/public/pack3d/stonkpacks/card-spyx-front.73965c2bcb.webp`
- `apps/web/public/pack3d/stonkpacks/card-tslax-34.1d202c9e82.webp`
- `apps/web/public/pack3d/stonkpacks/card-tslax-front.816e16ea7d.webp`
- `apps/web/public/pack3d/stonkpacks/logo-l2-lit.f57952111d.webp`
- `apps/web/public/pack3d/stonkpacks/nunito-900-meme.c677eb2764.woff2`
- `apps/web/public/pack3d/stonkpacks/pack-float-hevc.eead8d481b.mp4`
- `apps/web/public/pack3d/stonkpacks/pack-float.9586fc213d.webm`
- `apps/web/public/pack3d/stonkpacks/pack-hero.a72782e5ca.webp`
- `apps/web/public/pack3d/stonkpacks/pack-t025-base-1024.9d953fc3f8.webp`
- `apps/web/public/pack3d/stonkpacks/pack-t025-base-2048.d64b375098.webp`
- `apps/web/public/pack3d/stonkpacks/pack-t025-mr-1024.b4fa3d310b.webp`
- `apps/web/public/pack3d/stonkpacks/pack-t025-mr-2048.b0a51a3008.webp`
- `apps/web/public/pack3d/stonkpacks/pack-t025-normal-1024.ec0fd5981f.webp`
- `apps/web/public/pack3d/stonkpacks/pack-t025-normal-2048.6fddf5d614.webp`
- `apps/web/public/stonkpacks/fonts/OFL.txt`
- `apps/web/public/stonkpacks/fonts/stonkpacks-sora-latin-wght.woff2`
- `apps/web/public/stonkpacks/fonts/stonkpacks-space-grotesk-latin-wght.woff2`
- `apps/web/stockPacksBrandArtifact.ts`
- `apps/web/stockPacksChunkNames.ts`
- `packages/pack-network/src/*` (generated bundle, see above)
