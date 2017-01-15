import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './Article.css';
import {Link} from 'react-router';

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

		let toPrint = this.props.small ? this.props.info : this.props.content;

		return(
			<div className="Article" style={{marginBottom:"50px"}}>
				<Grid>
					<Row>
						<Col md={9} mdOffSet={0}>
							<div style={{fontSize:"28"}}>
								<Link to={"Blog/"+this.props.title} style={{color:"black", textDecoration:"none", outline:"none"}}>
									{ this.props.title }
								</Link>
							</div>
						</Col>
					</Row>
					<Row>
					{ 
						extras.map(extra => {
							return(
								<Col md={2} style={{color:"gray"}}>
									<span style={{fontSize:"14"}}>{extra.name}: </span>
									<span style={{fontSize:"12"}}>{extra.value}</span>
								</Col>
							)
						})
					}

					</Row>
					<Row>
						<Col md={9} mdOffset={0}>
							<div style={{textAlign:"justify", marginTop:"10px"}}>
								{toPrint.split("<br/>").map(function(item) {
									  return (
									  	<span>
									        	{item}
										     	<br/><br/>
										</span>
																        )
								})}
							</div>
						</Col>
					</Row>
				</Grid>
			</div>	
		);
	}
} export default Article;
