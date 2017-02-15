import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Sidebar from "./../Components/Sidebar.js";

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<Grid>
					<Row>
						<Col md={12} mdOffSet={0} style={{marginTop:"10px"}}>
							{this.props.children}
						</Col>
					</Row>
				</Grid>
		      	</div>
    		);
  	}
} export default Blog;
