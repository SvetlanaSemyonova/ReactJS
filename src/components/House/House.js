import React from 'react';
import People from '../People/';
import { Button } from 'reactstrap';

export default class House extends React.Component {
	constructor() {
		super();
		this.state = {
			showReply: false
		}
	};

	onClick(e) {
		console.log(this.props);
		e.preventDefault();
		this.setState({ showReply: !this.state.showReply });
	};
	render() {
		return (
			<div>
				
				<div style={{ "width": "50%" }}>
					<Button style={{ "width": "30%" }} color="primary" onClick={this.onClick.bind(this)} href='#'>{this.props.house.name}</Button>
				</div>
				<div style={{ "width": "50%", "float": "right" }}>
					{this.state.showReply && <People people={this.props.house.people} />}
				</div>
				<br />
			</div>
		)
	}
};