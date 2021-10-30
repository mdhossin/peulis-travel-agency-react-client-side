import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import imgOne from "../../../images/why/choose-1.png";
import imgTwo from "../../../images/why/choose-2.png";
import imgThree from "../../../images/why/choose-3.png";
import "./WhyPeulis.css";
// why peulis choose
const WhyPeulis = () => {
  return (
    <>
      <div className="container my-5">
        <div className="all-services">
          <div className="heading-border">
            <h1
              className="text-center"
              style={{ fontSize: "42px", color: "#444444" }}
            >
              Why Peulis?
            </h1>
          </div>
        </div>
        <p className="text-center pb-4 pt-2">
          <small> We privided best services in the world.</small>
        </p>
        <Row>
          <Col xs={12} md={4}>
            <Card className="h-100 shadow card-hover pt-4 single-card card-hover">
              <div className="d-flex justify-content-between align-items-center single-img px-4">
                <Card.Img variant="top" src={imgOne} />
                <p>01</p>
              </div>
              <Card.Body>
                <Card.Title className="card-title title">
                  <h3>Safe Travel</h3>
                </Card.Title>
                <p>Your safety is our first priority. </p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-magin" xs={12} md={4}>
            <Card className="h-100 shadow card-hover pt-4 single-card">
              <div className="d-flex justify-content-between align-items-center single-img px-4">
                <Card.Img variant="top" src={imgTwo} />
                <p>02</p>
              </div>
              <Card.Body>
                <Card.Title className="card-title title">
                  <h3>Awesome Guide</h3>
                </Card.Title>
                <p>We provide you best guide . </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="h-100 shadow card-hover pt-4 single-card ">
              <div className="d-flex justify-content-between align-items-center single-img px-4">
                <Card.Img variant="top" src={imgThree} />
                <p>03</p>
              </div>
              <Card.Body>
                <Card.Title className="card-title title">
                  <h3>Save Money</h3>
                </Card.Title>
                <p>Save money for travel offering package.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WhyPeulis;
