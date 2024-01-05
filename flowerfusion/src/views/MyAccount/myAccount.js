import React, {useState} from 'react';
import {Route, Router, Routes, useNavigate} from 'react-router-dom';
import Information from './Information/information';
import YourOder from './YourOrder/yourOrder';
import ChangePw from './ChangePw/changePw';
import Address from './Address/address';
import styles from './myAccount.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../Redux/Actions/userActions';
import {USER_LOGOUT} from '../../Redux/Constants/UserContants';
import {pushCart} from '../../Redux/Actions/cartAction';
const tabNames = [
  'ACCOUNT INFORMATION',
  'YOUR ORDER',
  'CHANGE PASSWORD',
  'ADDRESS (1)',
  'LOG OUT',
];
const tabs = [<Information />, <YourOder />, <ChangePw />, <Address />];
function MyAccount(user) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [index, SetIndex] = useState(0);

  const cartItems = useSelector(state => state.cart.items);
  const cartIsPushed = useSelector(state => state.cart.isPushed);

  const tabList = tabNames.map(tab => {
    return (
      <li className={styles.tabContainer}>
        <button
          onClick={() => {
            tab !== 'LOG OUT'
              ? SetIndex(tabNames.indexOf(tab))
              : logoutHandler();
          }}
          className={styles.txtTabname}>
          {tab}
        </button>
      </li>
    );
  });

  const logoutHandler = () => {
    var quantity = 0;
    cartItems.forEach(element => {
      quantity += element.quantity;
    });

    const total = cartItems.reduce((acc, item) => {
      console.log('Item Price:', item.totalPrice);
      if (item.price && item.price.trim() !== '') {
        const priceAsNumber = parseFloat(item.price.replace(/\./g, ''));
        return acc + priceAsNumber;
      }
      return acc;
    }, 0);
    var totalAmount = total.toLocaleString('vi-VN') + ' VND';
    console.log('quantity', quantity);
    dispatch(pushCart(quantity, totalAmount, cartItems));

    window.open(`http://localhost:5000/auth/logout`, '_self');
    navigate('/login');
    dispatch({type: USER_LOGOUT});

    localStorage.removeItem('userInfo');
    localStorage.removeItem('cart');
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container1}>
        <div className=" w-fit">
          <p className={styles.txtGreeting}>{('Hello, ', user.name)}</p>
          <p className={styles.txtSub}>See your account</p>
          <ul className="my-10">{tabList}</ul>
        </div>
      </div>
      <div className={styles.navtabContainer}>{tabs.at(index)}</div>
    </div>
  );
}

export default MyAccount;
