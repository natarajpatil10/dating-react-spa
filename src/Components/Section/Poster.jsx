import React from "react";
import "./Section.css";

const Poster = () => {
	const date = new Date().toLocaleDateString();
	return (
		<div className=" poster-container container-lg ">
			<div className="poster mb-4">
				<div className="d-flex align-items-center"></div>

				<div className="card">
					<h2>The 10 Best Dating Sites and Apps 2021</h2>
					<div className="name img d-flex align-items-center">
						<img
							src="https://images.unsplash.com/photo-1501901609772-df0848060b33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="banner-img"
							className="banner-img"
						/>
						<div className="details d-flex flex-column justify-content-center bg-transparent ml-2">
							<h6>Morgan Mananfao</h6>
							<p>Last updated {date}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Poster;
