import React from "react";
import { Link } from "@reach/router";

const Mac = (props) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="#!">
          <h5>Macbook Pro</h5>
        </Link>
      </nav>

      <div className="container">
        <h3 className="text-center">Choose your new MacBook Pro.</h3>
        <div className="card border-0">
          <div className="card-body text-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-202005?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1587460552755"
              alt="mac"
              width=" 250"
            />
            <div class="check-box">
              <input type="radio" />
            </div>

            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#!" class="card-link">
              Card link
            </a>
            <a href="#!" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mac;
