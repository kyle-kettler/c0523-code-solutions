import React from 'react';
import './App.css';
import AppDrawer, { MenuItem } from './AppDrawer';

const items: MenuItem[] = [
  {
    title: 'About',
  },
  {
    title: 'Get Started',
  },
  {
    title: 'Sign In',
  },
];

function App() {
  return (
    <div>
      <AppDrawer heading="Menu" menuItems={items} />
    </div>
  );
}

export default App;
