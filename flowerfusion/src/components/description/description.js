import React from "react";
import styles from "./description.module.scss";
const Description = ({ placeholder }) => {
    return (
            <div className="">
                <h1 className="font-bold font-Lexend text-xl">Description</h1>
                <h2 className="mt-7 font-Lexend">{placeholder}</h2>
            </div>
    );
  };
  export default Description;