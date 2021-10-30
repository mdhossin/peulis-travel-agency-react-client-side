import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import "./PlaceOrder.css";
import Footer from "../../Footer/Footer";
import useAuth from "../../hooks/useAuth";
// placeorder page for order
const PlaceOrder = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useAuth();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dry-springs-45695.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, []);

  const onSubmit = (data) => {
    data.service = product;
    data.email = user?.email;
    data.status = "Pending";
    fetch("https://dry-springs-45695.herokuapp.com/placeorder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order processed successfully");
          reset();
        }
      });
  };

  if (isLoading) {
    return (
      <div className="mx-auto mt-5" style={{ width: "50px" }}>
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }
  return (
    <>
      <div className="container my-5">
        <div className="all-services mb-5">
          <div className="heading-border text-center ">
            <h1>Tour Details</h1>
          </div>
        </div>
        <div>
          <Row className="place-order-box">
            <Col xs={12} md={6}>
              <div className="d-flex align-items-center pb-3 description-box">
                <h2 style={{ color: "#444444" }}>{product?.name}</h2>
                <span className="fw-bold ms-5 main-price">
                  <small
                    className="price-text"
                    style={{ color: "#ff6d34", fontSize: "22px" }}
                  >
                    ${product?.price}
                  </small>{" "}
                  / Per Person
                </span>
              </div>
              <div>
                <img className="img-fluid" src={product?.image} alt="" />
                <p className="mt-4 product-text">{product?.description}</p>
              </div>
            </Col>
            <Col xs={12} md={6} className="form-description">
              <div className="form-box">
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}

                  <input
                    className="form-control my-3"
                    defaultValue={user?.displayName}
                    placeholder="Name"
                    {...register("user", { required: true })}
                    required
                  />
                  <input
                    className="form-control my-3"
                    defaultValue={user?.email}
                    placeholder="Email"
                    {...register("email", { required: true })}
                    required
                  />

                  <input
                    className="form-control my-3"
                    type="number"
                    {...register("number")}
                    required
                    placeholder="Phone Number"
                  />

                  {/* include validation with required or other standard HTML validation rules */}
                  <input
                    className=" form-control my-3"
                    type="date"
                    {...register("date", { required: true })}
                    required
                    placeholder="Departure Date"
                  />

                  <select
                    {...register("person")}
                    className=" form-control my-3"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <br />
                  <input
                    className="btn-regular mb-3 order-btn"
                    type="submit"
                    value="Place Order"
                  />
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PlaceOrder;
