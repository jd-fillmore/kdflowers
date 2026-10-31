# KD Flowers — Gatsby to Astro Migration Report

Migration date: 2026-10-31
Production domain: <https://www.kdflowers.ca/>
Source project: Gatsby 2.28.1 (archived in `gatsby-legacy/`)
Replacement project: Astro 7.4.4 at the repository root

## 1. Result

The public site was rebuilt in Astro with all existing routes, copy, images,
metadata, and internal links preserved. The new site adds responsive layouts,
optimized images, visible breadcrumbs, structured data, a sitemap, `robots.txt`,
and `/llms.txt` without inventing business details or rewriting published SEO
copy.

- Astro build: **23 pages generated**, **24 HTML documents** (including the
  redirect document and 404), **114 optimized image variants**.
- Original Gatsby project: **21 page files** — 20 indexable routes plus 404.
- New pages: **2** (`/about/`, `/contact/`).
- Redirect route: **1** (`/wedding-flowers-jordan-on/`).
- Sitemap URLs: **21**.
- `astro check`: **0 errors, 0 warnings, 0 hints**.
- Internal link crawl: **67 internal URLs checked, 0 broken**.

## 2. Routes and redirects

All 21 original routes have an Astro equivalent. See
`docs/migration-inventory.md` for the full route-by-route mapping.

| Category | Count | Notes |
| --- | ---: | --- |
| Original Gatsby page files | 21 | 20 indexable + 404 |
| Original routes preserved | 21 | No URL removed or renamed |
| New pages | 2 | `/about/`, `/contact/` |
| Astro HTML documents | 24 | Original routes + new pages + redirect document |
| Indexable pages | 22 | 21 sitemap URLs + `/consult/` canonicalised to `/book-consult/` |
| Sitemap URLs | 21 | Excludes `/consult/`, 404, and redirect |
| 301 redirect | 1 | `/wedding-flowers-jordan-on/` → `/wedding-flowers-jordan-ontario/` |

Redirect policy:

- `/wedding-flowers-jordan-on/` and `/wedding-flowers-jordan-on` both 301 to
  `/wedding-flowers-jordan-ontario/` through `public/_redirects` and the Astro
  redirect configuration. This fixes a pre-existing broken CTA link.
- `/consult/` remains reachable at its original URL but declares
  `https://www.kdflowers.ca/book-consult/` as its canonical, and is excluded
  from the sitemap because it duplicates `/book-consult/`.
- Apex `kdflowers.ca` continues to 301 to `www.kdflowers.ca` at the existing
  Netlify domain level.

## 3. Content and image parity

- All published homepage, city, portfolio, booking, legacy, and agency copy was
  carried over. HTML entities in source copy were decoded to equivalent
  characters (for example `&amp;` → `&`).
- All 14 original city landing pages were regenerated from a single dynamic
  route. Their hero, intro, about, process, testimonial, and CTA sections match
  the original composition.
- The original service-area CTA omitted Port Dalhousie and linked to the broken
  Jordan slug. The Astro CTA lists all 14 areas and links to the correct
  `/wedding-flowers-jordan-ontario/` page.
- All 18 portfolio photographs are present in their original order. The source
  gallery had no alt text, so descriptive alt text was added for every image.
  Captions are preserved.
- Existing alt text elsewhere is preserved, including the original logo alt
  `cheap bridal bouqets niagara` and the source image alt strings.
- No content images are missing. The unused Gatsby starter icons and duplicate
  `wedding-flowers-grimsby-florist.jpg` remain in the archived Gatsby project;
  they were never rendered by the public site.

## 4. Metadata and SEO

- All 21 original page files were compared against the built HTML. Every
  original `<SEO title>` rendered exactly as before with the original
  ` | KD Flowers` suffix appended.
- All descriptions match the original site default description, which the
  Gatsby site intentionally reused on every page.
- New pages (`/about/`, `/contact/`) use new, descriptive titles and the
  original site description. `/contact/` is titled simply `Contact` so the
  rendered title is `Contact | KD Flowers`.
- `/infused/` had no SEO component in Gatsby and therefore no title tag. The
  Astro page adds `Infused | KD Flowers`; no other SEO copy changed.
- Every page now has a canonical URL on `https://www.kdflowers.ca`, Open Graph
  metadata, Twitter metadata, an OG image, and a robots directive.
- `/404/` is `noindex, nofollow`; the redirect document is `noindex`.
- `/llms.txt`, `/robots.txt`, and the sitemap use the canonical `www` host.

No metadata was found missing. The only intentional additions are canonical
URLs, social images, JSON-LD, breadcrumbs, and the two new pages.

## 5. Structured data

All JSON-LD blocks were parsed and validated across all 24 HTML documents.
There were no syntax errors, missing `@context`/`@type` values, or
breadcrumb/schema mismatches.

| Page group | Schema |
| --- | --- |
| Homepage | `Florist`, `WebSite`, `WebPage` |
| 14 city pages | `Florist`, `WebPage`, `BreadcrumbList` |
| About | `AboutPage`, `BreadcrumbList` |
| Contact | `FAQPage`, `ContactPage`, `BreadcrumbList` |
| Portfolio | `ImageGallery`, `CollectionPage`, `BreadcrumbList` |
| Other inner pages | `WebPage`, `BreadcrumbList` |
| 404 | `WebPage` (noindex, no breadcrumbs) |

