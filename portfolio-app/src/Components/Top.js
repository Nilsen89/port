import React, { Component } from 'react';
import Title from './Title';
import {Grid, Row, Col} from 'react-bootstrap';
import Menu from './Menu';
import AboutMe from './AboutMe.js';
import Copyright from './../Components/Copyright';

class Top extends Component {
	render() {
			return(
				<div className="Top" style={{marginTop:"15px"}}>
					<Grid>
						<Row>
							<Col md={3}>
								<Title />
							</Col>
						</Row>
						<Row>
							<Col md={3}>
								<Menu />
							</Col>
						</Row>
						<Row>
							<Col md={3}>
								<AboutMe />
							</Col>
						</Row>
						<Row>
							<Col md={3}>
								<Copyright />
							</Col>
						</Row>
					</Grid>
	      			</div>
			);
	}
} export default Top;
