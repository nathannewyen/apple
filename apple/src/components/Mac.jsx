import React from "react";
import { Link } from "@reach/router";
import "../static/styles/css/mac.scss";

const Mac = (props) => {
  return (
    <div className="mac">
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="#!">
          <h5>Macbook Pro</h5>
        </Link>
      </nav>

      <div className="container">
        <h3 className="text-center">Choose your new MacBook Pro.</h3>

        {/* Card */}
        <div className="card border-0">
          <div className="card-body text-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-202005?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1587460552755"
              alt="mac"
            />
            <div className="box text-dark">
              <div className="checkbox-container circular-container">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkbox-custom circular" />
                </label>
                <p className="input-title">Space Gray</p>
              </div>

              <div className="checkbox-container circular-container">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkbox-custom silver" />
                </label>
                <p className="input-title">Silver</p>
              </div>
            </div>

            <div className="text-left">
              <p className="new">New</p>
              <h4>
                1.4GHz Quad-Core Processor with Turbo Boost up to 3.9GHz 256GB
                Storage Touch Bar and Touch ID
              </h4>
              <p className="card-text">
                1.4GHz quad-core 8th-generation Intel Core i5 processor
              </p>
              <p className="card-text">Turbo Boost up to 3.9GHz</p>
              <p className="card-text">Intel Iris Plus Graphics 645</p>
              <p className="card-text">8GB 2133MHz LPDDR3 memory</p>
              <p className="card-text">256GB SSD storage¹</p>
              <p className="card-text">13-inch Retina display with True Tone</p>
              <h4>$1,299.00</h4>
              <button className="btn text-light">Select</button>{" "}
              <i class="fal fa-heart"></i>
            </div>
          </div>
        </div>

        <div className="card border-top-0 border-bottom-0">
          <div className="card-body text-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-202005?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1587460552755"
              alt="mac"
            />
            <div className="box text-dark">
              <div className="checkbox-container circular-container">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkbox-custom circular" />
                </label>
                <p className="input-title">Space Gray</p>
              </div>

              <div className="checkbox-container circular-container">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkbox-custom silver" />
                </label>
                <p className="input-title">Silver</p>
              </div>
            </div>

            <div className="text-left">
              <p className="new">New</p>
              <h4>
                1.4GHz Quad-Core Processor with Turbo Boost up to 3.9GHz 256GB
                Storage Touch Bar and Touch ID
              </h4>
              <p className="card-text">
                1.4GHz quad-core 8th-generation Intel Core i5 processor
              </p>
              <p className="card-text">Turbo Boost up to 3.9GHz</p>
              <p className="card-text">Intel Iris Plus Graphics 645</p>
              <p className="card-text">8GB 2133MHz LPDDR3 memory</p>
              <p className="card-text">256GB SSD storage¹</p>
              <p className="card-text">13-inch Retina display with True Tone</p>
              <h4>$1,299.00</h4>
              <button className="btn text-light">Select</button>{" "}
              <i class="fal fa-heart"></i>
            </div>
          </div>
        </div>

        <div className="card border-0">
          <div className="card-body text-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-202005?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1587460552755"
              alt="mac"
            />
            <div className="box text-dark">
              <div className="checkbox-container circular-container">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkbox-custom circular" />
                </label>
                <p className="input-title">Space Gray</p>
              </div>

              <div className="checkbox-container circular-container">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkbox-custom silver" />
                </label>
                <p className="input-title">Silver</p>
              </div>
            </div>

            <div className="text-left">
              <p className="new">New</p>
              <h4>
                1.4GHz Quad-Core Processor with Turbo Boost up to 3.9GHz 256GB
                Storage Touch Bar and Touch ID
              </h4>
              <p className="card-text">
                1.4GHz quad-core 8th-generation Intel Core i5 processor
              </p>
              <p className="card-text">Turbo Boost up to 3.9GHz</p>
              <p className="card-text">Intel Iris Plus Graphics 645</p>
              <p className="card-text">8GB 2133MHz LPDDR3 memory</p>
              <p className="card-text">256GB SSD storage¹</p>
              <p className="card-text">13-inch Retina display with True Tone</p>
              <h4>$1,299.00</h4>
              <button className="btn text-light">Select</button>{" "}
              <i class="fal fa-heart"></i>
            </div>
          </div>
        </div>

        {/* End */}
      </div>
    </div>
  );
};
export default Mac;
