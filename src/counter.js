import react, { useState } from "react";
import "./counter.css";

export const Counter = () => {
  const [counter, setCount] = useState(0);

  const decrementCount = () => {
    if (counter > 0) {
      setCount(counter - 1);
    }
  };
  const incrementCount = () => {
    setCount(counter + 1);
  };

  return (
    <div className="counterContainer">
      <button type="button" onClick={decrementCount}>
        -
      </button>
      {counter}
      <button type="button" onClick={incrementCount}>
        +
      </button>
    </div>
  );
};
