import React, { Component } from 'react';
import Top from "./../Components/Top";
import {Grid,Row,Col} from 'react-bootstrap';

class Contact extends Component {
	render() {

		let styles = {
			fontFamily: "'Playfair Display', serif",
			height: "100vh",
			display: "flex",
			textAlign: "left",
			alignItems: "center",
			justifyContent: "left",
			textDecoration: "none",
			borderRight: "1px solid #d3d3d3"
		
		};

		return (
			<Grid>
				<Row>
					<Col md={3}>
						<div style={styles}>
							<Top />
						</div>
					</Col>
					<Col md={9}>
						{this.props.children}
					</Col>
				</Row>
			</Grid>
		);
	}
} export default Contact;
