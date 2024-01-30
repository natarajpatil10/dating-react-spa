import React from "react";
import "./Sidebar.css";

const StickySidebar = () => {
	return (
		<>
			<div className="sticky-sidebar bg-light px-1 m-0">
				<h6 className="mt-3 px-md-4 pl-3">Jump To:</h6>
				<hr className="text-left" />

				<ol className="px-md-4 px-0 pl-3 font-ol">
					<li>
						<a href="#zoosk">Zoosk</a>
					</li>

					<li>
						<a href="#eliteSingles">EliteSingles</a>
					</li>

					<li>
						<a href="#eharmony">Eharmony</a>
					</li>

					<li>
						<a href="#match">Match</a>
					</li>

					<li>
						<a href="#silverSingles">SilverSingles</a>
					</li>

					<li>
						<a href="#ourTime">OurTime</a>
					</li>

					<li>
						<a href="#blackPeopleMeet">BlackPeopleMeet</a>
					</li>

					<li>
						<a href="#jdate">JDate</a>
					</li>
				</ol>
			</div>
		</>
	);
};

export default StickySidebar;
