import React, { useState } from 'react';


function Counter() {

  const [count, setCount] = useState(0)
  const first_name = "Teva"
  const last_name = "Griegou"
  return (
    <div>
      <p>Tu as cliqué {count} fois !</p>
      <button onClick={() => setCount(count +1)}>Clique sur ma gueule !</button>
      <button onClick={() => setCount(0)}> Reset le count </button>
      <p> Logged in as {first_name} {last_name} </p>
    </div>
  );
}

export default Counter;
