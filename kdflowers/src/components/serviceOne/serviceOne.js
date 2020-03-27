import React from "react"
import { Container, Row, Col } from "reactstrap"

import "./service-one.scss"
import introImg from "../../images/affordable-wedding-flowers-niagara.jpg"

function serviceOne({ title, text, imgAlt }) {
  return (
    <section id="service-one">
      <Container>
        <Row>
          <Col lg="6">
            <h1>{title}</h1>
            <p>{text}</p>
          </Col>
          <Col lg="6">
            <img src={introImg} alt={imgAlt} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default serviceOne
