import { useState } from 'react';
import './HotButton.css';

export default function HotButton() {
  const [count, setCount] = useState<number>(0);
  let [temperature, setTemperature] = useState<string>('cold');

  const handleButton = () => {
    setCount(count + 1);
    if (count < 4) {
      setTemperature((temperature = 'cold'));
    } else if (count < 7) {
      setTemperature((temperature = 'cool'));
    } else if (count < 10) {
      setTemperature((temperature = 'tepid'));
    } else if (count < 13) {
      setTemperature((temperature = 'warm'));
    } else if (count < 16) {
      setTemperature((temperature = 'hot'));
    } else {
      setTemperature((temperature = 'nuclear'));
    }
  };

  return (
    <div className="container">
      <button onClick={handleButton} className={`hot-button ${temperature}`}>
        Hot Button
      </button>
    </div>
  );
}
