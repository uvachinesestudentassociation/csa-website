# Plan 001: Add typecheck script, Vitest baseline, and CI gates

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: Ask the operator for permission, then run
> `git rev-parse --short HEAD` and record it. Compare in-scope files to the
> “Current state” excerpts below; on mismatch, STOP.
> Also: `git diff --stat UNVERIFIED..HEAD -- package.json .github/workflows/ci.yml content/emphasize.ts tsconfig.json`
> (replace `UNVERIFIED` with the SHA you recorded once known).

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: none
- **Category**: tests
- **Planned at**: commit `UNVERIFIED`, 2026-08-21
- **Executed at**: commit `5709244` on `advisor/001-verification-baseline` (worktree), 2026-08-21
- **Review**: APPROVE

## Why this matters

The repo has no unit tests and no dedicated typecheck script. CI only runs
`pnpm lint` and `pnpm build` (`.github/workflows/ci.yml`). Pure helpers
(`emphasizePhrases`, YouTube URL parsing, alumni role sort, Families sealed
payload shaping) can regress with only compile-time feedback. A small Vitest
suite plus `tsc --noEmit` gives one-command verification before larger
refactors (especially plan 002).

## Current state

- `package.json` — scripts are only `dev` / `build` / `start` / `lint`; package
  manager is `pnpm@9.15.9`; TypeScript is already a devDependency.
- `.github/workflows/ci.yml` — after install: `pnpm lint` then `pnpm build`.
- `tsconfig.json` — `"strict": true`, `"noEmit": true` already set.
- `content/emphasize.ts` — pure function suitable as the first test target:

```5:18:content/emphasize.ts
export function emphasizePhrases(
  text: string,
  phrases: readonly string[],
): Array<string | { strong: string }> {
  if (phrases.length === 0) return [text]

  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  const pattern = new RegExp(`(${escaped.join("|")})`, "g")
  const parts = text.split(pattern)

  return parts.filter(Boolean).map((part) =>
    phrases.includes(part) ? { strong: part } : part,
  )
}
```

- Zero `*.test.*` / `*.spec.*` files exist today.
- Conventions: App Router Next.js 15, path alias `@/*` → repo root, pnpm only
  (do not introduce npm/yarn lockfiles).

## Commands you will need

| Purpose   | Command                         | Expected on success        |
|-----------|---------------------------------|----------------------------|
| Install   | `pnpm install`                  | exit 0                     |
| Typecheck | `pnpm typecheck`                | exit 0, no errors          |
| Tests     | `pnpm test`                     | exit 0, all pass           |
| Lint      | `pnpm lint`                     | exit 0                     |
| Build     | `pnpm build`                    | exit 0                     |

Ask the operator before running any `pnpm` / `git` commands if their rules require it.

## Scope

**In scope**:
- `package.json`
- `pnpm-lock.yaml` (updated by `pnpm add -D`)
- `.github/workflows/ci.yml`
- `vitest.config.ts` (create)
- `content/emphasize.test.ts` (create)
- Optionally `tsconfig.json` only if Vitest needs a tiny `types` / include tweak
  (prefer configuring Vitest without changing app tsconfig)

**Out of scope**:
- E2E / Playwright
- Testing React components or pages
- Removing unused deps (`animejs`, `date-fns`)
- Refactoring app routes
- Adding Zod schemas

## Git workflow

- Branch: `advisor/001-verification-baseline`
- Commit messages: short imperative, e.g. `Add Vitest and typecheck CI gates`
- Do NOT push or open a PR unless the operator instructed it.

## Steps

### Step 1: Add `typecheck` script

In `package.json` `scripts`, add:

```json
"typecheck": "tsc --noEmit"
```

**Verify**: `pnpm typecheck` → exit 0. If it fails on pre-existing errors, STOP and
report the full `tsc` output (do not weaken `strict`).

### Step 2: Add Vitest

Ask permission, then:

```bash
pnpm add -D vitest
```

Create `vitest.config.ts` at repo root:

```ts
import path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "node",
    include: ["**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", ".next"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
})
```

Add script: `"test": "vitest run"`.

**Verify**: `pnpm test` → exits 0 with “No test files found” **or** 0 tests; if
Vitest errors on config, fix config only — do not skip.

### Step 3: First characterization tests for `emphasizePhrases`

Create `content/emphasize.test.ts` covering:

1. Empty `phrases` → `[text]` unchanged.
2. Single phrase match → `{ strong: phrase }` segment present.
3. Regex-special characters in a phrase (e.g. `CSA@UVA`) do not throw and still match.
4. Non-matching text stays plain strings.

**Verify**: `pnpm test` → all pass; at least 4 assertions across those cases.

### Step 4: Wire CI

In `.github/workflows/ci.yml`, after `pnpm install --frozen-lockfile` and
**before** `pnpm build`, add:

```yaml
- run: pnpm typecheck
- run: pnpm test
```

Keep existing `pnpm lint` and `pnpm build`.

**Verify**: Re-read the workflow file; order is install → lint → typecheck → test → build
(or install → typecheck → test → lint → build — either is fine as long as all four run).
Locally: `pnpm typecheck && pnpm test && pnpm lint` → all exit 0.

## Test plan

- New file: `content/emphasize.test.ts` as above.
- No existing test file to model after — keep tests plain Vitest `expect` style,
  no Testing Library yet.
- Verification: `pnpm test` → all pass.

## Done criteria

- [ ] `package.json` has `typecheck` and `test` scripts
- [ ] `pnpm typecheck` exits 0
- [ ] `pnpm test` exits 0 with emphasize tests present
- [ ] CI workflow runs typecheck and test
- [ ] No files outside the in-scope list are modified
- [ ] `plans/README.md` status row for 001 set to DONE

## STOP conditions

- `pnpm typecheck` fails on errors unrelated to this plan’s edits.
- Vitest cannot resolve `@/` without invasive Next/Webpack changes — report
  options; do not rewrite the app bundler.
- Operator refuses `pnpm add` / lockfile changes.
- In-scope files already diverged from excerpts (e.g. emphasize API changed).

## Maintenance notes

- Prefer adding unit tests for pure helpers next (`getYoutubeEmbedUrl` if extracted,
  alumni role sort if extracted, Families sealed payload helper from plan 002).
- Reviewers: ensure CI still uses `pnpm install --frozen-lockfile` and that the
  lockfile was committed with vitest.
- Deferred: component tests, E2E, coverage thresholds.
