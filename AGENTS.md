# MIRO Hardware — Base44 Dev Environment

## Overview
Static website (HTML/CSS/JS) served by nginx on port 3000. No backend, no build step.

## Architecture
- `web/index.html` — single-page Persian RTL site (dark theme, champagne-gold accents)
- `web/css/style.css` — all styles, responsive breakpoints at 1024px and 768px
- `web/js/main.js` — hero slider, mobile nav, scroll-to-top, contact form, scroll reveal
- `docker-compose.base44.yml` — nginx:alpine serving `web/` on port 3000

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
Verify: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` → 200

## Editing
Files are bind-mounted, so edits appear on browser refresh (call `reload_preview` for the iframe).
No build step, no dependencies to install.

## Images
Uses Unsplash CDN URLs (`images.unsplash.com/photo-<id>?w=...&q=80`). Some photo IDs expire/404 — test with curl before adding new ones.

## No secrets required
This is a static site with no external service credentials.
