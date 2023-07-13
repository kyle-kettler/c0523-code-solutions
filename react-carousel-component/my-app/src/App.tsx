import React from 'react';
import './App.css';
import Slider from './Components/Slider';

const images = [
  '/images/bulbasaur.png',
  '/images/charmander.png',
  '/images/squirtle.png',
  '/images/pikachu.png',
  '/images/jigglypuff.png',
];

function App() {
  return <Slider images={images} />;
}

export default App;
