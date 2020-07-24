import React from "react";
import { Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/css/ipad.scss";

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
          <div className="col-sm-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ipad;
