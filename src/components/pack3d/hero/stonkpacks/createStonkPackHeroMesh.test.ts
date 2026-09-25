import assert from "node:assert/strict";
import { test } from "node:test";

import { type BufferAttribute, type Mesh, MeshBasicMaterial, Texture } from "three";

import {
  createStonkPackCrimpGeometry,
  createStonkPackHeroMesh,
  createStonkPackPouchGeometry,
  disposeStonkPackHeroMesh,
  STONK_PACK_ATLAS,
  STONK_PACK_DIMENSIONS,
  stonkPackAtlasU,
} from "./createStonkPackHeroMesh";
import { createStonkPackStudioScene, disposeStonkPackStudioScene, STONK_PACK_STUDIO_PANELS } from "./stonkPackHeroEnvironment";
import { createStonkPackFoilMaterial, prepareStonkPackTextures, STONK_PACK_FOIL } from "./stonkPackHeroMaterial";

function range(attribute: BufferAttribute, axis: 0 | 1 | 2): [number, number] {
  let min = Infinity;
  let max = -Infinity;
  for (let index = 0; index < attribute.count; index += 1) {
    const value = axis === 0 ? attribute.getX(index) : axis === 1 ? attribute.getY(index) : attribute.getZ(index);
    assert.ok(Number.isFinite(value), "no NaN or infinite vertex");
    min = Math.min(min, value);
    max = Math.max(max, value);
  }
  return [min, max];
}

test("the STONKPACKS pack keeps the createPackHeroMesh node contract", () => {
  const material = new MeshBasicMaterial();
  const nodes = createStonkPackHeroMesh(material);
  assert.equal(nodes.root.name, "PackRoot");
  assert.deepEqual(nodes.root.children.map((child) => child.name), [
    "OuterWrapperFront",
    "OuterWrapperBack",
    "TopCrimpFront",
    "TopCrimpBack",
    "BottomCrimpFront",
    "BottomCrimpBack",
  ]);
  for (const child of nodes.root.children) assert.equal((child as Mesh).material, material, `${child.name} uses the one foil`);
  disposeStonkPackHeroMesh(nodes);
});

test("the body is sized from the atlas so the art is never stretched", () => {
  const halfWidth = STONK_PACK_ATLAS.width / 2;
  const bodyPixels = STONK_PACK_ATLAS.height - STONK_PACK_ATLAS.crimpBand * 2;
  assert.equal(STONK_PACK_DIMENSIONS.bodyHeight / STONK_PACK_DIMENSIONS.width, bodyPixels / halfWidth);
  assert.equal(STONK_PACK_DIMENSIONS.crimpHeight / STONK_PACK_DIMENSIONS.width, STONK_PACK_ATLAS.crimpBand / halfWidth);
  const front = createStonkPackPouchGeometry(1);
  const position = front.getAttribute("position") as BufferAttribute;
  const [minX, maxX] = range(position, 0);
  const [minY, maxY] = range(position, 1);
  assert.ok(Math.abs(maxX - minX - STONK_PACK_DIMENSIONS.width) < 1e-6);
  assert.ok(Math.abs(maxY - minY - STONK_PACK_DIMENSIONS.bodyHeight) < 1e-6);
});

test("front art samples the left atlas half and back art the right half, mirrored", () => {
  assert.equal(stonkPackAtlasU(0, 1), 0);
  assert.equal(stonkPackAtlasU(1, 1), 0.5);
  assert.equal(stonkPackAtlasU(0, -1), 1);
  assert.equal(stonkPackAtlasU(1, -1), 0.5);
  for (const [sign, low, high] of [[1, 0, 0.5], [-1, 0.5, 1]] as const) {
    const uv = createStonkPackPouchGeometry(sign).getAttribute("uv") as BufferAttribute;
    const [minU, maxU] = range(uv, 0);
    const [minV, maxV] = range(uv, 1);
    assert.ok(Math.abs(minU - low) < 1e-6 && Math.abs(maxU - high) < 1e-6, `sign ${sign} u range`);
    assert.ok(Math.abs(minV - STONK_PACK_DIMENSIONS.crimpV) < 1e-6, "pouch starts above the bottom crimp band");
    assert.ok(Math.abs(maxV - (1 - STONK_PACK_DIMENSIONS.crimpV)) < 1e-6, "pouch ends below the top crimp band");
  }
});

