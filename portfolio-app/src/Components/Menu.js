/* Author: Christoffer A. Nilsen
 * Date: 21.12.2016
 * File: Menu.js
 * Type Description: Menu component
 */

import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

class Menu extends Component {
	render() {
		return (
			<div className="menu">
				<Grid>
					<Row>
						<Col md={3}>
							<Link to="" style={{ color:"black" }}>Portfolio</Link>
						</Col>
						<Col md={4}>
							<Link to="CV" style={{ color:"black" }}>Curriculum vitae</Link>
						</Col>
						<Col md={2}>
							<Link to="Blog" style={{ color:"black" }}>Blog</Link>
						</Col>
						<Col md={3}>
							<Link to="Contact" style={{ color:"black" }}>Contact</Link>
						</Col>
					</Row>
				</Grid>
			</div>
		);	
	}
}

export default Menu;
