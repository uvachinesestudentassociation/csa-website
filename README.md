# CSA@UVA Website

Official website for the Chinese Student Association at the University of Virginia.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [pnpm](https://pnpm.io/) for package management

## Getting started

### Prerequisites

- Node.js 20+
- pnpm 9 (`corepack enable` or `npm install -g pnpm`)

### Install and run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
pnpm build            # Production build
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm typecheck        # TypeScript check
pnpm check:encoding   # Fail if text sources are not UTF-8 (no BOM)
pnpm fix:encoding     # Convert UTF-16 text sources to UTF-8 (no BOM)
```

## Project structure

```
app/                  # Routes, layouts, and page-specific JSON data
components/           # Shared UI (navbar, footer, shadcn primitives)
content/              # Page copy (titles, intros, labels)
lib/                  # Shared helpers (cn, social link config)
public/images/        # Static images (see public/images/README.md)
.cursor/rules/        # Agent rules (encoding, gallery album dates)
```

## Updating content

### Page copy

Edit strings in `content/` (see `content/index.ts` for which file maps to which page).

### Annual JSON data

| Content | File |
|---------|------|
| Officers | `app/officers/officers-data.json` |
| Families | `app/families/families-data.json` |
| Gallery (current year) | `app/gallery/gallery-data.json` |
| Gallery archive | `app/gallery/archive/archive-data.json` |
| Alumni | `app/alumni/alumni-data.json` |

Add corresponding images under `public/images/` (see `public/images/README.md`).

### Gallery and Archive albums

Current-year albums (`gallery-data.json`) use `{ "name", "date", "url" }`.  
Archive years (`archive-data.json`) group events as `{ "year", "value", "events": [{ "name", "date", "link" }] }`.

When adding an album:

1. Look up the event on the CSA Google Calendar ICS and set `date` as `M/D/YYYY` (or `""` for recaps / non-calendar albums):  
   `https://calendar.google.com/calendar/ical/c_o0ntjuei84bjmlpfqbcsr62u3c%40group.calendar.google.com/public/basic.ics`
2. Use a shareable Google Drive **folder** URL (Anyone with the link → Viewer). Do not invent Drive links.
3. At year rollover, move the previous Gallery list into a new Archive year group (newest year first), then replace Gallery with the new year’s albums.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` trigger automatic deploys.

For consistent pnpm versions on Vercel, set environment variable `ENABLE_EXPERIMENTAL_COREPACK=1`.

## Images

Site images are stored in `public/images/`. If images are missing from your local clone, copy them from the team's shared drive or ask a current webmaster. See `public/images/README.md` for the full asset list.
