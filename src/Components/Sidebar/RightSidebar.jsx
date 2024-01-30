import React from "react";
import "./Sidebar.css";

const RightSidebar = () => {
	const style = {
		width: "17.37rem",
		height: "10rem",
		objectFit: "cover",
	};
	const ImageStyle = {
		width: "5rem",
		height: "5rem",
		objectFit: "cover",
		marginBottom: "1rem",
	};

	return (
		<>
			<div className="right-sidebar">
				<div className="">
					<img
						src="https://images.unsplash.com/photo-1517487378761-00f6e022bade?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
						alt="sidebar-img"
						style={style}
					/>
				</div>
				<div className="must_read bg-light mt-5 p-3">
					<h5>Must Read</h5>
					<div className="d-flex align-items-start">
						<img
							src="https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt=""
							style={ImageStyle}
						/>
						<p className="pl-2">
							<a href="read">Top 10 Benefits of Getting to Know Someone Virtually Before Meeting or Dating IRL</a>
						</p>
					</div>
					<div className="d-flex align-items-start">
						<img
							src="https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt=""
							style={ImageStyle}
						/>
						<p className="pl-2">
							<a href="read">10 Best Gay and LGBTQ+ Dating Sites and Apps 2021</a>
						</p>
					</div>
					<div className="d-flex align-items-start">
						<img
							src="https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt=""
							style={ImageStyle}
						/>
						<p className="pl-2">
							<a href="read">Top 10 Asian Dating Sites: Love Is Out There, Find It Today</a>
						</p>
					</div>
					<a href="#readAll"> See all articles</a>
				</div>
			</div>
		</>
	);
};

export default RightSidebar;
