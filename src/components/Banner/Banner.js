import React from "react";
import image from "../../images/Group 12.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-end align-items-center">
        <div className="col-lg-6 mb-4 ">
          <p>
            <small className="text-warning fw-bold my-4">
              Sale up to 70% off
            </small>
          </p>
          <h1 className="heading">New Collection For Fall</h1>
          <h4>Discover all the new arrivals of ready-to-wear collection</h4>
          <button className="btn btn-warning my-4 fw-bold">SHOP NOW</button>
        </div>
        <div className="col-lg-6 img-container d-flex justify-content-center align-items-end ">
          <img className="" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
