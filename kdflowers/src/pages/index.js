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
import Nav from "../components/nav/nav"
import Intro from "../components/intro/intro"
import About from "../components/about/about"
import CTA from "../components/cta/cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Affordable Wedding Flowers Niagara, Cheap Bridal Bouquets" />
    <Nav />
    <Hero
      title="Affordable Wedding Flowers &amp; Bridal Bouquets in Niagara"
      subTitle="Quality wedding flowers &amp; bridal bouquets at an affordable price"
      btnText="Book A Consult"
    />
    <Intro
      title="Niagara Wedding Flowers &amp; Bridal Bouquets"
      text="Are you looking for a wedding flowers or bridal bouquets in Niagara? You've come to the right person! I've been helping brides, their groomsmen and woman people for over 10 years by making them look good on their beautiful day. To see some of work, check out my portfolio by clicking the button below."
      imgAlt="affordable wedding flowers niagara"
      btnText="View Portfolio"
    />
    <About
      title="Kylee Danielle"
      subTitle="Owner of KD Flowers"
      text="Growing up, I never thought I would appreciate the beauty in floral as much as I do now. My name is Kylee Danielle, I am from Niagara, Ontario and I have a passion for floral design, and all things beautiful.

      For over ten years, I have been helping people create their vision for the most important days of their lives. Whether it’s for a wedding, bridal shower, or baby shower, I will put the love and passion into my designs to make your special day blossom!

      If you are looking for a affordable wedding flowers or cheap bridal bouquets in Niagara, that are of amazing quality, please feel free to contact me through the button below for a free consultation."
      imgAlt="cheap bridal bouquets niagara"
      btnText="Book A Consult"
    />
    <CTA />
  </Layout>
)

export default IndexPage
