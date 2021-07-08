import React from 'react';

const Square = ({ value }) => {
	return (
		<button className="btn" onClick={console.log('sq click')}>
			{value}
		</button>
	);
};

export default Square;
