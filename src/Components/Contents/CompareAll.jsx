import React from "react";
import { Table } from "react-bootstrap";

const CompareAll = () => {
	return (
		<div className="my-5" id="compare_all">
			<Table responsive>
				<tbody>
					<tr>
						<th>
							<h5>Compare the Best Dating Sites</h5>
						</th>
						<th>
							<div className="">
								<h6 className="mb-0">Zoosk </h6>
							</div>
							<p className="mb-0" style={{ fontSize: ".85rem", fontWeight: "400" }}>
								Organic matchmaking through technology
							</p>
						</th>
						<th>
							<div className="">
								<h6 className="mb-0">EliteSingles </h6>
							</div>
							<p className="mb-0" style={{ fontSize: ".85rem", fontWeight: "400" }}>
								Organic matchmaking through technology
							</p>
						</th>
						<th>
							<div className="">
								<h6 className="mb-0">Eharmony </h6>
							</div>
							<p className="mb-0" style={{ fontSize: ".85rem", fontWeight: "400" }}>
								Organic matchmaking through technology
							</p>
						</th>
						<th>
							<div className="">
								<h6 className="mb-0">Zoosk </h6>
							</div>
							<p className="mb-0" style={{ fontSize: ".85rem", fontWeight: "400" }}>
								Organic matchmaking through technology
							</p>
						</th>
						<th>
							<div className="">
								<h6 className="mb-0">EliteSingles </h6>
							</div>
							<p className="mb-0" style={{ fontSize: ".85rem", fontWeight: "400" }}>
								Organic matchmaking through technology
							</p>
						</th>
						<th>
							<div className="">
								<h6 className="mb-0">Eharmony </h6>
							</div>
							<p className="mb-0" style={{ fontSize: ".85rem", fontWeight: "400" }}>
								Organic matchmaking through technology
							</p>
						</th>
						<th>
							<div className="">
								<h6 className="mb-0">Zoosk </h6>
							</div>
							<p className="mb-0" style={{ fontSize: ".85rem", fontWeight: "400" }}>
								Organic matchmaking through technology
							</p>
						</th>
						<th>
							<div className="">
								<h6 className="mb-0">EliteSingles </h6>
							</div>
							<p className="mb-0" style={{ fontSize: ".85rem", fontWeight: "400" }}>
								Organic matchmaking through technology
							</p>
						</th>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td>Reviews</td>
						{Array.from({ length: 8 }).map((_, index) => (
							<td key={index}>
								<p>
									<a href="a" className=" mb-0" style={{ fontSize: ".8rem" }}>
										42 customer reviews
									</a>
								</p>
							</td>
						))}
					</tr>
					<tr>
						<td>Free Version</td>
						{Array.from({ length: 8 }).map((_, index) => (
							<td key={index}>yes</td>
						))}
					</tr>
					<tr>
						<td>Number of members</td>
						{Array.from({ length: 8 }).map((_, index) => (
							<td key={index}>100{index}</td>
						))}
					</tr>
					<tr>
						<td> Recommended age range</td>
						{Array.from({ length: 8 }).map((_, index) => (
							<td key={index}>2{index}</td>
						))}
					</tr>
					<tr>
						<td> Communication options</td>

						<td>Yes</td>
						<td>Yes</td>
						<td>Yes</td>
						<td>No</td>
						<td>Yes</td>
						<td>No</td>
						<td>Yes</td>
						<td>No</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default CompareAll;
