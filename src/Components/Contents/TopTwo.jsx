import React from "react";
import "./Content.css";
import { Carousel } from "react-bootstrap";
import { BsArrowRight, BsX } from "react-icons/bs";
import { MdDone } from "react-icons/md";

const TopTwo = () => {
	return (
		<div className="" id="eliteSingles">
			<div className="d-sm-flex justify-content-between mb-5">
				<div className="title-topOne d-flex ">
					<div className="">
						<h1 className="number mr-2 mb-0">2.</h1>
					</div>

					<div className="d-flex flex-column justify-content-center">
						<div className="title-reviews d-md-flex">
							<h5 className="mb-0 topOne-title">Elite Singles </h5>
							<p className="ml-md-2 mb-0 ">
								<a href="a">42 customer reviews</a>
							</p>
						</div>
						<p className="mb-0">Organic matchmaking through technology</p>
					</div>
				</div>

				<div className="">
					<img className="topOne-img" src="https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/elite-singles.20180607124627.png" alt="" />
				</div>
			</div>

			{/*CAROUSEL  */}
			<div className="carousel mb-5">
				<Carousel interval={null}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1521145239174-279dc2227166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1521145239174-279dc2227166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1521145239174-279dc2227166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="Second slide"
						/>
					</Carousel.Item>
				</Carousel>

				<div className="my-4 d-flex  flex-wrap justify-content-between align-content-center">
					<div className="py-2 col-sm-9 col-12 p-0">
						<a href="a" className="read-review-link">
							Read Elite Review <BsArrowRight />
						</a>
					</div>
					<button className="btn visit-site-btn col-sm-3 col-6">Visit Site</button>
				</div>
				<hr className="w-25" />

				{/* PRICE DETAILS */}
				<div className="d-sm-flex flex-wrap align-items-center  mb-2">
					<MdDone className="mr-2" color="#7f64bf" />
					<b className="mr-2">Pricing </b>
					<span className=""> - $12.50,per month for 1-year subscription </span>
				</div>
				<div className="d-sm-flex align-items-center mb-2">
					<MdDone className="mr-2" color="#7f64bf" />
					<b className="mr-2"> Free Version </b> <span> - Yes</span>
				</div>
				<div className="d-sm-flex align-items-center mb-5">
					<MdDone className="mr-2" color="#7f64bf" />
					<b className="mr-2">Age range </b> <span>- 25-45 </span>
				</div>

				<div className="about-them mb-4">
					<p>
						EliteSingles is an international dating site for middle-aged singles. Its user base spans more than 40 countries across North America, Asia, Europe, and Latin America, meaning the site is
						full of activity and people from all cultures looking to connect. Though the platform itself is easy to use, DateMyAge uses a non-traditional payment structure that uses “credits” instead
						of membership fees. Instead of buying a subscription, users pay only for the features they use, on a case to case basis. While pricing is a little difficult to decipher at first, this
						system does have its benefits: instead of subscribing for a set amount of time, you only pay for the services you use, meaning you can come and go without being locked in to a commitment.
					</p>
				</div>

				{/*  PROS AD CONS */}

				<div className="pros-cons d-md-flex flex-wrap">
					<div className="col-md-6 col-12">
						<h4>Pros</h4>
						<div className="">
							<div className="d-flex align-items-center mb-2">
								<MdDone className="mr-2 " color="#7f64bf" />
								<span>More than 40 million users</span>
							</div>
							<div className="d-flex align-items-center mb-2">
								<MdDone className="mr-2 " color="#7f64bf" />
								<span>More than 40 million users</span>
							</div>
							<div className="d-flex align-items-center mb-2">
								<MdDone className="mr-2 " color="#7f64bf" />
								<span>More than 40 million users</span>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-12">
						<h4>Cons</h4>
						<div className="">
							<div className="d-flex align-items-center mb-2">
								<BsX className="mr-2 " color="#7f64bf" fontSize="large" />
								<span>Limited features on the free version</span>
							</div>
							<div className="d-flex align-items-center mb-2">
								<BsX className="mr-2 " color="#7f64bf" fontSize="large" />
								<span>Some may prefer a more manual approach</span>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-light my-5 d-flex justify-content-between align-content-center">
					<div className="">
						<img className="" src="https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/elite-singles.20180607124627.png" alt="" style={{ height: "1.5rem" }} />
					</div>
					<div className="d-flex align-align-items-center ">
						<button className="btn visit-site-btn">Visit Site</button>
					</div>
				</div>
				<hr />
			</div>
		</div>
	);
};

export default TopTwo;
