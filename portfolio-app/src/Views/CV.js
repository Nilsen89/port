import React, { Component } from 'react';
import Top from "./../Components/Top";
import Copyright from './../Components/Copyright';
import Section from '../Components/Section';

class CV extends Component {
  	render() {
    		return (
			<div className="CV">
				<Top  />	
				<Section sectionName={ "Skills" } 
					file={ JSON.parse(JSON.stringify(require("./../Data/Skills.json"))) } 
				/>
				<Section sectionName={ "Interests" } 
					file={ JSON.parse(JSON.stringify(require("./../Data/Interests.json"))) } 
				/>
				<Section sectionName={ "Hobbies" } 
					file={ JSON.parse(JSON.stringify(require("./../Data/Hobbies.json"))) } 
				/>
				<Section sectionName={ "Education/Degrees" } 
					file={ JSON.parse(JSON.stringify(require("./../Data/Education.json"))) } 
				/>
				<Section sectionName={ "Courses" } 
					file={ JSON.parse(JSON.stringify(require("./../Data/Courses.json"))) } 
				/>
				<Copyright />
      			</div>
    		);
  	}
} export default CV;
