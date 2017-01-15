import React, {Component} from 'react';

class Codebox extends Component {
	render() {

		let language = this.props.language;
		let code = this.props.code;
		let color;

		switch(code) {
			case "css":
				color = "purple";
				break;
			case "php":
				color = "blue";
				break;
			case "javascript":
				color = "yellow";
				break;
			case "java":
				color = "brown";
				break;
			case "sql":
				color = "red";
				break;
			case "html":
				color = "orange";
				break;
			default:
				color = "gray";
		}

		return(
			<div>
				<div style={{backgroundColor:color}}>
					{ language }
				</div>
				<div style={{backgroundColor:"#181818"}}>
					{ code }
				</div>
			</div>
      		);
	}
} export default Codebox; 
