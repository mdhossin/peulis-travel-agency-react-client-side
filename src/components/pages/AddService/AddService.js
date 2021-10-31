import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Footer from "../../Footer/Footer";
import "./AddService.css";
// add service page
const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const product = data;
    fetch("https://dry-springs-45695.herokuapp.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.insertedId);
        if (result.insertedId) {
          swal("Good job!", "Service added successfully", "success");
          reset();
        }
      });
  };
  return (
    <>
      <div className="change-background">
        <div className="container mt-4">
          <div className="text-center mb-4">
            <h1>Add New Service</h1>
          </div>
          <div className="form-box">
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                type="text"
                className="form-control"
                {...register("name")}
                required
                placeholder="Add tour location..."
              />

              <input
                className="form-control my-3"
                type="number"
                {...register("price")}
                required
                placeholder="Add price..."
              />
              <input
                className="form-control my-3"
                type="text"
                {...register("time")}
                required
                placeholder="Tour time like.. 5 Days / 6 Nights..."
              />

              {/* include validation with required or other standard HTML validation rules */}
              <input
                className=" form-control my-3"
                {...register("description", { required: true })}
                required
                placeholder="Add tour description..."
              />

              <input
                {...register("image", { required: true })}
                placeholder="Add image link..."
                className="form-control my-3"
                required
              />

              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <input
                className="btn-regular mb-3"
                type="submit"
                value="Add New Service"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddService;
