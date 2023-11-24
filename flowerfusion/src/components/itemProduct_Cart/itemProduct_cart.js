import React, { useState } from "react";
import { IMG_Flower2 } from "../../assets/images";
function ItemProductInCart() {
  const [temp, setTemp] = useState(1);
  const [quantity, setQuantity] = useState(temp);
  function onChange(event) {
    if (event.target.value < 0) return;
    setQuantity(+event.target.value);
    console.log(quantity);
  }
  const inc = () => {
    setQuantity(quantity + 1);
  };
  const dec = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  return (
    <div className="flex">
      <img className="w-[111px] h-[131px]" src={IMG_Flower2} />
      <div className=" ml-6 flex flex-col justify-between">
        <div>
          <p className="font-Lexend text-base font-light">
            FAUX KIKU FLOWER - CREAM
          </p>
          <p className=" my-2 font-Lexend text-base font-medium text-red-price">
            240.000
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
              onInput={(e) => onChange(e)}
            />
            <button
              onClick={inc}
              className="bg-black text-white h-6 w-6 mx-1  rounded-md"
            >
              +
            </button>
          </div>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default ItemProductInCart;
