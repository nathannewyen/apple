import React, { useState } from "react";
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
          Learn More <i class="fal fa-chevron-right"></i>
        </Link>{" "}
        <Link to="#">
          Buy <i class="fal fa-chevron-right"></i>
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
          Learn More <i class="fal fa-chevron-right"></i>
        </Link>{" "}
        <Link to="#">
          Buy <i class="fal fa-chevron-right"></i>
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
          <div className="col bg-light">
            <h1>Apple Card Monthly Installments</h1>
            <img src={All} alt="all" width="500" />
          </div>
          <div className="col bg-light">
            <h1>Apple Card Monthly Installments</h1>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container text-justify">
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. iPhone SE promotional pricing is after trade-in
            of iPhone 8 in good condition. Additional trade‑in values require
            purchase of a new iPhone, subject to availability and limits. Must
            be at least 18. Apple or its trade-in partners reserve the right to
            refuse or limit any Trade In transaction for any reason. In‑store
            trade‑in requires presentation of a valid, government-issued photo
            ID (local law may require saving this information). Sales tax may be
            assessed on full value of new iPhone. Additional terms from Apple or
            Apple’s trade-in partners may apply. Monthly pricing: Available to
            qualified customers and requires 0% APR, 24-month installment loan
            with Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the Customer Agreement. Additional iPhone Payments
            terms are here. 2. $4.99/month after free trial. No commitment. Plan
            automatically renews after trial until cancelled. 3. Apple Card
            Monthly Installments is available for certain Apple products and is
            subject to credit approval and credit limit. See
            https://support.apple.com/kb/HT211204 for more information about
            eligible products. iPhone activation required on iPhone purchases
            made at an Apple Store with one of these national carriers: AT&T,
            Sprint, Verizon, or T-Mobile. Variable APRs for Apple Card other
            than Apple Card Monthly Installments range from 10.99% to 21.99%
            based on creditworthiness. Rates as of April 1, 2020. Taxes and
            shipping are not included in Apple Card Monthly Installments and are
            subject to your standard purchase APR. See the Apple Card customer
            agreement for more information. Apple TV+ is $4.99/month after free
            trial. One subscription per Family Sharing group. Offer good for 3
            months after eligible device activation. Plan automatically renews
            until cancelled. Restrictions and other terms apply.
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
    </div>
  );
};

export default Home;
