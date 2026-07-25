# Korteks — Icon Assets

Placeholder icons are included for development and deployment testing. Replace with final brand exports before public launch.

## File Map

| File | Size | Platform / Use |
|------|------|----------------|
| `favicon.svg` (root) | Scalable | Modern browsers, Safari pinned tabs |
| `favicon.ico` | 32×32 embedded | Legacy browsers, IE mode |
| `favicon-16x16.png` | 16×16 | Browser tabs |
| `favicon-32x32.png` | 32×32 | Browser tabs, taskbar |
| `apple-touch-icon.png` | 180×180 | iOS home screen, iPad |
| `icon-192.png` | 192×192 | Android Chrome, PWA |
| `icon-512.png` | 512×512 | PWA splash, maskable icon |

## Platform Notes

### Safari / Apple

- `apple-touch-icon.png` at 180×180 is referenced in all HTML pages
- iOS uses this when users add the site to their home screen
- Provide a PNG with no transparency for best results on iOS

### Android / Chrome

- `icon-192.png` and `icon-512.png` are referenced in `manifest.webmanifest`
- Chrome uses these for "Add to Home Screen" prompts
- The 512×512 icon should include safe padding for maskable cropping (~20% inset)

### Windows

- `browserconfig.xml` references `icon-192.png` and `icon-512.png` for Start menu tiles
- Tile color: `#0071e3`

### Modern Browsers

- `favicon.svg` at the repository root supports light/dark via CSS inside SVG if needed
- Referenced with `type="image/svg+xml"` before PNG fallbacks

## Generating Final Assets

From the Korteks iOS app icon (1024×1024 source):

1. Export PNG at each size listed above
2. Generate `.ico` with [RealFaviconGenerator](https://realfavicongenerator.net/) or similar
3. Optimize PNGs with [Squoosh](https://squoosh.app/) or `pngquant`
4. Replace files in this directory — no HTML changes needed if filenames stay the same

## Social Preview

Open Graph and Twitter Card image:

```
../images/og/korteks-og.png   1200×630 px
```

Replace with a designed marketing image before sharing on social media.
