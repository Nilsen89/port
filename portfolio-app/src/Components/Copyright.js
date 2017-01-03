import React, { Component } from 'react';

class Copyright extends Component {
	render() {

		let date = new Date().getFullYear();

		return (
			<div className="Copyright">
				<hr />
				Copyright © { date } Christoffer A. Nilsen
			</div>			
		);
	}

} export default Copyright;
