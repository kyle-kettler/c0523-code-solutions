import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleButton() {
  const [toggle, setToggle] = useState(false);
  const [toggleText, setToggleText] = useState('OFF');
  const [active, setActive] = useState('');

  function handleToggle() {
    setToggle(toggle ? false : true);
    if (toggle === true) {
      setToggleText('OFF');
      setActive('');
    } else {
      setToggleText('ON');
      setActive('checked');
    }
  }

  return (
    <div className="container">
      <label className={`switch ${active}`}>
        <input onClick={handleToggle} type="checkbox" />
        <span className="slider"></span>
      </label>
      <p>{toggleText}</p>
    </div>
  );
}
