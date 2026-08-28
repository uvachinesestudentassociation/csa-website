import { readdir, readFile } from "node:fs/promises";
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

const BOM_FAIL_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);

const SKIP_DIRS = new Set(["node_modules", ".next", ".git"]);

function detectIssue(bytes, ext) {
  if (bytes.length >= 2 && bytes[0] === 0xff && bytes[1] === 0xfe) {
    return "UTF-16 LE BOM";
  }
  if (bytes.length >= 2 && bytes[0] === 0xfe && bytes[1] === 0xff) {
    return "UTF-16 BE BOM";
  }
  if (
    bytes.length >= 3 &&
    bytes[0] === 0xef &&
    bytes[1] === 0xbb &&
    bytes[2] === 0xbf &&
    BOM_FAIL_EXTENSIONS.has(ext)
  ) {
    return "UTF-8 BOM (not allowed for source files)";
  }
  const sample = Math.min(bytes.length, 512);
  let nullPairs = 0;
  for (let i = 1; i < sample; i += 2) {
    if (bytes[i] === 0) nullPairs++;
  }
  if (nullPairs > 20) {
    return "Likely UTF-16 (null bytes between characters)";
  }
  return null;
}

async function walk(dir, issues) {
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
      await walk(fullPath, issues);
      continue;
    }
    const ext = path.extname(entry.name);
    if (!TEXT_EXTENSIONS.has(ext)) continue;
    const bytes = await readFile(fullPath);
    const issue = detectIssue(bytes, ext);
    if (issue) {
      issues.push({ file: path.relative(ROOT, fullPath), issue });
    }
  }
}

const issues = [];

for (const dir of SCAN_DIRS) {
  await walk(path.join(ROOT, dir), issues);
}

for (const file of ROOT_FILES) {
  const fullPath = path.join(ROOT, file);
  try {
    const bytes = await readFile(fullPath);
    const issue = detectIssue(bytes, path.extname(file));
    if (issue) {
      issues.push({ file, issue });
    }
  } catch {
    // optional root config file
  }
}

if (issues.length === 0) {
  console.log("Encoding check passed.");
  process.exit(0);
}

console.error("Encoding issues found:\n");
for (const { file, issue } of issues) {
  console.error(`  ${issue}: ${file}`);
}
console.error(`\n${issues.length} file(s) failed. Run: node scripts/fix-encoding.mjs`);
process.exit(1);
