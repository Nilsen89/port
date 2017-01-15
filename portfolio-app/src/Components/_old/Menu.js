/* Author: Christoffer A. Nilsen
 * Date: 21.12.2016
 * File: Menu.js
 * Type Description: Menu component
 */

import React, { Component } from 'react';
import './Menu.css';
import { Link, IndexLink } from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

class Menu extends Component {
	render() {
		let styles = {
			color:"black",
			textDecoration:"none",
			outline:"none"
		}
		return (
			<div className="menu">
				<Grid>
					<Row>
						<Col md={4} mdOffset={3}>
						<IndexLink to="CV" activeStyle={{color:"red"}} style={styles}>Curriculum vitae</IndexLink>
						</Col>
						<Col md={2}>
						<Link to="/" activeStyle={{color:"red"}} style={styles}>Blog</Link>
						</Col>
						<Col md={3}>
						<IndexLink to="Contact" activeStyle={{color:"red"}} style={styles}>Contact</IndexLink>
						</Col>
					</Row>
				</Grid>
			</div>
		);	
	}
}

export default Menu;
