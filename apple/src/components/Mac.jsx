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
        <h3>Choose your new MacBook Pro.</h3>
      </div>
    </>
  );
};
export default Mac;
