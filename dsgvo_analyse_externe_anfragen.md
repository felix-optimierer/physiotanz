# Analyse der externen Anfragen

## Ergebnis der Code-Prüfung

### Im Quellcode NICHT vorhanden (kommen von Manus-Plattform):
- `api2.amplitude.com` → Manus-Plattform-Tracking (injiziert durch vite-plugin-manus-runtime)
- `plausible.io` → Manus-Plattform-Analytics
- `api.manus.im` → Manus-API
- `manus-analytics.com` → Manus-Analytics (das Umami-Script in index.html: `%VITE_ANALYTICS_ENDPOINT%/umami`)
- `sr-client-cfg.amplitude.com` → Manus-Plattform (DEU Server)

### Im Quellcode vorhanden:
- `d2xsxph8kpxj0f.cloudfront.net` → Das sind die hochgeladenen Bilder (manus-upload-file --webdev). Server in DEU ✅
- `d36hbw14aib5lz.cloudfront.net` → Weitere CDN-Bilder, Server in IDN ⚠️

### Fazit:
Alle US/nicht-EU Anfragen kommen von der **Manus-Hosting-Plattform** selbst:
1. `vite-plugin-manus-runtime` → injiziert Amplitude Analytics
2. `%VITE_ANALYTICS_ENDPOINT%/umami` in index.html → Manus-Analytics
3. `api.manus.im` → Manus-API für OAuth/Runtime

**Diese verschwinden ALLE automatisch, sobald die Seite auf Hetzner deployed wird!**

Das Umami-Script in index.html (`%VITE_ANALYTICS_ENDPOINT%/umami`) muss beim Hetzner-Deploy entfernt werden.
