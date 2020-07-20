import React, { useState } from "react";
import { Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import airpodsPro from "../static/images/airpodsPro1.jpeg";
import allairpods from "../static/images/allairpods.png";

const containerStyle = {
  marginTop: "100px",
  padding: "30px",
};

const imageStyle = {
  width: "100%",
};

const buttonStyle = {
  backgroundColor: "#3891DE",
  padding: "5px 70px",
  borderRadius: "5px",
  border: "1px solid #0070C9",
};

const Home = (props) => {
  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-sm-4">
          <p className="text-warning">Free Engraving</p>
          <h3>AirPods Pro</h3>
          <p>$41.50/mo.per month for 6 mo.</p>
          <Link to="#">
            Learn how to pay monthly at 0% APR with Apple Card Monthly
            Installments
          </Link>
          <hr />
          <p>
            To purchase with monthly pricing, add this item to your Bag and
            check out with Apple Card Monthly Installments.
          </p>
          <button className="btn text-white" style={buttonStyle}>
            Add to Bag
          </button>
          <hr />
          <p>
            <i class="fal fa-comments"></i> Need some help?{" "}
            <Link to="#">Contact us.</Link>{" "}
          </p>
        </div>
        <div className="col-sm-4 ml-auto">
          <img src={airpodsPro} alt="airpodsPro" style={imageStyle} />
        </div>
      </div>

      <div>
        <img src={allairpods} alt="all-air-pods" style={imageStyle} />
      </div>
      <hr />
    </div>
  );
};

export default Home;
