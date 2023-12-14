import React ,  { useState } from "react";
import styles from "./quantity.module.scss";
const Quantity = ({ quantity, onIncrement, onDecrement }) => {
    return (
      <div className="flex items-center space-x-2">
        <button
          onClick={onDecrement}
          className="bg-black text-white px-2 py-1 rounded"
          disabled={quantity === 1} // Ngăn không cho số lượng giảm xuống dưới 1
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={onIncrement}
          className="bg-black text-white px-2 py-1 rounded"
        >
          +
        </button>
      </div>
    );
  };
  export default Quantity;