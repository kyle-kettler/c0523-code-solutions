import { useState } from 'react';
import './HotButton.css';

export default function HotButton() {
  const [count, setCount] = useState<number>(0);
  const [temperature, setTemperature] = useState<string>('cold');

  const handleButton = () => {
    setCount(count + 1);
    if (count < 3) {
      setTemperature('cold');
    } else if (count < 6) {
      setTemperature('cool');
    } else if (count < 9) {
      setTemperature('tepid');
    } else if (count < 12) {
      setTemperature('warm');
    } else if (count < 15) {
      setTemperature('hot');
    } else {
      setTemperature('nuclear');
    }
  };

  return (
    <div className="container">
      <button onClick={handleButton} className={`hot-button ${temperature}`}>
        Hot Button
      </button>
      <p>{`Number of clicks: ${count}`}</p>
    </div>
  );
}
