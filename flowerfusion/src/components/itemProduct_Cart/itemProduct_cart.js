import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../Redux/Actions/cartAction';
function ItemProductInCart({item}) {
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(incrementQuantity({ name: item.name, price: item.price }));
  };
  const dec = () => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity({ name: item.name, price: item.price }));
    }
  };
  const removeItem = () => {
    dispatch(removeFromCart({ name: item.name, price: item.price }));
  };

  const quantity = item.quantity;
  
  return (
    <div className="flex">
      <img className="w-[111px] h-[131px]" src={item.imgPath} />
      <div className=" ml-6 flex flex-col justify-between">
        <div>
          <p className="font-Lexend text-base font-light">
            {item.name}
          </p>
          <p className=" my-2 font-Lexend text-base font-medium text-red-price">
            {item.price}
          </p>
        </div>
        <div className="flex justify-between ">
          <div className="flex ">
            <button
              onClick={dec}
              className="bg-black text-white h-6 w-6 mx-1 rounded-md"
            >
              -
            </button>
            <input
              type="number"
              className=" w-10 h-6 border-0 p-0 justify-center text-center"
              value={quantity}
              readOnly
            />
            <button
              onClick={inc}
              className="bg-black text-white h-6 w-6 mx-1  rounded-md"
            >
              +
            </button>
          </div>
          <button onClick={removeItem}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default ItemProductInCart;
