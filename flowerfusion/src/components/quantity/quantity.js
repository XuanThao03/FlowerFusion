import React ,  { useState } from "react";
import styles from "./quantity.module.scss";
const Quantity = () => {
    const [count, setCount] = useState(1); 
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div className="flex items-center space-x-2">
        <button
          onClick={decrement}
          className="bg-black text-white px-2 py-1 rounded"
          disabled={count === 0}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={increment}
          className="bg-black text-white px-2 py-1 rounded"
        >
          +
        </button>
      </div>
    );
  };
  export default Quantity;