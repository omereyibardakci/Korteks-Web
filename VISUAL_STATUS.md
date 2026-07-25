# Korteks — Visual Status Report

Asset inventory and production readiness assessment.  
**Date:** 2026-07-25

---

## Production Readiness

| Area | Score | Notes |
|------|-------|-------|
| Design system documentation | **100%** | Complete |
| CSS / component structure | **95%** | Device mockup ready for images |
| Icon system (UI) | **90%** | Inline SVG — consistent |
| Brand icons | **40%** | Placeholder PNGs — replace with app icon |
| App screenshots | **0%** | Structure ready, no captures yet |
| OG / social images | **20%** | Placeholder PNG exists |
| Press kit assets | **10%** | Documentation only |
| **Overall visual readiness** | **~45%** | Blocked on real app screenshots + final icon |

**Estimated time to visual production-ready:** 2–4 days after app screenshot capture session.

---

## Completed Assets

| Asset | Path | Quality |
|-------|------|---------|
| SVG favicon / logo | `favicon.svg` | ✅ Production structure |
| Device mockup CSS | `assets/css/components/_device-mockup.css` | ✅ Production |
| Screenshot HTML structure | `index.html` — 3 mockup slots | ✅ Production-ready |
| OG placeholder | `assets/images/og/korteks-og.png` | 🟡 Placeholder |
| Favicon ICO | `assets/icons/favicon.ico` | 🟡 Placeholder |
| Favicon 16/32 | `assets/icons/favicon-16x16.png`, `-32x32.png` | 🟡 Placeholder |
| Apple touch icon | `assets/icons/apple-touch-icon.png` | 🟡 Placeholder |
| PWA icons 192/512 | `assets/icons/icon-192.png`, `icon-512.png` | 🟡 Placeholder |
| Brand documentation | `BRAND_GUIDELINES.md` | ✅ Complete |
| Screenshot plan | `SCREENSHOT_PLAN.md` | ✅ Complete |
| OG guide | `OG_GUIDE.md` | ✅ Complete |
| Icon guide | `ICON_GUIDE.md` | ✅ Complete |
| Image guide | `IMAGE_GUIDE.md` | ✅ Complete |
| Social preview guide | `SOCIAL_PREVIEW.md` | ✅ Complete |
| Press kit | `PRESS_KIT.md` | ✅ Complete |

---

## Placeholder Assets (Replace Before Launch)

| Asset | Current | Replace with |
|-------|---------|--------------|
| All PNG icons | Generated blue-K placeholders | Exported from iOS app icon (1024 px source) |
| OG image | Generated gradient placeholder | Designed 1200×630 composition with real screenshot |
| Screenshot slots (×3) | Empty state in device frame | Real app captures per SCREENSHOT_PLAN.md |

---

## Missing Assets — Full Inventory

### Priority 1 — Launch Blockers

| # | Asset | Spec | Destination |
|---|-------|------|-------------|
| 1 | App icon export | 1024 × 1024 px PNG | Source for all icons |
| 2 | Dashboard screenshot (light) | 1170 × 2532 px | `screenshots/dashboard-light.png` |
| 3 | Statistics screenshot (light) | 1170 × 2532 px | `screenshots/statistics-light.png` |
| 4 | Study timer screenshot (light) | 1170 × 2532 px | `screenshots/study-timer-light.png` |
| 5 | OG image (designed) | 1200 × 630 px | `og/korteks-og.png` |
| 6 | WebP derivatives | Per screenshot | `screenshots/*.webp` |

### Priority 2 — App Store & Marketing

| # | Asset | Spec | Destination |
|---|-------|------|-------------|
| 7 | App Store screenshot 1 | 1290 × 2796 px | `screenshots/app-store/01-dashboard-6.7.png` |
| 8 | App Store screenshot 2 | 1290 × 2796 px | `screenshots/app-store/02-statistics-6.7.png` |
| 9 | App Store screenshot 3 | 1290 × 2796 px | `screenshots/app-store/03-trial-entry-6.7.png` |
| 10 | App Store screenshot 4 | 1290 × 2796 px | `screenshots/app-store/04-study-timer-6.7.png` |
| 11 | Trial entry screenshot | 1170 × 2532 px | `screenshots/trial-entry-light.png` |
| 12 | Goals screenshot | 1170 × 2532 px | `screenshots/goals-light.png` |
| 13 | Achievements screenshot | 1170 × 2532 px | `screenshots/achievements-light.png` |
| 14 | Profile screenshot | 1170 × 2532 px | `screenshots/profile-light.png` |
| 15 | Settings screenshot | 1170 × 2532 px | `screenshots/settings-light.png` |

