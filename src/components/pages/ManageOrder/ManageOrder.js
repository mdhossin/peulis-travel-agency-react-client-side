import React, { useEffect, useState } from "react";
import { Card, Spinner, Table } from "react-bootstrap";

import "./ManageOrder.css";
import Footer from "../../Footer/Footer";
// manage all order page
const ManageOrder = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://dry-springs-45695.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(true);
      });
  }, []);

  if (!isLoading) {
    return (
      <div className="mx-auto mt-5" style={{ width: "50px" }}>
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }

  const handelDelete = (id) => {
    console.log(id);
    const procedd = window.confirm("Are you sure you want to delete?");
    if (procedd) {
      fetch(`https://dry-springs-45695.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            alert("Deleted successfully done");
            const remaining = services?.filter((product) => product._id !== id);
            setServices(remaining);
          }
        });
    }
  };

  // const handelChange = (index) => {
  //   const data = [...services];
  //   const row = data[index];
  //   console.log(row);
  //   row.status = "approved";
  //   console.log(row.status);
  //   // data.splice(index, 1, row);
  //   // setServices({ data });
  //   data[index] = row.status;
  // };

  return (
    <>
      <div className="container my-3 main-box">
        <div className="all-services">
          <div className="heading-border">
            <h1
              className="text-center"
              style={{ color: "#444444", fontSize: "36px" }}
            >
              Manage All Orders
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
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {services?.map((product, index) => (
                <tr key={product._id} className="mt-4">
                  <td className="img-table">
                    <Card.Img
                      className="manage-img me-3"
                      src={product?.service?.image}
                    />
                    {product?.service?.name}
                  </td>
                  <td>{product?.user}</td>
                  <td>{product?.person}</td>
                  <td>
                    <button
                      // onClick={() => handelChange(index)}
                      className="btn-regular delete-order"
                    >
                      {" "}
                      {product?.status}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handelDelete(product?._id)}
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

export default ManageOrder;
