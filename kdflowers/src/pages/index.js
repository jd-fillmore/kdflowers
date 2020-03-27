import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/button.scss"
import "../components/breakpoints.scss"
import "../components/general.scss"
import "../components/typography.scss"
import "../components/variables.scss"

import Hero from "../components/hero/hero"
import ServiceOne from "../components/serviceOne/serviceOne"

const IndexPage = () => (
  <Layout>
    <SEO title="Affordable Wedding Flowers Niagara, Cheap Bridal Bouquets" />
    <Hero
      title="Affordable Wedding Flowers &amp; Bridal Bouquets in Niagara"
      subTitle="Quality wedding flowers at an affordable price"
    />
    <ServiceOne
      title="Wedding Flowers"
      text="fdsfsafasd"
      imgAlt="affordable wedding flowers niagara"
    />
  </Layout>
)

export default IndexPage
