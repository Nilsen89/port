import React, { Component } from 'react';
import Section from '../Components/Section';
import cvContent from '../Components/cvContent';

class CV extends Component {
  	render() {
    		return (
			<div className="CV">
				<cvContent />
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
      			</div>
    		);
  	}
} export default CV;
