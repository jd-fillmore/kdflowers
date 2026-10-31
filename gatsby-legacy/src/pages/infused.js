import React from "react"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner-hero/inner-hero"
import { Container, Row, Col } from "reactstrap"
import CTA from "../components/cta/cta"

const Infused = () => (
  <>
    <Nav />
    <InnerHero title="Infused" />
    <section id="main-content" className="infused">
      <Container>
        <Row>
          <Col lg="12">
            <p>
              KD Flowers hired Infused Agency to help build them a modern
              website. Along with this, they wanted to rank in Google for a few
              different local keywords. The idea was to get a reputable website
              up and running, but to also attract local clients.
            </p>
            <p>
              At the time of this post, KD Flowers ranks on the first page of
              Google for a myriad of local keywords that her customers search
              for. She continues to get many leads a month solely through SEO
              efforts.
            </p>
            <p>
              If you're a business looking for a new website, or you'd like to
              rank high in Google for more customers to find you which will lead
              to more revenue, contact one of the top{" "}
              <a href="https://infused.agency">Niagara web design</a> and{" "}
              <a href="https://infused.agency">Niagara SEO</a> companies for a
              free quote today.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <CTA />
  </>
)

export default Infused
