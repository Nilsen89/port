import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Table.css';

class Table extends Component {
	render() {
		return(
			<div className="Table">
				<Grid>
					<Row>
						<Col md={6} mdOffset={3}>
							E-Mail: nilsendesign@live.no
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
} export default Table;
