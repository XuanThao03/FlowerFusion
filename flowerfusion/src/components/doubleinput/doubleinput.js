import React from "react";
import styles from "./doubleinput.module.scss";
const DoubleInput = ({ placeholder1, placeholder2 }) => {
    return (
        <div className="flex w-[650px] ml-16 mt-9 text-xs font-normal text-grey-main">
            <div className="flex-1">
                <input
                className="w-full border-1 border-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder={placeholder1}
                />
            </div>
            <div className="w-4"></div> 
            <div className="flex-1">
                <input
                className="w-full border-1 border-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder={placeholder2}
                />
            </div>
        </div>
    );
  };
  export default DoubleInput;