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
import Process from "../components/process/process"
import Testimonial from "../components/testimonial/testimonial"
import CTA from "../components/cta/cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Affordable Wedding Flowers Niagara, St. Catharines Bridal Bouquets" />
    <Nav />
    <Hero
      title="Affordable Wedding Flowers &amp; Bridal Bouquets in Niagara &amp; St. Catharines"
      subTitle="Quality wedding flowers &amp; bridal bouquets at an affordable price"
      btnText="Book A Consult"
    />
    <Intro
      title="Niagara Wedding Flowers &amp; St. Catharines Bridal Bouquets"
      text="KD Flowers wedding floral design focuses on one goal - creating lasting beautiful memories by designing personalized, elegant and lavish wedding flowers for brides and grooms all over Niagara &amp; St. Catharines. Designing and creating wedding flowers is my passion and I do my best to make sure your wedding flowers reflect your style and love for each other. I work to capture all your wedding fantasies and make them a dream come true!"
      imgAlt="affordable wedding flowers niagara"
      btnText="View Portfolio"
    />
    <About
      title="Kylee Danielle"
      subTitle="Owner of KD Flowers"
      imgAlt="cheap bridal bouquets niagara and st. catharines"
      btnText="Book A Consult"
    />
    <Process
      mainTitle="My Process"
      mainSubTitle="How I can help you"
      titleOne="Consultation"
      titleTwo="Plan"
      titleThree="Ordering Process"
      titleFour="Design &amp; Create"
      textOne="Generally I prefer to meet my bride in person to discuss their
      vision for their big day! If that is not a possibility, I have no
      problem connecting via e-mail, phone call or text."
      textTwo="Once I have an idea of your vision, I do my best to put it into perspective. Collecting all of your thoughts and imaginative ideas helps me give suggestions and envision what you are dreaming for your special day! Once I know what flowers, design, and style you fantasize about, I process an estimate which includes cost of flowers, labour and delivery."
      textThree="I work out of my home, therefore I do not have my own warehouse full of flowers (as much as I would love that!). I always tell my brides they are welcome to have their flowers purchased from wherever they prefer. If there is no preference, I order from a local florist who has been very helpful and accommodating."
      textFour="Once I have everything in order, I put my heart and soul into designing and creating your wedding flowers!"
    />
    <Testimonial
      title="Client Testimonial"
      text="Kylee did an amazing job on your flowers! They turned out stunning! She was always answering my silly questions I might have and is amazing to work with. Amazing prices for what we requested. Thank you Kylee for our beautiful flowers!!"
      author="Denice V."
      imgAlt="KD Flowers Testimonial"
    />
    <CTA />
  </Layout>
)

export default IndexPage
