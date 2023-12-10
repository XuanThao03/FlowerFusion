import React from 'react';
import {useSelector} from 'react-redux';
const Information = () => {
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  return (
    <div>
      <h1 className="text-xl font-[Lexend] font-medium text-main-color mt-8 ">
        ACCOUNT INFORMATION
      </h1>
      <div className="flex">
        <p className="text-xs font-[Lexend] font-medium text-main-color mt-[52px]">
          First name:
        </p>
        <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color mt-[52px]">
          {userInfo.firstname}
        </p>
      </div>
      <div className="flex mt-[10px]">
        <p className="text-xs font-[Lexend] font-medium text-main-color ">
          Last name:
        </p>
        <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color">
          {userInfo.lastname}
        </p>
      </div>
      <div className="flex mt-[10px]">
        <p className="text-xs font-[Lexend] font-medium text-main-color ">
          Email:
        </p>
        <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
          {userInfo.email}
        </p>
      </div>
      <div className="flex mt-[10px]">
        <p className="text-xs font-[Lexend] font-medium text-main-color">
          Phone number:
        </p>
        <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
          {userInfo.phone}
        </p>
      </div>
      <div className="flex mt-[10px]">
        <p className="text-xs font-[Lexend] font-medium text-main-color ">
          Address:
        </p>
        <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
          {userInfo.address ? userInfo.address : ''}
        </p>
      </div>
    </div>
  );
};

export default Information;
