# Graphic Art Elements

Optional decorative assets served at `/images/graphics/*`.

| File | Purpose |
|------|---------|
| `blank-scroll.png` | Full hanging scroll art for Families reveal (rods + parchment) |
| `wooden-beam-only.png` | Unused spare rod sprite (kept for reference) |

Use this folder for logos, icons, illustrations, banners, and other non-photo graphics (PNG/SVG/WebP recommended for transparency).

## Usage

```tsx
<Image src="/images/graphics/blank-scroll.png" alt="" width={120} height={120} />
```

```css
background-image: url("/images/graphics/blank-scroll.png");
```

Families scroll parchment is configured in [`content/families.ts`](../../content/families.ts) (`scrollAssets.scroll`). Per-family photos are in [`app/families/families-data.json`](../../app/families/families-data.json).
