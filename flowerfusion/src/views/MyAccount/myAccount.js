import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Information from "./Information/information";
import YourOder from "./YourOrder/yourOrder";
import ChangePw from "./ChangePw/changePw";
import Address from "./Address/address";

const tabNames = [
  "ACCOUNT INFORMATION",
  "YOUR ORDER",
  "CHANGE PASSWORD",
  "ADDRESS (1)",
];
const tabs = [<Information />, <YourOder />, <ChangePw />, <Address />];
function MyAccount() {
  const [index, SetIndex] = useState(0);
  const tabList = tabNames.map((tab) => {
    return (
      <li className="my-2 hover:border-l-quartz hover:border-l-[3px] px-2 py-0 rounded-sm focus-within:border-l-quartz focus-within:border-l-[3px]">
        <button
          onClick={() => SetIndex(tabNames.indexOf(tab))}
          className="font-light font-Lexend text-xs "
        >
          {tab}
        </button>
      </li>
    );
  });

  return (
    <div className="w-full h-full bg-yellow-500 py-8 flex">
      <div className="w-1/3 h-full bg-red-400 flex flex-col items-center flex-nowrap">
        <div className=" w-fit">
          <p className="font-Lexend font-medium text-2xl text-quartz">
            Hello, Thanh Hien
          </p>
          <p className="font-Lexend font-normal text-sm text-argent">
            See your account
          </p>
          <ul className="my-10">{tabList}</ul>
        </div>
      </div>
      <div className="w-1/3 h-full bg-green-400">{tabs.at(index)}</div>
    </div>
  );
}

export default MyAccount;
