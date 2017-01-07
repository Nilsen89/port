import React, { Component } from 'react';
import Top from "./../Components/Top";
import Menu from '../Components/Menu';
import Copyright from './../Components/Copyright';
import { Grid, Col, Row } from 'react-bootstrap';
import Article from './../Components/Article';

class Blog extends Component {
  render() {
    return (
		<div className="blog">
			<Grid>
				<Row>
					<Col md={6} mdOffset={3}>
						<Top pageName={ "Blog" }/>	
						<Menu />
						<Article title={"XSS(Cross-Site-Scripting)"} 
								 date={"02.03.2017"} 
								 content={"This is an article"}
						/>	
						<Copyright />
					</Col>
				</Row>
			</Grid>
      	</div>
    );
  }
}

export default Blog;
