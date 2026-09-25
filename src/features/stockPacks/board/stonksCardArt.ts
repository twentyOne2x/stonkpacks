// Real D4 reward-card renders (stonkpacks-3d/redo-20260924/truth-20260925,
// reward-card and reward-card-rest), cut out along their alpha:
// - "34": the three-quarter view, 582x880. Its small print (token amount, pull
//   number) is illustrative and sits in the lens blur; the page prints the real
//   numbers in text beside it.
// - "front": 145x200 table thumbnails.
// The printed value at pull and multiplier on each render match the locked D1
// table. Files are content-addressed under /pack3d/stonkpacks/ (served immutable).

const ROOT = "/pack3d/stonkpacks";

export type StonksCardArt = Readonly<{ threeQuarter: string; front: string }>;

export const STONKS_CARD_ART: Readonly<Record<string, StonksCardArt>> = Object.freeze({
  NVDAx: { threeQuarter: `${ROOT}/card-nvdax-34.991ae2d7d2.webp`, front: `${ROOT}/card-nvdax-front.e3d38a3c63.webp` },
  TSLAx: { threeQuarter: `${ROOT}/card-tslax-34.1d202c9e82.webp`, front: `${ROOT}/card-tslax-front.816e16ea7d.webp` },
  MSFTx: { threeQuarter: `${ROOT}/card-msftx-34.6efcf5a984.webp`, front: `${ROOT}/card-msftx-front.0de29f5e0f.webp` },
  SPYx: { threeQuarter: `${ROOT}/card-spyx-34.795ddf0bf8.webp`, front: `${ROOT}/card-spyx-front.73965c2bcb.webp` },
  QQQx: { threeQuarter: `${ROOT}/card-qqqx-34.e42d37ac6b.webp`, front: `${ROOT}/card-qqqx-front.c66b99ae46.webp` },
  AAPLx: { threeQuarter: `${ROOT}/card-aaplx-34.d6ccecb1b7.webp`, front: `${ROOT}/card-aaplx-front.734178c9b8.webp` },
  GLDx: { threeQuarter: `${ROOT}/card-gldx-34.32d6447832.webp`, front: `${ROOT}/card-gldx-front.c8aec51793.webp` },
});

export function stonksCardArt(ticker: string): StonksCardArt | null {
  return STONKS_CARD_ART[ticker] ?? null;
}

/** The L2 lit channel-letter logo render (1440x810), screen-blended into the footer. */
export const STONKS_FOOTER_LOGO = `${ROOT}/logo-l2-lit.f57952111d.webp`;
