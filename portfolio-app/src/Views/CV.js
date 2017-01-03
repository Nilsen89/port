import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Top from "./../Components/Top";
import Copyright from './../Components/Copyright';

class CV extends Component {
  render() {
    return (
		<div className="CV">
			<Top pageName={ "CV" } />
			<Menu />
			CV
			<Copyright />
      	</div>
    );
  }
}

export default CV;
