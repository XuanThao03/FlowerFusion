import React from 'react';
import {IC_Account, IC_Bag, IC_Heart, IC_Search} from '../../assets/icons';
import styles from './header.module.scss';
import {NavLink} from 'react-router-dom';
import ItemProductInCart from '../itemProduct_Cart/itemProduct_cart';

export const Header = () => {
  const product = [
    'FAUX KIKU FLOWER - CREAM ',
    'FAUX PAMPAS GRASS - PLUSH PINK ',
    'FAUX PAMPAS GRASS - PLUSH PINK ',
    'FAUX PAMPAS GRASS - PLUSH PINK ',
    'FAUX PAMPAS GRASS - PLUSH PINK ',
    'FAUX PAMPAS GRASS - PLUSH PINK ',
  ];
  const productList = product.map(type => {
    return (
      <div className=" px-5 py-4 border-t-2">
        <ItemProductInCart text={type} />
      </div>
    );
  });

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
              data-te-ripple-color="light">
              <img src={IC_Search} />
            </button>
          </div>
        </div>
        <div className={styles.logo_container}>
          <NavLink to="/" exact={true} className="flex items-center">
            <p className={styles.logo_text}>FlowerFusion</p>
          </NavLink>
        </div>
        <ul className={styles.icon_container}>
          <li className={styles.icon}>
            {/* <NavLink to="/" exact={true}>
              <img src={IC_Bag} alt="Select Icon" />
            </NavLink> */}
            <div class="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                class="drawer-toggle p-5  "
              />
              <div class="drawer-content">
                <button
                  for="my-drawer-4"
                  class="drawer-buttonp py-2 pointer-events-auto  ">
                  <img src={IC_Bag} alt="Select Icon" />
                </button>
              </div>
              <div class="drawer-side z-40 ">
                <label
                  for="my-drawer-4"
                  aria-label="close sidebar"
                  class="drawer-overlay"></label>
                <div className={styles.headerContainer}>
                  <p className={styles.txtHeader}>MY CART</p>
                  <div className="w-full h-2/3  overflow-x-scroll no-scrollbar">
                    {productList}
                  </div>
                  <p className={styles.txtDiscount}>Discount</p>
                  <div className={styles.discountContainer}>
                    <form>
                      <input
                        type="text"
                        id="Discount"
                        name="Discount"
                        className={styles.discountInput}
                      />
                    </form>
                    <button className={styles.btnDiscount}>Discount</button>
                  </div>
                  <div className={styles.totalContainer}>
                    <p className={styles.txtTotal}>Total</p>
                    <p className={styles.valueTotal}>1.500.000 VND</p>
                  </div>
                  <button className={styles.btnCheckout}>Go to Checkout</button>
                </div>
              </div>
            </div>
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
            <NavLink to="/flowers" exact={true}>
              <p className={styles.tab_nav} href="#">
                ALL FLOWERS
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/vases" exact={true}>
              <p className={styles.tab_nav} href="#">
                FAUX VASES
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/candles" exact={true}>
              <p className={styles.tab_nav} href="#">
                CANDLE
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/occasions" exact={true}>
              <p className={styles.tab_nav} href="#">
                OCSASIONS
              </p>
            </NavLink>
          </li>
          <li className={styles.tab_name}>
            <NavLink to="/trending" exact={true}>
              <p className={styles.tab_nav} href="#">
                TRENDING
              </p>
            </NavLink>
          </li>
          {/* <li className={styles.tab_name}>
            <NavLink to="/gifts" exact={true}>
              <p className={styles.tab_nav} href="#">
                GIFTS
              </p>
            </NavLink>
          </li> */}
          <li className={styles.tab_name}>
            <NavLink to="/faq" exact={true}>
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
