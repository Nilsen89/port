import React, { Component } from 'react';

class Categories extends Component {
	render() {
		
		let file = require("./../Data/Articles.json");
		
		return(
			<div className="Categories" style={{marginTop:"10px"}}>
				<span style={{fontWeight:"bold"}}>
					Categories
				</span>
			</div>	
		);
	}
} export default Categories;
