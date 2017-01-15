import React, { Component } from 'react';
import Top from "./../Components/Top";
import Copyright from './../Components/Copyright';

class Contact extends Component {
	render() {
		return (
			<div>
				<Top />
				{this.props.children}	
				<Copyright />
      			</div>
		);
	}
} export default Contact;
