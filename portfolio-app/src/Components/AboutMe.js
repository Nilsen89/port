import React, {Component} from 'react';

class AboutMe extends Component {
	render() {
		return(
			<div className="AboutMe">
				<img src={require("./../images/mypic.png")} alt={"me"} heigth={"150"} width={"150"} />
				<br/>
				<span style={{fontWeight:"bold"}}>About Me</span>
				<br/>
				<p>
					Norwegian programming student at 
					Norwegian University of Science and 
					Technology with special interest in 
					Web Security and AI.
				</p>

			</div>
		);
	}
} export default AboutMe;
