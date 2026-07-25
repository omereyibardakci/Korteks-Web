# Korteks — Social Media Preview Guide

How link previews appear when `https://korteks.app` is shared across platforms.

**Master asset:** `assets/images/og/korteks-og.png` (1200 × 630 px)  
**Meta tags:** Open Graph + Twitter Card (configured on all pages)

---

## Preview Anatomy

Every platform reads the same meta tags:

```html
<meta property="og:title" content="…">
<meta property="og:description" content="…">
<meta property="og:image" content="https://korteks.app/assets/images/og/korteks-og.png">
<meta name="twitter:card" content="summary_large_image">
```

The preview typically shows: **image → title → description → domain**.

---

## Platform Reference

### GitHub

| Context | Appearance |
|---------|------------|
| Issue/PR link paste | Small OG thumbnail (≈480 px wide) + title + description |
| README link | Same — inline card |
| Profile website field | Text link only — no preview |

**Tips:**
- Ensure `og:image` is absolute HTTPS URL
- GitHub caches aggressively — append `?v=2` to force refresh during testing
- Repository social preview uses repo-specific OG — not applicable to korteks.app

**Expected preview:**

```
┌─────────────────────────────────┐
│  [OG Image — 1.91:1]            │
├─────────────────────────────────┤
│  Korteks — LGS, YKS, KPSS…      │
│  Deneme sınavlarınızı kaydedin… │
│  korteks.app                    │
└─────────────────────────────────┘
```

---

### X (Twitter)

| Card type | `summary_large_image` |
|-----------|----------------------|
| Image size | Min 300 × 157 px; recommended 1200 × 630 px |
| Display | Full-width image above text |
| Crop | None on standard cards |

**Tips:**
- `twitter:card` must be `summary_large_image` for large preview
- X caches previews — use [Card Validator](https://cards-dev.twitter.com/validator) (requires login)
- Title truncates at ~70 characters

**Expected preview:**

```
┌─────────────────────────────────┐
│                                 │
│     [Full OG Image 1200×630]    │
│                                 │
├─────────────────────────────────┤
│  Korteks — LGS, YKS, KPSS ve    │
│  TUS İçin Deneme Takibi | iOS   │
│  Deneme sınavlarınızı kaydedin, │
│  netlerinizi hesaplayın…        │
│  🔗 korteks.app                 │
└─────────────────────────────────┘
```

---

### Facebook

| Property | Behavior |
|----------|----------|
| Image ratio | 1.91:1 preferred |
| Min size | 200 × 200 px |
| Display | Large link card with image on top |

**Tips:**
- Use [Sharing Debugger](https://developers.facebook.com/tools/debug/) to scrape and refresh cache
- Description truncates at ~300 characters on mobile

**Expected preview:** Same as OG standard — image, title, description, domain.

---

### LinkedIn

| Property | Behavior |
|----------|----------|
| Image | Uses `og:image` |
| Display | Wide card, professional context |
| Crop | Slight — keep content in center 80% |

**Tips:**
- Use [Post Inspector](https://www.linkedin.com/post-inspector/) to refresh
- Works best with clean, professional OG image — no busy backgrounds
- Title shows in bold below image

**Expected preview:**

```
┌─────────────────────────────────┐
│  [OG Image]                     │
├─────────────────────────────────┤
│  Korteks — LGS, YKS, KPSS ve    │
│  TUS İçin Deneme Takibi | iOS   │
│  korteks.app                    │
└─────────────────────────────────┘
```

Description may be omitted in some LinkedIn contexts.

---

### Telegram

| Property | Behavior |
|----------|----------|
| Image | OG image as thumbnail |
| Display | Instant View card or link preview |
| Size | Thumbnail ≈ 300 px wide in chat |

**Tips:**
- Telegram caches permanently — changing OG requires bot cache clear or URL param trick
- Headline in OG image must be readable at small thumbnail size
- Description shows below title in preview bubble

**Expected preview (chat bubble):**

```
┌──────────────────────────┐
│ [thumb] Korteks — LGS…   │
│         Deneme sınavla…  │
│         korteks.app      │
└──────────────────────────┘
```

---

### WhatsApp

| Property | Behavior |
|----------|----------|
| Image | OG thumbnail, left of text |
| Display | Compact card in chat |
| Thumbnail | ~300 × 157 px displayed |

**Tips:**
- Most aggressive caching — test with `?v=timestamp` query on URL
- Image appears small — logo must be clear at 64 px
- Title truncates quickly (~40 characters visible)

**Expected preview:**

```
┌──────────────────────────────┐
│ [img] Korteks — LGS, YKS…    │
│       Deneme sınavlarınızı…  │
│       korteks.app            │
└──────────────────────────────┘
```

---

### Discord

| Property | Behavior |
|----------|----------|
| Image | Full OG embed below message |
| Display | Rich embed with image, title, description |
| Color | Discord uses `theme-color` meta optionally — not set currently |

**Tips:**
- Discord embeds are generous — full 400 px wide image shown
- Description fully visible in embed
- No character truncation on title in most cases

**Expected preview:**

```
┌─────────────────────────────────┐
│  Korteks — LGS, YKS, KPSS ve    │
│  TUS İçin Deneme Takibi | iOS   │
│                                 │
│  [OG Image — full width]        │
│                                 │
│  Deneme sınavlarınızı kaydedin, │
│  netlerinizi hesaplayın…        │
│                                 │
│  korteks.app                    │
└─────────────────────────────────┘
```

---

## Page-Specific Previews

Each page has unique `og:title` and `og:description` but shares the same image.

| Page | Title shown in preview |
|------|------------------------|
| `/` | Korteks — LGS, YKS, KPSS ve TUS İçin Deneme Takibi \| iOS |
| `/privacy.html` | Gizlilik Politikası — Korteks |
| `/support.html` | Destek Merkezi — Korteks \| Yardım ve SSS |
| `/terms.html` | Kullanım Koşulları — Korteks \| Hüküm ve Sorumluluklar |

Consider page-specific OG images (Priority 3) if generic image causes confusion.

---

## Cache Refresh Procedure

When updating `korteks-og.png`:

1. Replace file at `assets/images/og/korteks-og.png`
2. Deploy to production
3. Refresh caches per platform:
   - Facebook Sharing Debugger
   - LinkedIn Post Inspector
   - X Card Validator
   - WhatsApp: share with `?v={date}` appended to URL
   - Discord: re-post link in test channel
4. Allow 24–48 hours for full propagation

---

## Quality Checklist

- [ ] Image loads over HTTPS (no mixed content)
- [ ] Title is unique per page
- [ ] Description is 120–160 characters (ideal for most platforms)
- [ ] OG image headline readable at 300 px width
- [ ] No placeholder text visible in OG image
- [ ] Domain shows as `korteks.app` (after custom domain configured)

---

## Related Documents

- [OG_GUIDE.md](OG_GUIDE.md)
- [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md)
- [IMAGE_GUIDE.md](IMAGE_GUIDE.md)
