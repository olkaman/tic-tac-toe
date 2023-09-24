import Square from './components/square/Square';
import clsx from 'clsx';
import './globalStyles/appStyles.scss';
import './globalStyles/globalStyles.scss';

function App() {
  return (
    <div className='wrapper'>
      <div className={clsx('flex')}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={clsx('flex')}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={clsx('flex')}>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default App;
