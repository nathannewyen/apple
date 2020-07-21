import React, { useState } from 'react';
import { Link } from '@reach/router';
import '../static/styles/css/home.scss';

import iPhoneSE from '../static/images/home/iPhoneSE.jpg';
import All from '../static/images/home/All.jpg';

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
				</Link>{' '}
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
				</Link>{' '}
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
							<img src={All} alt="all" width="400px" />
						</div>
					</div>
					<div className="col-md-6 ">
						<div class="col-md-12 bg-light">
							<h1>Apple Card Monthly Installments</h1>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Apple_logo_dark_grey.svg/1200px-Apple_logo_dark_grey.svg.png"
								alt="all"
								width="160"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="footer">
				<div className="container text-justify">
					<p>
						1.Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any
						Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid,
						government-issued photo ID (local law may require saving this information). Sales tax may be
						assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners
						may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month
						installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with
						AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card
						Monthly Installments terms are in the Customer Agreement. Additional iPhone Payments terms are
						here.
						<br />
						<br />
						2. $4.99/month after free trial. No commitment. Plan automatically renews after trial until
						cancelled. Magic Keyboard sold separately. Apple TV+ is $4.99/month after free trial. One
						subscription per Family Sharing group. Offer good for 3 months after eligible device activation.
						Plan automatically renews until cancelled. Restrictions and other terms apply.
					</p>
					<hr />
					<div className="row">
						<div className="col-4">Copyright © 2020 Apple Inc. All rights reserved.</div>
						<div className="col-5">
							<Link to="#"> Privacy Policy</Link>
							{' | '}
							<Link to="#"> Terms of Use </Link>
							{' | '}
							<Link to="#"> Sales and Refunds </Link>
							{' | '}
							<Link to="#"> Legal </Link>
							{' | '}
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
