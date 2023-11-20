import React from "react";
import { IC_Account, IC_Bag, IC_Heart, IC_Search } from "../../assets/icons";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container1}>
        <div class={styles.searchContainer}>
          <div class={styles.searchInput}>
            <input
              className={styles.search}
              type="text"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              class={styles.btnSearch}
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img src={IC_Search} />
            </button>
          </div>
        </div>
        <div className={styles.logo_container}>
          <NavLink to="/" exact={true}>
            <p className={styles.logo_text}>FlowerFusion</p>
          </NavLink>
        </div>
        <ul className={styles.icon_container}>
          <li className={styles.icon}>
            <NavLink to="/" exact={true}>
              <img src={IC_Bag} alt="Select Icon" />
            </NavLink>
          </li>
          <li className={styles.icon}>
            <NavLink to="/login" exact={true}>
              <img src={IC_Account} alt="Select Icon" />
            </NavLink>
          </li>
          <li className={styles.icon}>
            <NavLink to="/" exact={true}>
              <img src={IC_Heart} alt="Select Icon" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.container2}>
        <ul className={styles.nav_container}>
          <li className={styles.tab_name}>
            <NavLink to="/catalog" exact={true}>
              <p className={styles.tab_nav} href="#">
                ALL FLOWERS
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/vase" exact={true}>
              <p className={styles.tab_nav} href="#">
                FAUX VASES
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/" exact={true}>
              <p className={styles.tab_nav} href="#">
                OCCASIONS
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/" exact={true}>
              <p className={styles.tab_nav} href="#">
                CANDLE
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/" exact={true}>
              <p className={styles.tab_nav} href="#">
                OCSASIONS
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/" exact={true}>
              <p className={styles.tab_nav} href="#">
                TRENDING
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/" exact={true}>
              <p className={styles.tab_nav} href="#">
                GIFTS
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/" exact={true}>
              <p className={styles.tab_nav} href="#">
                FAQ / SHIPPING
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
