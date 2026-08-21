# Plan 004: Make officer bio cards keyboard-accessible

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: After recording HEAD (with operator permission):
> `git diff --stat UNVERIFIED..HEAD -- app/officers/page.tsx content/officers.ts`
> Compare excerpts to live code; on mismatch, STOP.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `UNVERIFIED`, 2026-08-21

## Why this matters

Officer cards with bios toggle the description overlay via `onClick` on a
non-interactive `Card`. Keyboard and many assistive-tech users never receive a
focusable control, so bios on the Officers tab are mouse-only.

## Current state

```54:78:app/officers/page.tsx
  return (
    <Card
      className="overflow-hidden cursor-pointer dark:bg-card"
      onClick={() => setShowDescription((prev) => !prev)}
    >
      <div className="relative aspect-square">
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className={`object-cover transition-opacity ${showDescription ? "opacity-70" : ""}`}
        />
        {showDescription && (
          <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/50 text-white">
            <p className="text-sm text-center">{description}</p>
          </div>
        )}
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-0 dark:text-primary-foreground">{name}</h3>
        <p className="text-xs text-muted-foreground mt-1">{officersContent.card.tapForBio}</p>
      </CardContent>
    </Card>
  )
```

- Cards **without** `description` stay non-toggle (no change needed).
- Copy string `officersContent.card.tapForBio` already exists — keep using it;
  prefer updating accessible name to mention activate/toggle if needed.
- UI stack: shadcn `Card` + Tailwind; match existing class names; do not restyle
  the page.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `pnpm lint` | exit 0 |
| Build | `pnpm build` | exit 0 |
| Manual a11y | keyboard Tab/Enter/Space on Officers → Officer tab | bio toggles |

## Scope

**In scope**:
- `app/officers/page.tsx` — `OfficerCard` only
- `content/officers.ts` — only if you must adjust `tapForBio` copy for a clearer
  accessible name (prefer leaving copy alone)

**Out of scope**:
- Splitting officers into server/client islands (perf plan, not this)
- Changing Tabs behavior
- Alumni cards
- Adding a new dependency

## Git workflow

- Branch: `advisor/004-officer-bio-keyboard`
- Commit message: `Make officer bio cards keyboard accessible`
- Do NOT push/PR unless instructed.

## Steps

### Step 1: Replace click-only Card with a real button pattern

Preferred implementation (pick this unless Card-as-child is required for styles):

- Keep outer `Card` for chrome **without** `onClick`.
- Wrap the interactive surface (image + optional overlay, or the whole card
  interior) in:

```tsx
<button
  type="button"
  className="..." // reset: w-full text-left, no unwanted button UA styles
  aria-expanded={showDescription}
  aria-controls={/* optional id on the bio overlay */}
  onClick={() => setShowDescription((prev) => !prev)}
>
  ...
</button>
```

Requirements:

1. Focusable via Tab.
2. Enter and Space toggle (native `<button>` gives this).
3. `aria-expanded` reflects `showDescription`.
4. Visible focus ring — use existing focus-visible utilities if present
   (`focus-visible:ring-2 focus-visible:ring-ring` as used elsewhere, e.g.
   alumni year `<select>`).
5. Do not nest interactive elements (no `<a>` inside the button).
6. Mouse click behavior must still toggle as today.

**Verify**: `pnpm lint` → exit 0.

### Step 2: Manual keyboard check

1. `pnpm dev` → `/officers` → **Officer** tab (bios live here).
2. Tab to a card with a bio → focus visible.
3. Enter/Space → overlay appears; again → hides.
4. Mouse click still works.

**Verify**: checklist above; `pnpm build` → exit 0.

## Test plan

- No unit test required unless 001 landed and you extract a tiny toggle hook
  (not necessary).
- Manual keyboard checklist is the acceptance test.

## Done criteria

- [ ] Bio cards use a `<button>` (or equivalent role+tabIndex+keyboard handlers
      with the same semantics — prefer native `<button>`)
- [ ] `aria-expanded` wired
- [ ] Nested interactive content avoided
- [ ] `pnpm lint` and `pnpm build` exit 0
- [ ] Only in-scope files changed
- [ ] `plans/README.md` row 004 → DONE

## STOP conditions

- Making the card a button breaks Image `fill` layout badly — try
  `relative` wrappers first; if still broken, STOP and report rather than
  redesigning the officers grid.
- `OfficerCard` has already been refactored away from these excerpts.

## Maintenance notes

- Reviewers: keyboard path + `aria-expanded` are the must-haves; visual polish
  secondary.
- Deferred: move focus into a dialog pattern for long bios — not needed now.
