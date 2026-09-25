import assert from "node:assert/strict";
import { test } from "node:test";

import { createStonkPackMotion, STONK_PACK_MOTION, stonkPackCameraDistance } from "./stonkPackHeroMotion";

function run(motion = createStonkPackMotion(), until = 6, hz = 60) {
  let pose = motion.step(0);
  for (let frame = 1; frame <= until * hz; frame += 1) pose = motion.step(frame / hz);
  return pose;
}

test("the pack rises into place on load and settles near its three-quarter pose", () => {
  const motion = createStonkPackMotion();
  const first = motion.step(0);
  assert.ok(Math.abs(first.y - STONK_PACK_MOTION.introDrop) < 1e-9, "starts below");
  assert.ok(first.yaw > STONK_PACK_MOTION.baseYaw + 0.5, "starts turned");
  const settled = run(motion, 6);
  assert.ok(Math.abs(settled.y) <= STONK_PACK_MOTION.bob + 1e-9, "only the float bob remains");
  assert.ok(Math.abs(settled.yaw - STONK_PACK_MOTION.baseYaw) < STONK_PACK_MOTION.swayYaw + 0.02, `yaw ${settled.yaw}`);
});

test("a drag turns the pack and it springs back after release", () => {
  const motion = createStonkPackMotion();
  run(motion, 3);
  motion.beginDrag(100);
  for (let x = 110; x <= 300; x += 10) motion.dragTo(x);
  let pose = motion.step(3 + 1 / 60);
  for (let frame = 2; frame <= 20; frame += 1) pose = motion.step(3 + frame / 60);
  assert.ok(pose.yaw > STONK_PACK_MOTION.baseYaw + 1, `turned ${pose.yaw}`);
  motion.endDrag();
  const back = run(motion, 12);
  assert.ok(Math.abs(back.yaw - STONK_PACK_MOTION.baseYaw) < STONK_PACK_MOTION.swayYaw + 0.02, `returned ${back.yaw}`);
});

test("drag deltas outside an active drag are ignored", () => {
  const motion = createStonkPackMotion();
  motion.dragTo(500);
  const idle = run(motion, 4);
  const reference = run(createStonkPackMotion(), 4);
  assert.ok(Math.abs(idle.yaw - reference.yaw) < 1e-9);
});

test("arrow keys nudge the pack left or right", () => {
  const left = createStonkPackMotion();
  const right = createStonkPackMotion();
  run(left, 3);
  run(right, 3);
  left.nudge(-1);
  right.nudge(1);
  let a = left.step(3 + 1 / 60);
  let b = right.step(3 + 1 / 60);
  for (let frame = 2; frame <= 20; frame += 1) {
    a = left.step(3 + frame / 60);
    b = right.step(3 + frame / 60);
  }
  assert.ok(a.yaw < b.yaw - 0.5, `${a.yaw} < ${b.yaw}`);
});

test("pointer tilt shifts the pose and the key light, clamped to the stage", () => {
  const motion = createStonkPackMotion();
  run(motion, 3);
  motion.setTilt(5, -5);
  const tilted = run(motion, 8);
  assert.deepEqual(tilted.keyLight, [7, 7, 6], "tilt clamps to [-1, 1]");
  assert.ok(tilted.pitch > 0.1, "pointer above the middle tips the top back");
  motion.setTilt(Number.NaN, 0);
  assert.deepEqual(motion.step(9).keyLight, [3, 4, 6]);
});

test("motion speed does not depend on the display refresh rate", () => {
  for (const seconds of [0.5, 1, 2, 4]) {
    const at60 = run(createStonkPackMotion(), seconds, 60);
    const at120 = run(createStonkPackMotion(), seconds, 120);
    assert.ok(Math.abs(at60.yaw - at120.yaw) < 0.02, `${seconds}s yaw ${at60.yaw} vs ${at120.yaw}`);
    assert.ok(Math.abs(at60.y - at120.y) < 1e-9, `${seconds}s height`);
  }
});

test("the camera pulls back on narrow stages", () => {
  assert.equal(stonkPackCameraDistance(1040 / 560), 11.2);
  assert.ok(stonkPackCameraDistance(0.3) > 11.2);
  // Phone band (318 x 470): the pack spans at most 56% of the stage width.
  const aspect = 318 / 470;
  const visibleWidth = 2 * stonkPackCameraDistance(aspect) * Math.tan((13 * Math.PI) / 180) * aspect;
  assert.ok(2.3 / visibleWidth <= 0.5601, `pack share ${2.3 / visibleWidth}`);
  assert.equal(stonkPackCameraDistance(0), stonkPackCameraDistance(1));
  assert.equal(stonkPackCameraDistance(Number.NaN), stonkPackCameraDistance(1));
});
