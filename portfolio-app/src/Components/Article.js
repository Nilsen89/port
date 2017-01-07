import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './Article.css';

class Article extends Component {
	render() {
		return(
			<div className="Article">
				<Grid>
					<Row>
						<Col md={4} mdOffSet={1}>{ this.props.title }</Col>
						<Col md={1} mdOffset={0}>{ this.props.date }</Col>
					</Row>
					<Row>
						<Col md={5} mdOffset={1}>{ this.props.content }</Col>
					</Row>
				</Grid>
			</div>	
		);
	}
} export default Article;
