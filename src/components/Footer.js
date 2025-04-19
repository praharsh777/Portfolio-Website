import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          {/* Logo at the Top */}
          <Col xs={12} className="text-center">
            <img src={logo} alt="Logo" className="footer-logo"/>
          </Col>

          {/* Social Icons Below the Logo */}
          <Col xs={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/m-praharsh-sai-77b1ab275">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/share/16CENCwh2P/">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/m_praharsh777">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </Col>

          {/* Copyright Notice at the Bottom */}
          <Col xs={12} className="text-center">
            <p>&copy; 2025 Praharsh Sai. Feel free to contact and collaborate!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};