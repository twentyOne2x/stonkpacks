// STONKPACKS variant of createPackHeroMesh (../createPackHeroMesh.ts).
//
// Same sealed-pouch contract and node names (PackRoot, OuterWrapperFront/Back,
// Top/BottomCrimpFront/Back), built for the real pack_t025 PBR atlas instead of
// the procedural print sheets:
//   - one texture atlas: the front art is the left half, the back art the right
//     half, and the top and bottom 150 px of the 1728 px atlas are the crimp bands;
//   - the body is sized from the atlas, so the art is never stretched;
//   - pouch sheets carry a sine-pillow bulge with soft shoulders into the crimps,
//     flat side-seal flanges and a light crinkle;
//   - four serrated crimp strips (42 teeth, alternating pleats) sample the atlas
//     crimp bands, so the foil catches glints as the pack turns.
// The Royale hero mesh is untouched; this file only adds the Stock variant.

import { BufferGeometry, Float32BufferAttribute, Group, Mesh, type Material } from "three";

/** Atlas layout of stonkpacks-3d/textures/web/pack_t025_*.png (2048 x 1728). */
export const STONK_PACK_ATLAS = Object.freeze({
  width: 2048,
  height: 1728,
  crimpBand: 150,
});

const HALF_ATLAS_WIDTH = STONK_PACK_ATLAS.width / 2;
const BODY_ATLAS_HEIGHT = STONK_PACK_ATLAS.height - STONK_PACK_ATLAS.crimpBand * 2;

export const STONK_PACK_DIMENSIONS = Object.freeze({
  width: 2.3,
  /** Body height follows the atlas body aspect (1428 / 1024). */
  bodyHeight: 2.3 * BODY_ATLAS_HEIGHT / HALF_ATLAS_WIDTH,
  crimpHeight: 2.3 * STONK_PACK_ATLAS.crimpBand / HALF_ATLAS_WIDTH,
  /** Fraction of the atlas height taken by one crimp band. */
  crimpV: STONK_PACK_ATLAS.crimpBand / STONK_PACK_ATLAS.height,
  bulge: 0.22,
  seal: 0.14,
  teeth: 42,
  toothDepth: 0.075,
});

const POUCH_SEGMENTS = Object.freeze({ x: 64, y: 96 });
const CRIMP_ROWS = 8;

export type StonkPackHeroMeshNodes = {
  root: Group;
  outerWrapperFront: Mesh;
  outerWrapperBack: Mesh;
  crimps: Mesh[];
};

type GridVertex = { x: number; y: number; z: number; u: number; v: number };

function smoothstep(edge0: number, edge1: number, value: number): number {
  const t = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/** Front art samples the left half of the atlas; back art the right half, mirrored. */
export function stonkPackAtlasU(u: number, sign: 1 | -1): number {
  return sign > 0 ? u * 0.5 : 0.5 + (1 - u) * 0.5;
}

function buildGrid(nx: number, ny: number, vertex: (i: number, j: number) => GridVertex, reversed: boolean): BufferGeometry {
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  for (let j = 0; j <= ny; j += 1) {
    for (let i = 0; i <= nx; i += 1) {
      const point = vertex(i, j);
      positions.push(point.x, point.y, point.z);
      uvs.push(point.u, point.v);
    }
  }
  for (let j = 0; j < ny; j += 1) {
    for (let i = 0; i < nx; i += 1) {
      const a = j * (nx + 1) + i;
      const b = a + 1;
      const c = a + nx + 1;
      const d = c + 1;
      if (reversed) indices.push(a, d, b, a, c, d);
      else indices.push(a, b, d, a, d, c);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

/** Pouch sheet. `sign` +1 is the front face, -1 the back face. */
export function createStonkPackPouchGeometry(sign: 1 | -1): BufferGeometry {
  const { width, bodyHeight, crimpV, bulge, seal } = STONK_PACK_DIMENSIONS;
  const sealU = seal / width;
  return buildGrid(POUCH_SEGMENTS.x, POUCH_SEGMENTS.y, (i, j) => {
    const u = i / POUCH_SEGMENTS.x;
    const v = j / POUCH_SEGMENTS.y;
    // Flat heat-sealed flanges outside [sealU, 1 - sealU]; pillow inside.
    const inner = Math.min(1, Math.max(0, (u - sealU) / (1 - 2 * sealU)));
    const across = Math.sin(Math.PI * inner) ** 0.72;
    const along = smoothstep(0, 0.16, v) * smoothstep(0, 0.16, 1 - v);
    // The crinkle fades into the heat seals, so the two sheets never cross at the crimps.
    const crinkle = 0.006 * Math.sin(u * 31 + v * 17) * Math.sin(v * 43 + u * 7) * across * along;
    return {
      x: (u - 0.5) * width,
      y: (v - 0.5) * bodyHeight,
      z: sign * (0.004 + bulge * across * (0.18 + 0.82 * along) * along + crinkle),
      u: stonkPackAtlasU(u, sign),
      v: crimpV + v * (1 - 2 * crimpV),
    };
  }, sign < 0);
}

/** Serrated crimp strip on the top or bottom edge, textured from the atlas crimp band. */
export function createStonkPackCrimpGeometry(sign: 1 | -1, top: boolean): BufferGeometry {
  const { width, bodyHeight, crimpHeight, crimpV, teeth, toothDepth } = STONK_PACK_DIMENSIONS;
  const columns = teeth * 2;
  return buildGrid(columns, CRIMP_ROWS, (i, j) => {
    const u = i / columns;
    const t = j / CRIMP_ROWS;
    let reach = t * crimpHeight;
    // Every other outer-edge vertex pulls in: one tooth per two columns.
    if (j === CRIMP_ROWS && i % 2 === 1) reach -= toothDepth;
    const pleat = (i % 2 === 0 ? 1 : -1) * 0.016 * Math.min(1, t * 3);
    return {
      x: (u - 0.5) * width,
      y: top ? bodyHeight / 2 + reach : -bodyHeight / 2 - reach,
      z: pleat + sign * 0.004,
      u: stonkPackAtlasU(u, sign),
      v: top ? 1 - crimpV + (reach / crimpHeight) * crimpV : crimpV - (reach / crimpHeight) * crimpV,
    };
  }, (sign > 0) !== top);
}

/** Build the named-node pack with one physical foil material on every face. */
export function createStonkPackHeroMesh(material: Material): StonkPackHeroMeshNodes {
  const root = new Group();
  root.name = "PackRoot";
  const outerWrapperFront = new Mesh(createStonkPackPouchGeometry(1), material);
  outerWrapperFront.name = "OuterWrapperFront";
  const outerWrapperBack = new Mesh(createStonkPackPouchGeometry(-1), material);
  outerWrapperBack.name = "OuterWrapperBack";
  const crimps = ([
    ["TopCrimpFront", 1, true],
    ["TopCrimpBack", -1, true],
    ["BottomCrimpFront", 1, false],
    ["BottomCrimpBack", -1, false],
  ] as const).map(([name, sign, top]) => {
    const crimp = new Mesh(createStonkPackCrimpGeometry(sign, top), material);
    crimp.name = name;
    return crimp;
  });
  root.add(outerWrapperFront, outerWrapperBack, ...crimps);
  return { root, outerWrapperFront, outerWrapperBack, crimps };
}

/** Dispose every geometry in the pack. The material is owned by the caller. */
export function disposeStonkPackHeroMesh(nodes: StonkPackHeroMeshNodes): void {
  nodes.root.traverse((object) => {
    const mesh = object as Mesh;
    if (mesh.isMesh) mesh.geometry.dispose();
  });
}
