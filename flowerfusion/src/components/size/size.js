import React from "react";
import styles from "./size.module.scss";

const Size = ({pieces, price}) => {
  return (
    <div className="border p-2 flex justify-between items-center border-detail-border">
      <span className="font-lexend font-bold">{pieces}</span>
      <span>{price}</span>
    </div>
  );
};
export default Size;
