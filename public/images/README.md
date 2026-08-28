# Site Images

Static images served at `/images/*`. Required for the site to display correctly.

## Required assets (referenced by code)

| Path | Used on |
|------|---------|
| `mountains.png` | Home page hero background (behind fog) |
| `about_cover.jpg` | About page hero |
| `csa_square_logo.png` | Navbar |
| `csa_tassel_logo.png` | Footer |
| `chinafest-covers/*` | Alumni page year covers (see `app/alumni/alumni-data.json`) |
| `2025-2026/officers/*` | Officers page (see `app/officers/officers-data.json`) |
| `2025-2026/families/*` | Family portrait photos (see `app/families/families-data.json`) |
| `families/scroll-backdrop.png` | Families page scroll gallery backdrop |
| `families/scroll-parchment.png` | Families page empty scroll parchment |
| `families/scroll-rod-top.png` | Optional top scroll rod art |
| `families/scroll-rod-bottom.png` | Optional bottom scroll rod art |
| `gallery/chinafest_dragon_justin_2023.JPG` | About page (Culture) |
| `gallery/asu_exec_2023.jpg` | About page (Community) |
| `gallery/yar_2023.jpg` | About page (Outreach) |
| `placeholder.svg` (repo root `public/`) | Fallback when an image path is missing |

## Other folders

| Path | Notes |
|------|-------|
| `graphics/` | Optional decorative assets; add files here when needed |
| `2017-2018` … `2024-2025` | Historical officer/family/event photos not currently referenced by the app |
| Remaining `gallery/*` files | Extra photos not currently referenced outside the three About images above |

## Adding images

1. Place files under the appropriate subdirectory of `public/images/`.
2. Prefer lowercase filenames with underscores (e.g. `vice_president.jpg`).
3. JPEG for photos; PNG/SVG/WebP for graphics (use `graphics/` for art elements).
4. Commit images so Vercel deployments include them.

If images are missing, pages may show broken images or the placeholder fallback.
