import React from 'react';
import Square from './Square';
const Board = ({ squares }) => {
	return (
		<div className="board">
			<div>
				<Square value={squares[0]} onClick={() => console.log(0)} />
				<Square value={squares[1]} onClick={() => console.log(1)} />
				<Square value={squares[2]} onClick={() => console.log(2)} />
			</div>
			<div>
				<Square value={squares[3]} onClick={() => console.log(3)} />
				<Square value={squares[4]} onClick={() => console.log(4)} />
				<Square value={squares[5]} onClick={() => console.log(5)} />
			</div>
			<div>
				<Square value={squares[6]} onClick={() => console.log(6)} />
				<Square value={squares[7]} onClick={() => console.log(7)} />
				<Square value={squares[8]} onClick={() => console.log(8)} />
			</div>
		</div>
	);
};

export default Board;
