import React from 'react';
import './App.css';
import SearchableList from './SearchableList';

const topTenGames = [
  'Half-Life 2 (2004)',
  'Dark Souls (2011)',
  'Portal 2 (2011)',
  'Metal Gear Solid (1998)',
  'Mass Effect 2',
  'The Witcher III: Wild Hunt (2015)',
  'Bloodborne (2015)',
  'Tetris (1985)',
  'The Last of Us (2013)',
  'The Legend of Zelda: Breath of the Wild (2017)',
];

function App() {
  return (
    <div className="container">
      <SearchableList list={topTenGames} />
    </div>
  );
}

export default App;
