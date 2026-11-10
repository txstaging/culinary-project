# Culinary IGCAT — Next.js

A Next.js App Router and TypeScript conversion of `Culinary_IGCAT_Clean_Final_Sections (1).html`.

All 15 sections, Arabic content, right-to-left layout, original images, responsive styles, gallery, animations, navigation, and six detailed IGCAT criteria are retained. The **إلى الأعلى** button floats at the lower left of the viewport throughout the website and scrolls the active page to the top.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```sh
npm run build
npm start
```

## Edit the project

- `src/app/page.tsx`: homepage section order.
- `src/components/sections/`: individual, editable React sections.
- `src/app/home.css`: original styles, including all responsive overrides.
- `src/components/SiteHeader.tsx` and `src/data/site.ts`: branding and navigation.
- `src/components/BackToTop.tsx` and `src/app/globals.css`: floating button behavior and appearance.
- `src/components/PhotoLightbox.tsx`: gallery interaction and keyboard controls.
- `src/components/DetailOverlay.tsx`: criteria overlay and its navigation.
- `src/components/CriteriaContent.tsx` and `src/app/criteria/criteria.css`: all six criteria, also available at `/criteria`.
- `public/media/`: original embedded images extracted without recompression; `src/data/assets.json` records their SHA-256 hashes.

The original HTML is kept as the reference. The site uses the same Cairo and Tajawal Google Fonts as that file.

## Verification

```sh
npm run typecheck
npm run build
npm run test:browser
```

Browser checks compare the source and conversion at desktop and mobile widths, verify image integrity, and exercise the floating button, mobile menu, photo gallery, and criteria navigation. They start and stop local servers automatically. On Windows they use installed Google Chrome. On other platforms, install the Playwright browser first with `npx playwright install chromium`.

`scripts/convert-source.mjs` records the original extraction process. Running it again regenerates the section files and original styles, overwriting edits in those generated files.
