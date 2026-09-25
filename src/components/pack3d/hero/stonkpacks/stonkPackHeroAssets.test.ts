import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import {
  STONK_PACK_FLOAT_VIDEO,
  STONK_PACK_POSTER,
  STONK_PACK_TEXTURES,
  stonkPackTextureSetFor,
} from "./stonkPackHeroAssets";

const publicRoot = new URL("../../../../../public/", import.meta.url);
const WEB_RUNTIME_BLOB_LIMIT = 8 * 1024 * 1024;

function publicFile(path: string): URL {
  assert.match(path, /^\/pack3d\/stonkpacks\/[a-z0-9-]+\.[0-9a-f]{10}\.(webp|webm|mp4)$/u);
  return new URL(path.slice(1), publicRoot);
}

async function assertAsset(path: string, magic: (bytes: Buffer) => boolean) {
  const bytes = await readFile(publicFile(path));
  const digest = createHash("sha256").update(bytes).digest("hex");
  const pinned = /\.([0-9a-f]{10})\.[a-z0-9]+$/u.exec(path)?.[1];
  assert.equal(digest.slice(0, 10), pinned, `${path}: name must carry its content hash (served immutable)`);
  assert.ok(magic(bytes), `${path}: unexpected file type`);
  assert.ok(bytes.length <= WEB_RUNTIME_BLOB_LIMIT, `${path}: over the web runtime blob budget`);
  return bytes.length;
}

const isWebp = (bytes: Buffer) => bytes.subarray(0, 4).toString("latin1") === "RIFF" && bytes.subarray(8, 12).toString("latin1") === "WEBP";

test("every hero asset exists, is content-addressed and has the right type", async () => {
  let textureBytes = 0;
  for (const set of Object.values(STONK_PACK_TEXTURES)) {
    for (const path of Object.values(set)) textureBytes += await assertAsset(path, isWebp);
  }
  assert.ok(textureBytes < 1_500_000, `texture payload ${textureBytes}`);
  await assertAsset(STONK_PACK_POSTER, isWebp);
  const [hevc, webm] = STONK_PACK_FLOAT_VIDEO;
  assert.ok(hevc && webm);
  await assertAsset(hevc.src, (bytes) => bytes.subarray(4, 8).toString("latin1") === "ftyp");
  await assertAsset(webm.src, (bytes) => bytes.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3])));
});

test("Safari gets the HEVC alpha loop first and Chromium falls through to VP9 alpha", () => {
  assert.equal(STONK_PACK_FLOAT_VIDEO[0]?.type, 'video/quicktime; codecs="hvc1"');
  assert.equal(STONK_PACK_FLOAT_VIDEO[1]?.type, "video/webm");
});

test("compact screens load the 1024 texture set", () => {
  assert.equal(stonkPackTextureSetFor({ viewportWidth: 390, devicePixelRatio: 3 }), STONK_PACK_TEXTURES.compact);
  assert.equal(stonkPackTextureSetFor({ viewportWidth: 1024, devicePixelRatio: 1 }), STONK_PACK_TEXTURES.compact);
  assert.equal(stonkPackTextureSetFor({ viewportWidth: 1440, devicePixelRatio: 1 }), STONK_PACK_TEXTURES.full);
  assert.equal(stonkPackTextureSetFor({ viewportWidth: 1024, devicePixelRatio: 2 }), STONK_PACK_TEXTURES.full);
});

test("no hero asset name carries another brand", () => {
  const names = [
    ...Object.values(STONK_PACK_TEXTURES).flatMap((set) => Object.values(set)),
    STONK_PACK_POSTER,
    ...STONK_PACK_FLOAT_VIDEO.map(({ src }) => src),
  ];
  for (const name of names) assert.doesNotMatch(name, /royale|attn/iu);
});
