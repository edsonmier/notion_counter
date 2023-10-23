import React, { useState, useEffect } from 'react';
import haerin from './nj-art/Pixels/Haerin.png';
import hanni from './nj-art/Pixels/Hanni.png';
import minji from './nj-art/Pixels/Minji.png';
import danni from './nj-art/Pixels/Danni.png';
import hyein from './nj-art/Pixels/Hyein.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [initialCountLoaded, setInitialCountLoaded] = useState(false);
  const newjeansImages = [haerin, hanni, minji, danni, hyein];
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    fetch('https://nj-backend.vercel.app/api/getCount')
        .then(res => {
            console.log("Respuesta raw:", res);
            return res.json();
        })
        .then(data => {
            console.log("Data:", data);
            setCount(data.count);
            setInitialCountLoaded(true);
        })
        .catch(error => console.error("Error al obtener el contador:", error));
  }, []);

useEffect(() => {
  if (!initialCountLoaded) return; 
  fetch('https://nj-backend.vercel.app/api/updateCount', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ count })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Respuesta de actualización:", data);
  })
  .catch(error => {
    console.error("Hubo un error actualizando el contador:", error);
  });
}, [count]);

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

  const reset = () => {
    setCount(0);
    // También enviar petición para resetear el contador en el backend
    fetch('https://nj-backend.vercel.app/api/updateCount', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count: 0 })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Respuesta de reset:", data);
    })
    .catch(error => {
      console.error("Hubo un error reseteando el contador:", error);
    });
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

