import { useState } from "react";
import "./styles.css";

const Increment = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="Increments">
      <p>Count: {count}</p>
      <button onClick={increase}>Click me </button>
    </div>
  );
};

export default Increment;
