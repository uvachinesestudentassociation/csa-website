# Graphic Art Elements

Optional decorative assets served at `/images/graphics/*`.

| File | Purpose |
|------|---------|
| `blank-scroll.png` | Full hanging scroll art for Families reveal (rods + parchment). Wired in `content/families.ts` (`scrollAssets.scroll`). |
| `wooden-beam-only.png` | Unused spare rod sprite (kept for reference) |

Use this folder for logos, icons, illustrations, banners, and other non-photo graphics (PNG/SVG/WebP recommended for transparency).

## Usage

```tsx
<Image src="/images/graphics/blank-scroll.png" alt="" width={120} height={120} />
```

```css
background-image: url("/images/graphics/blank-scroll.png");
```

Per-family photos live under `public/images/2026-2027/families/` and are listed in [`app/families/families-data.json`](../../app/families/families-data.json).
