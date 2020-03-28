import React from "react"
import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import "./about.scss"
import aboutImg from "../../images/cheap-bridal-bouquets-niagara.jpg"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function About({ title, subTitle, text, imgAlt, btnText }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <section id="about">
        <Container>
          <Row>
            <Col lg="6">
              <img src={aboutImg} alt={imgAlt} />
            </Col>
            <Col lg={{ size: 5, offset: 1 }}>
              <h2>{title}</h2>
              <h4>{subTitle}</h4>
              <p>{text}</p>
              <Link to="/book-consult">
                <button>{btnText}</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  )
}

export default About
