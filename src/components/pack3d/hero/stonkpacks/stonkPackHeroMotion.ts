// Motion model for the STONKPACKS pack hero, kept free of three.js so it can be
// tested directly. The pack rests at a three-quarter pose, rises into place on
// load, floats gently, follows the pointer (tilt shifts pose and key light so
// the sheen travels across the foil), and turns under a drag or the arrow keys,
// then springs back. Rates are expressed per 60 Hz frame and scaled by elapsed
// time, so 120 Hz screens move at the same speed.

export const STONK_PACK_MOTION = Object.freeze({
  baseYaw: -0.42,
  introSeconds: 1.4,
  introYawOffset: 0.9,
  introPitch: 0.12,
  introDrop: -0.9,
  follow: 0.08,
  spinDamping: 0.92,
  spinReturn: 0.965,
  dragGain: 0.012,
  keyImpulse: 0.18,
  tiltYaw: 0.42,
  tiltPitch: 0.16,
  swayYaw: 0.07,
  swaySpeed: 0.55,
  swayPitch: 0.02,
  swayPitchSpeed: 0.8,
  bob: 0.07,
  bobSpeed: 1.15,
  roll: 0.025,
  rollSpeed: 0.7,
  rollBias: -0.03,
});

export type StonkPackPose = Readonly<{
  yaw: number;
  pitch: number;
  roll: number;
  y: number;
  keyLight: readonly [number, number, number];
}>;

export type StonkPackMotion = {
  /** Pointer position over the stage, each axis in [-1, 1]; 0,0 when the pointer leaves. */
  setTilt: (x: number, y: number) => void;
  beginDrag: (clientX: number) => void;
  dragTo: (clientX: number) => void;
  endDrag: () => void;
  /** Arrow keys: -1 turns left, 1 turns right. */
  nudge: (direction: -1 | 1) => void;
  /** Advance to `seconds` since the hero started. */
  step: (seconds: number) => StonkPackPose;
  readonly dragging: boolean;
};

function clampUnit(value: number): number {
  return Number.isFinite(value) ? Math.min(1, Math.max(-1, value)) : 0;
}

export function createStonkPackMotion(): StonkPackMotion {
  const m = STONK_PACK_MOTION;
  let tiltX = 0;
  let tiltY = 0;
  let dragging = false;
  let lastX = 0;
  let spin = 0;
  let spinVelocity = 0;
  let yaw = m.baseYaw + m.introYawOffset;
  let pitch = m.introPitch;
  let lastSeconds: number | null = null;

  return {
    setTilt(x, y) {
      tiltX = clampUnit(x);
      tiltY = clampUnit(y);
    },
    beginDrag(clientX) {
      dragging = true;
      lastX = clientX;
    },
    dragTo(clientX) {
      if (!dragging) return;
      const dx = clientX - lastX;
      lastX = clientX;
      spinVelocity = dx * m.dragGain;
      spin += spinVelocity;
    },
    endDrag() {
      dragging = false;
    },
    nudge(direction) {
      spinVelocity = direction * m.keyImpulse;
    },
    step(seconds) {
      const frames = lastSeconds === null ? 1 : Math.min(4, Math.max(0, (seconds - lastSeconds) * 60));
      lastSeconds = seconds;
      if (!dragging) {
        // Geometric series of the per-frame update, so any frame rate lands the same.
        const decay = m.spinDamping ** frames;
        spin += spinVelocity * (frames === 0 ? 0 : (1 - decay) / (1 - m.spinDamping));
        spinVelocity *= decay;
        spin *= m.spinReturn ** frames;
      }
      const intro = Math.min(1, Math.max(0, seconds / m.introSeconds));
      const eased = 1 - (1 - intro) ** 3;
      const targetYaw = m.baseYaw + tiltX * m.tiltYaw + Math.sin(seconds * m.swaySpeed) * m.swayYaw + spin;
      const targetPitch = -tiltY * m.tiltPitch + Math.sin(seconds * m.swayPitchSpeed) * m.swayPitch;
      const follow = 1 - (1 - m.follow) ** frames;
      yaw += (targetYaw - yaw) * follow;
      pitch += (targetPitch - pitch) * follow;
      return {
        yaw,
        pitch,
        roll: Math.sin(seconds * m.rollSpeed) * m.roll + m.rollBias,
        y: m.introDrop * (1 - eased) + Math.sin(seconds * m.bobSpeed) * m.bob,
        keyLight: [3 + tiltX * 4, 4 - tiltY * 3, 6],
      };
    },
    get dragging() {
      return dragging;
    },
  };
}

const CAMERA_BASE_DISTANCE = 11.2;
const CAMERA_HALF_FOV_TAN = Math.tan((26 / 2) * (Math.PI / 180));
const PACK_WIDTH = 2.3;
/** On narrow stages the pack spans at most this share of the stage width. */
const MAX_WIDTH_SHARE = 0.56;

/**
 * Camera distance: the pack keeps about 80% of the band height on wide stages
 * and pulls back on narrow ones (phones) so it never crowds the band chips.
 */
export function stonkPackCameraDistance(aspect: number): number {
  const safeAspect = Number.isFinite(aspect) && aspect > 0 ? aspect : 1;
  const fitWidth = PACK_WIDTH / MAX_WIDTH_SHARE / (2 * CAMERA_HALF_FOV_TAN * safeAspect);
  return Math.max(CAMERA_BASE_DISTANCE, fitWidth);
}
