import React from "react";
import RightSidebar from "../Components/Sidebar/RightSidebar";
import { Carousel } from "react-bootstrap";

const About = () => {
	const ImgStyle = { opacity: ".8", height: "70vh", objectFit: "cover" };

	return (
		<>
			<div className="container-fluid px-0 pb-5">
				<Carousel>
					<Carousel.Item interval={10000}>
						<img
							src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
							alt="about"
							className="w-100"
							style={ImgStyle}
						/>
					</Carousel.Item>
					<Carousel.Item interval={10000}>
						<img
							src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="about"
							className="w-100"
							style={ImgStyle}
						/>
					</Carousel.Item>
				</Carousel>
			</div>
			<div className="container d-flex flex-wrap">
				{/* <div className="col-xl-2 col-3 p-0 m-0">
					<StickySidebar />
				</div> */}
				<div className="col-xl-9 col-12">
					<h2 className="pb-3"> About us</h2>

					<p className="pb-5">
						With an aim to help users make the correct choice between the different types of platforms, service and apps, the team of researchers at
						<b> CompanyName </b>
						have gone through all the nooks and corners of the dating world. We help users make a better and informed choice by reviewing all the websites available in the dating world. Be it for
						older couples or for same sex marriage, we don’t discriminate, and this attitude helps us to provide you with information, which others might miss.
					</p>
					<p className="pb-2">If you have any questions regarding the content of our site, feel free to reach out to us.</p>
					<img
						className=" w-100 mb-5"
						src="//images.unsplash.com/photo-1528747045269-390fe33c19f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
						alt=""
						style={{  height: "30vh", objectFit: "cover" }}
					/>
				</div>
				<div className="col-xl-3 p-0">
					<RightSidebar />
				</div>
			</div>
		</>
	);
};

export default About;
