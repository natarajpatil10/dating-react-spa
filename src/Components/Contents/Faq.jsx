import React from "react";
import { Accordion, Card } from "react-bootstrap";

const Faq = () => {
	return (
		<div className="col-lg-9 my-5 px-0">
			<h3 className="mb-3">Frequently Asked Questions</h3>
			<Accordion defaultActiveKey="0">
				<Accordion.Toggle style={{ cursor: "pointer" }} as={Card.Header} eventKey="1">
					Which dating apps actually work?
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						All legitimate dating apps work. The question is: which one works for you? Pay attention to the age, interests, and locations of users to see if a site is right for you. If you're
						interested in general success, however, larger sites like Zoosk and Match.com offer the best chances of making real-life connections.
					</Card.Body>
				</Accordion.Collapse>

				<Accordion.Toggle style={{ cursor: "pointer" }} as={Card.Header} eventKey="2">
					What is the best dating site for serious relationships?
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="2">
					<Card.Body>
						Most dating sites let you filter your matches by relationship goals, so it's easy to find serious singles on any site you're on. That said, Elite Singles is known for its concentration of
						professionals looking for long-term relationships. Match.com also boasts a high success rate of marriages amongst its users.
					</Card.Body>
				</Accordion.Collapse>
				<Accordion.Toggle style={{ cursor: "pointer" }} as={Card.Header} eventKey="3">
					Are paid dating sites better?
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="3">
					<Card.Body>
						Yes, paid dating sites are a better choice for a few reasons. For one thing, they offer more features and options to find, message, chat, and connect with real matches. For another, paid
						dating services typically attract more serious users than free sites, so you're likely to find less spammers and fake profiles.
					</Card.Body>
				</Accordion.Collapse>
			</Accordion>
		</div>
	);
};

export default Faq;
