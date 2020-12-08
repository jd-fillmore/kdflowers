import React from "react"
import Nav from "../components/nav/nav"
import InnerHero from "../components/inner-hero/inner-hero"
import { Container, Row, Col } from "reactstrap"
import CTA from "../components/cta/cta"

const citiesNiagara = [
  {
    name: "Niagara Web Design & SEO",
    link: "https://infused.agency/",
  },
  {
    name: "Wainfleet Web Design",
    link: "https://infused.agency/wainfleet-web-design",
  },
  {
    name: "Port Colborne Web Design & SEO",
    link: "https://infused.agency/port-colborne-web-design",
  },
  {
    name: "Beamsville-Lincoln Web Design & SEO",
    link: "https://infused.agency/beamsville-lincoln-web-design",
  },
  {
    name: "Grimsby Web Design & SEO",
    link: "https://infused.agency/grimsby-web-design",
  },
  {
    name: "Fort Erie Web Design & SEO",
    link: "https://infused.agency/fort-erie-web-design",
  },
  {
    name: "Thorold Web Design & SEO",
    link: "https://infused.agency/thorold-web-design",
  },
  {
    name: "Smithville Web Design & SEO",
    link: "https://infused.agency/smithville-web-design",
  },
  {
    name: "Pelham Web Design & SEO",
    link: "https://infused.agency/pelham-web-design",
  },
  {
    name: "Niagara-on-the-Lake Web Design & SEO",
    link: "https://infused.agency/niagara-on-the-lake-web-design",
  },
]

const citiesHamilton = [
  {
    name: "Hamilton Web Design & SEO",
    link: "https://infused.agency/hamilton-web-design",
  },
  {
    name: "Waterdown Web Design & SEO",
    link: "https://infused.agency/waterdown-web-design",
  },
  {
    name: "Dundas Web Design & SEO",
    link: "https://infused.agency/dundas-web-design",
  },
  {
    name: "Ancaster Web Design & SEO",
    link: "https://infused.agency/ancaster-web-design",
  },
  {
    name: "Stoney Creek Web Design & SEO",
    link: "https://infused.agency/stoney-creek-web-design",
  },
  {
    name: "Burlington Web Design & SEO",
    link: "https://infused.agency/burlington-web-design",
  },
  {
    name: "Caledonia Web Design & SEO",
    link: "https://infused.agency/caledonia-web-design",
  },
  {
    name: "Binbrook Web Design & SEO",
    link: "https://infused.agency/binbrook-web-design",
  },
]

const Infused = () => (
  <>
    <Nav />
    <InnerHero title="Infused" />
    <section id="main-content" className="infused">
      <Container>
        <Row>
          <Col lg="12">
            <p>A Niagara-based web design, development &amp; SEO company.</p>
            <p>Areas served:</p>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <h5>Niagara</h5>
            <ul>
              {citiesNiagara.map(city => (
                <li>
                  <a href={city.link} rel="noreferrer" target="_blank">
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="6">
            <h5>Hamilton</h5>
            <ul>
              {citiesHamilton.map(city => (
                <li>
                  <a href={city.link} rel="noreferrer" target="_blank">
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
    <CTA />
  </>
)

export default Infused
