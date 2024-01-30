import React from "react";

const ShortList = () => {
	const categories = ["Lifestyle", "Health", "Tech", "Entertainment", "Food", "Love & Relationships", "Business", "Shopping", "Home & Privacy", "Family & Pets"];

	return (
		<>
			<h5>Explore more Top10.com Categories</h5>
			<div className="d-flex flex-wrap align-items-center justify-content-center my-5">
				{categories.map((category, index) => {
					return (
						<div
							className="m-1 col-sm-2 d-flex flex-wrap align-items-center justify-content-center container"
							key={index}
							style={{ minWidth: "10rem", minHeight: "5rem", backgroundColor: "#ccc", textAlign: "center" }}
						>
							<a href={category}>{category}</a>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ShortList;
