import { useState } from "react";

const Counter = ({ initValue = 0, jump = 1 }) => {
  const [counter, setCounter] = useState(initValue);

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + jump)}>Increment</button>
      <button onClick={() => setCounter(counter - jump)}>Decrement</button>
    </div>
  );
};

export default Counter;
