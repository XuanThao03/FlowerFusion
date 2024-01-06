import React from "react";
import { IC_BackArrow } from "../../assets/icons";
import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
export const NavigationBar = ({ placeholder }) => {
  return (
    <div>
      <ul className=" md:flex my-5">
        <li className="ml-9">
          <img src={IC_BackArrow} alt="Select Icon" />
        </li>
        <li>
          <Link to="/" className={styles.parentTab}>
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <a href="#" className={styles.activeTab}>
          { placeholder }
          </a>
        </li>
      </ul>
    </div>
  );
};
