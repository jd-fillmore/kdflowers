import { serviceAreas, site } from "../data/site"

export const businessId = `${site.url}/#florist`
export const websiteId = `${site.url}/#website`

export type BreadcrumbItem = {
  label: string
  href?: string
}

function absoluteUrl(path: string) {
  return new URL(path, site.url).href
}

export function floristSchema() {
  const areaServed = [
    { "@type": "AdministrativeArea", name: "Niagara Region" },
    { "@type": "City", name: "St. Catharines" },
    ...serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
  ]

  return {
    "@context": "https://schema.org",
    "@type": "Florist",
    "@id": businessId,
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/og-image.jpg`,
    description: site.description,
    sameAs: [site.instagram],
    areaServed,
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: `${site.url}/`,
    name: site.name,
    description: site.description,
    inLanguage: "en-CA",
    publisher: { "@id": businessId },
  }
}

export function webPageSchema(options: {
  url: string
  title: string
  description: string
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage"
}) {
  return {
    "@context": "https://schema.org",
    "@type": options.type ?? "WebPage",
    "@id": `${options.url}#webpage`,
    url: options.url,
    name: options.title,
    description: options.description,
    inLanguage: "en-CA",
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
  }
}

export function breadcrumbSchema(
  url: string,
  items: BreadcrumbItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href ?? new URL(url).pathname),
    })),
  }
}

export function imageGallerySchema(
  url: string,
  images: Array<{ contentUrl: string; caption: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${url}#gallery`,
    name: "KD Flowers wedding flower portfolio",
    image: images.map((image) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(image.contentUrl),
      caption: image.caption,
    })),
  }
}

export function canonicalUrl(path: string) {
  return absoluteUrl(path)
}
