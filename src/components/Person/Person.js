import React from 'react';
import SkyLight from 'react-skylight';
import EditPopup from '../EditPopup/';

export default class Person extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.person.name };
	}
	_executeAfterModalClose() {
		this.setState({ name: this.props.person.name });
	}
	render() {
		var dialogStyles = {
			width: '50%',
			height: '400px',
			position: 'fixed',
			top: '50%',
			left: '50%',
			marginTop: '-200px',
			marginLeft: '-25%',
			backgroundColor: '#00897B',
		};

		return (
			<div onDoubleClick={() => this.refs.simpleDialog.show()}>
				<label>{this.state.name}</label>
				<br />
				<SkyLight
					dialogStyles={dialogStyles}
					afterClose={() => this._executeAfterModalClose()}
					hideOnOverlayClicked ref="simpleDialog" title="Edit:">
					<EditPopup person={this.props.person} />
				</SkyLight>
			</div>
		);
	}
}