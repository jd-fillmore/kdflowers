import React from "react"
import { Container, Row, Col } from "reactstrap"

import "./testimonial.scss"
import testimonialImg from "../../images/testimonial.jpg"

function Testimonial({ title, text, author, imgAlt }) {
  return (
    <section id="testimonial">
      <Container>
        <Row>
          <Col lg="6">
            <h2>{title}</h2>
            <p>
              <em>"{text}"</em>
            </p>
            <p>- {author}</p>
          </Col>
          <Col lg={{ size: 5, offset: 1 }}>
            <img src={testimonialImg} alt={imgAlt} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
