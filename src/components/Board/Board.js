import Square from '../square/Square';
import clsx from 'clsx';
import { useState } from 'react';

function Board({ squares, onPlay, isXNext }) {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [isXNext, setisXNext] = useState(true);
  const winner = calculateWinner(squares);

  const onSquareClick = (squareNumber) => {
    if (winner) {
      return;
    }
    const newSquaresSet = squares.slice();
    isXNext ? (newSquaresSet[squareNumber] = 'x') : (newSquaresSet[squareNumber] = 'o');
    // setisXNext(!isXNext);
    // setSquares(newSquaresSet);
    onPlay(newSquaresSet);
  };

  let status;
  if (winner) {
    status = `The winner is ${isXNext ? 'o' : 'x'}`;
  } else {
    status = `Next move: ${isXNext ? 'x' : 'o'}`;
  }

  return (
    <>
      <div className='wrapper'>
        <div className={clsx('flex')}>
          <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
          <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
          <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
        </div>
        <div className={clsx('flex')}>
          <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
          <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
          <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
        </div>
        <div className={clsx('flex')}>
          <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
          <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
          <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
        </div>
      </div>
      <div>{status}</div>
    </>
  );
}

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
