import { useState } from 'react';
import './ToggleSwitch.css';

type Props = {
  text: string;
};

export default function ToggleButton() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleText, setToggleText] = useState<string>('OFF');

  function handleToggle() {
    setToggle(toggle ? false : true);
    if (toggle === true) {
      setToggleText('OFF');
    } else {
      setToggleText('ON');
    }
  }

  return (
    <div className="container">
      <label className="switch">
        <input onClick={handleToggle} type="checkbox" />
        <span className="slider"></span>
      </label>
      <p>{toggleText}</p>
    </div>
  );
}
