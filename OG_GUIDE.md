# Korteks — Open Graph & Social Image Guide

Specification for link preview images across all platforms.

**Primary asset:** `assets/images/og/korteks-og.png`  
**Current status:** Placeholder — replace before public marketing

---

## 1. Master Image Specification

| Property | Value |
|----------|-------|
| Dimensions | **1200 × 630 px** |
| Aspect ratio | 1.91:1 |
| Format | PNG (master), WebP (optional derivative) |
| Color space | sRGB |
| File size target | < 300 KB (PNG), < 150 KB (WebP) |
| Filename | `korteks-og.png` |

This single asset serves as the default for Open Graph and Twitter Card meta tags on all pages.

---

## 2. Safe Zones

Platforms crop differently. Keep critical content inside safe areas.

```
┌────────────────────────────────────────────── 1200px ──┐
│ 60px margin                                     │
│  ┌────────────────────────────────────────┐    │
│  │                                        │    │
│  │         PRIMARY SAFE ZONE              │    │
│  │         1080 × 510 px                  │ 630px
│  │         (60px inset all sides)         │    │
│  │                                        │    │
│  └────────────────────────────────────────┘    │
│ 60px margin                                     │
└──────────────────────────────────────────────────┘
```

| Zone | Inset | Purpose |
|------|-------|---------|
| Full canvas | 0 | Background, gradient, decorative elements |
| Primary safe | 60 px | Logo, headline, screenshot |
| Text safe | 80 px horizontal, 70 px vertical | Typography must stay here |
| Center crop safe | Central 80% | Survives aggressive square crops |

**Never place** logo, headline, or screenshot outside the primary safe zone.

---

## 3. Composition

### 3.1 Layout Template

Recommended composition (left-to-right):

```
┌─────────────────────────────────────────────────┐
│  [Logo 64px]  Korteks                           │
│                                                 │
│  Sınav hazırlığınızı                            │
│  tek bir yerden yönetin.          ┌─────────┐ │
│                                   │ iPhone  │ │
│  LGS · YKS · KPSS · TUS           │ frame   │ │
│                                   │ + app   │ │
│                                   └─────────┘ │
└─────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|---------------|
| Background | `#f5f5f7` (light) or subtle gradient to `#ffffff` |
| Logo | 64 × 64 px, top-left at (80, 80) |
| Headline | SF Pro Display, 48–56 px, `#1d1d1f`, semibold |
| Subline | SF Pro Text, 24 px, `#6e6e73` |
| Exam pills | Accent blue `#0071e3` text or pill badges |
| Device mockup | Dashboard screenshot in iPhone frame, right-aligned |
| Accent element | Optional thin `#0071e3` line or subtle shape — ≤ 5% area |

### 3.2 Typography in OG Image

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Headline | SF Pro Display | 48–56 px | 600 | `#1d1d1f` |
| Subhead | SF Pro Text | 22–24 px | 400 | `#6e6e73` |
| Badge text | SF Pro Text | 16 px | 500 | `#0071e3` |

Export text as outlines if SF Pro is unavailable in design tool.

### 3.3 Brand Colors in OG

| Role | Hex |
|------|-----|
| Background | `#f5f5f7` |
| Headline | `#1d1d1f` |
| Body | `#6e6e73` |
| Accent | `#0071e3` |
| Device frame | `#e8e8ed` |

---

## 4. Platform-Specific Behavior

### 4.1 Open Graph (Facebook, LinkedIn, iMessage)

| Meta tag | Value |
|----------|-------|
| `og:image` | `https://korteks.app/assets/images/og/korteks-og.png` |
| `og:image:width` | `1200` |
| `og:image:height` | `630` |
| `og:image:alt` | Descriptive alt per page |

**Preview appearance:** Full 1.91:1 card below title and description. LinkedIn may crop top/bottom slightly — keep text centered vertically.

### 4.2 Twitter / X Card

| Meta tag | Value |
|----------|-------|
| `twitter:card` | `summary_large_image` |
| `twitter:image` | Same OG asset |

**Preview appearance:** Large image card above title. Image fills full card width. Safe zone rules apply.

### 4.3 LinkedIn

Uses Open Graph tags. Same asset. May show slightly tighter crop — verify headline is inside center 80%.

### 4.4 Discord

Embeds OG image below link text. Shows full width up to 400 px display. High contrast headline recommended for small display.

### 4.5 WhatsApp

Uses OG tags. Shows thumbnail left of title in chat. Image appears at ~300 px wide — logo must be recognizable at small size.

---

## 5. Page-Specific OG Images (Optional, Priority 3)

Default OG image works for all pages. Optional dedicated images:

| Page | Filename | Headline in image |
|------|----------|-------------------|
| Home | `korteks-og.png` | Sınav hazırlığınızı tek bir yerden yönetin. |
| Privacy | `korteks-og-privacy.png` | Gizlilik Politikası |
| Support | `korteks-og-support.png` | Destek Merkezi |
| Terms | `korteks-og-terms.png` | Kullanım Koşulları |

Same dimensions and safe zones apply. Only create if A/B testing shows benefit.

---

## 6. Twitter Image vs OG Image

For Korteks, **one asset serves both**. Meta tags already point to the same file.

If a square variant is needed for Twitter profile or ads:

| Variant | Size | Filename |
|---------|------|----------|
| Square | 800 × 800 px | `korteks-og-square.png` |

Not required for `summary_large_image` cards.

---

## 7. Validation Checklist

Before publishing a new OG image:

- [ ] Dimensions exactly 1200 × 630 px
- [ ] File size under 300 KB
- [ ] Logo and headline inside safe zone
- [ ] Readable at 400 px display width
- [ ] No placeholder or lorem ipsum text
- [ ] Real app screenshot in device frame (when available)
- [ ] Test with [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Test WhatsApp link preview on mobile
- [ ] Test Discord embed in a private channel

---

## 8. HTML Integration

Already configured on all pages:

```html
<meta property="og:image" content="https://korteks.app/assets/images/og/korteks-og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="…">
<meta name="twitter:image" content="https://korteks.app/assets/images/og/korteks-og.png">
```

Replace the PNG file — no HTML changes required unless adding page-specific images.

---

## Related Documents

- [SOCIAL_PREVIEW.md](SOCIAL_PREVIEW.md) — per-platform preview appearance
- [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md)
- [SCREENSHOT_PLAN.md](SCREENSHOT_PLAN.md)
- [IMAGE_GUIDE.md](IMAGE_GUIDE.md)
