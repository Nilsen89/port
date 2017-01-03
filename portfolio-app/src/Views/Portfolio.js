import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Section from '../Components/Section';
import Top from "./../Components/Top";
import Copyright from './../Components/Copyright';

class Portfolio extends Component {
  render() {
    return (
		<div className="portfolio">
			<Top pageName={ "Portfolio" } />	
			<Menu />
			<Section sectionName={ "Skills" } 
				file={ JSON.parse(JSON.stringify(require("./../Data/Skills.json"))) } 
			/>
			<Section sectionName={ "Interests" } 
				file={ JSON.parse(JSON.stringify(require("./../Data/Interests.json"))) } 
			/>
			<Section sectionName={ "Hobbies" } 
				file={ JSON.parse(JSON.stringify(require("./../Data/Hobbies.json"))) } 
			/>
			<Section sectionName={ "Courses" } 
				file={ JSON.parse(JSON.stringify(require("./../Data/Courses.json"))) } 
			/>
			<Copyright />
      	</div>
    );
  }
}

export default Portfolio;
