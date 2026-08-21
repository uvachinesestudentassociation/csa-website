# Plan 003: Fix alumni `famhead,` role typos

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: After recording HEAD (with operator permission):
> `git diff --stat UNVERIFIED..HEAD -- app/alumni/alumni-data.json app/alumni/page.tsx`
> Compare excerpts below to live files; on mismatch, STOP.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `UNVERIFIED`, 2026-08-21

## Why this matters

Two Class of 2019 alumni have role token `"famhead,"` (trailing comma inside the
string). Badge rendering and sort priority only match exact `"famhead"`, so
those people lose the Family Head badge and sort as if they were not family
heads.

## Current state

- Bad data:

```1020:1031:app/alumni/alumni-data.json
      {
        "name": "Jeffrey Ding",
        "roles": ["oboard", "famhead,"]
      },
      {
        "name": "Jennifer Zhou",
        "roles": ["exec", "oboard"]
      },
      {
        "name": "Kevin Wu",
        "roles": ["oboard", "famhead,"]
      },
```

- Consumers require exact tokens:

```23:27:app/alumni/page.tsx
function getRolePriority(roles: string[]): number {
  if (roles.includes("exec")) return 0
  if (roles.includes("oboard")) return 1
  if (roles.includes("famhead")) return 2
  return 3
}
```

```58:64:app/alumni/page.tsx
      {roles.includes("famhead") && (
        <Badge
          variant="secondary"
          className="text-xs dark:bg-secondary dark:text-secondary-foreground"
        >
          {roleLabels.familyHead}
        </Badge>
      )}
```

- Correct example already in the same year: Melissa E uses `"famhead"` (no comma).

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Search  | `rg "famhead," app/alumni` | no matches after fix |
| Lint    | `pnpm lint` | exit 0 |
| Build   | `pnpm build` | exit 0 (optional if lint-only change accepted by operator) |

## Scope

**In scope**:
- `app/alumni/alumni-data.json` only

**Out of scope**:
- Adding runtime role normalization / Zod
- Refactoring `RoleBadges` or sort helpers
- Other alumni years unless the same typo appears (if `rg` finds more `famhead,`,
  fix those too — still JSON-only)

## Git workflow

- Branch: `advisor/003-fix-alumni-famhead-typos`
- Commit message: `Fix alumni famhead role typos for 2019`
- Do NOT push/PR unless instructed.

## Steps

### Step 1: Fix the two (or more) typos

Replace `"famhead,"` with `"famhead"` wherever it appears under `app/alumni/`.

**Verify**: `rg "famhead," app/alumni` → no matches.  
`rg '"famhead"' app/alumni/alumni-data.json` → still finds valid tokens including
Jeffrey Ding and Kevin Wu.

### Step 2: Sanity lint

**Verify**: `pnpm lint` → exit 0.

## Test plan

- No automated test required for a two-line JSON typo.
- Manual (optional): `pnpm dev` → Alumni → Class of 2019 → confirm Jeffrey Ding
  and Kevin Wu show Family Head badges.

## Done criteria

- [ ] Zero `famhead,` strings under `app/alumni/`
- [ ] Jeffrey Ding and Kevin Wu both list `"famhead"` in `roles`
- [ ] No code/TSX changes
- [ ] `plans/README.md` row 003 → DONE

## STOP conditions

- More than ~10 corrupted role tokens of different shapes appear — stop and
  report; do not invent a mass-normalization pass in this plan.
- `alumni-data.json` structure no longer matches the excerpts (schema change).

## Maintenance notes

- Reviewers: diff should be JSON-only and tiny.
- Follow-up (deferred): optional loader that trims role strings — only if typos
  recur.
