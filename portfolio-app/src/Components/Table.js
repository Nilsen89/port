import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
	render() {
		return(
			<div className="Table">
				<table>
					<tr className="white">
						<th>Name:</th>
						<th>Christoffer A. Nilsen</th>
					</tr>
					<tr>
						<th>Country:</th>
						<th>Norway</th>
					</tr>
					<tr className="white">
						<th>E-mail:</th>
						<th>nilsendesign@live.no</th>
					</tr>
					<tr>
						<th>Phone:</th>
						<th>988 01 330</th>
					</tr>
				</table>
			</div>
		);
	}
} export default Table;
