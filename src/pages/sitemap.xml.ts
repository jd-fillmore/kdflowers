import type { APIRoute } from "astro"
import { serviceAreas, site } from "../data/site"

const staticRoutes = [
  "/",
  "/about/",
  "/contact/",
  "/portfolio/",
  "/reviews/",
  "/book-consult/",
  "/infused/",
  "/page-2/",
]

const routes = [
  ...staticRoutes,
  ...serviceAreas.map((area) => `/wedding-flowers-${area.slug}/`),
]

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

export const GET: APIRoute = () => {
  const urls = routes
    .map(
      (route) =>
        `  <url><loc>${escapeXml(new URL(route, site.url).href)}</loc></url>`
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
