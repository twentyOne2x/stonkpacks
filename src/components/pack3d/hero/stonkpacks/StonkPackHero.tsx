import { useEffect, useRef, useState } from "react";

import { STONK_PACK_FLOAT_VIDEO, STONK_PACK_POSTER, stonkPackTextureSetFor } from "./stonkPackHeroAssets";
import type { StonkPackHeroSceneApi } from "./StonkPackHeroScene";

export type StonkPackHeroRenderer = "poster" | "webgl" | "video";

export type StonkPackHeroEnvironment = Readonly<{
  reducedMotion: boolean;
  saveData: boolean;
  lowPower: boolean;
}>;

/**
 * Which renderer the hero starts with. Reduced motion and Save-Data keep the
 * rendered still; very constrained devices play the rendered float loop; every
 * other device tries the live WebGL pack and falls back to the loop if WebGL,
 * the three.js chunk or a texture fails.
 */
export function stonkPackHeroPlan(environment: StonkPackHeroEnvironment): StonkPackHeroRenderer {
  if (environment.reducedMotion || environment.saveData) return "poster";
  if (environment.lowPower) return "video";
  return "webgl";
}

function readEnvironment(reducedMotion: boolean): StonkPackHeroEnvironment {
  const nav = typeof navigator === "undefined" ? null : navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  return {
    reducedMotion,
    saveData: nav?.connection?.saveData === true,
    lowPower: (nav?.hardwareConcurrency ?? 8) <= 2 || (nav?.deviceMemory ?? 8) <= 1,
  };
}

export type StonkPackHeroProps = Readonly<{
  /** Pack name, used for the accessible name. */
  label: string;
  reducedMotion: boolean;
}>;

/**
 * The STONKPACKS sealed pack: the real pack_t025 PBR material on the
 * createPackHeroMesh-style pouch, in WebGL, with the rendered still first and
 * the rendered float loop as the fallback.
 */
export function StonkPackHero({ label, reducedMotion }: StonkPackHeroProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sceneRef = useRef<StonkPackHeroSceneApi | null>(null);
  const labelRef = useRef(label);
  labelRef.current = label;
  const [renderer, setRenderer] = useState<StonkPackHeroRenderer>("poster");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const plan = stonkPackHeroPlan(readEnvironment(reducedMotion));
    setReady(false);
    setRenderer(plan);
    if (plan !== "webgl") return undefined;
    let cancelled = false;
    const fallBack = () => {
      if (cancelled) return;
      sceneRef.current?.dispose();
      sceneRef.current = null;
      setReady(false);
      setRenderer("video");
    };
    void import("./StonkPackHeroScene").then(({ createStonkPackHeroScene }) => {
      const root = rootRef.current;
      const host = hostRef.current;
      if (cancelled || !root || !host) return undefined;
      const scene = createStonkPackHeroScene({
        host,
        pointerTarget: root.closest<HTMLElement>("[data-stonks-stage]") ?? root,
        textures: stonkPackTextureSetFor({ viewportWidth: window.innerWidth, devicePixelRatio: window.devicePixelRatio || 1 }),
        label: labelRef.current,
        onContextLost: fallBack,
      });
      sceneRef.current = scene;
      return scene.ready.then(() => {
        if (!cancelled) setReady(true);
      });
    }).catch(fallBack);
    return () => {
      cancelled = true;
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, [reducedMotion]);

  useEffect(() => {
    // The scene reads labelRef when it is created; later name changes land here.
    sceneRef.current?.canvas.setAttribute("aria-label", `${label}, sealed. Drag or use the arrow keys to turn it.`);
  }, [label]);

  useEffect(() => {
    const video = videoRef.current;
    if (renderer !== "video" || !video) return;
    video.muted = true;
    void video.play().catch(() => undefined);
  }, [renderer]);

  const interactive = renderer === "webgl" && ready;
  return (
    <div ref={rootRef} className="stonkPackHero" data-renderer={renderer} data-ready={ready || undefined}>
      {/* The still and the loop share one accessible name; once the live pack is
          ready its focusable canvas carries the name instead. */}
      <div className="stonkPackHero__still" role="img" aria-label={label} aria-hidden={interactive || undefined}>
        <img className="stonkPackHero__poster" src={STONK_PACK_POSTER} alt="" draggable={false} />
        {renderer === "video" ? (
          <video
            ref={videoRef}
            className="stonkPackHero__video"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            poster={STONK_PACK_POSTER}
          >
            {STONK_PACK_FLOAT_VIDEO.map((source) => <source key={source.src} src={source.src} type={source.type} />)}
          </video>
        ) : null}
      </div>
      <div ref={hostRef} className="stonkPackHero__canvasHost" />
      {interactive ? <span className="stonkPackHero__hint" aria-hidden="true">Drag to turn</span> : null}
    </div>
  );
}
