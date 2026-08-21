# Plan 002: Keep sealed family roster off the client until reveal

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: Replace `UNVERIFIED` after `git rev-parse --short HEAD`
> (with operator permission). Then:
> `git diff --stat UNVERIFIED..HEAD -- app/families/ content/families.ts`
> If in-scope files changed, compare “Current state” excerpts to live code; on
> mismatch, STOP.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: plans/001-verification-baseline.md (preferred for the unit test;
  can proceed with manual checks if 001 is blocked)
- **Category**: security
- **Planned at**: commit `UNVERIFIED`, 2026-08-21

## Why this matters

Families uses `familiesContent.revealed` to hide names, bios, photos, and
Instagram until the annual reveal. Today the page is a Client Component that
unconditionally imports `families-data.json`, so the full roster still ships in
the JS bundle while the UI only looks sealed. Anyone can recover the “secret”
from the client chunk (and from a public git repo). The seal must be enforced
by **not sending real roster fields to the browser** until `revealed` is true.

## Current state

- Flag (currently sealed):

```15:16:content/families.ts
  /** Flip to true after the family reveal to unlock names, bios, photos, and Instagram. */
  revealed: false as boolean,
```

- Client page imports JSON at module scope:

```1:29:app/families/page.tsx
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { familiesContent } from "@/content/families"
import families from "./families-data.json"
// ...
const familyList = families as Family[]
const gateCount = familyList.length

export default function FamiliesPage() {
  const { intro, sealed, card, revealed: contentRevealed } = familiesContent
  const [devPreviewRevealed, setDevPreviewRevealed] = useState(false)
  const revealed = contentRevealed || (isDev && devPreviewRevealed)
```

- UI gate only controls mounting (`photosMounted`); data is already on the client
  (`app/families/page.tsx` ~100–132).
- `app/families/layout.tsx` is already a Server Component providing metadata +
  font variable — keep that pattern.
- Dev toggle exists only when `process.env.NODE_ENV === "development"` and must
  keep working for webmasters previewing the open state **locally**.

## Commands you will need

| Purpose   | Command            | Expected on success |
|-----------|--------------------|---------------------|
| Typecheck | `pnpm typecheck`   | exit 0 (after 001)  |
| Tests     | `pnpm test`        | exit 0 (after 001)  |
| Lint      | `pnpm lint`        | exit 0              |
| Build     | `pnpm build`       | exit 0              |
| Dev check | `pnpm dev`         | page loads          |

If 001 is not landed: use `pnpm lint` + `pnpm build` only.

## Scope

**In scope**:
- `app/families/page.tsx` — become a Server Component that chooses the payload
- `app/families/families-view.tsx` (create) — Client Component for UI/animation/dev toggle
- `app/families/families-data.ts` or `lib/families-payload.ts` (create) — pure helper
  that builds the client-safe payload (preferred: `app/families/get-families-payload.ts`)
- `app/families/get-families-payload.test.ts` (create, if 001 landed)
- `content/families.ts` — only if a comment must clarify that reveal also gates
  **data** shipped to the client (optional one-line comment update)

**Out of scope**:
- Deleting or relocating files under `public/images/2025-2026/families/` (public
  static URLs remain guessable; note in Maintenance — do not invent a CDN auth
  scheme here)
- Changing the roadside CSS animation design
- Flipping `revealed` to `true` (content ops, not this plan)
- Officers/alumni client splits (other plans)
- Making the git repo private

## Git workflow

- Branch: `advisor/002-seal-families-client-data`
- Commit message example: `Seal families roster from client until reveal`
- Do NOT push or open a PR unless instructed.

## Steps

### Step 1: Extract a pure payload helper

Create `app/families/get-families-payload.ts` (server-safe, no `"use client"`):

Input:
- `revealed: boolean`
- `isDev: boolean` (pass `process.env.NODE_ENV === "development"` from the server page)
- `families: Family[]` (full JSON)

Output type (export):

```ts
export type FamilyPublic = {
  id: string
  name: string
  shortTabLabel: string
  image: string
  instagramUrl: string
  description: string
}

export type FamiliesClientPayload = {
  /** True when UI may show open state from content flag (not dev toggle). */
  contentRevealed: boolean
  /** Roster safe to serialize to the client component. */
  families: FamilyPublic[]
  gateCount: number
  /** Dev-only: full roster for local preview toggle. Always [] in production builds. */
  devPreviewFamilies: FamilyPublic[]
}
```

Rules (implement exactly):

1. `gateCount = families.length` always (sealed UI still needs N door slots).
2. If `revealed === true`: `families` = full roster; `devPreviewFamilies` = `[]`.
3. If `revealed === false` and `isDev === false` (production sealed):
   `families` = `Array.from({ length: gateCount }, (_, i) => ({
     id: \`sealed-${i}\`,
     name: "",
     shortTabLabel: "",
     image: "",
     instagramUrl: "",
     description: "",
   }))`
   and `devPreviewFamilies` = `[]`.
   **Critical**: empty strings only — no real names, URLs, or image paths.
4. If `revealed === false` and `isDev === true`:
   `families` = same empty stubs as (3);
   `devPreviewFamilies` = full roster (so the Dev toggle can swap locally).

