import React, { useState, useEffect } from 'react';
import haerin from './nj-art/Pixels/Haerin.png';
import hanni from './nj-art/Pixels/Hanni.png';
import minji from './nj-art/Pixels/Minji.png';
import danni from './nj-art/Pixels/Danni.png';
import hyein from './nj-art/Pixels/Hyein.png';


import './App.css';

const initialCount = parseInt(localStorage.getItem('count') || '0', 10);

function App() {
  const [count, setCount] = useState(initialCount);

  const newjeansImages = [haerin, hanni, minji, danni, hyein];

  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * newjeansImages.length);
    setRandomImage(newjeansImages[randomIndex]);
  }, []);

  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    if (savedCount !== null) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const increment = () => {
    if (count < 99){
      setCount(count + 1);
    }
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
    <div className="App">
      <div className="container">
        <img src={randomImage} className="floaty-image" alt="Newjean" />
        <button className="circle-button" onClick={decrement}>
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="circle">
          <h1 >{count}</h1>
        </div>
        <button className="circle-button" onClick={increment}>
          <i className="fa fa-caret-up"></i>
        </button>
        <button className="reset" onClick={reset}>
          <h1>Reset</h1>
        </button>
      </div>
    </div>
  );
}

export default App;
