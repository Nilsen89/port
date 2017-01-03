import React, {Component} from 'react';
import Dropbox from './Dropbox';
import data from './../Data/Courses.json';

class Courses extends Component {

	constructor() {
		super();
		this.state = {
			   	obj: JSON.parse(JSON.stringify(data))
		}
	}

	render() {
		return(
			<div className="Courses">
				<h3> Courses </h3>
				<div>
					{ this.state.obj.map( function(obj) {
						return <Dropbox code={ obj.code } name={ obj.name }  info={ obj.info }  />						   
					})}
				</div>
			</div>	
		);
	}
} export default Courses;
