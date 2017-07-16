import React from 'react';
import houses from '../../homes.json';
import House from '../House/';

export default React.createClass({
	render() {
		return (
			<div>
				{houses.houses.map((item, i) =>
					<div>
						<House house={item} />
					</div>
				)}
			</div>
		)
	}
});


