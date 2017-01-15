import React, {Component} from 'react';
import {Link} from 'react-router';
import './Title.css';

class Title extends Component {
		render() {
			return (
				<span className="Title" style={{fontSize:"36"}}>
					<Link to="/" style={{color:"black", textDecoration:"none", outline:"none"}}>
						C·A<span style={{color:"red"}}>· </span> Nilsen
					</Link>
				</span>
			);
		}
} export default Title;
