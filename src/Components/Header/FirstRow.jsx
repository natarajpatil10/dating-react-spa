import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

const FirstRow = () => {
	return (
		<div className="Container d-flex justify-content-between p-0 hide-firstRow" id="home">
			<Navbar className="px-1">
				<Navbar.Brand>
					<Link to="/home">
						<img className="company-logo " src="https://images.top10.com/q_auto/v1/production/sites/uploads/photo/logo.20191212140001.svg" alt="Top10.com" title="" />
					</Link>
				</Navbar.Brand>
			</Navbar>

			<div className="d-flex align-items-center ">
				<Form inline className=" pr-0 m-0">
					<FormControl type="text" placeholder="Search" className="outline-dark input" />
				</Form>
				<Button variant="outline-dark ml-3 mr-1" className="">
					Sign up
				</Button>
			</div>
		</div>
	);
};

export default FirstRow;
