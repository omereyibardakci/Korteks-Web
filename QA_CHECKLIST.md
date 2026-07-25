# QA Checklist — Korteks Web

Use this checklist before and after each production release.

**Site:** [https://korteks.app](https://korteks.app)  
**Last reviewed:** 2026-07-25

---

## Accessibility

- [ ] Skip link (`İçeriğe atla`) focuses main content on Tab
- [ ] All images have appropriate `alt` text (decorative images use `alt=""`)
- [ ] Heading hierarchy is logical (one `h1` per page)
- [ ] Color contrast meets WCAG AA in light and dark modes
- [ ] Focus indicators are visible on all interactive elements
- [ ] Mobile menu: keyboard navigable, ESC closes, focus trapped when open
- [ ] FAQ accordions: native `<details>` works without JavaScript
- [ ] Theme toggle: `aria-label` and `aria-pressed` update correctly
- [ ] Form controls (if any) have associated labels
- [ ] `prefers-reduced-motion`: animations and smooth scroll disabled
- [ ] 404 page is readable and navigable without JavaScript

### Screen Readers

- [ ] VoiceOver (Safari/macOS): page landmarks announced correctly
- [ ] VoiceOver: mobile menu dialog label read on open
- [ ] VoiceOver: accordion expanded/collapsed state announced
- [ ] TalkBack (Android Chrome): navigation and links work

---

## SEO

- [ ] Each page has a unique `<title>` and `<meta name="description">`
- [ ] Canonical URLs point to `https://korteks.app/...`
- [ ] `robots.txt` allows crawling and references sitemap
- [ ] `sitemap.xml` lists all public pages with valid `lastmod`
- [ ] Open Graph tags present on all pages (`og:title`, `og:description`, `og:image`)
- [ ] Twitter Card tags present on all pages
- [ ] 404 page has `noindex, follow`
- [ ] Internal links use correct relative paths
- [ ] No broken `#` anchor links on legal pages (TOC matches section IDs)
- [ ] `lang="tr"` set on `<html>`

---

## Performance

- [ ] No render-blocking resources beyond CSS
- [ ] JavaScript loaded as `type="module"` (deferred by default)
- [ ] Images use `loading="lazy"` where appropriate
- [ ] CSS `@import` chain loads without errors
- [ ] No layout shift from web fonts (system font stack)
- [ ] Passive scroll listeners used (no scroll jank)
- [ ] IntersectionObserver used for animations (not scroll handlers)

---

## Broken Links

- [ ] Header navigation links work on all pages
- [ ] Footer links work on all pages
- [ ] Mobile menu links work
- [ ] TOC sidebar links scroll to correct sections (privacy, terms)
- [ ] Cross-page links between legal/support pages work
- [ ] Placeholder links (`href="#"`, `aria-disabled="true"`) are clearly disabled
- [ ] External links open in new tab with `rel="noopener noreferrer"` (via JS)

---

## Responsive Design

- [ ] Mobile (320px–480px): readable, no horizontal scroll
- [ ] Tablet (768px): navigation and grids adapt
- [ ] Desktop (1024px+): full layout with sidebar TOC
- [ ] Mobile menu trigger visible on small screens
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] Safe area insets respected (back-to-top button)

---

## Dark Mode

- [ ] System preference respected on first visit
- [ ] Manual light/dark/system toggle cycles correctly
- [ ] Preference persists after page reload (`localStorage`)
- [ ] All pages readable in dark mode
- [ ] Theme color meta tags match light/dark contexts
- [ ] Icons and images visible in both modes

---

## Keyboard Navigation

- [ ] Tab order is logical on all pages
- [ ] Mobile menu: Tab cycles within panel when open
- [ ] ESC closes mobile menu
- [ ] FAQ: Enter/Space toggles `<details>`
- [ ] Back-to-top button focusable and activatable with Enter
- [ ] Heading `#` copy buttons keyboard accessible
- [ ] No keyboard traps outside mobile menu

---

## Lighthouse (Target Scores)

Run Lighthouse in Chrome DevTools (Incognito, mobile + desktop):

| Category | Target |
|----------|--------|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |

- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 95
- [ ] Best Practices ≥ 95
- [ ] SEO ≥ 95

---

## Cross-Browser

Test on latest versions:

- [ ] Safari (macOS / iOS)
- [ ] Chrome (desktop / Android)
- [ ] Firefox
- [ ] Edge

Verify: layout, theme toggle, mobile menu, smooth scroll, FAQ, copy buttons.

---

## Production Files

- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `manifest.webmanifest` accessible and valid JSON
- [ ] `404.html` served for missing pages
- [ ] Favicons display in browser tab
- [ ] OG image loads at `/assets/images/og/korteks-og.png`
- [ ] `.nojekyll` present for GitHub Pages

---

## Sign-off

| Role | Name | Date | Pass/Fail |
|------|------|------|-----------|
| Developer | | | |
| Reviewer | | | |
