# Korteks Web

Official website for **Korteks**, an iOS app for LGS, YKS, KPSS, and TUS exam preparation — trial tracking, net calculation, topic analysis, study timer, and statistics.

**Live URL (planned):** [https://korteks.app](https://korteks.app)

---

## Overview

Korteks-Web is a static, production-ready marketing and legal site. It includes:

- Landing page with product overview, features, FAQ, and download CTA
- Privacy Policy (`privacy.html`)
- Support Center (`support.html`)
- Terms of Use (`terms.html`)
- Custom 404 page

The site is designed with an Apple-inspired aesthetic: clean typography, generous spacing, light/dark themes, and progressive enhancement via vanilla JavaScript.

---

## Folder Structure

```
Korteks-Web/
├── index.html              # Landing page
├── privacy.html            # Privacy Policy
├── support.html            # Support Center
├── terms.html              # Terms of Use
├── 404.html                # Custom error page
├── robots.txt              # Search engine directives
├── sitemap.xml             # Sitemap for crawlers
├── manifest.webmanifest    # Web app manifest
├── browserconfig.xml       # Windows tile configuration
├── favicon.svg             # Scalable favicon (root)
├── assets/
│   ├── css/                # Modular design system
│   ├── js/                 # ES module interactions
│   ├── icons/              # Favicons and PWA icons
│   └── images/             # Screenshots and social preview
├── README.md
├── DEPLOYMENT.md
├── QA_CHECKLIST.md
├── PRODUCTION.md
└── LICENSE
```

---

## Technology

| Layer | Stack |
|-------|-------|
| Markup | Semantic HTML5 |
| Styles | Modular CSS (design tokens, no preprocessor) |
| Scripts | Vanilla JavaScript (ES modules) |
| Hosting | GitHub Pages (static) |
| Build | None — no npm, bundler, or framework |

### JavaScript Modules

| Module | Purpose |
|--------|---------|
| `main.js` | Entry point |
| `theme.js` | Light / dark / system theme |
| `navigation.js` | Mobile menu, FAQ, external links |
| `scroll.js` | Smooth scroll, reading progress, back-to-top |
| `animations.js` | Reveal animations, lazy loading |
| `clipboard.js` | Copy-to-clipboard utilities |
| `utils.js` | Shared helpers |

---

## Running Locally

No install step required. Serve the project root with any static file server:

```bash
# Python 3
python3 -m http.server 8080

# PHP
php -S localhost:8080
```

Then open [http://localhost:8080](http://localhost:8080).

> **Note:** ES modules require a local server — opening `index.html` directly via `file://` will not load JavaScript modules.

---

## GitHub Pages Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions including custom domain setup, HTTPS, and cache refresh.

Quick summary:

1. Push the repository to GitHub
2. Enable **GitHub Pages** → source: `main` branch, root folder
3. (Optional) Configure custom domain `korteks.app` in repository settings
4. Verify `https://korteks.app/sitemap.xml` and `robots.txt` are accessible

---

## Icon & Asset Placeholders

Current icon and social preview files are **placeholders**. Replace with final brand assets before public launch:

| File | Size | Purpose |
|------|------|---------|
| `favicon.svg` | Scalable | Modern browsers |
| `assets/icons/favicon.ico` | Multi-size | Legacy browsers |
| `assets/icons/favicon-16x16.png` | 16×16 | Tab icon |
| `assets/icons/favicon-32x32.png` | 32×32 | Tab icon |
| `assets/icons/apple-touch-icon.png` | 180×180 | iOS home screen |
| `assets/icons/icon-192.png` | 192×192 | PWA / Android |
| `assets/icons/icon-512.png` | 512×512 | PWA splash |
| `assets/images/og/korteks-og.png` | 1200×630 | Open Graph / Twitter Card |

See [assets/icons/README.md](assets/icons/README.md) for platform-specific guidance.

---

## License

This project is licensed under the [MIT License](LICENSE).

Copyright © 2026 **Ömer Eyibardakçı**

---

## Developer

**Ömer Eyibardakçı**

- Website: [https://korteks.app](https://korteks.app)
- Support: [support.html](support.html) *(email placeholder — see PRODUCTION.md)*

---

## Future Improvements

- Replace placeholder icons and OG image with final brand assets
- Add real App Store URL when the app is published
- Replace screenshot placeholders on the landing page
- Add real contact email and social media links
- Submit sitemap to Google Search Console and Bing Webmaster Tools
- Add structured data (JSON-LD) for the mobile app
- Localize legal pages to English

See [PRODUCTION.md](PRODUCTION.md) for the full release checklist.
