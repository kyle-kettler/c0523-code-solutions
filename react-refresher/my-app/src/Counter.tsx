import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleUpClick() {
    setCount(count + 1);
  }

  function handleDownClick() {
    setCount(count - 1);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        columnGap: '1rem',
      }}>
      <button onClick={handleDownClick}>Down</button>
      <p>{count}</p>
      <button onClick={handleUpClick}>Up</button>
    </div>
  );
}
