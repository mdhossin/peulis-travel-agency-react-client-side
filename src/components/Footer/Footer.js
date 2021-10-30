import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";
import logo from "../../images/logo-2.png";
import pay from "../../images/pay.png";
import "./Footer.css";
// shared footer page
const Footer = () => {
  return (
    <div className="background-footer">
      <div className=" container pt-5">
        <Row>
          <Col xs={6} md={3}>
            <img className="img-fluid footer-img" src={logo} alt="" />
            <h2>Follow Us</h2>
            <div className="d-flex">
              <div className="icon instagram">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <div className="icon twitter ms-2">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </div>
              <div className="icon youtube ms-2">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="icon facebook ms-2">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <h5>About Us</h5>
            <p>Why Us</p>
            <p>Why Touring</p>
            <p>Reviews</p>
            <p>Travel Insurance</p>
          </Col>
          <Col xs={6} md={3}>
            <h5>Support</h5>
            <p>Account</p>
            <p>Client Area</p>
            <p>Privacy & Policy</p>
            <p>Author Hangout</p>
          </Col>
          <Col xs={6} md={3}>
            <h4>Pay Safely</h4>
            <p>Our responsiblity payment your safety</p>
            <img className="img-fluid" src={pay} alt="" />
          </Col>
        </Row>
        <div>
          <p
            style={{
              textAlign: "center",
              marginTop: "40px",
              paddingBottom: "20px",
              color: "#999999",
            }}
          >
            2021 All Rights Reserved by &copy; Peulis Travel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
