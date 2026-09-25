# Third-party notices

STONKPACKS is proprietary (see LICENSE). It is built with the open source
components below, each under its own license. Versions are pinned in
package.json and pnpm-lock.yaml.

## Runtime libraries (bundled into the site)

| Component | Version | License |
| --- | --- | --- |
| @privy-io/react-auth (Privy SDK) | 3.35.2 | Apache-2.0 |
| react, react-dom | 18.3.1 | MIT |
| three (three.js) | 0.184.0 | MIT |
| @solana/web3.js | 1.98.4 | MIT |
| @solana/kit | 5.5.1 | MIT |
| @solana/spl-token | 0.4.14 | Apache-2.0 |
| @solana-program/memo | 0.9.0 | Apache-2.0 |
| @solana-mobile/wallet-standard-mobile | 0.6.0 | Apache-2.0 |
| @wallet-standard/app | 1.1.1 | Apache-2.0 |
| zod | 4.4.3 | MIT |
| @noble/hashes | 2.2.0 | MIT |
| bs58 | 6.0.0 | MIT |
| buffer | 6.0.3 | MIT |

Transitive dependencies (for example the WalletConnect and viem packages that
the Privy SDK pulls in) keep their own licenses; `pnpm licenses list` prints
the full set.

## Build tools (not shipped)

vite 6.4.3 (MIT), @vitejs/plugin-react 4.7.0 (MIT), typescript 5.9.3
(Apache-2.0), tsx 4.23.12 (MIT).

## Fonts

All fonts shipped by the site are under the SIL Open Font License 1.1, which
allows bundling and redistribution with software. License texts are kept next
to the font files.

- Sora and Space Grotesk (latin subsets): `public/stonkpacks/fonts/`, license
  in `public/stonkpacks/fonts/OFL.txt`.
- Nunito (one weight, subset): `public/pack3d/stonkpacks/`, license in
  `public/pack3d/stonkpacks/OFL-nunito.txt`.
- Display faces embedded in the shared stylesheets under `src/routes/royale/`
  (Cinzel Decorative, Cormorant, Grenze Gotisch, Limelight, MedievalSharp,
  Megrim, Metamorphous, Poiret One, Uncial Antiqua, UnifrakturMaguntia,
  Anton SC, Archivo, Bricolage Grotesque, Geist, Space Grotesk, Unbounded): all
  Google Fonts families under OFL-1.1; the Cinzel notice is in
  `src/routes/royale/RoyaleDeco.Cinzel.OFL.txt`.

## Artwork

Pack art, card art, 3D renders, the unboxing film and the social images in
`public/` and `brand/` are original STONKPACKS artwork, all rights reserved.
Ticker names (for example AAPLx, NVDAx, SPYx) refer to xStocks tokens and are
used descriptively.
