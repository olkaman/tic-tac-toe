import Square from '../square/Square';
import clsx from 'clsx';

function Board({ squares, onPlay, isXNext }) {
  let winningSquares = [];
  const winner = calculateWinner(squares);
  const squareRowCount = 3;

  console.log(winningSquares);
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
        winningSquares = [a, b, c];
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      <div>{status}</div>
      <div className='wrapper'>
        {[...Array(squareRowCount)].map((x, rowIndex) => {
          return (
            <div className={clsx('flex')} key={rowIndex}>
              {[...Array(squareRowCount)].map((y, colIndex) => {
                const position = rowIndex * squareRowCount + colIndex;
                const isWinner = winningSquares.includes(position);
                return <Square key={position} value={squares[position]} onSquareClick={() => onSquareClick(position)} isWinner={isWinner} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Board;
