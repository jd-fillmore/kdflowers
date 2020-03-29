import React from "react"
import { Container, Row, Col } from "reactstrap"
import ImageGallery from "react-image-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner-hero/inner-hero"
import CTA from "../components/cta/cta"

import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss"
import "../components/image-gallery.scss"
import "../components/portfolio.scss"

import imageOne from "../images/1.jpg"
import imageTwo from "../images/2.jpg"
import imageThree from "../images/3.jpg"
import imageFour from "../images/4.jpg"
import imageFive from "../images/5.jpg"
import imageSix from "../images/6.jpg"
import imageSeven from "../images/7.jpg"
import imageEight from "../images/8.jpg"
import imageNine from "../images/9.jpg"
import imageTen from "../images/10.jpg"
import imageEleven from "../images/11.jpg"

const images = [
  {
    original: imageOne,
    thumbnail: imageOne,
  },
  {
    original: imageTwo,
    thumbnail: imageTwo,
  },
  {
    original: imageThree,
    thumbnail: imageThree,
  },
  {
    original: imageFour,
    thumbnail: imageFour,
  },
  {
    original: imageFive,
    thumbnail: imageFive,
  },
  {
    original: imageSix,
    thumbnail: imageSix,
  },
  {
    original: imageSeven,
    thumbnail: imageSeven,
  },
  {
    original: imageEight,
    thumbnail: imageEight,
  },
  {
    original: imageNine,
    thumbnail: imageNine,
  },
  {
    original: imageTen,
    thumbnail: imageTen,
  },
  {
    original: imageEleven,
    thumbnail: imageEleven,
  },
]

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Nav />
    <InnerHero title="Portfolio" />
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12">
            <ImageGallery items={images} />
            <br />
            <a
              href="https://instagram.com/kdflowersniagara"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button id="instagram">View More Photos</button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
    <CTA />
  </Layout>
)

export default Portfolio
