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
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Project structure

```
app/                  # Routes, layouts, and page-specific JSON data
components/           # Shared UI (navbar, footer, shadcn primitives)
lib/                  # Shared helpers (cn, social link config)
public/images/        # Static images (see public/images/README.md)
```

## Updating content

Most annual content lives in JSON data files:

- Officers: `app/officers/officers-data.json`
- Families: `app/families/families-data.json`
- Gallery: `app/gallery/gallery-data.json`
- Archive: `app/gallery/archive/archive-data.json`
- Alumni: `app/alumni/alumni-data.json`

Add corresponding images under `public/images/` (see `public/images/README.md`).

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` trigger automatic deploys.

For consistent pnpm versions on Vercel, set environment variable `ENABLE_EXPERIMENTAL_COREPACK=1`.

## Images

Site images are stored in `public/images/`. If images are missing from your local clone, copy them from the team's shared drive or ask a current webmaster. See `public/images/README.md` for the full asset list.
