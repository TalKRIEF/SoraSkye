import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Tu as cliqué {count} fois !</p>
      <button onClick={() => setCount(count +1)}>Clique sur ma gueule !</button>
      <button onClick={() => setCount(0)}> Reset le count </button>
    </div>
  );
}

export default Counter;
