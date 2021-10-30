import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import useAuth from "../../hooks/useAuth";
import "./MyOrder.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);

  // console.log(orders);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://dry-springs-45695.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(true);
      });
  }, [user]);

  if (!isLoading) {
    return (
      <div className="mx-auto mt-5" style={{ width: "50px" }}>
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }

  const handelDelete = (id) => {
    const procedd = window.confirm("Are you sure you want to delete?");
    if (procedd) {
      fetch(`https://dry-springs-45695.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            alert("Deleted successfully done");
            const remaining = orders?.filter((product) => product._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <>
      <div className="container my-4">
        <div className="all-services">
          <div className="heading-border">
            <h1
              style={{ color: "#44444", fontSize: "36px" }}
              className="text-center"
            >
              My Orders
            </h1>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mt-4 g-4 pb-5">
          {orders?.map((product, index) => (
            <div key={product?._id}>
              <Card className="h-100 shadow card-hover">
                <Card.Img
                  className="sevices-img"
                  variant="top"
                  src={product?.image}
                />
                <Card.Body>
                  <Card.Title className="card-title title-card">
                    <div className="heading-border mb-3">
                      <h3> {product?.name}</h3>
                    </div>
                    <div>
                      <small className="my-2" style={{ color: "#45464E" }}>
                        <FontAwesomeIcon
                          style={{ color: "#ff6d34" }}
                          className="me-1"
                          icon={faHourglassHalf}
                        />
                        {product?.time}
                      </small>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    {product?.description.slice(0, 120)}
                    <Link className="learn-more" to="/">
                      {" "}
                      ...Read more
                    </Link>
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="card-footer card-btn">
                  <div>
                    <button
                      onClick={() => handelDelete(product?._id)}
                      className="btn-regular delete-order"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="card-price">
                    <p>${product?.price}</p>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyOrders;
