import React from "react"
import { Container, Row, Col } from "reactstrap"

import "./process.scss"

function Process({
  mainTitle,
  mainSubTitle,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  textOne,
  textTwo,
  textThree,
  textFour,
}) {
  return (
    <section id="process">
      <Container>
        <Row>
          <Col lg="12">
            <h2>{mainTitle}</h2>
            <p className="pad-btm">{mainSubTitle}</p>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <h4>{titleOne}</h4>
            <p>{textOne}</p>
          </Col>
          <Col lg="3">
            <h4>{titleTwo}</h4>
            <p>{textTwo}</p>
          </Col>
          <Col lg="3">
            <h4>{titleThree}</h4>
            <p>{textThree}</p>
          </Col>
          <Col lg="3">
            <h4>{titleFour}</h4>
            <p>{textFour}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Process
