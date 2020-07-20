import React, { useState } from "react";
import { Link } from "@reach/router";
import "../static/styles/css/home.scss";

import iPhoneSE from "../static/images/home/iPhoneSE.jpg";
import iPhone11 from "../static/images/home/iPhone11.jpg";
import TomHanks from "../static/images/home/tomHanks.jpg";

const Home = (props) => {
  return (
    <div className="home-wrapper">
      <div className="iphoneSE text-center text-white">
        <h1>iPhone SE</h1>
        <h4>Lots to love. Less to spend.</h4>
        <h4>Starting at $399</h4>
        <p className="text-secondary">From $9.54/mo. or $299 trade-in.</p>
        <Link to="#">
          Learn More <i class="fal fa-chevron-right"></i>
        </Link>{" "}
        <Link to="#">
          Buy <i class="fal fa-chevron-right"></i>
        </Link>
        <div className="container">
          <img src={iPhoneSE} alt="iphone-SE" />
        </div>
      </div>
      <div className="iphone11 text-center">
        <h1>iPhone 11</h1>
        <h4>Lots to love. Less to spend.</h4>
        <h4>Starting at $399</h4>
        <p className="text-secondary">From $9.54/mo. or $299 trade-in.</p>
        <Link to="#">
          Learn More <i class="fal fa-chevron-right"></i>
        </Link>{" "}
        <Link to="#">
          Buy <i class="fal fa-chevron-right"></i>
        </Link>
        <div className="container-fluid">
          <img src={iPhone11} alt="iphone-SE" />
        </div>
        <div className="tom-hank">
          {/* <img src={TomHanks} alt="tom-hanks" /> */}
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
