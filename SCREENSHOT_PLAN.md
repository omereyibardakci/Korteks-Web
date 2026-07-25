# Korteks — Screenshot Plan

Complete capture schedule for all visual assets derived from the real Korteks iOS app (v1.0.0, iOS 17+).

**No fake screens.** Every asset listed below must be captured from the production app.

---

## Capture Defaults

| Setting | Value |
|---------|-------|
| Device (primary) | iPhone 15 Pro, iOS 17+ |
| Device (tablet) | iPad Pro 11", iPadOS 17+ |
| Export scale | @3x PNG from Simulator or device |
| Base resolution | 1170 × 2532 px (iPhone portrait) |
| Status bar | Enabled — clean (full bars, no low battery) |
| Preferred times | 9:41 or 10:09 |
| Languages | Turkish (primary), English (secondary set) |
| Data | Anonymized real data — no placeholder text in app |

---

## Landing Page — Primary Row (Priority 1)

These three screens are wired in `index.html` via the `device-mockup` component.

### 1. Dashboard — Kontrol Paneli

| Field | Value |
|-------|-------|
| **Purpose** | Landing page screenshot #1 — first impression |
| **Screen** | Dashboard / Home tab |
| **Theme** | Light |
| **Device** | iPhone 15 Pro |
| **Caption** | Kontrol Paneli |
| **Background** | Website section background (device frame handles presentation) |
| **Status bar** | Light mode — dark text |
| **Resolution** | 1170 × 2532 px |
| **Filename** | `dashboard-light.png` / `.webp` |
| **Alt text** | Korteks kontrol paneli — deneme özeti, hedef ilerlemesi ve son oturumlar |
| **Status** | ⬜ Not captured |

**Show in frame:** Exam summary cards, recent trial, goal progress widget, bottom tab bar.

---

### 2. Statistics — İstatistikler

| Field | Value |
|-------|-------|
| **Purpose** | Landing page screenshot #2 — analytics value |
| **Screen** | Statistics tab — net trend + topic breakdown |
| **Theme** | Light |
| **Device** | iPhone 15 Pro |
| **Caption** | İstatistikler |
| **Background** | Website section background |
| **Status bar** | Light mode |
| **Resolution** | 1170 × 2532 px |
| **Filename** | `statistics-light.png` / `.webp` |
| **Alt text** | Korteks istatistikler — net trendi, konu analizi ve performans grafikleri |
| **Status** | ⬜ Not captured |

**Show in frame:** Line/bar chart, topic analysis list, date range selector.

---

### 3. Study Timer — Çalışma Zamanlayıcısı

| Field | Value |
|-------|-------|
| **Purpose** | Landing page screenshot #3 — study workflow |
| **Screen** | Study timer active or session summary |
| **Theme** | Light |
| **Device** | iPhone 15 Pro |
| **Caption** | Çalışma Zamanlayıcısı |
| **Background** | Website section background |
| **Status bar** | Light mode |
| **Resolution** | 1170 × 2532 px |
| **Filename** | `study-timer-light.png` / `.webp` |
| **Alt text** | Korteks çalışma zamanlayıcısı — oturum süresi ve Live Activity |
| **Status** | ⬜ Not captured |

**Show in frame:** Timer UI, subject label, session controls. Optionally show Live Activity on lock screen as separate asset.

---

## Landing Page — Extended Set (Priority 2)

Additional screens for future landing page expansion or feature sections.

### 4. Trial Entry — Deneme Girişi

| Field | Value |
|-------|-------|
| **Purpose** | Feature card / how-it-works support |
| **Screen** | New trial entry form with net calculation |
| **Theme** | Light |
| **Device** | iPhone 15 Pro |
| **Caption** | Deneme Kaydı |
| **Background** | — |
| **Status bar** | Light |
| **Resolution** | 1170 × 2532 px |
| **Filename** | `trial-entry-light.png` |
| **Status** | ⬜ Not captured |

---

### 5. Goals — Hedefler

| Field | Value |
|-------|-------|
| **Purpose** | Feature highlight |
| **Screen** | Goals list with progress |
| **Theme** | Light |
| **Device** | iPhone 15 Pro |
| **Caption** | Hedef Takibi |
| **Resolution** | 1170 × 2532 px |
| **Filename** | `goals-light.png` |
| **Status** | ⬜ Not captured |

---

### 6. Achievements — Başarımlar

| Field | Value |
|-------|-------|
| **Purpose** | Feature highlight |
| **Screen** | Achievements / badges grid |
| **Theme** | Light |
| **Device** | iPhone 15 Pro |
| **Caption** | Başarımlar |
| **Resolution** | 1170 × 2532 px |
| **Filename** | `achievements-light.png` |
| **Status** | ⬜ Not captured |

---

### 7. Profile — Profil

