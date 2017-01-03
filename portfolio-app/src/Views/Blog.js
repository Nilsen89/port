import React, { Component } from 'react';
import Top from "./../Components/Top";
import Menu from '../Components/Menu';
import Copyright from './../Components/Copyright';

class Blog extends Component {
  render() {
    return (
		<div className="blog">
			<Top pageName={ "Blog" }/>	
			<Menu />
			BLOG
			<Copyright />
      	</div>
    );
  }
}

export default Blog;
