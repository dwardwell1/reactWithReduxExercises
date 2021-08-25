
import './App.css';
import FirstCounter from './firstCounter';
import SecondCounter from './SecondCounter';
import ColorHeader from './ColorHeader';
import Memes from './Memes';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <FirstCounter />
      <SecondCounter />
      <ColorHeader /> */}
      <Todos />
      <Memes />
      </header>
    </div>
  );
}

export default App;
