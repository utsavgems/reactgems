import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    document.title = `Counter Demo`;
  }, [counter]); 

  return (
    <>
      <h1>Gems Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;