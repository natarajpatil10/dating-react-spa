import React from "react";
import { Button } from "react-bootstrap";
import "./Content.css";

const AdCardOne = () => {
	const style = {
		// width: "38.6rem",
		height: "10rem",
		backgroundColor: "white",
		boxShadow: "1px 1px 5px",
		cursor: "pointer",
	};
	return (
		<>
			<div className="adCard p-0 d-flex flex-wrap justify-content-between align-items-start my-3" style={style}>
				<div className="mt-2 col-md-3 col-12 mr-2">
					<img src="https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/zooskxsite.20191211125335.png" alt="" style={{ minWidth: "3rem", height: "2.5rem" }} />
				</div>
				<div className="mt-md-1 col-md-6 col-12 ">
					<p className="m-0">
						Lorem ipsum dolor sit dolor sit amet.
						<a href="a"> Reviews</a>
					</p>
				</div>
				<Button className="visit-btn mt-md-3 mx-md-2 mx-3 p-1 col-md-2 col-sm-3 col-10">Visit</Button>
			</div>
		</>
	);
};

export default AdCardOne;
