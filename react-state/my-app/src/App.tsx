import React from 'react';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div>
      <ToggleButton text={'Hello'} color={'red'} />
      <ToggleButton text={'World'} color={'green'} />
      <ToggleButton text={'React'} color={'cornflowerblue'} />
    </div>
  );
}

export default App;
