import React, {Component} from 'react';
import Dropbox from './Dropbox';
import {Grid, Row, Col} from 'react-bootstrap';

class Courses extends Component {

	constructor(props) {
		super(props);
		this.state = {
			obj: this.props.file
		}
	}

	render() {
		return(
			<Grid>
				<Row>
					<Col md={6} mdOffset={3}>
						<h3> { this.props.sectionName } </h3>
					</Col>
				</Row>
				<Row>
					{ this.state.obj.map( function(obj) {
						return( 
							<Col md={6}>
						       		<Dropbox code={ obj.code } name={ obj.name }  info={ obj.info }  />						   							</Col>
						)
					})}
				</Row>
			</Grid>
		);
	}
} export default Courses;
