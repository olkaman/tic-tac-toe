import Square from '../square/Square';
import clsx from 'clsx';

function Board({ squares, onPlay, isXNext }) {
  const winner = calculateWinner(squares);

  const onSquareClick = (squareNumber) => {
    if (winner) {
      return;
    }
    const newSquaresSet = squares.slice();
    isXNext ? (newSquaresSet[squareNumber] = 'x') : (newSquaresSet[squareNumber] = 'o');
    onPlay(newSquaresSet);
  };

  let status;
  if (winner) {
    status = `The winner is ${winner}`;
  } else if (squares.indexOf(null) === -1) {
    status = `There is no winner!`;
  } else {
    status = `Next move: ${isXNext ? 'x' : 'o'}`;
  }

  return (
    <>
      <div>{status}</div>
      <div className='wrapper'>
        {[...Array(3)].map((x, rowIndex) => {
          return (
            <div className={clsx('flex')} key={rowIndex}>
              {[...Array(3)].map((y, colIndex) => {
                const position = rowIndex * 3 + colIndex;
                return <Square key={position} value={squares[position]} onSquareClick={() => onSquareClick(position)} />;
              })}
            </div>
          );
        })}
      </div>
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
