import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Table extends Component {
	render() {
		return(
			<div className="Table">
				<Grid>
					<Row>
						<Col md={4} mdOffset={4}>
							<div style={{textAlign:"center"}}>
								If you wish to get in contact or receive my CV contact me on the e-mail adress below.
								<br/><br/>
								E-Mail: xxx@live.no
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
} export default Table;
