// Suspense fallback for the lazy-loaded standalone Pack Royale pages.
//
// These routes previously fell back to `null`, so first navigation showed a
// blank white page for the whole chunk fetch. This placeholder is styled
// INLINE on purpose: it must render before the route chunk (and its CSS)
// exists, so it cannot import a stylesheet. Dark board tones, one quiet pulse.

import type { CSSProperties } from "react";
import { useStockPacksBrand } from "../../../features/stockPacks/branding/stockPacksBrand";

const shell: CSSProperties = {
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  background: "#0b0d13",
  borderRadius: 14,
};

const badge: CSSProperties = {
  padding: "4px 12px",
  borderRadius: 999,
  background: "#eccb7e",
  color: "#17130d",
  fontSize: 10.5,
  fontWeight: 900,
  letterSpacing: "0.14em",
};

const line: CSSProperties = {
  color: "#a7afc2",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.08em",
  animation: "royalePageFallbackPulse 1.2s ease-in-out infinite alternate",
};

export function RoyalePageFallback({ label = "LOADING" }: { label?: string }) {
  const brand = useStockPacksBrand();
  return (
    <div style={shell} role="status" aria-label={`Loading ${brand.wordmark.accessibleName} page`} data-testid="royale-page-fallback">
      <style>{"@keyframes royalePageFallbackPulse{from{opacity:.35}to{opacity:.9}}"}</style>
      <span style={badge}>{brand.wordmark.accessibleName}</span>
      <span style={line}>{label}</span>
    </div>
  );
}
