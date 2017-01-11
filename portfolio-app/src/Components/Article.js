import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './Article.css';

class Article extends Component {
	render() {

		let extras = [
			{
				name: "Date", 
				value: this.props.date,
			},
			{
				name: "Tags",
				value: this.props.tags,
			},
			{
				name: "Categories",
				value: this.props.categories
			},
			{
				name: "Comments",
				value: this.props.comments
			}
		];

		return(
			<div className="Article" style={{"margin-bottom":"50px"}}>
				<Grid>
					<Row>
						<Col md={9} mdOffSet={0}>
							<div style={{"font-size":"28"}}>
								{ this.props.title }
							</div>
						</Col>
					</Row>
					<Row>
					{ 
						extras.map(extra => {
							return(
								<Col md={2} style={{"color":"gray"}}>
									<span style={{"font-size":"14"}}>{extra.name}: </span>
									<span style={{"font-size":"12"}}>{extra.value}</span>
								</Col>
							)
						})
					}

					</Row>
					<Row>
						<Col md={9} mdOffset={0}>{ this.props.info }</Col>
					</Row>
				</Grid>
			</div>	
		);
	}
} export default Article;
