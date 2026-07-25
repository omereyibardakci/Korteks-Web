# Deployment Guide — Korteks Web (GitHub Pages)

This document covers deploying the Korteks static website to GitHub Pages with optional custom domain configuration.

---

## Prerequisites

- Git installed locally
- GitHub account
- (Optional) Custom domain `korteks.app` with DNS access

---

## 1. Create the Repository

1. Sign in to [GitHub](https://github.com)
2. Click **New repository**
3. Name: `Korteks-Web` (or your preferred name)
4. Visibility: **Public** (required for free GitHub Pages on personal accounts)
5. Do **not** initialize with README if pushing an existing local project
6. Click **Create repository**

---

## 2. Push Local Code

From your local project directory:

```bash
git init
git add .
git commit -m "Initial production release — Korteks website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Korteks-Web.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username or organization.

---

## 3. Enable GitHub Pages

1. Open the repository on GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)`
4. Click **Save**
5. Wait 1–3 minutes for the first deployment

Your site will be available at:

```
https://YOUR_USERNAME.github.io/Korteks-Web/
```

> The `.nojekyll` file in the project root prevents Jekyll from ignoring folders that start with `_` (e.g. CSS partial directories).

---

## 4. Custom Domain (Optional)

To use `https://korteks.app`:

### 4a. Configure DNS

At your domain registrar, add:

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `YOUR_USERNAME.github.io` |

Alternatively, use a single `CNAME` for `@` if your registrar supports CNAME flattening (e.g. Cloudflare).

### 4b. Configure GitHub

1. **Settings → Pages → Custom domain**
2. Enter: `korteks.app`
3. Click **Save**
4. Enable **Enforce HTTPS** once the certificate is issued (may take up to 24 hours)

### 4c. Add CNAME File (Optional)

GitHub creates this automatically when you set a custom domain in the UI. If needed manually:

```
korteks.app
```

Save as `CNAME` in the repository root (no extension).

---

## 5. HTTPS

GitHub Pages provides free TLS certificates via Let's Encrypt.

- Enable **Enforce HTTPS** in **Settings → Pages** after DNS propagates
- All canonical URLs in the site use `https://korteks.app`

---

## 6. Cache Refresh After Deploy

After pushing updates:

1. **Hard refresh** in browser: `Cmd+Shift+R` (macOS) or `Ctrl+Shift+R` (Windows)
2. Clear CDN/browser cache if changes don't appear
3. GitHub Pages deployments typically complete within 1–5 minutes
4. Check deployment status under **Actions** tab (if GitHub Actions is enabled) or **Settings → Pages**

For manifest and favicon updates, browsers cache aggressively — test in a private window.

---

## 7. Testing Checklist

After deployment, verify:

- [ ] `https://korteks.app/` loads the landing page
- [ ] `https://korteks.app/privacy.html` loads
- [ ] `https://korteks.app/support.html` loads
- [ ] `https://korteks.app/terms.html` loads
- [ ] `https://korteks.app/nonexistent-page` shows the custom 404 page
- [ ] `https://korteks.app/robots.txt` is accessible
- [ ] `https://korteks.app/sitemap.xml` is accessible
- [ ] `https://korteks.app/manifest.webmanifest` is accessible
- [ ] Theme toggle works (light / dark / system)
- [ ] Mobile navigation opens and closes
- [ ] HTTPS redirect works (no mixed content warnings)
- [ ] Open Graph preview renders correctly (use [opengraph.xyz](https://www.opengraph.xyz))

---

## 8. Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://korteks.app`
3. Verify ownership (DNS TXT record or HTML file)
4. Submit sitemap: `https://korteks.app/sitemap.xml`

Repeat for [Bing Webmaster Tools](https://www.bing.com/webmasters) if desired.

---

## 9. Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 on all pages | Confirm branch is `main` and folder is `/ (root)` |
| CSS not loading | Check `.nojekyll` exists; verify file paths are relative |
| JS modules fail | Ensure site is served over HTTP/HTTPS, not `file://` |
| Custom domain not working | Wait for DNS propagation (up to 48h); verify A/CNAME records |
| Old content showing | Hard refresh; check latest commit is pushed |
| Jekyll build errors | `.nojekyll` disables Jekyll — no build step needed |

---

## 10. Updating the Site

```bash
# Make changes locally
git add .
git commit -m "Describe your change"
git push origin main
```

GitHub Pages redeploys automatically on push to the configured branch.

Update `lastmod` dates in `sitemap.xml` when publishing significant content changes.
