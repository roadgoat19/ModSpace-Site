import './App.css';
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [modulos, setModulos] = useState(0);

  return (
    <div className="App">
      <div className="Counter">
        <button 
          onClick={() => modulos !== 0 ? setCounter((prevCount) => (prevCount - 1 + modulos) % modulos) : setCounter(() => 0)}>
          -
        </button>
        <h1>{counter}</h1>
        <button 
          onClick={() => modulos !== 0 ? setCounter((prevCount) => (prevCount + 1) % modulos) : setCounter(() => 0)}>
          +
        </button>
      </div>
      <div className="ModSpace">
        <button onClick={() => setModulos((prevModulos) => Math.max(0, prevModulos - 1))}>-</button>
        <h1>Mod: {modulos}</h1>
        <button onClick={() => setModulos((prevModulos) => prevModulos + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
