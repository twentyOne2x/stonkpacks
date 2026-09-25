// Imperative three.js scene for the STONKPACKS pack hero. Loaded lazily by
// StonkPackHero.tsx, so three.js only downloads on the Stock host with the
// stonks theme on. Transparent canvas over the board band; the pack is lit by
// the blue studio environment plus a key light that follows the pointer.
// Rendering stops while the stage is off screen or the tab is hidden.

import {
  ACESFilmicToneMapping,
  DirectionalLight,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  SRGBColorSpace,
  TextureLoader,
  WebGLRenderer,
} from "three";

import { preferredDevicePixelRatio } from "../../performance";
import type { StonkPackTextureSet } from "./stonkPackHeroAssets";
import { createStonkPackStudioEnvironment } from "./stonkPackHeroEnvironment";
import {
  createStonkPackFoilMaterial,
  disposeStonkPackFoil,
  prepareStonkPackTextures,
  type StonkPackLoadedTextures,
} from "./stonkPackHeroMaterial";
import { createStonkPackHeroMesh, disposeStonkPackHeroMesh, type StonkPackHeroMeshNodes } from "./createStonkPackHeroMesh";
import { createStonkPackMotion, stonkPackCameraDistance } from "./stonkPackHeroMotion";

export type StonkPackHeroSceneOptions = Readonly<{
  /** Element the canvas is appended to; it sets the canvas size. */
  host: HTMLElement;
  /** Element whose pointer position tilts the pack (the whole stage). */
  pointerTarget: HTMLElement;
  textures: StonkPackTextureSet;
  label: string;
  /** Called when the GPU drops the context; the caller swaps to the video. */
  onContextLost?: () => void;
}>;

export type StonkPackHeroSceneApi = {
  /** Resolves after the textures load and the first frame is drawn. */
  ready: Promise<void>;
  canvas: HTMLCanvasElement;
  dispose: () => void;
};

export function createStonkPackHeroScene(options: StonkPackHeroSceneOptions): StonkPackHeroSceneApi {
  const { host, pointerTarget } = options;
  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(preferredDevicePixelRatio());
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const canvas = renderer.domElement;
  canvas.className = "stonkPackHero__canvas";
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", `${options.label}, sealed. Drag or use the arrow keys to turn it.`);
  canvas.tabIndex = 0;
  host.appendChild(canvas);

  const scene = new Scene();
  const camera = new PerspectiveCamera(26, 1, 0.1, 100);
  camera.position.set(0, 0, 11.2);

  const pmrem = new PMREMGenerator(renderer);
  const studio = createStonkPackStudioEnvironment(pmrem);
  scene.environment = studio.texture;

  const key = new DirectionalLight(0xffffff, 1.1);
  key.position.set(3, 4, 6);
  const rim = new DirectionalLight(0xff8a3a, 0.9);
  rim.position.set(-5, -1, -3);
  scene.add(key, rim);

  const motion = createStonkPackMotion();
  let disposed = false;
  let frame = 0;
  let visible = true;
  let pageVisible = typeof document === "undefined" || document.visibilityState !== "hidden";
  let nodes: StonkPackHeroMeshNodes | null = null;
  let foil: { material: ReturnType<typeof createStonkPackFoilMaterial>; textures: StonkPackLoadedTextures } | null = null;
  // The motion clock starts at the first drawn frame, so the rise into place is
  // always seen, however long the textures take.
  let start = 0;

  function resize() {
    const rect = host.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.z = stonkPackCameraDistance(camera.aspect);
    camera.updateProjectionMatrix();
  }

  function render(now: number) {
    if (!nodes) return;
    const pose = motion.step((now - start) / 1000);
    nodes.root.rotation.set(pose.pitch, pose.yaw, pose.roll);
    nodes.root.position.y = pose.y;
    key.position.set(pose.keyLight[0], pose.keyLight[1], pose.keyLight[2]);
    renderer.render(scene, camera);
  }

  function loop(now: number) {
    frame = 0;
    if (disposed || !visible || !pageVisible) return;
    render(now);
    frame = requestAnimationFrame(loop);
  }

  function resume() {
    if (!disposed && !frame && nodes && visible && pageVisible) frame = requestAnimationFrame(loop);
  }

  // Pointer tilt across the whole stage; drag starts on the canvas. Captured
  // canvas events bubble to the stage, so one stage listener drives both.
  const onPointerMove = (event: PointerEvent) => {
    const rect = pointerTarget.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      motion.setTilt(((event.clientX - rect.left) / rect.width - 0.5) * 2, ((event.clientY - rect.top) / rect.height - 0.5) * 2);
    }
    motion.dragTo(event.clientX);
  };
  const onPointerLeave = () => motion.setTilt(0, 0);
  const onPointerDown = (event: PointerEvent) => {
    motion.beginDrag(event.clientX);
    try {
      canvas.setPointerCapture(event.pointerId);
    } catch {
      /* capture is best effort */
    }
  };
  const onPointerUp = () => motion.endDrag();
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      motion.nudge(event.key === "ArrowLeft" ? -1 : 1);
    }
  };
  const onContextLost = (event: Event) => {
    event.preventDefault();
    options.onContextLost?.();
  };
  const onVisibility = () => {
    pageVisible = document.visibilityState !== "hidden";
    resume();
  };
  pointerTarget.addEventListener("pointermove", onPointerMove);
  pointerTarget.addEventListener("pointerleave", onPointerLeave);
  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("pointercancel", onPointerUp);
  canvas.addEventListener("lostpointercapture", onPointerUp);
  canvas.addEventListener("keydown", onKeyDown);
  canvas.addEventListener("webglcontextlost", onContextLost);
  document.addEventListener("visibilitychange", onVisibility);

  const resizeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(resize) : null;
  resizeObserver?.observe(host);
  const intersection = typeof IntersectionObserver === "function"
    ? new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      resume();
    })
    : null;
  intersection?.observe(host);
  resize();

  const loader = new TextureLoader();
  const ready = Promise.all([
    loader.loadAsync(options.textures.base),
    loader.loadAsync(options.textures.metalRough),
    loader.loadAsync(options.textures.normal),
  ]).then(([base, metalRough, normal]) => {
    const textures = { base, metalRough, normal };
    if (disposed) {
      base.dispose();
      metalRough.dispose();
      normal.dispose();
      throw new Error("stonk_pack_hero_disposed");
    }
    prepareStonkPackTextures(textures, renderer.capabilities.getMaxAnisotropy());
    const material = createStonkPackFoilMaterial(textures);
    foil = { material, textures };
    nodes = createStonkPackHeroMesh(material);
    scene.add(nodes.root);
    resize();
    start = performance.now();
    render(start);
    resume();
  });

  return {
    ready,
    canvas,
    dispose() {
      if (disposed) return;
      disposed = true;
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      resizeObserver?.disconnect();
      intersection?.disconnect();
      pointerTarget.removeEventListener("pointermove", onPointerMove);
      pointerTarget.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("lostpointercapture", onPointerUp);
      canvas.removeEventListener("keydown", onKeyDown);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      document.removeEventListener("visibilitychange", onVisibility);
      if (nodes) disposeStonkPackHeroMesh(nodes);
      if (foil) disposeStonkPackFoil(foil.material, foil.textures);
      studio.dispose();
      pmrem.dispose();
      renderer.dispose();
      canvas.remove();
    },
  };
}
