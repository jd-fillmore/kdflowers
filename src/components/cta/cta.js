import React from "react"
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
              <h2>
                Need affordable wedding flowers or a cheap bridal bouquet?
              </h2>
              <p>
                Fill out the form and I'll get back to you as soon as I can.
              </p>
            </Col>
            <Col lg="6">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div class="form-group">
                  <input
                    name="name"
                    type="name"
                    class="form-control"
                    id="Name"
                    aria-describedby="namehelp"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="Email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    class="form-control"
                    id="Message"
                    rows="3"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  )
}

export default CTA
