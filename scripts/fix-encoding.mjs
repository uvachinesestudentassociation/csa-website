import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = path.resolve(import.meta.dirname, "..");

const SCAN_DIRS = ["app", "components", "content", "lib", "scripts", "public"];
const ROOT_FILES = [
  "package.json",
  "tsconfig.json",
  "next.config.ts",
  "next.config.mjs",
  "tailwind.config.ts",
  "postcss.config.mjs",
  "vitest.config.ts",
  "eslint.config.mjs",
];

const TEXT_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".css",
  ".json",
  ".md",
]);

const SKIP_DIRS = new Set(["node_modules", ".next", ".git"]);

function decodeToUtf8(bytes) {
  if (bytes.length >= 2 && bytes[0] === 0xff && bytes[1] === 0xfe) {
    return new TextDecoder("utf-16le").decode(bytes.subarray(2));
  }
  if (bytes.length >= 2 && bytes[0] === 0xfe && bytes[1] === 0xff) {
    return new TextDecoder("utf-16be").decode(bytes.subarray(2));
  }
  if (bytes.length >= 3 && bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf) {
    return new TextDecoder("utf-8").decode(bytes.subarray(3));
  }
  const sample = Math.min(bytes.length, 512);
  let nullPairs = 0;
  for (let i = 1; i < sample; i += 2) {
    if (bytes[i] === 0) nullPairs++;
  }
  if (nullPairs > 20) {
    return new TextDecoder("utf-16le").decode(bytes);
  }
  return null;
}

async function walk(dir, fixed) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, fixed);
      continue;
    }
    const ext = path.extname(entry.name);
    if (!TEXT_EXTENSIONS.has(ext)) continue;
    const bytes = await readFile(fullPath);
    const text = decodeToUtf8(bytes);
    if (text !== null) {
      await writeFile(fullPath, text, { encoding: "utf8" });
      fixed.push(path.relative(ROOT, fullPath));
    }
  }
}

const fixed = [];

for (const dir of SCAN_DIRS) {
  await walk(path.join(ROOT, dir), fixed);
}

for (const file of ROOT_FILES) {
  const fullPath = path.join(ROOT, file);
  try {
    const bytes = await readFile(fullPath);
    const text = decodeToUtf8(bytes);
    if (text !== null) {
      await writeFile(fullPath, text, { encoding: "utf8" });
      fixed.push(file);
    }
  } catch {
    // optional root config file
  }
}

if (fixed.length === 0) {
  console.log("No encoding fixes needed.");
} else {
  console.log(`Fixed ${fixed.length} file(s):`);
  for (const file of fixed) {
    console.log(`  ${file}`);
  }
}
