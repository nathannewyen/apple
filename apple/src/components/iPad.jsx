import React from "react";
import { Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/css/ipad.scss";
import bag from "../static/images/svg/bag.svg"

const Ipad = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="#!">
          <h5>iPad Pro</h5>
        </Link>
      </nav>

      <div className="container ipad">
        <div class="row">
          <div className="col-sm-6">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202003?wid=890&amp;hei=1100&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1583430767182"
              alt="ipad-pro"
              height="550"
            />
          </div>
          <div className="col-sm-5">
            <div className="new">New</div>
            <div className="buy-title">Buy iPad Pro</div>
            <div className="delivery">Fast, free, no‑contact delivery</div>
            <h5>Model</h5>
            {/* Model 1 */}
            <form>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="title">11-inch display</p>
                    </div>
                    <div className="col-sm-6 text-right">
                      <p>From $66.58/mo.* or $799</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            {/* Model 2 */}
            <form>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="title">12.9-inch display</p>
                    </div>
                    <div className="col-sm-6 text-right">
                      <p>From $83.25/mo.* or $999</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* End Model */}

            <hr/>
            <h5>Finish</h5>

            {/* Check Box Color */}
            <div className="box text-dark">
              <div className="checkbox-container circular-container border">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkbox-custom circular" />
                </label>
                <p className="input-title">Space Gray</p>
              </div>

              <div className="checkbox-container circular-container float-right border">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkbox-custom silver" />
                </label>
                <p className="input-title">Silver</p>
              </div>
            </div>
            {/* End Check Box Color */}

            {/* Price */}
            <div className="price bg-light">
              <h1>$799.00</h1>
              <button className="btn text-light">Select</button>{" "}
              <i class="fal fa-heart"></i>
            </div>
            {/* End Price */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ipad;
