# Production Notes — Korteks Web

Internal reference for release management and placeholder tracking.

---

## Version

| Field | Value |
|-------|-------|
| Website version | 1.0.0 |
| App version referenced | 1.0.0 |
| Release date | 2026-07-25 |
| Target domain | https://korteks.app |

---

## Public URLs

| Page | URL |
|------|-----|
| Home | https://korteks.app/ |
| Privacy Policy | https://korteks.app/privacy.html |
| Support Center | https://korteks.app/support.html |
| Terms of Use | https://korteks.app/terms.html |

---

## Placeholders — Replace Before Launch

| Item | Current State | Action Required |
|------|---------------|-----------------|
| App Store URL | `href="#"` with `aria-disabled="true"` | Replace with real App Store link |
| Support email | `[email — yakında]` in support/privacy/terms | Add real support email |
| Developer name | `[Geliştirici Adı — yakında]` | Add developer legal name |
| Social links | Twitter/X, Instagram disabled placeholders | Add real profile URLs |
| OG image | Generated placeholder PNG | Replace with designed 1200×630 asset |
| Favicons | Generated placeholder PNGs/SVG | Replace with final app icon exports |
| App screenshots | "Ekran görüntüsü yakında" on landing page | Add real iOS screenshots |
| Contact response time | Placeholder text on support page | Confirm SLA wording |

---

## Release Checklist

### Pre-release

- [ ] Replace all placeholders listed above
- [ ] Run full [QA_CHECKLIST.md](QA_CHECKLIST.md)
- [ ] Update `lastmod` in `sitemap.xml`
- [ ] Verify canonical URLs match live domain
- [ ] Test custom 404 page on GitHub Pages
- [ ] Confirm `.nojekyll` is committed

### Deploy

- [ ] Push to `main` branch
- [ ] Verify GitHub Pages deployment succeeds
- [ ] Confirm HTTPS and custom domain (if configured)
- [ ] Hard-refresh and test in incognito

### Post-release

- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph preview on social platforms
- [ ] Monitor for 404 errors
- [ ] Update App Store Connect marketing URL to `https://korteks.app`

---

## App Store URL

```
Placeholder: #
Target:      https://apps.apple.com/app/korteks/idXXXXXXXXX
```

Update all App Store links in:

- `index.html` (hero, header, mobile menu, footer, final CTA)
- `support.html`
- Footer across all pages

---

## Support Email

```
Placeholder: [email — yakında]
Target:      support@korteks.app (or final address)
```

Update in:

- `support.html` — Contact section
- `privacy.html` — Contact section
- `terms.html` — Contact section

---

## Asset Replacement Guide

### Favicons

Export from the final Korteks app icon at these sizes:

```
assets/icons/favicon-16x16.png     16×16
assets/icons/favicon-32x32.png     32×32
assets/icons/apple-touch-icon.png  180×180
assets/icons/icon-192.png          192×192
assets/icons/icon-512.png          512×512
assets/icons/favicon.ico           ICO (16 + 32 embedded)
favicon.svg                        SVG (optimized)
```

### Social Preview

```
assets/images/og/korteks-og.png    1200×630 px
```

Include app name, tagline, and brand colors. Keep important content within the center 80% (safe zone for cropping on some platforms).

### Screenshots

```
assets/images/screenshots/
  dashboard.png
  trial-entry.png
  statistics.png
```

Recommended: iPhone 15 Pro frames, PNG or WebP, 2× resolution.

---

## Contact

**Developer:** Ömer Eyibardakçı  
**License:** MIT — see [LICENSE](LICENSE)

---

## Changelog

### 1.0.0 — 2026-07-25

- Initial production release
- Landing page, Privacy Policy, Support Center, Terms of Use
- Design system, JavaScript interactions, SEO files
- GitHub Pages preparation
