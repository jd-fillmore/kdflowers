import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../hero/hero.scss"

function Hero({ title, subTitle }) {
  return (
    <section id="hero">
      <Container>
        <Row>
          <Col lg="9">
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <Link to="/get-a-quote">
              <button>Get A Free Quote</button>
            </Link>
          </Col>
          <Col lg="3">&nbsp;</Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
