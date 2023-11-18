import React from "react";
import { IC_Account, IC_Bag, IC_Heart } from "../../assets/icons";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.tab_nav_container}>
      <div className={styles.logo_container}>
        <NavLink to="/" exact={true}>
          <span className={styles.logo_text}>FlowerFusion</span>
        </NavLink>
      </div>
      <ul className={styles.nav_container}>
        <li className={styles.tab_name}>
          <NavLink to="/" exact={true}>
            <a className={styles.tab_nav} href="#">
              Home
            </a>
          </NavLink>
        </li>
        <li className={styles.tab_name}>
          <NavLink to="/catalog" exact={true}>
            <a className={styles.tab_nav} href="#">
              All of flowers
            </a>
          </NavLink>
        </li>
        <li className={styles.tab_name}>
          <NavLink to="/" exact={true}>
            <a className={styles.tab_nav} href="#">
              Occasions
            </a>
          </NavLink>
        </li>
        <li className={styles.tab_name}>
          <NavLink to="/" exact={true}>
            <a className={styles.tab_nav} href="#">
              Trending
            </a>
          </NavLink>
        </li>
        <li className={styles.tab_name}>
          <NavLink to="/" exact={true}>
            <a className={styles.tab_nav} href="#">
              Gifts
            </a>
          </NavLink>
        </li>
        <li className={styles.tab_name}>
          <NavLink to="/" exact={true}>
            <a className={styles.tab_nav} href="#">
              Blogs
            </a>
          </NavLink>
        </li>
        <ul className={styles.icon_container}>
          <li className={styles.icon}>
            <img src={IC_Bag} alt="Select Icon" />
          </li>
          <li className={styles.icon}>
            <img src={IC_Account} alt="Select Icon" />
          </li>
          <li className={styles.icon}>
            <img src={IC_Heart} alt="Select Icon" />
          </li>
        </ul>
      </ul>
    </div>
  );
};