### Priority 3 — Dark Mode & Extended

| # | Asset | Spec | Destination |
|---|-------|------|-------------|
| 16 | Dashboard (dark) | 1170 × 2532 px | `screenshots/dashboard-dark.png` |
| 17 | Statistics (dark) | 1170 × 2532 px | `screenshots/statistics-dark.png` |
| 18 | Study timer (dark) | 1170 × 2532 px | `screenshots/study-timer-dark.png` |
| 19 | All P2 screens (dark) | 1170 × 2532 px | `screenshots/*-dark.png` |
| 20 | Logo monochrome SVG | Scalable | `images/brand/logo-monochrome.svg` |

### Priority 4 — Press & Optional

| # | Asset | Spec | Destination |
|---|-------|------|-------------|
| 21 | Press banner | 2400 × 1260 px | `images/press/press-banner.png` |
| 22 | OG square variant | 800 × 800 px | `og/korteks-og-square.png` |
| 23 | Page-specific OG (×3) | 1200 × 630 px | `og/korteks-og-{page}.png` |
| 24 | Screenshot press pack | ZIP of 5 PNGs | `images/press/korteks-screenshots.zip` |
| 25 | iPad dashboard (if supported) | 2388 × 1668 px | `screenshots/ipad-dashboard.png` |
| 26 | iPhone landscape timer | 2532 × 1170 px | `screenshots/study-timer-landscape.png` |
| 27 | App Store banner | Per ASC spec | App Store Connect |
| 28 | Hero screenshot (optional) | 1170 × 2532 px | Future hero section |

**Total missing:** 28 assets (6 blockers, 9 P2, 5 P3, 8 P4)

---

## Priority Order — Recommended Workflow

```
Week 1 — Blockers
├── 1. Export app icon from Xcode (1024 px)
├── 2. Generate all favicon/PWA sizes from icon
├── 3. Capture 3 landing page screenshots (light)
├── 4. Generate WebP derivatives
├── 5. Uncomment <picture> blocks in index.html
├── 6. Design and export OG image (1200×630)
└── 7. Validate social previews on all platforms

Week 2 — App Store
├── 8. Capture 4–6 App Store screenshots
├── 9. Capture extended feature screens
└── 10. Upload to App Store Connect

Week 3 — Polish
├── 11. Dark mode screenshot set
├── 12. Press banner + screenshot pack
└── 13. Optional page-specific OG images
```

---

## HTML / CSS Changes (Phase 10)

| Change | File | Status |
|--------|------|--------|
| Device mockup component | `_device-mockup.css` | ✅ Added |
| Screenshot section restructure | `index.html` | ✅ Updated |
| Picture element templates | `index.html` (commented) | ✅ Ready |
| Placeholder auto-hide on image | `_device-mockup.css` `:has()` | ✅ Added |
| Lazy load + alt templates | `index.html` comments | ✅ Documented |

**No fake images added.** Layout preserved — same 3-column grid on desktop.

---

## Accessibility Status

| Item | Status |
|------|--------|
| Placeholder `aria-label` on screenshots | ✅ |
| Figcaption on each mockup | ✅ |
| Alt text templates in HTML comments | ✅ |
| Decorative notch `aria-hidden` | ✅ |
| Real image alt strategy documented | ✅ IMAGE_GUIDE.md |

---

## What Is NOT Missing

These items are complete and require no visual work:

- Page layouts and typography system
- Light / dark theme CSS
- JavaScript interactions
- SEO meta tags and OG tag structure
- Legal page content
- 404 page design
- robots.txt, sitemap.xml, manifest

---

## Sign-off Criteria

Visual production is **ready for public launch** when:

- [ ] All Priority 1 assets captured and deployed
- [ ] Landing page shows 3 real screenshots (no empty states)
- [ ] OG image passes platform preview validation
- [ ] App icon replaced in all favicon/PWA sizes
- [ ] Social preview tested on X, WhatsApp, Discord, LinkedIn
- [ ] Lighthouse performance still ≥ 90 after image addition

---

## Related Documents

- [SCREENSHOT_PLAN.md](SCREENSHOT_PLAN.md)
- [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md)
- [PRODUCTION.md](PRODUCTION.md)
- [PRESS_KIT.md](PRESS_KIT.md)
