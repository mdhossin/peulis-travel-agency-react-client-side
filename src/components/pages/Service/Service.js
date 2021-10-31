import { faFlag, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { _id, name, price, time, image, description } = props?.service;
  return (
    <div>
      <Card className="h-100 shadow card-hover">
        <Card.Img className="sevices-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title className="card-title title-card">
            <div className="heading-border mb-3">
              <h3 style={{ color: "#444444" }}> {name}</h3>
            </div>
            <div className="service-time">
              <small className="my-5" style={{ color: "#45464E" }}>
                <FontAwesomeIcon
                  style={{ color: "#ff6d34" }}
                  className="me-1"
                  icon={faHourglassHalf}
                />
                {time}
              </small>
            </div>
          </Card.Title>
          <Card.Text>
            {description.slice(0, 120)}
            <Link className="learn-more" to="/">
              {" "}
              ...Read more
            </Link>
          </Card.Text>
        </Card.Body>

        <Card.Footer className="card-footer card-btn">
          <div>
            <Link to={`/placeorder/${_id}`}>
              <button className="btn-regular">
                <FontAwesomeIcon className="me-2" icon={faFlag} />
                Buy Now
              </button>
            </Link>
          </div>
          <div className="card-price">
            <p>${price}</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;
