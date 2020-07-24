import React from "react";
import { Link } from "@reach/router";
import "../static/styles/css/home.scss";

import iPhoneSE from "../static/images/home/iPhoneSE.jpg";
import All from "../static/images/home/All.jpg";

const Home = (props) => {
  return (
    <div className="home-wrapper">
      <div className="iphoneSE text-center text-white">
        <h1>iPhone SE</h1>
        <h4>Lots to love. Less to spend.</h4>
        <h4>Starting at $399</h4>
        <p className="text-secondary">From $9.54/mo. or $299 trade-in.</p>
        <Link to="#">
          Learn More <i class="fal fa-chevron-right" />
        </Link>{" "}
        <Link to="#">
          Buy <i class="fal fa-chevron-right" />
        </Link>
        <div className="container">
          <img src={iPhoneSE} alt="iphone-SE" />
        </div>
      </div>
      <div className="iphone11 bg-white text-center">
        <h1>iPhone 11</h1>
        <h4>Lots to love. Less to spend.</h4>
        <h4>Starting at $399</h4>
        <p className="text-secondary">From $9.54/mo. or $299 trade-in.</p>
        <Link to="#">
          Learn More <i class="fal fa-chevron-right" />
        </Link>{" "}
        <Link to="#">
          Buy <i class="fal fa-chevron-right" />
        </Link>
        <div className="container">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBHxprlRjg0G-eFKuCuVlNG0oSaz9Gy0j6PyJIUiOIoQthK_k1bAY&usqp=CAc"
            alt="iphone-11"
            height="450"
            width="100%"
          />
        </div>
      </div>

      <div className="ads">
        <div className="row text-center">
          <div className="col-md-6">
            <div class="col-md-12 bg-light">
              <h1>Apple Card Monthly Installments</h1>
              <p>
                <Link to="#">
                  Learn more <i class="fal fa-chevron-right" />
                </Link>
              </p>
              <img src={All} alt="all" width="400px" />
            </div>
          </div>
          <div className="col-md-6 ">
            <div class="col-md-12 bg-light">
              <h1>Apple Approach to repoening stores</h1>
              <p>
                <Link to="#">
                  Read the letter <i class="fal fa-chevron-right" />
                </Link>
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Apple_logo_dark_grey.svg/1200px-Apple_logo_dark_grey.svg.png"
                alt="all"
                className="apple"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
