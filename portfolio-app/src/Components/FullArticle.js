import React, { Component } from 'react';
import Article from './Article';

class BlogContent extends Component {
	render() {
		
		let file = require("./../Data/Articles.json");
		
		let article;

		for(var i = 0; i < file.length; i++) {
			if(file[i].title === this.props.params.article) {
				article = file[i];
			}
		}

		return(
			<div style={{marginTop:"20px"}}>
				<Article title={article.title} 
					date={article.date}  
					info={article.info}
					comments={0}
					tags={article.tags}
					categories={article.categories}
					content={article.content}
					small={false}
				/>
			</div>	
		);
	}
} export default BlogContent;
