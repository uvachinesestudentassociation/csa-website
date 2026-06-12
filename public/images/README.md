# Site Images

This folder contains static images served at `/images/*`. These files are required for the site to display correctly.

## Required assets

| Path | Used on |
|------|---------|
| `background.png` | Home page hero background |
| `about/culture.jpg`, `about/community.jpg`, `about/outreach.jpg` | About page |
| `2025-2026/officers/*.jpg` | Officers page (see `app/officers/officers-data.json`) |
| `2025-2026/families/*.jpg` | Families page (see `app/families/families-data.json`) |
| `alumni/*.jpg` | Alumni page (see `app/alumni/alumni-data.json`) |
| `graphics/*` | Decorative graphics, illustrations, and art elements |

## Adding images

1. Place image files in the appropriate subdirectory under `public/images/`.
2. Use lowercase filenames with underscores where needed (e.g. `vice_president.jpg`).
3. Recommended formats: JPEG for photos; PNG, SVG, or WebP for graphics (place art elements in `graphics/`).
4. Commit images to the repository so Vercel deployments include them.

If images are missing, pages will show broken image placeholders in production.
