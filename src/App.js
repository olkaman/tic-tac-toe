import './globalStyles/appStyles.scss';
import './globalStyles/globalStyles.scss';
import Board from './components/Board/Board';
import { useState } from 'react';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isXNext, setisXNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handleOnPlay = (newSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setisXNext(!isXNext);
  };

  const goToMove = (currentMove) => {
    setCurrentMove(currentMove);
    setisXNext(currentMove % 2 === 0);
  };

  const gameHistory = history.map((squares, index) => {
    let description;
    if (index > 0) {
      description = `Go to move ${index}`;
    } else {
      description = 'Go to the beggining of the game';
    }
    return (
      <div key={index}>
        <button onClick={() => goToMove(index)}>{description}</button>
      </div>
    );
  });

  return (
    <>
      <Board squares={currentSquares} onPlay={handleOnPlay} isXNext={isXNext} />
      <div>Game history: {gameHistory}</div>
    </>
  );
}

export default App;
