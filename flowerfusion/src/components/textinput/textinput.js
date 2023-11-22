import React from "react";
import styles from "./textinput.module.scss";
const TextInput = ({ placeholder }) => {
    return (
        <div className="text-xs font-normal text-grey-main">
                <input
                className="w-[650px] border-[1px] boder-gainsboro rounded-md h-11 p-4 ml-16 mt-5 bg-transparent"
                placeholder={placeholder}/>
        </div>
    );
  };
  export default TextInput;