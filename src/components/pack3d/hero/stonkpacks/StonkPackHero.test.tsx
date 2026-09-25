import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { STONK_PACK_POSTER } from "./stonkPackHeroAssets";
import { StonkPackHero, stonkPackHeroPlan } from "./StonkPackHero";

Object.assign(globalThis, { React });

test("reduced motion and Save-Data keep the rendered still", () => {
  assert.equal(stonkPackHeroPlan({ reducedMotion: true, saveData: false, lowPower: false }), "poster");
  assert.equal(stonkPackHeroPlan({ reducedMotion: false, saveData: true, lowPower: false }), "poster");
  assert.equal(stonkPackHeroPlan({ reducedMotion: true, saveData: false, lowPower: true }), "poster");
});

test("constrained devices play the float loop; everything else tries live WebGL", () => {
  assert.equal(stonkPackHeroPlan({ reducedMotion: false, saveData: false, lowPower: true }), "video");
  assert.equal(stonkPackHeroPlan({ reducedMotion: false, saveData: false, lowPower: false }), "webgl");
});

test("before the first 3D frame the poster is what you see", () => {
  const markup = renderToStaticMarkup(<StonkPackHero label="$25 Index Mix" reducedMotion={false} />);
  assert.match(markup, /^<div class="stonkPackHero" data-renderer="poster"><div class="stonkPackHero__still" role="img" aria-label="\$25 Index Mix">/u);
  assert.ok(markup.includes(`src="${STONK_PACK_POSTER}"`));
  assert.match(markup, /<img class="stonkPackHero__poster"[^>]*alt=""/u);
  assert.doesNotMatch(markup, /<video|<canvas|Drag to turn/u, "no loop, canvas or drag hint before WebGL is ready");
});
