import React, {Component} from 'react';

class AboutMe extends Component {
	render() {
		return(
			<div className="AboutMe">
				<img src={require("./../images/me.jpg")} alt={"me"} heigth={"150px"} width={"150px"} />
				<span style={{"font-weight":"bold"}}>About Me</span>
				<br/>
				Norwegian programming student at Norwegian University of Science and Technology with special interest in Web Security and AI.
			</div>
		);
	}
} export default AboutMe;
