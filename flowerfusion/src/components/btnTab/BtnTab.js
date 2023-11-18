import React from "react";
import { IC_DownArrow } from "../../assets/icons";
import Styles from "./btnTab.module.scss";

export const BtnTab = ({ text }) => {
  return (
    <button className={Styles.btnContainer}>
      <div className="flex flex-nowrap resize-none">
        <p className={Styles.text}>{text}</p>
        <img src={IC_DownArrow} className={Styles.arrow} />
      </div>
    </button>
  );
};
