# Korteks — Brand Guidelines

Visual specification for the Korteks iOS app and web presence.  
Based on the existing identity — no new logo mark is introduced.

**Version:** 1.0  
**Last updated:** 2026-07-25

---

## 1. Brand Essence

Korteks is a focused exam-preparation tool for Turkish candidates (LGS, YKS, KPSS, TUS). The visual language should communicate:

- **Clarity** — information is easy to scan
- **Trust** — data handling is transparent and professional
- **Calm focus** — study environments require low visual noise
- **Quality** — Apple-level polish without imitation

---

## 2. Logo

### 2.1 Primary Mark

The Korteks mark is a **white “K” on an accent-blue rounded square**.

| Property | Value |
|----------|-------|
| Shape | Rounded rectangle, corner radius ≈ 22% of width |
| Background | `#0071e3` (Accent Blue) |
| Letterform | White `#ffffff`, geometric sans-serif “K” |
| Source file | `favicon.svg`, `assets/icons/icon-512.png` |

This mark is derived from the current app icon and must not be redrawn with a different letterform, gradient, or symbol.

### 2.2 Logo Variants

| Variant | Use case | File |
|---------|----------|------|
| **Full color** | Default — light backgrounds, app icon, favicon | `favicon.svg`, `icon-512.png` |
| **Light logo** | Dark backgrounds — white “K” on accent blue (same as primary) | Same as primary |
| **Dark logo** | Light backgrounds — primary mark on white/near-white | Same as primary |
| **Monochrome** | Single-color contexts — print, emboss, watermark | Black `#1d1d1f` or white `#ffffff` silhouette of the rounded square + “K” |

Do not apply drop shadows, outlines, or gradients to the logo mark.

### 2.3 Safe Area

Maintain clear space equal to **25% of the logo width** on all sides.

```
┌─────────────────────────┐
│         25%             │
│    ┌───────────┐        │
│    │     K     │  25%   │
│    └───────────┘        │
│         25%             │
└─────────────────────────┘
```

No text, UI elements, or decorative graphics may enter the safe area.

### 2.4 Minimum Size

| Context | Minimum |
|---------|---------|
| Digital — icon | 16×16 px (favicon) |
| Digital — header | 32×32 px |
| Digital — marketing | 64×64 px |
| Print | 10 mm width |

Below 16×16 px, use the solid accent-blue square without the “K” detail.

### 2.5 Wordmark

The word **“Korteks”** is set in the display font stack (SF Pro Display / system sans-serif), semibold, tight tracking. It appears beside the logo in the site header — never replace the icon with the wordmark alone in the app icon slot.

---

## 3. Color System

### 3.1 Primary Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Accent Blue | `#0071e3` | Logo, primary buttons, links, focus rings |
| Accent Hover | `#0077ed` | Interactive hover states |
| Text Primary | `#1d1d1f` | Headlines, body on light |
| Text Secondary | `#6e6e73` | Supporting copy |
| Text Tertiary | `#86868b` | Captions, metadata |
| Background Primary | `#ffffff` | Page background (light) |
| Background Secondary | `#f5f5f7` | Sections, cards (light) |
| Background Tertiary | `#e8e8ed` | Device frames, dividers (light) |

Dark mode equivalents are defined in `assets/css/base/_theme.css`.

### 3.2 Accent Color Usage

- **Do:** CTAs, links, active nav states, logo background, progress indicators, badge accents
- **Don't:** Large background fills, body text, error states, decorative gradients
- **Ratio:** Accent should occupy ≤ 10% of any screen’s visible area

### 3.3 Semantic Colors

Use only for their intended meaning: success `#34c759`, warning `#ff9500`, error `#ff3b30`, info `#007aff`.

---

## 4. Typography

### 4.1 Font Stack

| Role | Stack |
|------|-------|
| Display | SF Pro Display, system-ui, sans-serif |
| Body | SF Pro Text, system-ui, sans-serif |
| Mono | SF Mono, ui-monospace, monospace |

The website uses the system font stack — no web fonts are loaded. This matches iOS native typography.

### 4.2 Scale

