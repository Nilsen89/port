import React, {Component} from 'react';
import Dropbox from './Dropbox';

class Courses extends Component {

	constructor(props) {
		super(props);
		this.state = {
			   	obj: this.props.file
		}
	}

	render() {
		return(
			<div className="Section" style={{"text-align":"center"}}>
				<h3> { this.props.sectionName } </h3>
				<div>
					{ this.state.obj.map( function(obj) {
						return <Dropbox code={ obj.code } name={ obj.name }  info={ obj.info }  />						   
					})}
				</div>
			</div>	
		);
	}
} export default Courses;
