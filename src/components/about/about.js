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
              <p>
                Growing up, I never thought I would appreciate the beauty in
                floral as much as I do now. My name is Kylee Danielle, I am from
                Niagara, Ontario and I have a passion for floral design, and all
                things beautiful.
                <br />
                <br />
                My daughter Iris has become a new inspiration for me. Being a
                new mom has only given me even more ambition to grow my business
                and help to make more brides dreams come true! For over ten
                years, I have been helping brides create their vision for the
                most important day of their lives. I strive to put the love and
                passion into my designs to make your special day blossom!
                <br />
                <br />
                If you are looking for affordable wedding flowers or inexpensive
                bridal bouquets in Niagara, that are of amazing quality, I would
                love to meet with you to discuss your vision for your special
                day. Please feel free to book a consultation with me through the
                link in the upper right hand corner. I look forward to meeting
                you!
              </p>
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
