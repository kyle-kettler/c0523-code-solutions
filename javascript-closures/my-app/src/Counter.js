import React, { useEffect, useState, useCallback } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleData = useCallback(() => {
    // fetch data
    return { foo: 'bar' };
  }, []);

  useEffect(() => {
    handleData();
    setCounter((prev) => prev + 1);
  }, [handleData]);

  return <div>Fetching {counter} times</div>;
}
