import React, {useState} from 'react';
import {message} from 'antd';
import {useLocation} from 'react-router-dom';

const ResetPassword = props => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {state} = useLocation();
  const email = state;

  const changePassword = () => {
    if (newPassword.length < 8)
      message.error('Password must be at least 8 characters long');
    else if (newPassword !== confirmPassword)
      message.error("Passwords don't match. Try again.");
    else message.success('Password updated successfully. Keep it safe!');
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
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-[21px] bg-transparent"
            placeholder="New password"
          />
        </div>
        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-[21px] bg-transparent"
            placeholder="Confirm new password"
          />
        </div>
        <div className="mt-9">
          <button
            onClick={() => changePassword()}
            className="bg-button-black w-72 h-10 rounded-[10px] text-white text-xs font-[Lexend] font-regular">
            Reset password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