test("the pouch bulges outward with flat heat-sealed side flanges", () => {
  for (const sign of [1, -1] as const) {
    const geometry = createStonkPackPouchGeometry(sign);
    const position = geometry.getAttribute("position") as BufferAttribute;
    const normal = geometry.getAttribute("normal") as BufferAttribute;
    const halfSeal = STONK_PACK_DIMENSIONS.width / 2 - STONK_PACK_DIMENSIONS.seal;
    let peak = 0;
    let facing = 0;
    for (let index = 0; index < position.count; index += 1) {
      const x = position.getX(index);
      const z = position.getZ(index);
      assert.ok(z * sign >= 0, "each sheet stays on its own side");
      if (Math.abs(x) > halfSeal + 1e-6) assert.ok(Math.abs(z - sign * 0.004) < 1e-6, "flanges are flat");
      peak = Math.max(peak, z * sign);
      facing += normal.getZ(index) * sign > 0 ? 1 : 0;
    }
    assert.ok(peak > STONK_PACK_DIMENSIONS.bulge * 0.9 && peak < STONK_PACK_DIMENSIONS.bulge * 1.1, `bulge ${peak}`);
    assert.ok(facing / position.count > 0.95, "normals face outward");
  }
});

test("crimps carry 42 serrated teeth textured from the atlas crimp bands", () => {
  const { teeth, toothDepth, crimpHeight, bodyHeight, crimpV } = STONK_PACK_DIMENSIONS;
  assert.equal(teeth, 42);
  for (const top of [true, false]) {
    const geometry = createStonkPackCrimpGeometry(1, top);
    const position = geometry.getAttribute("position") as BufferAttribute;
    const uv = geometry.getAttribute("uv") as BufferAttribute;
    const columns = teeth * 2 + 1;
    const outerRow = position.count - columns;
    let tips = 0;
    let notches = 0;
    for (let i = 0; i < columns; i += 1) {
      const reach = Math.abs(position.getY(outerRow + i)) - bodyHeight / 2;
      if (Math.abs(reach - crimpHeight) < 1e-6) tips += 1;
      else if (Math.abs(reach - (crimpHeight - toothDepth)) < 1e-6) notches += 1;
    }
    assert.equal(tips, teeth + 1, "tooth tips on every even column");
    assert.equal(notches, teeth, "one notch between each pair of tips");
    const [minV, maxV] = range(uv, 1);
    if (top) assert.ok(minV >= 1 - crimpV - 1e-6 && maxV <= 1 + 1e-6, "top crimp samples the top band");
    else assert.ok(minV >= -1e-6 && maxV <= crimpV + 1e-6, "bottom crimp samples the bottom band");
  }
});

test("the studio has a royal-blue dome, white softboxes and exactly one orange panel", () => {
  const scene = createStonkPackStudioScene();
  assert.equal(scene.children.length, 1 + STONK_PACK_STUDIO_PANELS.length);
  const warm = STONK_PACK_STUDIO_PANELS.filter(({ rgb }) => rgb[0] > rgb[2]);
  assert.equal(warm.length, 1);
  disposeStonkPackStudioScene(scene);
});

test("the foil reads base colour as sRGB and metal/roughness and normals as data", () => {
  const textures = { base: new Texture(), metalRough: new Texture(), normal: new Texture() };
  prepareStonkPackTextures(textures, 8);
  assert.equal(textures.base.colorSpace, "srgb");
  assert.notEqual(textures.metalRough.colorSpace, "srgb");
  assert.notEqual(textures.normal.colorSpace, "srgb");
  assert.equal(textures.base.anisotropy, 8);
  const material = createStonkPackFoilMaterial(textures);
  assert.equal(material.map, textures.base);
  assert.equal(material.metalnessMap, textures.metalRough);
  assert.equal(material.roughnessMap, textures.metalRough);
  assert.equal(material.normalMap, textures.normal);
  assert.equal(material.metalness, 1);
  assert.equal(material.roughness, 1);
  assert.equal(material.clearcoat, STONK_PACK_FOIL.clearcoat);
  assert.equal(material.iridescence, STONK_PACK_FOIL.iridescence);
  assert.deepEqual(material.iridescenceThicknessRange, [240, 520]);
  material.dispose();
});