| Field | Value |
|-------|-------|
| **Purpose** | Account / sync trust signal |
| **Screen** | Profile settings overview |
| **Theme** | Light |
| **Device** | iPhone 15 Pro |
| **Caption** | Profil |
| **Resolution** | 1170 × 2532 px |
| **Filename** | `profile-light.png` |
| **Status** | ⬜ Not captured |

---

### 8. Settings — Ayarlar

| Field | Value |
|-------|-------|
| **Purpose** | Privacy / customization trust signal |
| **Screen** | Settings — theme, language, notifications |
| **Theme** | Light |
| **Device** | iPhone 15 Pro |
| **Caption** | Ayarlar |
| **Resolution** | 1170 × 2532 px |
| **Filename** | `settings-light.png` |
| **Status** | ⬜ Not captured |

---

## Dark Mode Set (Priority 2)

Duplicate Priority 1 and 2 screens in dark theme.

| Filename pattern | Example |
|------------------|---------|
| `{screen}-dark.png` | `dashboard-dark.png` |

| Field | Value |
|-------|-------|
| **Theme** | Dark (app dark mode) |
| **Status bar** | Light text on dark |
| **Resolution** | 1170 × 2532 px |
| **Count** | 8 screens minimum |

---

## App Store (Priority 1)

Apple App Store Connect requires specific sizes.

### iPhone 6.7" Display

| Field | Value |
|-------|-------|
| **Purpose** | App Store primary screenshot slot |
| **Screens** | Dashboard, Statistics, Trial Entry, Study Timer (up to 10) |
| **Theme** | Light preferred for slot 1–3; include dark in later slots |
| **Device** | iPhone 15 Pro Max frame optional — Apple accepts raw screenshots |
| **Resolution** | 1290 × 2796 px |
| **Format** | PNG or JPEG, no alpha |
| **Status bar** | Required — must be present |
| **Status** | ⬜ Not captured |

### iPhone 6.5" Display

| Resolution | 1284 × 2778 px |
| Status | ⬜ Not captured |

### iPad Pro 12.9" (if supporting iPad marketing)

| Resolution | 2048 × 2732 px |
| Status | ⬜ Not captured — app is iPhone-first |

---

## Open Graph & Social (Priority 1)

| Field | Value |
|-------|-------|
| **Purpose** | Link previews on X, Facebook, LinkedIn, WhatsApp, Discord |
| **Screen** | Composed marketing image — not a raw screenshot |
| **Theme** | Light background with accent elements |
| **Device** | iPhone frame with dashboard screenshot embedded |
| **Caption** | N/A (text baked into image) |
| **Background** | `#f5f5f7` or white gradient |
| **Status bar** | N/A — designed composition |
| **Resolution** | 1200 × 630 px |
| **Filename** | `assets/images/og/korteks-og.png` |
| **Status** | 🟡 Placeholder exists — replace with designed asset |

See [OG_GUIDE.md](OG_GUIDE.md) for composition rules.

---

## Press Kit (Priority 3)

| Asset | Resolution | Purpose |
|-------|------------|---------|
| Press banner | 2400 × 1260 px | Blog headers, press emails |
| App icon large | 1024 × 1024 px | Press downloads |
| Logo SVG | Scalable | Print / web |
| Screenshot pack | 1170 × 2532 px × 5 | ZIP for journalists |
| Fact sheet | PDF | App description, version, platform |

See [PRESS_KIT.md](PRESS_KIT.md).

---

## iPad & Landscape (Priority 4)

| Asset | Resolution | Notes |
|-------|------------|-------|
| iPad dashboard landscape | 2388 × 1668 px | Only if iPad layout exists in app |
| iPhone landscape timer | 2532 × 1170 px | Optional — Live Activities demo |

Verify iPad support in app before capturing.

---

## File Output Structure

```
assets/images/screenshots/
├── dashboard-light.png
├── dashboard-light.webp
├── dashboard-dark.png
├── statistics-light.png
├── statistics-light.webp
├── study-timer-light.png
├── study-timer-light.webp
├── trial-entry-light.png
├── goals-light.png
├── achievements-light.png
├── profile-light.png
├── settings-light.png
└── app-store/
    ├── 01-dashboard-6.7.png
    ├── 02-statistics-6.7.png
    ├── 03-trial-entry-6.7.png
    └── 04-study-timer-6.7.png
```

---

## Capture Workflow

1. Reset Simulator to iPhone 15 Pro, iOS 17+
2. Sign in with anonymized test account containing realistic trial data
3. Set app language to Turkish
4. Set theme (light or dark)
5. Navigate to target screen
6. `Cmd + S` in Simulator or `xcrun simctl io booted screenshot`
7. Crop if needed — no device frame in raw capture (CSS frame on web)
8. Export PNG @3x, generate WebP derivative
9. Uncomment `<picture>` block in `index.html` for landing page slots
10. Remove `.device-mockup__placeholder` div when image is live

---

## Related Documents

- [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md)
- [IMAGE_GUIDE.md](IMAGE_GUIDE.md)
- [VISUAL_STATUS.md](VISUAL_STATUS.md)
