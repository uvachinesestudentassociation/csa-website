# Plan 005: Fix theme toggle to use resolvedTheme

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: After recording HEAD (with operator permission):
> `git diff --stat UNVERIFIED..HEAD -- components/theme-provider.tsx app/layout.tsx`
> Compare excerpts to live code; on mismatch, STOP.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `UNVERIFIED`, 2026-08-21

## Why this matters

Root layout enables system theme preference, but `ThemeToggle` branches on the
unresolved `theme` string. When `theme === "system"`, the expression
`theme === "dark" ? "light" : "dark"` always sets `"dark"` on first click, and
the sun/moon icons can disagree with what the user actually sees.

## Current state

- Provider enables system:

```97:97:app/layout.tsx
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
```

- Broken toggle:

```8:22:components/theme-provider.tsx
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

- Library: `next-themes@^0.4.4` already installed. Follow next-themes guidance:
  use `resolvedTheme` for the currently active light/dark appearance.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `pnpm lint` | exit 0 |
| Build | `pnpm build` | exit 0 |
| Manual | toggle in browser with OS light/dark | icons + class match |

## Scope

**In scope**:
- `components/theme-provider.tsx` — `ThemeToggle` only

**Out of scope**:
- Changing `defaultTheme` / removing `enableSystem` from `app/layout.tsx`
  (keep system support)
- Three-way cycle UI (light → dark → system) unless needed; a correct binary
  toggle on `resolvedTheme` is enough
- Navbar layout changes

## Git workflow

- Branch: `advisor/005-theme-toggle-resolved`
- Commit message: `Fix theme toggle to use resolvedTheme`
- Do NOT push/PR unless instructed.

## Steps

### Step 1: Toggle from resolved appearance

Update `ThemeToggle` to:

```tsx
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {/* keep existing Sun/Moon markup */}
    </Button>
  )
}
```

Notes:

- After click, theme becomes explicit `"light"` or `"dark"` (exits `"system"`).
  That is acceptable.
- Icons already use Tailwind `dark:` variants tied to the `class` strategy —
  keep them; do not drive icons from a stale `theme === "system"` check.
- Guard against `resolvedTheme` being `undefined` on first paint if needed:
  `resolvedTheme === "dark" ? "light" : "dark"` already treats undefined as
  “go dark”, which matches prior buggy behavior for the undefined case; optional
  improvement: no-op until mounted — only add if you observe a hydration warning.
  Prefer minimal change.

**Verify**: `pnpm lint` → exit 0; `pnpm build` → exit 0.

### Step 2: Manual check

1. `pnpm dev`.
2. With OS in light mode and site on system/default: click toggle → dark class
   on `<html>`, moon icon visible state correct.
3. Click again → light.
4. Repeat briefly with OS dark mode if easy — first click should move to the
   opposite of **current appearance**, not always to dark.

**Verify**: checklist above.

## Test plan

- Manual only (theme + DOM class). No unit test required for this glue.

## Done criteria

- [ ] `ThemeToggle` uses `resolvedTheme` (not unresolved `theme`) for the branch
- [ ] `enableSystem` remains enabled in `app/layout.tsx`
- [ ] `pnpm lint` and `pnpm build` exit 0
- [ ] Only `components/theme-provider.tsx` changed
- [ ] `plans/README.md` row 005 → DONE

## STOP conditions

- next-themes API in the installed version lacks `resolvedTheme` — STOP and
  report version; do not downgrade/upgrade unrelated packages without asking.
- Fix appears to require removing `suppressHydrationWarning` or rewriting
  `ThemeProvider` — out of scope; report.

## Maintenance notes

- Reviewers: one-line behavioral fix; watch for hydration warnings in console.
- Deferred: explicit “System” menu item for three-state control.
