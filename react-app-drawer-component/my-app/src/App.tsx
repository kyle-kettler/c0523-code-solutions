import React from 'react';
import './App.css';
import AppDrawer, { MenuItem } from './AppDrawer';
import { useState } from 'react';
import DrawerButton from './DrawerButton';
import './App.css';

const items: MenuItem[] = [
  {
    title: 'Home',
  },
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
  const [activeItem, setActiveItem] = useState('Home');
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleMenuItemClick(title: string) {
    setActiveItem(title);
    setDrawerOpen(!drawerOpen);
  }

  function handleDrawerOpen() {
    setDrawerOpen(drawerOpen ? false : true);
    console.log(drawerOpen);
  }

  return (
    <div className="container">
      <DrawerButton onDrawerOpen={handleDrawerOpen} />
      <AppDrawer
        drawerState={drawerOpen}
        heading="Menu"
        menuItems={items}
        onMenuItemClicked={handleMenuItemClick}
        onShadeClicked={handleDrawerOpen}
      />
      <h1>{activeItem}</h1>
    </div>
  );
}

export default App;
