import React, { Component } from 'react';
import Top from "./../Components/Top";
import Copyright from './../Components/Copyright';
import BlogContent from './../Components/BlogContent';

class Blog extends Component {
	render() {
		return (
			<div className="blog">
				<Top />	
				<BlogContent />
				<Copyright />
		      	</div>
    		);
  	}
} export default Blog;
