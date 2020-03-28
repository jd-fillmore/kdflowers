import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import "../hero/hero.scss"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function Hero({ title, subTitle, btnText }) {
  return (
    <section id="hero">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
      >
        <Container>
          <Row>
            <Col lg="9">
              <h1>{title}</h1>

              <h2>{subTitle}</h2>

              <Link to="/book-consult">
                <button>{btnText}</button>
              </Link>
            </Col>
            <Col lg="3">&nbsp;</Col>
          </Row>
        </Container>
      </motion.div>
    </section>
  )
}

export default Hero
