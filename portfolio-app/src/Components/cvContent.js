import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class cvContent extends Component {
	render() {

		let titleStyle = {
			backgroundColor: "#99B3CA",
			border: "1px solid #D7EEF6",
			borderRadius: "10px"
		};

		return(
			<Grid>
				<Row>
					<Col md={6} mdOffset={3}>
						<div style={titleStyle}>
							<span style={{color:"#4C4964"}}>•</span> Skills
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={3} mdOffset={3}>
						Java
					</Col>
					<Col md={3} mdOffset={3}>
						Php
					</Col>
				</Row>
			</Grid>		
		);
	}

} export default cvContent;
