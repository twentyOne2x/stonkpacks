import { useEffect, useId, useRef, useState, type ReactNode } from "react";

import {
  layoutStonksBoardTile,
  paintStonksBoardTile,
  STONKS_BOARD_FAR,
  STONKS_BOARD_FONT_FAMILY,
  STONKS_BOARD_NEAR,
  type StonksBoardCell,
  type StonksBoardTileConfig,
} from "./stonksBoardTile";
import "./stonksHero.css";

type PaintedTile = Readonly<{ url: string; cells: readonly StonksBoardCell[]; width: number; height: number }>;

const TICK_EVERY_MS = 190;
const TICK_LIFETIME_MS = 1600;
const NEAR_DRIFT_PX_PER_S = 10;
const FAR_DRIFT_PX_PER_S = 4.5;

async function waitForBoardFont(): Promise<void> {
  if (typeof document === "undefined" || !document.fonts?.load) return;
  try {
    await Promise.race([
      document.fonts.load(`600 16px ${STONKS_BOARD_FONT_FAMILY}`),
      new Promise((resolve) => setTimeout(resolve, 1200)),
    ]);
  } catch {
    /* paint with the fallback face */
  }
}

async function paintTile(config: StonksBoardTileConfig, pixelRatio: number): Promise<PaintedTile | null> {
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(config.width * pixelRatio);
  canvas.height = Math.round(config.height * pixelRatio);
  const context = canvas.getContext("2d");
  if (!context) return null;
  context.scale(pixelRatio, pixelRatio);
  const cells = layoutStonksBoardTile(config);
  paintStonksBoardTile(context, config, cells);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) return null;
  return { url: URL.createObjectURL(blob), cells, width: config.width, height: config.height };
}

function applyTile(layer: HTMLElement, tile: PaintedTile) {
  layer.style.backgroundImage = `url(${tile.url})`;
  layer.style.backgroundSize = `${tile.width}px ${tile.height}px`;
  layer.style.height = `calc(100% + ${tile.height}px)`;
}

export type StonksBoardBandProps = Readonly<{
  reducedMotion: boolean;
  /** Top-left chip, for example "Index Mix · $25.00". */
  chipStart?: string | null;
  /** Top-right chip, for example "1 pack · 1 reward". */
  chipEnd?: string | null;
  children: ReactNode;
}>;

/**
 * The living blue board band behind the STONKPACKS pack: a tilted, drifting
 * ticker board painted from the locked table, the stonks arrow that draws in
 * on load and heats while RIP is hovered or focused, a floor shadow, and the
 * pack stage on top. Rendering pauses off screen; reduced motion keeps the
 * board still and the arrow drawn.
 */
