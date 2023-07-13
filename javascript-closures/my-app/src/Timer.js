import React, { useEffect, useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time + 1); // Stale closure without dependencies
      console.log(`Time is: ${time}`); // Stale closure without dependencies
    }, 1000);
    return () => clearTimeout(timerId);
  }, [time]);

  // There is a closure in timerId and the second I think is in clearTimeout?

  return (
    <div>
      {time}
      <button onClick={() => setTime(0)} style={{ marginLeft: '1rem' }}>
        Reset
      </button>
    </div>
  );
}
