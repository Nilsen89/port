import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className="header">
				{ this.props.pageName }
			</div>			
		);
	}

} export default Header;
