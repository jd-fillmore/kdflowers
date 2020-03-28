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

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
]

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Nav />
    <InnerHero title="Portfolio" />
    <Container>
      <Row>
        <Col lg="12">
          <ImageGallery items={images} />
        </Col>
      </Row>
    </Container>
    <CTA />
  </Layout>
)

export default Portfolio