**Verify**: If 001 landed, write `app/families/get-families-payload.test.ts` with cases
for rules 2–4; `pnpm test` passes. If not, manually assert via a temporary
`node -e` / vitest later — still implement the helper first.

### Step 2: Split Server page + Client view

1. Move the current UI from `app/families/page.tsx` into
   `app/families/families-view.tsx` with `"use client"`.
2. Client props: `payload: FamiliesClientPayload` plus whatever copy it needs
   (`familiesContent` can still be imported on the client — it has no secret
   roster, only `revealed` boolean and copy). Prefer passing `intro` / `sealed` /
   `card` as props from the server if you want zero content import on client;
   either is fine as long as **JSON roster is not imported in the client file**.
3. New `app/families/page.tsx` (no `"use client"`):

```tsx
import familiesData from "./families-data.json"
import { familiesContent } from "@/content/families"
import { getFamiliesClientPayload } from "./get-families-payload"
import { FamiliesView } from "./families-view"

export default function FamiliesPage() {
  const payload = getFamiliesClientPayload({
    revealed: familiesContent.revealed,
    isDev: process.env.NODE_ENV === "development",
    families: familiesData as /* FamilyPublic[] */,
  })
  return <FamiliesView payload={payload} />
}
```

4. In `FamiliesView`, reveal logic:
   - `contentRevealed = payload.contentRevealed` (or `familiesContent.revealed`)
   - Dev toggle sets `devPreviewRevealed`
   - `revealed = contentRevealed || (isDev && devPreviewRevealed)`
   - When showing open portraits, use:
     `const list = (isDev && devPreviewRevealed && !contentRevealed)
        ? payload.devPreviewFamilies
        : payload.families`
   - When sealed, keep using `payload.gateCount` for empty door slots.
5. **Grep gate**: the client file must not contain
   `families-data.json` or `from \"./families-data`.

**Verify**:
- `rg "families-data" app/families` → only server `page.tsx` (and optionally the
  helper’s type-only imports — not the client view).
- `pnpm lint` → exit 0
- `pnpm build` → exit 0

### Step 3: Production sealed bundle sanity check

With `content/families.ts` still `revealed: false`:

1. Run `pnpm build`.
2. Search the production client bundle for a distinctive roster string that
   exists only in `families-data.json` (e.g. a unique family name from the JSON).
   Example approach (adjust chunk path to what Next emits):

```bash
rg -l "Golden Guppies" .next/static || true
```

**Expected**: no matches under `.next/static` (or any browser-served client
chunk). Matches only inside server chunks / RSC payload that are not the
client JS for this page are still a STOP if the string appears in
`.next/static/chunks` JS that loads on `/families`.

If the distinctive string still appears in client JS, STOP and fix — do not
ship.

**Verify**: Document the exact `rg` command and result in the PR/commit body.

### Step 4: Manual UI check

1. `pnpm dev`, open `/families` — sealed art, no names/bios/IG.
2. Use Dev toggle — open state shows real families **only in development**.
3. Do not flip `revealed` to true unless the operator asks; if you temporarily
   flip for a check, revert before commit.

**Verify**: checklist above; `pnpm lint` + `pnpm build` still exit 0.

## Test plan

- `get-families-payload.test.ts` (requires 001):
  - production sealed → no real name/url/image in `families`; `devPreviewFamilies` empty
  - production revealed → full names present in `families`
  - development sealed → stubs in `families`, full roster only in `devPreviewFamilies`
- Manual: Step 4 UI checklist + Step 3 bundle `rg`

## Done criteria

- [ ] Client Families view does not import `families-data.json`
- [ ] With `revealed: false`, production client JS does not contain real family names
      from the JSON (Step 3 `rg`)
- [ ] Dev toggle still previews open state under `pnpm dev`
- [ ] Sealed door count still matches roster length
- [ ] `pnpm lint` and `pnpm build` exit 0; `pnpm test` exit 0 if 001 landed
- [ ] No out-of-scope files modified
- [ ] `plans/README.md` row 002 → DONE

## STOP conditions

- Reveal animation / CSS class contract (`is-open`, `is-shown`, roadside structure)
  cannot be preserved without a redesign — report; do not redesign visuals.
- Next.js forces the JSON into the client graph despite the split — report with
  evidence (module graph / bundle hit) before inventing an API route.
- Operator requires real data in production before reveal for any reason —
  escalate; do not weaken the empty-stub rule.
- Family photos remain publicly fetchable by URL — that is **known residual
  risk**; do not block the plan, but do not claim “fully secret” in the commit
  message.

## Maintenance notes

- When revealing for real: set `familiesContent.revealed = true` and redeploy;
  no separate data publish step beyond what’s already in git.
- Residual risk: files under `public/images/.../families/` are still statically
  serveable if URLs leak or are guessed. Consider delaying photo commits until
  reveal week (follow-up, out of scope).
- Reviewers: confirm Step 3 bundle search and that `"use client"` is only on
  `families-view.tsx`.
- Deferred: auth-gated images, private repo policy for pre-reveal JSON.
