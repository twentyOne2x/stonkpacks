export function preferredDevicePixelRatio(): number {
  if (typeof window === "undefined") return 1;
  const isCompactTouch = window.matchMedia("(pointer: coarse) and (max-width: 760px)").matches;
  const cap = isCompactTouch ? 1.25 : 1.75;
  return Math.min(cap, Math.max(1, window.devicePixelRatio || 1));
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function shouldUseMobileFallback(): boolean {
  if (typeof window === "undefined") return true;
  const narrowTouch = window.matchMedia("(pointer: coarse) and (max-width: 560px)").matches;
  const lowCoreTouch =
    window.matchMedia("(pointer: coarse) and (max-width: 760px)").matches &&
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency <= 4;
  return narrowTouch || lowCoreTouch;
}

export function hasWebGlSupport(): boolean {
  if (typeof document === "undefined") return false;
  const canvas = document.createElement("canvas");
  return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
}
