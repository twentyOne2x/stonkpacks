// Studio environment for the STONKPACKS pack, built in-scene and prefiltered
// with PMREM: a royal-blue dome (the stonks board world), white softboxes for
// the foil highlights, and one orange panel so the foil picks up the board
// arrow's colour on one edge.

import {
  BackSide,
  Color,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  type PMREMGenerator,
  type Texture,
} from "three";

export type StonkPackStudioPanel = Readonly<{
  size: readonly [number, number];
  position: readonly [number, number, number];
  rgb: readonly [number, number, number];
  intensity: number;
}>;

export const STONK_PACK_STUDIO_PANELS: readonly StonkPackStudioPanel[] = Object.freeze([
  { size: [18, 8], position: [-12, 16, 14], rgb: [0.92, 0.96, 1], intensity: 5.5 },
  { size: [2.4, 22], position: [18, 2, 8], rgb: [0.8, 0.88, 1], intensity: 5 },
  // The one warm emitter: the board arrow's orange.
  { size: [10, 6], position: [-17, -7, -4], rgb: [1, 0.42, 0.12], intensity: 4.2 },
  { size: [28, 6], position: [0, -10, 20], rgb: [0.25, 0.45, 1], intensity: 1.4 },
  { size: [6, 14], position: [-20, 4, 6], rgb: [0.5, 0.65, 1], intensity: 2.2 },
]);

const DOME_VERTEX = "varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }";
const DOME_FRAGMENT = [
  "varying vec3 vP;",
  "void main(){",
  "  float h = vP.y * 0.5 + 0.5;",
  "  vec3 lo = vec3(0.004, 0.012, 0.06);",
  "  vec3 mid = vec3(0.03, 0.09, 0.45);",
  "  vec3 hi = vec3(0.06, 0.14, 0.55);",
  "  vec3 c = mix(lo, mid, smoothstep(0.0, 0.55, h));",
  "  c = mix(c, hi, smoothstep(0.55, 1.0, h));",
  "  gl_FragColor = vec4(c, 1.0);",
  "}",
].join("\n");

export type StonkPackStudioEnvironment = {
  texture: Texture;
  dispose: () => void;
};

/** Build the studio scene (exported for tests; the caller disposes it). */
export function createStonkPackStudioScene(): Scene {
  const scene = new Scene();
  scene.add(new Mesh(
    new SphereGeometry(40, 32, 16),
    new ShaderMaterial({ side: BackSide, depthWrite: false, vertexShader: DOME_VERTEX, fragmentShader: DOME_FRAGMENT }),
  ));
  for (const panel of STONK_PACK_STUDIO_PANELS) {
    const color = new Color(panel.rgb[0] * panel.intensity, panel.rgb[1] * panel.intensity, panel.rgb[2] * panel.intensity);
    const mesh = new Mesh(new PlaneGeometry(panel.size[0], panel.size[1]), new MeshBasicMaterial({ color, side: DoubleSide }));
    mesh.position.set(panel.position[0], panel.position[1], panel.position[2]);
    mesh.lookAt(0, 0, 0);
    scene.add(mesh);
  }
  return scene;
}

export function disposeStonkPackStudioScene(scene: Scene): void {
  scene.traverse((object) => {
    const mesh = object as Mesh;
    if (!mesh.isMesh) return;
    mesh.geometry.dispose();
    (mesh.material as MeshBasicMaterial).dispose();
  });
}

export function createStonkPackStudioEnvironment(pmrem: PMREMGenerator): StonkPackStudioEnvironment {
  const studio = createStonkPackStudioScene();
  const target = pmrem.fromScene(studio, 0.035);
  disposeStonkPackStudioScene(studio);
  return {
    texture: target.texture,
    dispose: () => target.dispose(),
  };
}
