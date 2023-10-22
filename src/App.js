import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count-1);
  }

  const reset = () => {
    setCount(0);
  };

  return (
    <div class="App">
      <div class="container">
        <button class="circle-button" onClick={decrement}>
          <i class="fa fa-caret-down"></i>
        </button>
        <h1 class="circle">{count}</h1>
        <button class="circle-button" onClick={increment}>
          <i class="fa fa-caret-up"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
