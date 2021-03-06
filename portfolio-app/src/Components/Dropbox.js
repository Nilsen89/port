import React, { Component } from 'react';
import { Grid, Col, Row, Collapse } from 'react-bootstrap';
import './Dropbox.css';

class Dropbox extends Component {

	constructor() {
		super();
		this.state = {
			open: false
		}
	}

	render() {
		return (
			<Grid>
				<Row>
					<Col md={6} mdOffset={1}>
						<div className="Dropbox" onClick={() => this.setState({ open: !this.state.open })}>
							{ this.props.code }	 { this.props.name }
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={6} mdOffset={1}>
						<Collapse in={this.state.open}>
							<div className="info">
								{ this.props.info }
							</div>
						</Collapse>
					</Col>
				</Row>
			</Grid>
		);
	}
} export default Dropbox;
