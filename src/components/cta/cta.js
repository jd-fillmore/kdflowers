import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"

import "./cta.scss"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function CTA({ title, text }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <section id="cta">
        <Container>
          <Row>
            <Col lg="6">
              <h2>Need affordable wedding flowers or a bridal bouquet?</h2>
              <br />
              <p>
                Click on the 'book a consult' button to book your free
                consultation.
              </p>
              <a
                href="https://calendly.com/kdflowers/free-consult"
                target="_blank"
              >
                <button>Book a consult</button>
              </a>
            </Col>
            <Col lg="6">
              <h5>Areas served</h5>
              <p>
                <Link to="/wedding-flowers-beamsville">Beamsville</Link>,{""}
                <Link to="/wedding-flowers-fonthill">Fonthill</Link>,
                <Link to="/wedding-flowers-fort-erie">Fort Erie</Link>,
                <Link to="/wedding-flowers-grimsby">Grimsby</Link>,
                <Link to="/wedding-flowers-jordan-on">Jordan</Link>,
                <Link to="/wedding-flowers-pelham">Pelham</Link>,
                <Link to="/wedding-flowers-port-colborne">Port Colborne</Link>,
                <Link to="/wedding-flowers-smithville">Smithville</Link>,
                <Link to="/wedding-flowers-thorold">Thorold</Link>,
                <Link to="/wedding-flowers-vineland">Vineland</Link>,
                <Link to="/wedding-flowers-virgil">Virgil</Link>,
                <Link to="/wedding-flowers-wainfleet">Wainfleet</Link>,
                <Link to="/wedding-flowers-welland">Welland</Link>,
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="12">
              <p>
                <a href="https://infused.agency">Niagara web design</a> by
                Infused Agency
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  )
}

export default CTA
