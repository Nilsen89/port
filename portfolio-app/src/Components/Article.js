import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './Article.css';

class Article extends Component {
	constructor() {
		super();
		this.titleStyle = {
			"font-familiy": "Arial, Helvetica, sans-serif",
			"font-size": 28
		}
		this.dateStyle = {
			"font-familiy": "Arial, Helvetica, sans-serif",
			"font-size": 36
		}
	}
	render() {
		return(
			<div className="Article">
				<Grid>
					<Row>
						<Col md={6} mdOffSet={0}>
							<div style={this.titleStyle}>
								{ this.props.title }
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={5} mdOffset={0}>{ this.props.content }</Col>
					</Row>
				</Grid>
			</div>	
		);
	}
} export default Article;
