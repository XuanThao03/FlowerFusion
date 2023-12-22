import React from 'react';
import styles from './addtobag.module.scss';

const AddToBag = ({ totalPrice, onAddToCart }) => {
  const formattedTotalPrice = totalPrice ? totalPrice.toLocaleString('vi-VN') : '0';
  return (
    <div className="flex-col flex">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-spanish-gray">Delivery fee:</span>
          <span className="text-spanish-gray"> 46.000</span>
        </div>
        <div>
          <span className="text-total-price font-semibold mr-2">Total</span>
          <span className="text-pine-tree font-bold">
                {formattedTotalPrice}</span>
        </div>
      </div>
      <button className="bg-button-black rounded-[10px] text-white text-xs font-semibold py-4 px-4 mt-11"
              onClick={onAddToCart}>
        Add to bag
      </button>
    </div>
  );
};
export default AddToBag;
