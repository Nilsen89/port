import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	
	constructor() {
		super();
		
		this.state = {
			pageName: "Portfolio"
		}
	}
	
	render() {
		return (
			<div className="header">
				{ this.state.pageName }
			</div>			
		);
	}

} export default Header;
