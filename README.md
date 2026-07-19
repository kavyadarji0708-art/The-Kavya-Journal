# The Kavya Journal

Standalone, self-hostable site (Vite + React 18 + react-router-dom 6 + Tailwind CSS v3) for
The Kavya Journal, a personal essays publication by Kavya Darji. Exported from the site builder
with all proprietary runtime removed; the rendered UI/UX matches the production preview.

## Run

```bash
npm install
npm run build      # type-checks (tsc --noEmit) then builds to dist/
npm run preview    # serve the production build locally
# or
npm run dev
```

## Self-hosting

`npm run build` produces a static `dist/` (HTML/CSS/JS) — no server runtime required. Host it on
any static host or CDN (S3+CloudFront, Cloudflare Pages, Netlify, nginx, …).

IMPORTANT — this is a client-routed single-page app, so the host must fall back to `index.html`
for unknown paths (otherwise deep links like `/essays` 404 on refresh):
- **nginx:** `try_files $uri $uri/ /index.html;`
- **S3 + CloudFront:** set the custom error response (403/404) to return `/index.html` with 200
- **Netlify:** add `/* /index.html 200` to a `_redirects` file
- **Cloudflare Pages / Vercel:** SPA fallback is on by default

## What's in here

- **Design tokens** are baked into `tailwind.config.ts` (the `:root` CSS vars + responsive type
  scale). Fonts: Convergence (body) + Adamina (headings), loaded from Google Fonts in `index.html`.
- **SEO:** per-route `<title>`/description/canonical/og tags are set client-side by
  `src/site/components/SEO.tsx` from `src/site/seoData.json`; canonical/og:url derive from
  `window.location`, so they're correct wherever you deploy. SoftwareApplication JSON-LD is inlined
  in `index.html`.
- **Images** are localized under `public/assets/` (no external CDN dependency).
- **Content** is fully inlined — there is no CMS/content store.

## Notes

- **Form:** the "Send a paragraph" form on `/sending-your-essay` is stubbed — on submit it shows an
  alert. Replace the `onSubmit` handler in `src/site/components/SendingYourEssay/HeroSection.tsx`
  with your real form action / embed (e.g. a form provider or mailto endpoint).
- External links (social, RSS, `#` in-page anchors, the `mailto:` on the privacy page) point to
  their original destinations.
- Pages: Home, Essays, Latest Essay, About the Author, New Essay, Sending Your Essay, Privacy.
