import React from 'react';
import './App.css';
import RotatingBanner from './Components/RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return <RotatingBanner items={items} />;
}

export default App;
