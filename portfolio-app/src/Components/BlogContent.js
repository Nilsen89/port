import React, { Component } from 'react';
import Article from './Article';

class BlogContent extends Component {
	render() {

		let file = require("./../Data/Articles.json");
		let current = "123";

		return(
			<div className="BlogContent">
				{file.map( function(file) {
					return <Article title={file.title} 
							date={file.date}  
							info={file.info}
						       	comments={0}
							tags={file.tags}
							categories={file.categories}
							content={file.content}
							small={true}
						/>
				})}
			</div>	
		);
	}
} export default BlogContent;
