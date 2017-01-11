import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Article from './Article';
import Sidebar from './Sidebar'; 

class BlogContent extends Component {
	render() {

		let file = require("./../Data/Articles.json");

		return(
			<div className="BlogContent">
				<Grid>
					<Row>
						<Col md={9} mdOffSet={0}>
							<div className="content">
								{ file.map( function(file) {
									return <Article title={ file.title } 
											date={ file.date }  
											info={ file.info }
										       	comments={0}
											tags={file.tags}
											categories={file.categories}	
										/>						   
								})}
							</div>
						</Col>
						<Col md={2} mdOffset={1}>
							<div className="info">
								<Sidebar />
							</div>
						</Col>
					</Row>
				</Grid>
			</div>	
		);
	}
} export default BlogContent;
