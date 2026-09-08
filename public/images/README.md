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
| `2025-2026/officers/*` | Officers page photos (paths in `app/officers/officers-data.json`) |
| `2026-2027/families/*` | Current family scroll banners (see `app/families/families-data.json`) |
| `graphics/blank-scroll.png` | Families hanging-scroll parchment art (`content/families.ts` → `scrollAssets.scroll`) |
| `gallery/chinafest_dragon_justin_2023.JPG` | About page (Culture) |
| `gallery/asu_exec_2023.jpg` | About page (Community) |
| `gallery/yar_2023.jpg` | About page (Outreach) |
| `placeholder.svg` (repo root `public/`) | Fallback when an image path is missing |

## Other folders

| Path | Notes |
|------|-------|
| `graphics/` | Decorative art (see `graphics/README.md`); live scroll skin is `blank-scroll.png` |
| `families/` | Legacy scroll-asset notes only (`families/README.md`); photos live under year folders |
| `2025-2026/families/*` | Prior-year family portraits (not used by current Families page) |
| `2017-2018` … `2024-2025` | Historical officer/family/event photos not currently referenced by the app |
| Remaining `gallery/*` files | Extra photos not currently referenced outside the three About images above |

## Adding images

1. Place files under the appropriate subdirectory of `public/images/`.
2. Prefer lowercase filenames with underscores (e.g. `vice_president.jpg`). Year-folder family banners may keep display names as committed.
3. JPEG for photos; PNG/SVG/WebP for graphics (use `graphics/` for art elements).
4. Commit images so Vercel deployments include them.

If images are missing, pages may show broken images or the placeholder fallback.

Gallery event albums are Google Drive folder links in JSON, not files under `public/images/gallery/`.
