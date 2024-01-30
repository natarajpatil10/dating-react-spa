import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="container-fluid bg-light py-5 bg-dark">
			<div className="container d-md-flex my-0">
				<div className="col-md-4 col-6 flex-wrap d-flex flex-column p-0">
					<img src="https://images.top10.com/q_auto/v1/production/sites/uploads/photo/logo.20191212140001.svg" alt="" className="w-50 py-2" />
					<div className="d-flex"></div>
					<p className="my-0">Copyright © 2009-2021</p>
					<p className="my-0">Natural Intelligence Ltd</p>
					<p className="mb-3">All Rights Reserved.</p>
				</div>
				<div className="col-md-8 col-12 p-0">
					<a href="blog" className="mr-3">
						Blog
					</a>
					<a href="blog" className="mr-3">
						Deals
					</a>
					<a href="about" className="mr-3">
						About Us
					</a>
					<a href="terms" className="mr-3">
						Terms of use
					</a>
					<a href="cookies" className="mr-3">
						Cookie Policy
					</a>
					<a href="Sitemap" className="mr-3">
						Sitemap
					</a>
					<a href="partner" className="mr-3">
						Partner WIth Us
					</a>
					<p className="my-0">
						Designed to help users make confident decisions online, this website contains information about a wide range of products and services. Certain details, including but not limited to prices
						and special offers, are provided to us directly from our partners and are dynamic and subject to change at any time without prior notice. Though based on meticulous research, the
						information we share does not constitute legal or professional advice or forecast, and should not be treated as such.
					</p>
					<p className="my-0 mt-1">Reproduction in whole or in part is strictly prohibited. </p>
					<p className="mt-1">As an Amazon Associate we earn from qualifying purchases.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
