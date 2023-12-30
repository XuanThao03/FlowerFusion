import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {message} from 'antd';
import {changePassword} from '../../../Redux/Actions/userActions';
import {IC_Eye, IC_EyeOff} from '../../../assets/icons';

function ChangePw() {
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const dispatch = useDispatch();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    if (newPassword.length < 8)
      message.error('Password must be at least 8 characters long');
    else if (newPassword !== confirmPassword)
      message.error("Passwords don't match. Try again.");
    else {
      dispatch(changePassword(userInfo.email, newPassword, oldPassword));
      message.success('Password updated successfully. Keep it safe!');
    }
  };

  return (
    <div>
      <h1 className="text-xl font-[Lexend] font-medium text-main-color mt-8 ">
        CHANGE PASSWORD
      </h1>
      <p className="text-xs font-[Lexend] font-medium text-grey-main mt-[10px]">
        To ensure security please set a password with at least 8 characters
      </p>
      <div className="text-xs font-[Lexend] font-light text-main-color">
        <input
          type={!showOld ? 'password' : ''}
          onChange={e => setOldPassword(e.target.value)}
          className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-[21px] bg-transparent"
          placeholder="Old password"
        />
        <button type="button" onClick={() => setShowOld(!showOld)}>
          <img src={showOld ? IC_Eye : IC_EyeOff} className="mt-2 ml-5" />
        </button>
      </div>

      <div className="text-xs font-[Lexend] font-light text-main-color">
        <input
          type={!showNew ? 'password' : ''}
          onChange={e => setNewPassword(e.target.value)}
          className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-[21px] bg-transparent"
          placeholder="New password"
        />
        <button type="button" onClick={() => setShowNew(!showNew)}>
          <img src={showNew ? IC_Eye : IC_EyeOff} className="mt-2 ml-5" />
        </button>
      </div>
      <div className="text-xs font-[Lexend] font-light text-main-color">
        <input
          type={!showConfirm ? 'password' : ''}
          onChange={e => setConfirmPassword(e.target.value)}
          className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-[21px] bg-transparent"
          placeholder="Confirm new password"
        />
        <button type="button" onClick={() => setShowConfirm(!showConfirm)}>
          <img src={showConfirm ? IC_Eye : IC_EyeOff} className="mt-2 ml-5" />
        </button>
      </div>
      <div className="mt-9">
        <button
          onClick={handleClick}
          className="bg-button-black w-72 h-10 rounded-[10px] text-white text-xs font-[Lexend] font-regular">
          Reset password
        </button>
      </div>
    </div>
  );
}

export default ChangePw;
