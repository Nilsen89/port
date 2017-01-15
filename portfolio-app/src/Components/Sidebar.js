import React, {Component} from 'react';
import ExternalLinks from './ExternalLinks.js';
import AboutMe from './AboutMe.js';
import Categories from './Categories.js';
import {Grid, Row, Col} from 'react-bootstrap';
import Info from './Info';

class Sidebar extends Component {
	render() {
		return(
			<div className="Sidebar">
				<Grid>
					<Row md={2}>
						<Col md={2}>
							<AboutMe />
						</Col>
					</Row>
					<Row>
						<Col md={2}>
							<Info />
						</Col>
					</Row>
					<Row>
						<Col md={2}>
							<ExternalLinks />
						</Col>
					</Row>
					<Row>
						<Col md={2}>
							<Categories />
						</Col>
					</Row>
				</Grid>
			</div>			
		);	
	}

} export default Sidebar;
