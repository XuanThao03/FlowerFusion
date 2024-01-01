import React, {useState} from 'react';
import {message} from 'antd';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../../../Redux/Actions/userActions';
import {IC_Eye, IC_EyeOff} from '../../../assets/icons';

const ResetPassword = props => {
  const emailReset = useSelector(state => state.emailReset);
  const {otp, to_email} = emailReset.data;
  const dispatch = useDispatch();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showNew, setShowNew] = useState('');
  const [showConfirm, setShowConfirm] = useState('');

  const handleClick = () => {
    if (newPassword.length < 8)
      message.error('Password must be at least 8 characters long');
    else if (newPassword !== confirmPassword)
      message.error("Passwords don't match. Try again.");
    else {
      dispatch(changePassword(to_email, newPassword, ''));

      message.success('Password updated successfully. Keep it safe!');
    }
  };
  return (
    <div className=" items-center flex flex-col">
      <h1 className="text-xl font-[Lexend] font-medium text-main-color mt-8 ">
        RESET PASSWORD
      </h1>
      <p className="text-xs font-[Lexend] font-medium text-grey-main mt-[10px]">
        To ensure security please set a password with at least 8 characters
      </p>

      <div>
        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            type={!showNew ? 'password' : ''}
            value={newPassword}
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
            value={confirmPassword}
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
    </div>
  );
};

export default ResetPassword;
