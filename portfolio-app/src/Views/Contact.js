import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Top from "./../Components/Top";
import Copyright from './../Components/Copyright';
import Table from './../Components/Table';
import { Grid, Row, Col} from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
		<div className="contact">
			<Grid>
				<Row>
					<Col md={6} mdOffset={3}>
						<Top pageName={ "Contact" } />	
						<Menu />
					</Col>
					<Col md={3} mdOffset={5}>
						<Table />
					</Col>
					<Col md={6} mdOffset={3}>
						<Copyright />
					</Col>
				</Row>
			</Grid>
      	</div>
    );
  }
}

export default Contact;
