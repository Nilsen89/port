import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Article from './Article';
import Sidebar from './Sidebar'; 

class BlogContent extends Component {
	render() {
		return(
			<div className="BlogContent">
				<Grid>
					<Row>
						<Col md={9} mdOffSet={0}>
							<div className="content">
								<Article title={"XSS(Cross-Site-Scripting)"} 
									content={" Article stuff here and here, nbut nothing ufna amdpa omawdpo "}
								/>
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
