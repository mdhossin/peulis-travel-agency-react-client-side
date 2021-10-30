import React, { useEffect, useState } from "react";
import { Card, Spinner, Table } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import useAuth from "../../hooks/useAuth";
import "./MyOrder.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

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
        <div className="my-5">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th className="text-center">Tour Detail</th>
                <th>User Name</th>
                <th>Person</th>
                <th>Price</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr key={order?._id}>
                  <td className="img-table">
                    <Card.Img
                      className="manage-img me-3"
                      src={order?.service?.image}
                    />
                    {order?.service?.name}
                  </td>
                  <td>{order?.user}</td>
                  <td>{order?.person}</td>
                  <td>${order?.service?.price}</td>
                  <td>{order?.status}</td>
                  <td>
                    <button
                      onClick={() => handelDelete(order?._id)}
                      className="btn-regular btn-delete"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyOrders;
