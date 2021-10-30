import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AboutUs.css";
import aboutImg from "../../images/about-2.jpg";
import Footer from "../Footer/Footer";
const AboutUs = () => {
  return (
    <>
      <div className="about-background ">
        <div className="about-text text-center all-services">
          <h1>About Us</h1>

          <button className="btn-regular">Read More</button>
        </div>
      </div>
      <div>
        <Row className="align-items-center mx-0 my-5">
          <Col className="px-5 about-heading" xs={12} md={6}>
            <h5>About Us</h5>
            <h1 className="info-heading">The Best Travel Agency Company.</h1>
            <p>
              Technology's effects on the travel industry are widespread, with
              innovation signaling the dawn of a new age of travel products and
              services after the birth of the Internet and modern-communication
              systems. Not only has the industry itself benefited from recent
              technological advancements such as with GPS in rental cars, Wifi
              on airplanes, and computerized hotel door locks, just to name a
              few, but consumers have as well through the rise of countless
              travel websites and apps devoted to enhancing the customer
              experience from beginning to end.
            </p>
            <button className="btn-regular">Read More</button>
          </Col>
          <Col xs={12} md={6}>
            <img className="img-fluid w-100" src={aboutImg} alt="" />
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
