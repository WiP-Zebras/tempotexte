import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const html = await readFile("public/index.html", "utf8");
const css = await readFile("public/styles.css", "utf8");
const app = await readFile("public/app.js", "utf8").catch(() => "");

test("interface exposes a labelled editor and a logical result region", () => {
  assert.match(html, /<main\b/);
  assert.match(html, /<form\b/);
  assert.match(html, /<label[^>]*for=["']text["']/);
  assert.match(html, /<textarea[^>]*id=["']text["'][^>]*required/);
  assert.match(html, /id=["']result["'][^>]*aria-live=["']polite["']/);
  assert.match(html, /type=["']submit["']/);
});

test("interface loads the local estimator without a remote dependency", () => {
  assert.match(html, /app\.js/);
  assert.match(app, /reading-time\.js/);
  assert.doesNotMatch(app, /https?:\/\//);
});

test("styles provide visible keyboard focus and responsive layout", () => {
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media/);
  assert.match(css, /prefers-reduced-motion/);
});
