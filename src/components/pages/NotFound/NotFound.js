import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

import "./NotFound.css";
// not found page
const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="error-page text-center">
          <h1 className="fw-bold ">
            404 <span style={{ color: "#fb814e" }}>ERROR !</span>
          </h1>
          <h1 className="fw-blod">Page Not Found!</h1>
          <p>
            Sorry, we can't find the page you are looking for. Please go to{" "}
            <span style={{ color: "#fb814e" }}>
              <Link className="error-link" to="/">
                Home
              </Link>
            </span>{" "}
            .
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
