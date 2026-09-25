// Public media for the STONKPACKS 3D pack hero. Files live under
// apps/web/public/pack3d/stonkpacks/, which Vercel serves as immutable, so each
// name carries the first 10 hex digits of the file's SHA-256 (pinned by
// stonkPackHeroAssets.test.ts). Replace a file only together with its name.
//
// Sources (2026-09-25):
// - pack-t025-*: stonkpacks-3d/textures/web/pack_t025_{basecolor,mr,normal}.png
//   (2048x1728 front|back atlas), WebP, plus a 1024x864 set for compact screens.
//   The MR map follows the glTF convention three.js reads: G = roughness, B = metalness.
// - pack-hero: redo-20260924/truth-20260925/pack-hero/pack_hero_alpha.png (1000x1400, alpha).
// - pack-float: redo-20260924/truth-20260925/pack-float (720x1008, 5 s, alpha):
//   VP9 alpha WebM, and HEVC alpha for Safari.

const ROOT = "/pack3d/stonkpacks";

export type StonkPackTextureSet = Readonly<{
  base: string;
  metalRough: string;
  normal: string;
}>;

export const STONK_PACK_TEXTURES: Readonly<Record<"full" | "compact", StonkPackTextureSet>> = Object.freeze({
  full: Object.freeze({
    base: `${ROOT}/pack-t025-base-2048.d64b375098.webp`,
    metalRough: `${ROOT}/pack-t025-mr-2048.b0a51a3008.webp`,
    normal: `${ROOT}/pack-t025-normal-2048.6fddf5d614.webp`,
  }),
  compact: Object.freeze({
    base: `${ROOT}/pack-t025-base-1024.9d953fc3f8.webp`,
    metalRough: `${ROOT}/pack-t025-mr-1024.b4fa3d310b.webp`,
    normal: `${ROOT}/pack-t025-normal-1024.ec0fd5981f.webp`,
  }),
});

/** Rendered still of the sealed pack, lit for the blue board. */
export const STONK_PACK_POSTER = `${ROOT}/pack-hero.a72782e5ca.webp`;

/**
 * Rendered float loop. Safari gets HEVC with alpha. The quicktime type makes
 * Chromium skip it (Chromium can decode HEVC but drops the alpha layer), so it
 * falls through to the VP9 alpha WebM.
 */
export const STONK_PACK_FLOAT_VIDEO = Object.freeze([
  Object.freeze({ src: `${ROOT}/pack-float-hevc.eead8d481b.mp4`, type: 'video/quicktime; codecs="hvc1"' }),
  Object.freeze({ src: `${ROOT}/pack-float.9586fc213d.webm`, type: "video/webm" }),
]);

/** Compact screens and constrained devices load the 1024 texture set. */
export function stonkPackTextureSetFor(input: Readonly<{ viewportWidth: number; devicePixelRatio: number }>): StonkPackTextureSet {
  const physicalWidth = input.viewportWidth * Math.min(2, Math.max(1, input.devicePixelRatio));
  return input.viewportWidth <= 760 || physicalWidth < 1100 ? STONK_PACK_TEXTURES.compact : STONK_PACK_TEXTURES.full;
}
