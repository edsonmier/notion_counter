import React, { useState, useEffect } from 'react';
import haerin from './nj-art/Pixels/Haerin.png';
import hanni from './nj-art/Pixels/Hanni.png';
import minji from './nj-art/Pixels/Minji.png';
import danni from './nj-art/Pixels/Danni.png';
import hyein from './nj-art/Pixels/Hyein.png';


import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const newjeansImages = [haerin, hanni, minji, danni, hyein];

  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * newjeansImages.length);
    setRandomImage(newjeansImages[randomIndex]);
  }, []);


  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count-1);
    }
  }

  const reset = () => {
    setCount(0);
  };

  return (
    <div class="App">
      <div class="container">
        <img src={randomImage} className="floaty-image" alt="Newjean" />
        <button class="circle-button" onClick={decrement}>
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="circle">
          <h1 >{count}</h1>
        </div>
        <button class="circle-button" onClick={increment}>
          <i class="fa fa-caret-up"></i>
        </button>
        <button class="reset" onClick={reset}>
          <h1>Reset</h1>
        </button>
      </div>
    </div>
  );
}

export default App;
