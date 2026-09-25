/**
 * The living stonks board behind the pack: glowing ticker rows painted
 * client-side from the locked table into two seamless tiles (near and far),
 * which the band drifts upward on a tilted plane while single cells flash.
 * Layout is seeded and pure so it can be tested without a canvas.
 */
import { STONKS_BOARD_QUOTES, type StonksBoardQuote } from "./stonksBoardTable";

export const STONKS_BOARD_FONT_FAMILY = '"STONKPACKS Sora", Sora, Inter, system-ui, sans-serif';

export type StonksBoardTileConfig = Readonly<{
  seed: number;
  width: number;
  height: number;
  rowHeight: number;
  block: number;
  /** x offsets of the ticker, value, change and multiplier columns inside a block. */
  columns: readonly [number, number, number, number];
  /** Chance a block is left empty. */
  skip: number;
  /** Glow blur radius in CSS pixels. */
  bloom: number;
  /** Font size of the value, change and multiplier columns; the ticker is one step heavier. */
  fontSize: number;
  tickerFontSize: number;
}>;

export const STONKS_BOARD_NEAR: StonksBoardTileConfig = Object.freeze<StonksBoardTileConfig>({
  seed: 7, width: 1200, height: 864, rowHeight: 36, block: 600, columns: [22, 150, 262, 440],
  skip: 0.1, bloom: 12, fontSize: 16, tickerFontSize: 17,
});

export const STONKS_BOARD_FAR: StonksBoardTileConfig = Object.freeze<StonksBoardTileConfig>({
  seed: 11, width: 1200, height: 720, rowHeight: 24, block: 400, columns: [12, 98, 176, 300],
  skip: 0.14, bloom: 6, fontSize: 11.5, tickerFontSize: 12,
});

export type StonksBoardCellRole = "ticker" | "value" | "change" | "multiplier";

export type StonksBoardCell = Readonly<{
  text: string;
  role: StonksBoardCellRole;
  x: number;
  y: number;
  alpha: number;
  up: boolean;
}>;

/** mulberry32: small, fast and deterministic. */
export function stonksBoardRandom(seed: number): () => number {
  let state = seed | 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function layoutStonksBoardTile(
  config: StonksBoardTileConfig,
  quotes: readonly StonksBoardQuote[] = STONKS_BOARD_QUOTES,
): StonksBoardCell[] {
  if (quotes.length === 0) return [];
  const random = stonksBoardRandom(config.seed);
  const cells: StonksBoardCell[] = [];
  for (let row = 0; row * config.rowHeight < config.height; row += 1) {
    const y = row * config.rowHeight + config.rowHeight / 2;
    const highlighted = random() < 0.16;
    for (let block = 0; block * config.block < config.width; block += 1) {
      if (random() < config.skip) continue;
      const x = block * config.block + random() * 10;
      const alpha = (highlighted ? 0.6 : 0.26) + random() * 0.2;
      const quote = quotes[Math.floor(random() * quotes.length)] ?? quotes[0];
      if (!quote) continue;
      const [tickerX, valueX, changeX, multiplierX] = config.columns;
      const parts: ReadonlyArray<[StonksBoardCellRole, string, number]> = [
        ["ticker", quote.ticker, tickerX],
        ["value", quote.value, valueX],
        ["change", `${quote.up ? "\u25B2" : "\u25BC"} ${quote.change}`, changeX],
        ["multiplier", quote.multiplier, multiplierX],
      ];
      for (const [role, text, offset] of parts) cells.push({ text, role, x: x + offset, y, alpha, up: quote.up });
    }
  }
  return cells;
}

function cellColor(cell: StonksBoardCell, alpha: number): string {
  const a = alpha.toFixed(3);
  if (cell.role === "ticker") return `rgba(225, 238, 255, ${a})`;
  if (cell.role === "change") return cell.up ? `rgba(200, 225, 255, ${a})` : `rgba(120, 165, 250, ${a})`;
  return `rgba(160, 200, 255, ${a})`;
}

/** Paint the cells, repeated across the tile edges so the tile repeats seamlessly. */
export function paintStonksBoardTile(
  context: CanvasRenderingContext2D,
  config: StonksBoardTileConfig,
  cells: readonly StonksBoardCell[],
  fontFamily = STONKS_BOARD_FONT_FAMILY,
): void {
  context.textBaseline = "middle";
  for (const cell of cells) {
    context.font = cell.role === "ticker"
      ? `700 ${config.tickerFontSize}px ${fontFamily}`
      : `500 ${config.fontSize}px ${fontFamily}`;
    for (const glow of [true, false]) {
      context.shadowColor = glow ? "rgba(90, 150, 255, .95)" : "transparent";
      context.shadowBlur = glow ? config.bloom : 0;
      context.fillStyle = cellColor(cell, glow ? cell.alpha * 0.9 : cell.alpha);
      for (const dx of [-config.width, 0, config.width]) {
        for (const dy of [-config.height, 0, config.height]) context.fillText(cell.text, cell.x + dx, cell.y + dy);
      }
    }
  }
}
