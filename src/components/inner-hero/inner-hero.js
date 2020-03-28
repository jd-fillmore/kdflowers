import React from "react"
import { motion } from "framer-motion"
import { Container, Row, Col } from "reactstrap"

import "../inner-hero/inner-hero.scss"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function InnerHero({ title }) {
  return (
    <section id="inner-hero">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
      >
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="text-center">{title}</h1>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </section>
  )
}

export default InnerHero
