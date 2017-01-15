import React, { Component } from 'react';

class ExternalLinks extends Component {

	render() {
		return(
			<div className="externalLinks" style={{marginTop:"10px"}}>
				<span style={{fontWeight:"bold"}}>Follow Me</span>
				<br/>
				<a href="www.facebook.com/nilsen">
					<img src={require("../images/fb-icon.png")} alt="fb-icon.png" width="25" height="25" />
				</a>
				<a href="www.github.com/nilsen89">
					<img src={require("../images/github.png")} alt="github.png" width="25" height="25" />
				</a>
				<a href="www.facebook.com/nilsen">
					<img src={require("../images/linkin-icon.png")} alt="linkin-icon.png" width="25" height="25" />
				</a>
			</div>	
		);
	}
} export default ExternalLinks;
