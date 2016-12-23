import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Header from './Header';
import Menu from './Menu';
import Title from './Title';
import ExternalLinks from './ExternalLinks';

class Top extends Component {
	render() {
			return(
				<div className="App">
					<Grid>
						<Row className="show-grid">
							<Col md={12}>
								<Header />
							</Col>
						</Row>
						<Row className="show-grid">
							<Col md={12}>
								<Title />
							</Col>
						</Row>
						<Row className="show-grid">
							<Col md={12}>
								<ExternalLinks />
							</Col>
						</Row>
						<Row className="show-grid">
							<Col md={12}>
								<Menu />
							</Col>
						</Row>
					</Grid>
      			</div>
			);
	}
} export default Top;