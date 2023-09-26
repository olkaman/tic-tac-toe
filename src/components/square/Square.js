import styles from './Square.module.scss';
import clsx from 'clsx';

function Square({ value, onSquareClick, isWinner }) {
  return (
    <button type='button' onClick={onSquareClick} className={clsx(styles.button, isWinner && styles.red)} disabled={value}>
      {value}
    </button>
  );
}

export default Square;
