# Korteks — Icon System Guide

Specification for all icons used across the Korteks website and marketing materials.

---

## 1. Design Principles

| Principle | Rule |
|-----------|------|
| Consistency | One stroke style per context — no mixing filled/outlined |
| Clarity | Recognizable at 16 px |
| Restraint | Icons support content — never decorative clutter |
| Accessibility | `aria-hidden="true"` on decorative; text label always paired |
| Color | `currentColor` — inherits from parent text color |

---

## 2. Icon Categories

### 2.1 Navigation Icons

Used in header, mobile menu, footer, and TOC.

| Icon | Context | Size |
|------|---------|------|
| Hamburger (3 lines) | Mobile menu trigger | 24 px |
| Close (X) | Mobile menu close | 20 px |
| Sun | Theme toggle — light | 20 px |
| Moon | Theme toggle — dark | 20 px |
| Chevron down | Accordion expand | 24 px |
| External link | Footer external links | inline |

**Implementation:** Inline SVG in HTML (current approach). Stroke width: **2 px**.

### 2.2 Feature Icons

Used in feature cards on the landing page. Currently text-only cards — icons may be added in future.

| Recommended icons | Screen |
|-------------------|--------|
| Chart bar | Statistics |
| Clock | Study timer |
| Document / checklist | Trial tracking |
| Target | Goals |
| Trophy | Achievements |
| Shield | Privacy |
| Bell | Notifications |
| Cloud | Sync |

**Stroke width:** 1.5 px  
**Grid:** 24 × 24 px  
**Style:** Outlined, round caps and joins

### 2.3 UI Icons

| Icon | Context |
|------|---------|
| Image placeholder | Screenshot empty state |
| Sad face | 404 page |
| Copy (#) | Heading anchor buttons (JS injected) |
| Arrow up | Back to top (JS injected) |

### 2.4 Social Icons

Not yet implemented — placeholders are text links.

| Platform | Style when added |
|----------|------------------|
| X (Twitter) | Official glyph or simple 𝕏 |
| Instagram | Camera outline |
| GitHub | Octocat outline |

Use platform brand guidelines for color. On the website, prefer monochrome `currentColor` in footer.

---

## 3. Technical Specification

| Property | Value |
|----------|-------|
| Base grid | 24 × 24 px |
| Stroke width (UI) | 1.5 px |
| Stroke width (nav) | 2 px |
| Corner radius (icons) | Round caps (`stroke-linecap="round"`) |
| Corner radius (containers) | `--radius-md` (8 px) for icon backgrounds |
| Fill | None — stroke only (except app logo mark) |
| Viewbox | `0 0 24 24` |

### Size Scale

| Token | px | Use |
|-------|-----|-----|
| `--icon-sm` | 16 | Inline text, compact UI |
| `--icon-md` | 20 | Theme toggle, close buttons |
| `--icon-lg` | 24 | Navigation, accordions |
| `--icon-xl` | 32 | Empty states, feature highlights |

---

## 4. File Types

| Type | Use | Location |
|------|-----|----------|
| **Inline SVG** | UI icons, navigation, theme | Embedded in HTML |
| **SVG file** | Logo, favicon | `favicon.svg` |
| **PNG** | App icon, favicons, PWA | `assets/icons/` |
| **ICO** | Legacy favicon | `assets/icons/favicon.ico` |

Do not use icon fonts. Do not use raster icons for UI elements.

---

## 5. Preferred Icon Library

When adding new icons, use one of:

| Library | Style match | License |
|---------|-------------|---------|
| **[Lucide](https://lucide.dev)** | Recommended — 24 px stroke, round caps | ISC |
| **[Heroicons](https://heroicons.com)** (outline) | Alternative — 24 px, 1.5 px stroke | MIT |
| **Custom inline SVG** | Current site approach | — |

**Selection criteria:**
- 24 × 24 viewBox
- Outline/stroke variant only
- Round linecap and linejoin
- No filled variants in product UI

When importing from Lucide:
1. Copy SVG source
2. Set `stroke-width="1.5"` or `"2"` per context
3. Add `aria-hidden="true"` if decorative
4. Remove width/height attributes; control via CSS

---

## 6. App Icon vs UI Icons

| Asset | Style | Different from UI icons? |
|-------|-------|------------------------|
| App icon / favicon | Filled rounded square + white K | **Yes** — this is the brand mark |
| UI icons | Stroked line icons | Standard icon system |

Never use the app icon mark as a UI icon. Never use UI stroke icons as the app logo.

---

## 7. Consistency Rules

1. **One stroke weight per component** — nav uses 2 px; content uses 1.5 px
2. **No emoji as icons** in product UI
3. **No mixed styles** — if Lucide is chosen, all new icons come from Lucide
4. **Color via CSS** — never hardcode fill/stroke colors in SVG except logo
5. **Dark mode** — icons inherit `currentColor`; no separate dark variants needed
6. **Spacing** — minimum 8 px between icon and adjacent text
7. **Touch targets** — icon buttons minimum 44 × 44 px (theme toggle, menu trigger)

---

## 8. Empty State Icons

Screenshot placeholders and 404 use icons inside a circular container:

```html
<div class="empty-state__icon" aria-hidden="true">
  <svg …><!-- 24×24, stroke 1.5 --></svg>
</div>
```

Container: 4 rem circle, `--color-bg-secondary` background.

---

## 9. Implementation Reference

| File | Icons |
|------|-------|
| `index.html` | Theme, menu, accordion, screenshot placeholder |
| `404.html` | Error face |
| `assets/js/scroll.js` | Back-to-top arrow (injected) |
| `assets/js/utils.js` | Enhancement styles only |
| `favicon.svg` | Brand mark |

---

## Related Documents

- [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md)
- [IMAGE_GUIDE.md](IMAGE_GUIDE.md)
