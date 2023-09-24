import './globalStyles/appStyles.scss';
import './globalStyles/globalStyles.scss';
import Board from './components/Board/Board';
import { useState } from 'react';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isXNext, setisXNext] = useState(true);
  const currentSquares = history[history.length - 1];

  const handleOnPlay = (newSquares) => {
    setHistory([...history, newSquares]);
    setisXNext(!isXNext);
  };

  return <Board squares={currentSquares} onPlay={handleOnPlay} isXNext={isXNext} />;
}

export default App;
