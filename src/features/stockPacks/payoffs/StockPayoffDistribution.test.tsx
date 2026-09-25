import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  STOCK_PACK_WEIGHT_TOTAL,
  StockPayoffDistribution,
  validateStockPayoffDistribution,
} from "./StockPayoffDistribution";

Object.assign(globalThis, { React });

const canonicalOutcomes = Object.freeze([
  { id: "core", label: "Core", weight: 7_500 },
  { id: "plus", label: "Plus", weight: 2_000 },
  { id: "rare", label: "Rare", weight: 400 },
  { id: "apex", label: "Apex", weight: 100 },
]);

test("renders exact 10,000-weight proportions and live chance labels", () => {
  const html = renderToStaticMarkup(<StockPayoffDistribution segments={canonicalOutcomes} />);
  assert.equal(canonicalOutcomes.reduce((total, outcome) => total + outcome.weight, 0), STOCK_PACK_WEIGHT_TOTAL);
  for (const outcome of canonicalOutcomes) assert.ok(html.includes(`data-weight="${outcome.weight}"`));
  for (const chance of ["75%", "20%", "4%", "1%"] as const) assert.ok(html.includes(chance));
  assert.ok(html.includes("Odds distribution: Core 75%, Plus 20%, Rare 4%, Apex 1%"));
  assert.ok(html.includes('aria-label="Exact reward chances"'));
});

test("rejects distributions that would visually misstate the canonical odds", () => {
  assert.throws(
    () => validateStockPayoffDistribution(canonicalOutcomes.map((outcome, index) => ({
      ...outcome,
      weight: index === 0 ? outcome.weight - 1 : outcome.weight,
    }))),
    /must total 10000/u,
  );
  assert.throws(
    () => validateStockPayoffDistribution([...canonicalOutcomes, { id: "apex", label: "Duplicate", weight: 1 }]),
    /unique and non-empty/u,
  );
  assert.throws(
    () => validateStockPayoffDistribution([{ id: "invalid", label: "Invalid", weight: 10_000.5 }]),
    /positive integer weight/u,
  );
});
