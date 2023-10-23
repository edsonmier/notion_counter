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
  const [isLoading, setIsLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);


  useEffect(() => {
    fetch('http://localhost:3001/getCount')
        .then(res => res.json())
        .then(data => {
            setCount(data.count);
            setHasFetched(true);
        })
        .catch(error => console.error("Error al obtener el contador:", error));
}, []);

  
useEffect(() => {
  if (hasFetched) {
    fetch('http://localhost:3001/updateCount', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count })
    })
    .catch(error => {
      console.error("Hubo un error actualizando el contador:", error);
    });
  }
}, [count, hasFetched]);


  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * newjeansImages.length);
    setRandomImage(newjeansImages[randomIndex]);
  }, []);

  const increment = () => {
    if (count < 99) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  }

  const reset = () => setCount(0);

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

