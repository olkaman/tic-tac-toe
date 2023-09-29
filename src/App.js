import './globalStyles/appStyles.scss';
import './globalStyles/globalStyles.scss';
import Board from './components/Board/Board';
import { useState } from 'react';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const isXNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handleOnPlay = (newSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const goToMove = (currentMove) => {
    setCurrentMove(currentMove);
  };

  const gameHistory = history.map((squares, index) => {
    let description;
    if (index > 0) {
      description = `Go to move ${index}`;
    } else {
      description = 'Go to the beggining';
    }
    return (
      <div key={index}>
        {index === currentMove ? (
          <div className='gameInfo'>You are at move {index}</div>
        ) : (
          <button type='button' onClick={() => goToMove(index)} className='button gameButton'>
            {description}
          </button>
        )}
      </div>
    );
  });

  const resetGame = () => {
    setCurrentMove(0);
    setHistory([Array(9).fill(null)]);
  };

  return (
    <div className='appStyles flex'>
      <h1>Tic tac toe game</h1>
      <Board squares={currentSquares} onPlay={handleOnPlay} isXNext={isXNext} />
      <button type='button' onClick={resetGame} className='button resetButton'>
        Reset game
      </button>
      <div className='gameHistory'>
        <h3>Game history:</h3> {gameHistory}
      </div>
    </div>
  );
}

export default App;
