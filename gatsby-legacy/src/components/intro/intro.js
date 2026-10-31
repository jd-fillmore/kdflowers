import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import "./intro.scss"
import introImg from "../../images/affordable-wedding-flowers-niagara.jpg"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function Intro({ title, text, imgAlt, btnText }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <section id="intro">
        <Container>
          <Row>
            <Col lg="6">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link to="/portfolio">
                <button>{btnText}</button>
              </Link>
            </Col>
            <Col lg={{ size: 5, offset: 1 }}>
              <img src={introImg} alt={imgAlt} />
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  )
}

export default Intro
