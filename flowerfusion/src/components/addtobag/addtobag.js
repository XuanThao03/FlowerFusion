import React from "react";
import styles from "./addtobag.module.scss";

const AddToBag = () => {
  return (
    <div className="flex-col flex">
        <div className="flex justify-between items-center">
            <div>
                <span className="text-spanish-gray">Delivery fee:</span>
                <span className="text-spanish-gray"> 46.000</span>
            </div>
            <div>
                <span className="text-total-price font-semibold mr-2">Total</span>
                <span className="text-pine-tree font-bold">120.000</span>
            </div>
        </div>
        <button className="bg-button-black rounded-[10px] text-white text-xs font-semibold py-2 px-4 mt-11">
            Add to bag
        </button>
    </div>
  );
};
export default AddToBag;
