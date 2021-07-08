import React, { useReducer } from 'react';
import Board from './Board';

const reducer = (state, action) => {
	switch (action.type) {
		case 'MOVE':
			return {
				...state,
				history: state.history.concat({
					squares: action.payload.squares,
				}),
				xIsNext: !state.xIsNext,
			};
		default:
			return state;
	}
};

const Game = () => {
	const [state, dispatch] = useReducer(reducer, {
		xIsNext: true,
		history: [{ squares: Array(9).fill(null) }],
	});

	const { xIsNext, history } = state;

	const calculateWinner = (sqrs) => {
		return null;
	};

	const handleClick = (i) => {
		const curr = history[history.length - 1];
		const squares = curr.squares.slice();
		const winner = calculateWinner(squares);

		if (winner || squares[i]) return;

		squares[i] = xIsNext ? 'X' : 'O';

		dispatch({ type: 'MOVE', payload: { squares } });
	};

	const curr = history[history.length - 1];
	const winner = calculateWinner(curr.squares);

	const status = winner
		? winner === 'D'
			? 'Draw'
			: 'Winner is ' + winner
		: 'Next player is ' + (xIsNext ? 'X' : 'O');

	const moves = history.map((step, move) => {
		const desc = move ? 'Go to # ' + move : 'State the Game';
		return (
			<li key={moveBy}>
				<button onClick={() => jumpTo(move)}>{desc}</button>
			</li>
		);
	});

	const squares = Array(9).fill(null);

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} />
			</div>
			<div className="game-info">
				<div>{status}</div>
				<ul>{moves}</ul>
			</div>
		</div>
	);
};

export default Game;
