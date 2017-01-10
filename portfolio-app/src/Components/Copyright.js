import React, { Component } from 'react';

class Copyright extends Component {
	render() {

		let date = new Date().getFullYear();

		return (
			<div className="Copyright" style={{"text-align":"center"}}>
				<hr />
				Copyright © { date } Christoffer A. Nilsen - MIT License
			</div>			
		);
	}

} export default Copyright;
