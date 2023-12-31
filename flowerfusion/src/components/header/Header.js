import React, {useCallback, useMemo, useState, useEffect} from 'react';
import {IC_Account, IC_Bag, IC_Heart, IC_Search} from '../../assets/icons';
import styles from './header.module.scss';
import {NavLink} from 'react-router-dom';
import ItemProductInCart from '../itemProduct_Cart/itemProduct_cart';
import {useSelector, useDispatch} from 'react-redux';
import {pushCart, setCartData} from '../../Redux/Actions/cartAction';
import axios from 'axios';

export const Header = () => {
  //search
  // const [keywords, setKeywords] = useState('');

  const cartItems = useSelector(state => state.cart.items);
  const cartIsPushed = useSelector(state => state.cart.isPushed);

  // console.log('cartItems.isPushed', cartIsPushed);
  console.log('cartItems', cartItems);
  const totalAmount = useMemo(() => {
    if (cartItems.length === 0) {
      return '0 VND';
    }
    const total = cartItems.reduce((acc, item) => {
      console.log('Item Price:', item.totalPrice);

      if (item.price && item.price.trim() !== '') {
        const priceAsNumber = parseFloat(item.price.replace(/\./g, ''));
        return acc + priceAsNumber;
      }

      return acc;
    }, 0);
    return total.toLocaleString('vi-VN') + ' VND';
  }, [cartItems]);
  const handleCheckoutClick = () => {
    const drawerCheckbox = document.getElementById('my-drawer-4');
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const {error, loading, userInfo} = userLogin;
  const handlePushCart = () => {
    if (userInfo && !cartIsPushed) {
      var quantity = 0;
      cartItems.forEach(element => {
        quantity += element.quantity;
      });
      console.log('quantity', quantity);
      dispatch(pushCart(quantity, totalAmount, cartItems));
    }
  };
  useEffect(() => {
    if (userInfo && userInfo.email) {
      const fetchCartData = async () => {
        try {
          const response = await axios.get(`/api/carts/${userInfo.email}`);
          if (response.data) {
            dispatch(setCartData(response.data.products));
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            console.log('Cart not found for this email');
          } else {
            console.error('Error fetching cart data:', error);
          }
        }
      };

      fetchCartData();
    }
  }, [userInfo, dispatch]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container1}>
        <div class={styles.searchContainer}>
          {/* <div class={styles.searchInput}>
            <input
              onChange={e => setKeywords(e.target.value)}
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
          </div> */}
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
                    {cartItems
                      ? cartItems.map((item, index) => (
                          <div className=" px-5 py-4 border-t-2">
                            <ItemProductInCart key={index} item={item} />
                          </div>
                        ))
                      : null}
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
                    <p className={styles.valueTotal}>{totalAmount}</p>
                  </div>
                  <button
                    className={styles.btnCheckout}
                    onClick={handlePushCart}>
                    <NavLink to="/checkout" onClick={handleCheckoutClick}>
                      Go to Checkout
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.icon}>
            <NavLink to={userInfo ? '/myaccount' : '/login'} exact={true}>
              <img src={IC_Account} alt="Select Icon" />
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
