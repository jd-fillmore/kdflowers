# KD Flowers

Website for **KD Flowers**, a wedding floral design studio in the Niagara Region
of Ontario. The site presents wedding flowers and bridal bouquets, the design
process, a portfolio gallery, and free consultation booking.

Production: <https://www.kdflowers.ca/>

## Tech stack

- [Astro 7](https://astro.build/) with static output and TypeScript
- Astro Assets (`sharp`) for responsive, optimized WebP images
- Hand-written CSS design system in `src/styles/global.css`
- Native `<dialog>` gallery lightbox, no client-side framework
- Netlify hosting with `_redirects` and `netlify.toml`

## Commands

```bash
npm install
npm run dev      # local dev server
npm run check    # Astro/TypeScript diagnostics
npm run build    # production build to dist/
npm run preview  # preview the built site
```

Node 22 is required (see `netlify.toml` and `package.json` engines).

## Project structure

```text
public/             static files (robots.txt, llms.txt, redirects, favicon)
src/
  assets/images/    source photography and logo
  components/       reusable Astro sections and UI
  data/site.ts      business info, navigation, services, cities, FAQs
  data/gallery.ts   portfolio image order, captions, alt text
  layouts/          BaseLayout.astro (head, header, footer, breadcrumbs)
  lib/schema.ts     JSON-LD builders (Florist, WebPage, BreadcrumbList, etc.)
  pages/            routes, city pages, sitemap endpoint, 404
  styles/           global design system
docs/
  migration-inventory.md   Gatsby audit and route mapping
  migration-report.md      final migration verification report
gatsby-legacy/       archived original Gatsby project (reference only)
```

## Content and SEO

- Business facts, copy, and service areas live in `src/data/site.ts`.
- Portfolio order and alt text live in `src/data/gallery.ts`.
- Every page sets a title, meta description, canonical URL, Open Graph and
  Twitter metadata through `src/components/Seo.astro`.
- The homepage and all city landing pages include `Florist` structured data
  using only published business facts. No address, phone, email, hours,
  geo-coordinates, prices, or reviews are invented.
- Pages with breadcrumbs render visible breadcrumbs and matching
  `BreadcrumbList` JSON-LD. The homepage intentionally has neither.
- `/sitemap.xml` is generated from the canonical page list in `src/data/site.ts`
  and excludes the `/consult/` duplicate, the 404 page, and redirects.
- `/llms.txt` provides a plain-text summary for AI discovery and is allowed by
  `robots.txt`.

## Redirects

| From | To | Status |
| --- | --- | --- |
| `/wedding-flowers-jordan-on/` | `/wedding-flowers-jordan-ontario/` | 301 |
| `/consult/` | `/book-consult/` (canonical only; the page stays reachable) | 200 + canonical |

## Analytics

The original Gatsby site used Universal Analytics property `UA-112521158-3`.
Universal Analytics is retired, so no analytics snippet was carried over. Add a
current GA4 measurement ID if tracking is required; no tracking ID is invented.

## Notes

The original Gatsby implementation is preserved in `gatsby-legacy/` for
reference. See `docs/migration-inventory.md` and `docs/migration-report.md` for
the audit, route mapping, and verification results.
