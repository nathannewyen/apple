import React, { useEffect, useState, useRef } from 'react';
import { Link } from '@reach/router';
import '../static/styles/css/navbar.scss';

const Navbar = (props) => {



	return (
		<nav className="navbar  navbar-expand-lg navbar-default ">
			<button
				className="navbar-toggler bg-iconnav"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="navbar-brand" to="#">
							<i className="fab fa-apple" />
						</Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="#">
							Mac <span class="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							iPad
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							iPhone
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							Watch
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							TV
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							Music
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							Support
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							<i className="fal fa-search" />
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							<i className="fal fa-shopping-bag" />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