export function StonksBoardBand({ reducedMotion, chipStart = null, chipEnd = null, children }: StonksBoardBandProps) {
  const bandRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLDivElement | null>(null);
  const nearRef = useRef<HTMLDivElement | null>(null);
  const farRef = useRef<HTMLDivElement | null>(null);
  const gradientId = `stonksArrowHot${useId().replace(/[^a-zA-Z0-9_-]/gu, "")}`;
  const [boardReady, setBoardReady] = useState(false);

  useEffect(() => {
    const band = bandRef.current;
    const plane = planeRef.current;
    const near = nearRef.current;
    const far = farRef.current;
    if (!band || !plane || !near || !far || typeof document === "undefined") return undefined;
    let disposed = false;
    let frame = 0;
    let visible = true;
    let pageVisible = document.visibilityState !== "hidden";
    let tiles: { near: PaintedTile; far: PaintedTile } | null = null;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const started = performance.now();
    let lastTick = 0;

    const tick = (nearOffset: number) => {
      const cell = tiles?.near.cells[Math.floor(Math.random() * tiles.near.cells.length)];
      if (!tiles || !cell) return;
      const planeHeight = plane.offsetHeight;
      const planeWidth = plane.offsetWidth;
      const rows: number[] = [];
      for (let k = 0; k * tiles.near.height < planeHeight + tiles.near.height; k += 1) {
        const y = cell.y + k * tiles.near.height;
        if (y > nearOffset && y < nearOffset + planeHeight) rows.push(y);
      }
      const columns: number[] = [];
      for (let k = 0; k * tiles.near.width < planeWidth; k += 1) columns.push(cell.x + k * tiles.near.width);
      const left = columns[Math.floor(Math.random() * columns.length)];
      const top = rows[Math.floor(Math.random() * rows.length)];
      if (left === undefined || top === undefined) return;
      const flash = document.createElement("span");
      flash.className = "stonksBand__tick";
      flash.textContent = cell.text;
      flash.style.left = `${left}px`;
      flash.style.top = `${top - 8}px`;
      near.appendChild(flash);
      const timer = setTimeout(() => {
        timers.delete(timer);
        flash.remove();
      }, TICK_LIFETIME_MS);
      timers.add(timer);
    };

    const loop = (now: number) => {
      frame = 0;
      if (disposed || !tiles || !visible || !pageVisible) return;
      const seconds = (now - started) / 1000;
      const nearOffset = (seconds * NEAR_DRIFT_PX_PER_S) % tiles.near.height;
      near.style.transform = `translate3d(0, ${(-nearOffset).toFixed(1)}px, 0)`;
      far.style.transform = `translate3d(0, ${(-((seconds * FAR_DRIFT_PX_PER_S) % tiles.far.height)).toFixed(1)}px, 0)`;
      if (now - lastTick > TICK_EVERY_MS) {
        lastTick = now;
        tick(nearOffset);
      }
      frame = requestAnimationFrame(loop);
    };
    const resume = () => {
      if (!reducedMotion && !disposed && !frame && tiles && visible && pageVisible) frame = requestAnimationFrame(loop);
    };
    const onVisibility = () => {
      pageVisible = document.visibilityState !== "hidden";
      resume();
    };
    document.addEventListener("visibilitychange", onVisibility);
    const intersection = typeof IntersectionObserver === "function"
      ? new IntersectionObserver((entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        resume();
      })
      : null;
    intersection?.observe(band);

    void (async () => {
      await waitForBoardFont();
      if (disposed) return;
      const pixelRatio = Math.min(1.5, window.devicePixelRatio || 1);
      const [nearTile, farTile] = await Promise.all([
        paintTile(STONKS_BOARD_NEAR, pixelRatio),
        paintTile(STONKS_BOARD_FAR, pixelRatio),
      ]);
      if (disposed || !nearTile || !farTile) {
        for (const tile of [nearTile, farTile]) if (tile) URL.revokeObjectURL(tile.url);
        return;
      }
      tiles = { near: nearTile, far: farTile };
      applyTile(near, nearTile);
      applyTile(far, farTile);
      // The lower page modules and the footer reuse the far tile as their board texture.
      document.documentElement.style.setProperty("--stonks-tile-far", `url(${farTile.url})`);
      setBoardReady(true);
      resume();
    })().catch(() => {
      /* the band keeps its gradient without the board */
    });

    return () => {
      disposed = true;
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", onVisibility);
      intersection?.disconnect();
      for (const timer of timers) clearTimeout(timer);
      timers.clear();
      for (const flash of near.querySelectorAll(".stonksBand__tick")) flash.remove();
      if (tiles) {
        if (document.documentElement.style.getPropertyValue("--stonks-tile-far") === `url(${tiles.far.url})`) {
          document.documentElement.style.removeProperty("--stonks-tile-far");
        }
        URL.revokeObjectURL(tiles.near.url);
        URL.revokeObjectURL(tiles.far.url);
      }
    };
  }, [reducedMotion]);

  return (
    <div
      ref={bandRef}
      className="stonksBand"
      data-stonks-stage=""
      data-motion={reducedMotion ? "reduced" : "full"}
      data-board={boardReady ? "ready" : undefined}
    >
      <div ref={planeRef} className="stonksBand__plane" aria-hidden="true">
        <div ref={farRef} className="stonksBand__layer stonksBand__layer--far" />
        <div ref={nearRef} className="stonksBand__layer stonksBand__layer--near" />
      </div>
      <div className="stonksBand__fog" aria-hidden="true" />
      <svg className="stonksBand__arrow" viewBox="0 0 900 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#FFC25A" />
            <stop offset=".5" stopColor="#FF7A2A" />
            <stop offset="1" stopColor="#F0401A" />
          </linearGradient>
        </defs>
        <path
          d="M20,440 L250,250 L330,315 L600,95 L660,140 L760,60"
          pathLength={1}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={30}
          strokeLinejoin="miter"
        />
        <polygon points="880,-8 804,98 738,24" fill="#F0401A" />
      </svg>
      <div className="stonksBand__floor" aria-hidden="true" />
      <div className="stonksBand__stage">{children}</div>
      {chipStart ? <span className="stonksBand__chip stonksBand__chip--start">{chipStart}</span> : null}
      {chipEnd ? <span className="stonksBand__chip stonksBand__chip--end">{chipEnd}</span> : null}
    </div>
  );
}
