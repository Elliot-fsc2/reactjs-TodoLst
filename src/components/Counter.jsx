import { useState } from "react";
import style from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrease = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter((c) => 0);
  };

  const handleIncrease = () => {
    setCounter((c) => c + 1);
  };

  // counter > 5 ? setCounter("Ouch!") : counter < -5 && setCounter("I miss you");

  return (
    <div className={`container text-center p-5`}>
      <h1 className={`${style.headd}`}>{counter}</h1>
      <button
        className="btn btn-danger btn-md me-lg-5"
        onClick={handleDecrease}
      >
        Decrease
      </button>
      <button
        className="btn btn-secondary btn-md me-lg-5"
        onClick={handleReset}
      >
        Reset
      </button>
      <button className="btn btn-success btn-md" onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
