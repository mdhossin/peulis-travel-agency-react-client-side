import React from "react";
import { Col, Row } from "react-bootstrap";
import infoImg from "../../../images/info.jpg";
import "./Info.css";

const Info = () => {
  return (
    <div className="mt-5">
      <div className="all-services">
        <div className="heading-border text-center">
          <h1 style={{ fontSize: "36px", color: "#444444" }}>Get Info</h1>
        </div>
      </div>
      <Row className="align-items-center mx-0 mt-5">
        <Col xs={12} md={6}>
          <img className="img-fluid w-100" src={infoImg} alt="" />
        </Col>
        <Col className="px-5" xs={12} md={6}>
          <h1 className="info-heading">
            Go Ahead & Make <br /> Awesome Tour
          </h1>
          <h5 style={{ color: "#444444", marginBottom: "15px" }}>
            Discover Hidden Wonders On Trips With Peulis
          </h5>
          <button className="btn-regular">Explore More</button>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
