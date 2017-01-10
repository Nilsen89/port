import React, { Component } from 'react';
import Title from './Title';
import {Grid, Row, Col} from 'react-bootstrap';
import Menu from './Menu';

class Top extends Component {
	render() {
			return(
				<div className="App">
					<Grid>
						<Row>
							<Col md={6}>
								<Title />
							</Col>
							<Col md={6} mdOffset={0}>
								<Menu />
							</Col>
						</Row>
					</Grid>
					<hr/>
	      			</div>
			);
	}
} export default Top;
