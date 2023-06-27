import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleButton() {
  const [toggle, setToggle] = useState(false);
  const toggleText = toggle ? 'ON' : 'OFF';
  const active = toggle ? 'checked' : '';

  function handleToggle() {
    setToggle(!toggle);
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
