import React from "react";
import { Carousel } from "react-bootstrap";
import sliderOne from "../../../images/banner/9.jpg";
import sliderTwo from "../../../images/banner/7.jpg";
import sliderThree from "../../../images/banner/8.jpg";
import "./Banner.css";
// banner page
const Banner = () => {
  return (
    <div>
      <div className="carousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="w-100 slider-img"
              src={sliderOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="mx-auto w-75 text-center pb-5 slider-text">
                <span className="d-block text-start">
                  <span>Travel With Us</span>
                </span>
                <h1 className="main-heading text-start">Discover wildlife</h1>

                <p>
                  Acquaint yourself with old friends and discover the unusual
                  species of wildlife and birds that call Victoria's waterways,
                  zoos and reserves home.
                </p>

                <button className="btn-regular ">FIND OUT MORE</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={sliderTwo}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="mx-auto w-75 text-center pb-5 slider-text">
                <span className="d-block text-start">
                  <span>Travel With Us</span>
                </span>
                <h1 className="main-heading text-start">ENJOY ADVENTURE</h1>

                <p>
                  A journey of a 1000 miles starts with a single step. Import
                  the full demo content with 1 click and create a head-turning
                  website for your travel agency.
                </p>

                <button className="btn-regular">FIND OUT MORE</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={sliderThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="mx-auto w-75 text-center pb-5 slider-text bannder-slider">
                <span className="d-block text-start">
                  <span>Travel With Us</span>
                </span>
                <h1 className="main-heading text-start">Events Capital</h1>

                <p>
                  Victoria's events calendar is packed: music, film and design
                  festivals, major exhibitions, sports events, theatre, and food
                  and wine celebrations.
                </p>
                <button className="btn-regular">FIND OUT MORE</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
