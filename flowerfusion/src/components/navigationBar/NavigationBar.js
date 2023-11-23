import React from "react";
import { IC_BackArrow } from "../../assets/icons";
import styles from "./navigation.module.scss";
export const NavigationBar = () => {
  return (
    <div>
      <ul className=" md:flex my-5">
        <li className="ml-9">
          <img src={IC_BackArrow} alt="Select Icon" />
        </li>
        <li>
          <a href="#" className={styles.parentTab}>
            Home
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="#" className={styles.activeTab}>
            All of flowers
          </a>
        </li>
      </ul>
    </div>
  );
};
