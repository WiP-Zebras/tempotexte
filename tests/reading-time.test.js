import test from "node:test";
import assert from "node:assert/strict";
import { countWords, estimateReadingMinutes } from "../src/reading-time.js";

test("empty text", () => {
  assert.equal(countWords(""), 0);
  assert.equal(estimateReadingMinutes(""), 0);
});

test("whitespace separates words", () => {
  assert.equal(countWords("  un\n deux\t trois  "), 3);
});

test("201 words take two minutes", () => {
  const text = Array(201).fill("mot").join(" " );
  assert.equal(estimateReadingMinutes(text), 2);
});

test("200 words take one minute", () => {
  const text = Array(200).fill("mot").join(" " );
  assert.equal(estimateReadingMinutes(text), 1);
});
