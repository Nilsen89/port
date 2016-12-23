/* Author: Christoffer A. Nilsen
 * Date: 21.12.2016
 * File: Menu.js
 * Type Description: Menu component
 */

import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'; 
import './Menu.css';

class Menu extends Component {
	render() {
		return (
			<div className="menu">
				<a href=""> Portfolio </a>
				<a href=""> CV </a>
				<a href=""> Blogg </a>
				<a href=""> Contact </a>
			</div>
		);	
	}
}

export default Menu;
