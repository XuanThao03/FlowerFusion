import React, {useState} from 'react';
import {Route, Router, Routes} from 'react-router-dom';
import Information from './Information/information';
import YourOder from './YourOrder/yourOrder';
import ChangePw from './ChangePw/changePw';
import Address from './Address/address';
import styles from './myAccount.module.scss';
import {useDispatch} from 'react-redux';
import {logout} from '../../Redux/Actions/userActions';
const tabNames = [
  'ACCOUNT INFORMATION',
  'YOUR ORDER',
  'CHANGE PASSWORD',
  'ADDRESS (1)',
  'LOG OUT',
];
const tabs = [<Information />, <YourOder />, <ChangePw />, <Address />];
function MyAccount() {
  const dispatch = useDispatch();
  const [index, SetIndex] = useState(0);
  const tabList = tabNames.map(tab => {
    return (
      <li className={styles.tabContainer}>
        <button
          onClick={() => {
            {
              tab != 'LOG OUT'
                ? SetIndex(tabNames.indexOf(tab))
                : logoutHandler();
            }
          }}
          className={styles.txtTabname}>
          {tab}
        </button>
      </li>
    );
  });

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container1}>
        <div className=" w-fit">
          <p className={styles.txtGreeting}>Hello, Thanh Hien</p>
          <p className={styles.txtSub}>See your account</p>
          <ul className="my-10">{tabList}</ul>
        </div>
      </div>
      <div className={styles.navtabContainer}>{tabs.at(index)}</div>
    </div>
  );
}

export default MyAccount;
