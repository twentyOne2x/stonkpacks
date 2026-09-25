// Physical foil for the STONKPACKS pack: the pack_t025 PBR set on one
// MeshPhysicalMaterial. Metalness and roughness both come from the MR map
// (three.js reads roughness from G and metalness from B, which is the
// generator's convention), plus the normal map. Clearcoat is the laminate film,
// and a light iridescence gives the foil its sheen as the pack turns.

import { MeshPhysicalMaterial, SRGBColorSpace, Vector2, type Texture } from "three";

export type StonkPackLoadedTextures = Readonly<{
  base: Texture;
  metalRough: Texture;
  normal: Texture;
}>;

export const STONK_PACK_FOIL = Object.freeze({
  normalScale: 1.1,
  envMapIntensity: 1.35,
  clearcoat: 0.35,
  clearcoatRoughness: 0.22,
  iridescence: 0.32,
  iridescenceIOR: 1.35,
  iridescenceThicknessRange: [240, 520] as [number, number],
});

/** Colour-manage and filter the loaded maps in place. */
export function prepareStonkPackTextures(textures: StonkPackLoadedTextures, maxAnisotropy: number): void {
  textures.base.colorSpace = SRGBColorSpace;
  for (const texture of [textures.base, textures.metalRough, textures.normal]) {
    texture.anisotropy = Math.max(1, maxAnisotropy);
    texture.generateMipmaps = true;
    texture.needsUpdate = true;
  }
}

export function createStonkPackFoilMaterial(textures: StonkPackLoadedTextures): MeshPhysicalMaterial {
  return new MeshPhysicalMaterial({
    map: textures.base,
    metalnessMap: textures.metalRough,
    roughnessMap: textures.metalRough,
    normalMap: textures.normal,
    normalScale: new Vector2(STONK_PACK_FOIL.normalScale, STONK_PACK_FOIL.normalScale),
    metalness: 1,
    roughness: 1,
    envMapIntensity: STONK_PACK_FOIL.envMapIntensity,
    clearcoat: STONK_PACK_FOIL.clearcoat,
    clearcoatRoughness: STONK_PACK_FOIL.clearcoatRoughness,
    iridescence: STONK_PACK_FOIL.iridescence,
    iridescenceIOR: STONK_PACK_FOIL.iridescenceIOR,
    iridescenceThicknessRange: [...STONK_PACK_FOIL.iridescenceThicknessRange],
  });
}

export function disposeStonkPackFoil(material: MeshPhysicalMaterial, textures: StonkPackLoadedTextures): void {
  textures.base.dispose();
  textures.metalRough.dispose();
  textures.normal.dispose();
  material.dispose();
}
