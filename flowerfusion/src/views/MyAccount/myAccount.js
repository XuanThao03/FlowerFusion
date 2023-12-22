import React, {useState} from 'react';
import {Route, Router, Routes} from 'react-router-dom';
import Information from './Information/information';
import YourOder from './YourOrder/yourOrder';
import ChangePw from './ChangePw/changePw';
import Address from './Address/address';
import styles from './myAccount.module.scss';
import {useDispatch} from 'react-redux';
import {logout} from '../../Redux/Actions/userActions';
import {USER_LOGOUT} from '../../Redux/Constants/UserContants';
const tabNames = [
  'ACCOUNT INFORMATION',
  'YOUR ORDER',
  'CHANGE PASSWORD',
  'ADDRESS (1)',
  'LOG OUT',
];
const tabs = [<Information />, <YourOder />, <ChangePw />, <Address />];
function MyAccount(user) {
  const dispatch = useDispatch();
  const [index, SetIndex] = useState(0);
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
    localStorage.removeItem('userInfo');
    window.open(`http://localhost:5000/auth/logout`, '_self');
    dispatch({type: USER_LOGOUT});
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
