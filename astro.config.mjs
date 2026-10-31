import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://www.kdflowers.ca",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  redirects: {
    "/wedding-flowers-jordan-on": "/wedding-flowers-jordan-ontario/",
    "/therapist-seo/british-columbia/vancouver":
      "https://infused.agency/seo-for-therapists-vancouver/",
  },
})
