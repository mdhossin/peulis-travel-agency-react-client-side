import React, { useState, useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";
// all services here
const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dry-springs-45695.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto mt-5" style={{ width: "50px" }}>
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }
  return (
    <div className="container my-5 ">
      <div className="all-services pb-4">
        <div className="heading-border">
          <h1 className="text-center service-heading">Our Services</h1>
        </div>
      </div>
      <div>
        <Row xs={1} md={3} className="g-4">
          {services?.map((service) => (
            <Service key={service?._id} service={service} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
