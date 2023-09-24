import styles from './Square.module.scss';

function Square({ value, onSquareClick }) {
  return (
    <button type='button' onClick={onSquareClick} className={styles.button} disabled={value}>
      {value}
    </button>
  );
}

export default Square;
