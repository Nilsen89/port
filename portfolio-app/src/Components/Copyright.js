import React, { Component } from 'react';

class Copyright extends Component {
	render() {

		let date = new Date().getFullYear();

		return (
			<div className="Copyright" style={{textAlign:"left", marginTop:"15px", fontSize:"12"}}>
				Copyright © { date } Christoffer A. Nilsen
			</div>			
		);
	}

} export default Copyright;