- Every `Florist` node uses the same `@id`:
  `https://www.kdflowers.ca/#florist`.
- No `address`, `telephone`, `email`, `geo`, `openingHours`, `priceRange`,
  `aggregateRating`, `review`, or award properties were added. Those facts are
  not published by the business and were intentionally omitted.
- Verified facts retained: business name, owner Kylee Danielle, service region,
  booking URL, Instagram, and the published ten-plus-years experience claim.
- The homepage has no visible breadcrumbs and no `BreadcrumbList`, as required.

## 6. Sitemap, robots, and AI discovery

- `/sitemap.xml` is generated by a custom Astro endpoint and contains exactly
  21 canonical URLs: homepage, About, Contact, Portfolio, Book A Consult,
  Infused, Page Two, and all 14 city pages.
- It excludes `/consult/`, `/404/`, and the redirect document.
- No `lastmod` dates are emitted because the source project has no reliable
  per-page modification dates; inventing them would be inaccurate.
- `/robots.txt` allows all crawlers and declares
  `Sitemap: https://www.kdflowers.ca/sitemap.xml`.
- `/llms.txt` is publicly available at the site root, is not blocked by
  `robots.txt`, and contains only verified business and page information.

## 7. UI, accessibility, and responsiveness

- The design system uses Libre Baskerville and Poppins, a restrained
  blush/ivory/deep-ink palette, editorial spacing, and responsive grids.
- Verified at 390 px and 1440 px: no horizontal page overflow.
- Mobile navigation opens as a full-screen panel, changes the toggle to
  `Close`, moves focus into the menu, closes on Escape or link selection, and
  restores focus to the toggle. Hidden links are removed from the tab order via
  `visibility: hidden`.
- Portfolio lightbox uses a native `<dialog>` with modal focus handling,
  previous/next controls, arrow-key navigation, backdrop/close button, captions,
  and an image counter. Tested open, next, and Escape.
- All content images are processed by Astro's image pipeline. Grid images use
  responsive `srcset`/`sizes` and lazy loading below the fold; the lightbox loads
  a pre-optimized 1600 px WebP. Hero and logo images load eagerly.
- Reduced-motion preferences disable animation and smooth scrolling.

## 8. Verification performed

- `npm run check` — 0 errors, 0 warnings, 0 hints.
- `npm run build` — 23 pages built successfully.
- Automated title/description comparison of all 21 original pages — 0
  mismatches.
- Internal link crawl of all built HTML — 67 internal URLs, 0 broken.
- JSON-LD parse/type/forbidden-property audit — 0 issues.
- Sitemap URL-set comparison — exact 21-URL match, no duplicates or redirects.
- `robots.txt` and `/llms.txt` content checks — canonical host, sitemap
  present, content allowed.
- Browser QA at 390 px and 1440 px with headless Chrome, including mobile menu
  and gallery lightbox interaction screenshots.

## 9. Intentional changes and remaining issues

### Intentional changes

- Added `/about/` and `/contact/` pages using only existing published copy and
  contact channels. No new business claims were introduced.
- Added canonical URLs, JSON-LD, breadcrumbs, OG/Twitter images, `robots.txt`,
  `/llms.txt`, and a custom sitemap; none of these existed in Gatsby.
- Added descriptive alt text to the 18 portfolio images, which originally had
  none.
- Fixed the broken Jordan CTA link and added the corresponding 301.
- Replaced `react-image-gallery` with an accessible native `<dialog>` lightbox
  to remove a client-side dependency.

### Remaining issues

1. **Analytics:** the original Universal Analytics property
   `UA-112521158-3` was retired by Google and was not carried over. A GA4
   measurement ID must be supplied by the site owner before tracking is enabled.
   No replacement ID was invented.
2. **Deployment:** the Netlify build configuration is ready (`npm run build`,
   publish `dist`, Node 22.23.4), but the production deploy itself must be
   triggered in Netlify. The current live site remains the Gatsby build until
   that deploy and DNS/domain verification are complete.
3. **Dependency audit:** `npm audit` reports one low-severity advisory in
   esbuild's development server on Windows. It does not affect the static
   production output. Run `npm audit fix` when the Astro toolchain permits the
   patched version.
4. **Sitemap `lastmod`:** omitted intentionally. Add a reliable content-date
   source if lastmod values are required.
5. **Duplicate booking URL:** `/consult/` remains reachable for compatibility
   and canonicalises to `/book-consult/`. It is excluded from the sitemap.
6. **Shared meta description:** the original site reused one default
   description on every page. It was preserved as required; unique
   per-page descriptions would be a future SEO improvement, not a migration
   requirement.
7. **Legacy archive:** `gatsby-legacy/` is reference-only. It is excluded from
   Astro checks and can be deleted once the deployment is confirmed.

## 10. File map

- Astro application: repository root (`src/`, `public/`, `astro.config.mjs`,
  `netlify.toml`).
- Original Gatsby project: `gatsby-legacy/`.
- Migration inventory and route mapping: `docs/migration-inventory.md`.
- This report: `docs/migration-report.md`.
