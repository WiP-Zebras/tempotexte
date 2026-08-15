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

test("punctuation does not create extra words", () => {
  assert.equal(countWords("Bonjour, monde ! C'est simple."), 5);
});

test("numbers are counted as words", () => {
  assert.equal(countWords("Version 2.0 : 42%"), 4);
});

test("unicode words are counted", () => {
  assert.equal(countWords("Été déjà là — 東京"), 4);
});

test("long text counts every token", () => {
  assert.equal(countWords(Array(10000).fill("mot").join(" ")), 10000);
});

test("201 words take two minutes", () => {
  const text = Array(201).fill("mot").join(" ");
  assert.equal(estimateReadingMinutes(text), 2);
});

test("200 words take one minute", () => {
  const text = Array(200).fill("mot").join(" ");
  assert.equal(estimateReadingMinutes(text), 1);
});

test("one word takes one minute", () => {
  assert.equal(estimateReadingMinutes("mot"), 1);
});

test("custom words per minute keeps the calculation deterministic", () => {
  assert.equal(estimateReadingMinutes("un deux trois", 100), 1);
  assert.equal(estimateReadingMinutes("un deux trois", 200), 1);
});

test("estimating text does not require a network request", () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = () => {
    throw new Error("network access is forbidden");
  };

  try {
    assert.equal(estimateReadingMinutes("texte local"), 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
