import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../nav/nav.scss"
import logo from "../../images/logo.png"

const Nav = () => {
  return (
    <nav>
      <Container>
        <Row>
          <Col xs="2" md="6">
            <Link to="/">
              <img src={logo} alt="cheap bridal bouqets niagara" />
            </Link>
          </Col>
          <Col xs="10" md="6" className="links">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/book-consult">Book A Consult</Link>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}

export default Nav
