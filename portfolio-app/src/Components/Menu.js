/* Author: Christoffer A. Nilsen
 * Date: 21.12.2016
 * File: Menu.js
 * Type Description: Menu component
 */

import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router';

class Menu extends Component {
	render() {
		return (
			<div className="menu">
				<Link to=""> Portfolio </Link>
				<Link to="CV"> CV </Link>
				<Link to="Blog"> Blog </Link>
				<Link to="Contact"> Contact </Link>
			</div>
		);	
	}
}

export default Menu;
