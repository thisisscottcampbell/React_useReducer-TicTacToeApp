import React from 'react';

const Square = ({ value, onClick }) => {
	return (
		<button className={value ? 'btn disabled' : 'btn'} onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