| Level | Size | Weight | Use |
|-------|------|--------|-----|
| Display LG | clamp 2.5–3.75 rem | 700 | Hero headlines |
| Display MD | clamp 2.25–3 rem | 700 | Section titles |
| H2 | 1.5–1.875 rem | 600 | Subsections |
| H3 | 1.125–1.25 rem | 600 | Card titles |
| Body | 1 rem | 400 | Paragraphs |
| Small | 0.875 rem | 400 | Captions, figcaptions |
| Eyebrow | 0.875 rem | 600 | Section labels, uppercase tracking |

### 4.3 Rules

- Headlines: `letter-spacing: -0.02em` (tight)
- Body: `line-height: 1.625` (relaxed)
- Maximum line length: 65 characters (`measure-wide` utility)
- Turkish and English copy use the same scale — no separate type systems

---

## 5. Illustration Style

Korteks does not use custom illustrations. Visual storytelling relies on:

1. **Real app screenshots** in device frames
2. **Minimal inline SVG icons** (stroke-based, 1.5–2 px stroke)
3. **Empty states** with simple geometric icons

If illustrations are added in the future:

- Flat, no gradients
- Monochrome or two-tone (accent + neutral)
- Rounded corners consistent with `--radius-lg`
- No mascots, cartoons, or stock-photo aesthetics

---

## 6. Screenshot Framing Rules

### 6.1 Device Frame

- iPhone frame with rounded bezel (`device-mockup` component)
- Dynamic Island notch on modern iPhones
- Light shadow on light pages; deeper shadow in dark mode
- Screenshots fill the screen area at 9:16 aspect ratio

### 6.2 Capture Rules

| Rule | Specification |
|------|---------------|
| Device | iPhone 15 Pro (6.1") or current flagship |
| Resolution | 1170 × 2532 px (@3x) export |
| Status bar | Clean — full signal, realistic time (10:09 or 9:41 Apple convention) |
| Theme | Capture both light and dark variants |
| Content | Real app data — anonymized if needed, never lorem ipsum |
| Language | Turkish primary; English variant for international press |

### 6.3 Composition

- Crop to show the most informative above-the-fold content
- No hand-held device photography on the website — CSS frames only
- Maximum 3 screenshots per row on desktop; stack on mobile
- Figcaption below frame — screen name only, no marketing copy

---

## 7. Icon Style

| Property | Value |
|----------|-------|
| Style | Outlined stroke icons |
| Stroke width | 1.5 px (UI), 2 px (navigation) |
| Corner caps | Round |
| Grid | 24×24 px base |
| Color | `currentColor` — inherits text color |
| Source | Inline SVG (current site); see `ICON_GUIDE.md` |

Feature icons on the landing page follow the same stroke style. Do not mix filled and outlined icons in the same context.

---

## 8. Spacing Rules

Based on a 4 px base unit (`--space-1` = 0.25 rem).

| Context | Spacing |
|---------|---------|
| Section vertical padding | `--space-16` to `--space-24` |
| Card internal padding | `--space-6` |
| Grid gap (features) | `--space-6` to `--space-8` |
| Screenshot row gap | `--space-10` |
| Header height | 4 rem minimum |
| Content max-width | 72 rem (container), 42 rem (narrow prose) |

Whitespace is a primary design element. When in doubt, add space rather than elements.

---

## 9. Photography & Imagery

- **No stock photography** on product pages
- **No fake UI** — only real app captures
- OG/social images may use designed compositions with logo + screenshot — see `OG_GUIDE.md`

---

## 10. File References

| Asset | Path |
|-------|------|
| SVG logo | `favicon.svg` |
| App icon (512) | `assets/icons/icon-512.png` |
| Color tokens | `assets/css/tokens/_colors.css` |
| Typography tokens | `assets/css/tokens/_typography.css` |
| Device mockup CSS | `assets/css/components/_device-mockup.css` |

---

## 11. Related Documents

- [SCREENSHOT_PLAN.md](SCREENSHOT_PLAN.md) — capture schedule
- [OG_GUIDE.md](OG_GUIDE.md) — social preview images
- [ICON_GUIDE.md](ICON_GUIDE.md) — icon system
- [IMAGE_GUIDE.md](IMAGE_GUIDE.md) — formats and optimization
- [VISUAL_STATUS.md](VISUAL_STATUS.md) — current asset status
