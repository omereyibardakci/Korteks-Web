# Korteks — Image Optimization Guide

Technical specification for all image assets across the Korteks website.

---

## 1. Format Selection

| Format | Use case | Support |
|--------|----------|---------|
| **SVG** | Logo, favicon, simple icons | All modern browsers |
| **PNG** | App screenshots, OG images, icons with transparency | Universal |
| **WebP** | Screenshot delivery (with PNG fallback) | Safari 14+, Chrome, Firefox, Edge |
| **AVIF** | Optional future optimization for screenshots | Safari 16+, Chrome 85+ |
| **ICO** | Legacy favicon bundle | IE, older browsers |
| **JPEG** | Not used — no photography on site | — |

### Decision Matrix

```
Logo / icon (vector)?  → SVG
Screenshot?              → PNG master + WebP derivative
Social / OG image?       → PNG (no transparency needed)
App icon?                → PNG (@1x, @2x, @3x exports)
Favicon?                 → SVG + ICO + PNG fallbacks
```

---

## 2. Compression Guidelines

| Asset type | Tool | Target size |
|------------|------|-------------|
| PNG screenshots | [Squoosh](https://squoosh.app), pngquant | < 400 KB per screen @3x |
| WebP screenshots | cwebp `-q 82` | ~40% smaller than PNG |
| AVIF screenshots | avifenc `-a cq-level=25` | ~50% smaller than PNG |
| OG image | ImageOptim, pngquant | < 300 KB |
| Icons 16–512 | pngquant | < 5 KB (small), < 30 KB (512) |
| SVG | SVGO | < 2 KB |

**Quality rule:** No visible banding in gradients. No moiré on chart screenshots. Verify at 2× zoom.

---

## 3. Responsive Images

### 3.1 Picture Element Pattern

Standard pattern for app screenshots (already documented in `index.html`):

```html
<picture>
  <source srcset="assets/images/screenshots/dashboard-light.webp" type="image/webp">
  <img
    src="assets/images/screenshots/dashboard-light.png"
    alt="Korteks kontrol paneli — deneme özeti, hedef ilerlemesi ve son oturumlar"
    width="1170"
    height="2532"
    loading="lazy"
    decoding="async"
  >
</picture>
```

### 3.2 When to Use Srcset

For screenshots displayed at different sizes:

```html
<img
  src="assets/images/screenshots/dashboard-light.png"
  srcset="
    assets/images/screenshots/dashboard-light-400.webp 400w,
    assets/images/screenshots/dashboard-light-800.webp 800w,
    assets/images/screenshots/dashboard-light.png 1170w
  "
  sizes="(max-width: 768px) 280px, 320px"
  alt="…"
  loading="lazy"
  decoding="async"
>
```

Generate responsive widths: **400 w, 800 w, 1170 w** (1×, ~2× display, full source).

### 3.3 Lazy Loading

| Attribute | Value | Applies to |
|-----------|-------|------------|
| `loading="lazy"` | Default for below-fold images | Screenshots, press images |
| `loading="eager"` | Above-fold only | Hero (if added), OG not in HTML |
| `decoding="async"` | All content images | Non-blocking decode |

JavaScript in `animations.js` also sets `loading="lazy"` on images missing the attribute.

---

## 4. Retina Strategy

| Display | CSS width | Source width |
|---------|-----------|--------------|
| Device mockup ~280 px | 280 px | 840 px (@3x) or 560 px (@2x) |
| Device mockup ~320 px | 320 px | 960 px (@3x) |
| OG image | 1200 px display | 1200 px (1× — no retina needed for meta) |
| App icon header | 32 px | 64 px (@2x) or 96 px (@3x) — use 180 px apple-touch |

**Rule:** Source image should be ≥ 2× the displayed CSS width for sharp rendering.

iPhone screenshots at 1170 × 2532 px (@3x) exceed all website display sizes — no upscaling needed.

---

## 5. Naming Conventions

### Pattern

```
{subject}-{theme}.{format}
{subject}-{theme}-{width}w.{format}
```

### Examples

| Filename | Meaning |
|----------|---------|
| `dashboard-light.png` | Dashboard, light theme, full res |
| `dashboard-dark.webp` | Dashboard, dark theme, WebP |
| `statistics-light-800w.webp` | Statistics, 800 px wide WebP |
| `korteks-og.png` | Open Graph master |
| `icon-512.png` | PWA icon 512 px |

### Rules

- Lowercase, hyphen-separated
- No spaces, no Turkish characters in filenames
- Theme suffix: `-light` or `-dark`
- Width suffix only for responsive variants: `-400w`, `-800w`
- App Store exports: `app-store/01-dashboard-6.7.png`

---

## 6. Folder Structure

```
assets/
├── icons/
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   └── README.md
├── images/
│   ├── og/
│   │   ├── korteks-og.png          # 1200×630 — primary OG
│   │   ├── korteks-og.webp         # optional
│   │   └── korteks-og-square.png   # optional 800×800
│   ├── screenshots/
│   │   ├── dashboard-light.png
│   │   ├── dashboard-light.webp
│   │   ├── statistics-light.png
│   │   ├── study-timer-light.png
│   │   └── app-store/
│   │       └── 01-dashboard-6.7.png
│   ├── brand/
│   │   ├── logo.svg                # copy of favicon.svg
│   │   └── logo-monochrome.svg     # future
│   └── press/
│       ├── press-banner.png        # 2400×1260
│       └── screenshot-pack/        # ZIP source folder
favicon.svg                         # root scalable favicon
```

---

## 7. Accessibility — Alt Text Strategy

### 7.1 Categories

| Type | `alt` value | Example |
|------|-------------|---------|
| **Decorative** | `alt=""` + `aria-hidden` on wrapper if redundant | Logo beside "Korteks" text in header |
| **Informative** | Describes content and function | Screenshot alt describes visible UI |
| **Functional** | Describes action | "Bağlantıyı kopyala" on # button |
| **Complex** | Short alt + visible figcaption | Screenshot + figcaption pattern |

### 7.2 Screenshot Alt Text Formula

```
Korteks {screen name} — {key visible elements}
```

Examples:
- `Korteks kontrol paneli — deneme özeti, hedef ilerlemesi ve son oturumlar`
- `Korteks istatistikler — net trendi, konu analizi ve performans grafikleri`

Do not start with "Screenshot of" — redundant for screen readers.

### 7.3 Placeholder State

While screenshots are pending, use `aria-label` on the placeholder:

```html
aria-label="Kontrol Paneli ekran görüntüsü — yakında eklenecek"
```

Remove placeholder and `role="img"` when real `<img>` is added — the `alt` attribute on `<img>` replaces it.

### 7.4 Figcaption Relationship

```html
<figure class="device-mockup">
  …
  <figcaption class="device-mockup__caption">Kontrol Paneli</figcaption>
</figure>
```

Figcaption provides visible label. `alt` on `<img>` provides accessible description — they complement, not duplicate.

---

## 8. Color Contrast in Images

- OG images: headline `#1d1d1f` on `#f5f5f7` = 14.5:1 ✓
- Accent `#0071e3` on white = 4.6:1 ✓ (large text only)
- Never place `#86868b` text on `#f5f5f7` in OG images — fails AA for small text
- Screenshot captures: verify app UI meets contrast in both themes before publishing

---

## 9. Device Mockup Integration

When adding a screenshot to the landing page:

1. Export PNG + WebP to `assets/images/screenshots/`
2. Uncomment the `<picture>` block in `index.html`
3. Placeholder auto-hides via CSS `:has(> img)` rule
4. Verify lazy load, alt text, and figcaption
5. Test light and dark page themes — frame adapts automatically

---

## 10. Performance Budget

| Metric | Target |
|--------|--------|
| Total image weight per page | < 800 KB |
| Landing page screenshots (3 × WebP) | < 600 KB combined |
| OG image | < 300 KB |
| Icons (all) | < 50 KB combined |
| LCP element | Not an image on current site ✓ |

---

## Related Documents

- [SCREENSHOT_PLAN.md](SCREENSHOT_PLAN.md)
- [OG_GUIDE.md](OG_GUIDE.md)
- [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md)
- [VISUAL_STATUS.md](VISUAL_STATUS.md)
