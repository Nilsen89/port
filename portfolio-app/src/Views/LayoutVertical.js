import React, { Component } from 'react';
import Side from "./../Components/Side";
import {Grid,Row,Col} from 'react-bootstrap';
import './LayoutVertical.css';

class Contact extends Component {
	render() {

		let sideStyles = {
			fontFamily: "'Playfair Display', serif",
			height: "100vh",
			display: "flex",
			textAlign: "left",
			alignItems: "center",
			justifyContent: "left",
			textDecoration: "none",
			borderRight: "1px solid #21385A"
		};

		return (
			<Grid>
				<Row>
					<Col md={3}>
						<div style={sideStyles}>
							<Side />
						</div>
					</Col>
					<Col md={9}>
						<span className="bodyContent">
							{this.props.children}
						</span>
					</Col>
				</Row>
			</Grid>
		);
	}
} export default Contact;
