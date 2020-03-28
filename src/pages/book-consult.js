import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner-hero/inner-hero"
import CTA from "../components/cta/cta"

const BookConsult = () => (
  <Layout>
    <SEO title="Book A Consult" />
    <Nav />
    <InnerHero title="Book A Consult" />
    <CTA />
  </Layout>
)

export default BookConsult
