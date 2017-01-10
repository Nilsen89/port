import React, { Component } from 'react';
import Top from "./../Components/Top";
import Copyright from './../Components/Copyright';
import Table from './../Components/Table';

class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<Top pageName={ "Contact" } />	
				<Table />
				<Copyright />
      			</div>
		);
	}
} export default Contact;
