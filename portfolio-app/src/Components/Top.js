import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Header from './Header';
import Title from './Title';
import ExternalLinks from './ExternalLinks';

class Top extends Component {
	render() {
			return(
				<div className="App">
					<Header pageName={ this.props.pageName } />
					<Title />
					<ExternalLinks />
      			</div>
			);
	}
} export default Top;
