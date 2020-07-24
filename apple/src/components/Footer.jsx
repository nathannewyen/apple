import React from "react";
import { Link } from "@reach/router";
import "../static/styles/css/footer.scss";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container text-justify">
        <p>
          1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
          promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in
          good condition. iPhone SE promotional pricing is after trade-in of
          iPhone 8 in good condition. Additional trade‑in values require
          purchase of a new iPhone, subject to availability and limits. Must be
          at least 18. Apple or its trade-in partners reserve the right to
          refuse or limit any Trade In transaction for any reason. In‑store
          trade‑in requires presentation of a valid, government-issued photo ID
          (local law may require saving this information). Sales tax may be
          assessed on full value of new iPhone. Additional terms from Apple or
          Apple’s trade-in partners may apply. Monthly pricing: Available to
          qualified customers and requires 0% APR, 24-month installment loan
          with Citizens One or Apple Card Monthly Installments and iPhone
          activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping
          not included. Additional Apple Card Monthly Installments terms are in
          the Customer Agreement. Additional iPhone Payments terms are here.
        </p>
        <p>
          2. $4.99/month after free trial. No commitment. Plan automatically
          renews after trial until cancelled. Magic Keyboard sold separately.
          Apple TV+ is $4.99/month after free trial. One subscription per Family
          Sharing group. Offer good for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other terms apply.
        </p>
        <p>
          Apple TV+ is $4.99/month after free trial. One subscription per Family
          Sharing group. Offer good for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other terms apply.
        </p>
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 1-800-MY-APPLE.
        </p>
        <hr />
        <div className="row">
          <div className="col-4">
            Copyright © 2020 Apple Inc. All rights reserved.
          </div>
          <div className="col-5">
            <Link to="#"> Privacy Policy</Link>
            {" | "}
            <Link to="#"> Terms of Use </Link>
            {" | "}
            <Link to="#"> Sales and Refunds </Link>
            {" | "}
            <Link to="#"> Legal </Link>
            {" | "}
            <Link to="#"> Site Map </Link>
          </div>
          <div className="col-3 text-right">United States</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
