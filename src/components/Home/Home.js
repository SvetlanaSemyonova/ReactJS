import React from 'react';
import Houses from '../Houses/';
import DocTitle from 'react-document-title';

export default React.createClass({
	render() {
		return (
			<div className='Home'>
				<DocTitle title='Home Page' />
				<Houses />
			</div>
		);
	},
});
