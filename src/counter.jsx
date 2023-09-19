import React, { useState } from "react";
import "./counter.css";

function Counter({ count }) {
  const [currentCount, setCurrentCount] = useState(count);

  // Function to increment the count
  const incrementCount = () => {
    setCurrentCount(currentCount + 1);
  };

  const decrementCount = () => {
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1);
    }
  };

  return (
    <div className="counterContainer">
      <h2>Counter</h2>
      <div className="count-display">Current Count: {currentCount}</div>
      <div className="buttonContainer">
        <button className="incrementButton" onClick={incrementCount}>
          Increment
        </button>
        <button className="decrementButton" onClick={decrementCount}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
