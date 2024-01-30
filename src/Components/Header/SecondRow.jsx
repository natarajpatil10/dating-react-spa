import React from "react";
import { Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

const SecondRow = () => {
	return (
		<>
			<div className="d-flex justify-content-between ">
				<div className="show-logo px-1">
					<Navbar.Brand>
						<Link className="mr-xl-4 mr-0 nav-links" to="/home">
							<img className="company-logo" src="https://images.top10.com/q_auto/v1/production/sites/uploads/photo/logo.20191212140001.svg" alt="Top10.com" />
						</Link>
					</Navbar.Brand>
				</div>
				<Navbar collapseOnSelect expand="md" className="p-0 d-flex flex-wrap justify-content-end mt-lg-0 mt-2 ">
					<Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0" />
					<Navbar.Collapse id="responsive-navbar-nav  ">
						<Nav className="mr-auto d-flex align-items-md-center align-items-end  ">
							<Nav.Link className=" nav-links show-signup " href="#features">
								<Button variant="outline-dark" size="sm" className="mr-xl-4 mr-3 w-5 ">
									Sign up
								</Button>
							</Nav.Link>
							<Link className="mr-xl-4 mr-3 nav-links" to="/">
								Home
							</Link>
							<Link className="mr-xl-4 mr-3 nav-links" to="/about">
								About Us
							</Link>
							<Link className="mr-xl-4 mr-3 nav-links" to="/single-dating">
								Single Dating
							</Link>
					
							<Link className="mr-xl-4 mr-3 nav-links" to="/christian-dating">
								Christian Dating
							</Link>
							<Link className="mr-xl-4 mr-3 nav-links" to="/gay-dating">
								Gay Dating
							</Link>
							<Link className="mr-xl-4 mr-3 nav-links" to="/lesbian-dating">
								Lesbian Dating
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</>
	);
};

export default SecondRow;
