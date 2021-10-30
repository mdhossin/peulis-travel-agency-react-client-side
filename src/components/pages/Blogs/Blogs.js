import { faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogOne from "../../../images/blog/blog-1.png";
import blogTwo from "../../../images/blog/blog-2.png";

import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container my-5">
      <div className="all-services">
        <div className="heading-border">
          <h1
            style={{ color: "#444444", fontSize: "36px" }}
            className="text-center"
          >
            Latest Blog
          </h1>
        </div>
      </div>
      <Row xs={1} md={2} className="g-4 mt-4">
        <Col>
          <Card className="h-100 shadow card-hover">
            <Card.Img className="sevices-img" variant="top" src={blogOne} />
            <Card.Body>
              <Card.Title className="card-title title-card">
                <div className="mt-2">
                  <button className="btn-regular">20 FEB, 2021</button>
                  <span>
                    <small className="comment ms-4">
                      <FontAwesomeIcon
                        style={{ color: "#fc6124" }}
                        className="me-1"
                        icon={faUser}
                      />
                      John Doe
                    </small>
                  </span>
                  <span>
                    <small className="comment ms-4">
                      <FontAwesomeIcon
                        style={{ color: "#fc6124" }}
                        className="me-1"
                        icon={faComment}
                      />
                      3 comments
                    </small>
                  </span>
                </div>
                <div className="mb-3 mt-3">
                  <h3>Tips To Reduce Your Travel Costs</h3>
                </div>
              </Card.Title>
              <Card.Text className="read-text">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration...{" "}
                <Link to="/"> Read More</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow card-hover">
            <Card.Img className="sevices-img" variant="top" src={blogTwo} />
            <Card.Body>
              <Card.Title className="card-title title-card">
                <div className="mt-2">
                  <button className="btn-regular">22 FEB, 2021</button>
                  <span>
                    <small className="comment ms-4">
                      <FontAwesomeIcon
                        style={{ color: "#fc6124" }}
                        className="me-1"
                        icon={faUser}
                      />{" "}
                      Linia Gomez
                    </small>
                  </span>
                  <span>
                    <small className="comment ms-4">
                      <FontAwesomeIcon
                        style={{ color: "#fc6124" }}
                        className="me-1"
                        icon={faComment}
                      />
                      6 comments
                    </small>
                  </span>
                </div>
                <div className="mb-3 mt-3">
                  <h3>Your Card Processing Forms</h3>
                </div>
              </Card.Title>
              <Card.Text className="read-text">
                The site of the Taj Mahal is separated from the exterior by a
                high rectangular rampart, elongated, oriented South-North. The
                interior is... <Link to="/"> Read More</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
