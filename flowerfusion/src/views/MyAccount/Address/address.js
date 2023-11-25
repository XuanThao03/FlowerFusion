import React from "react";
import { IC_Edit } from "../../../assets/icons";

function Address() {
  return (
    <div>
      <div className="mt-8 flex justify-between w-[600px]">
        <h1 className="text-xl font-[Lexend] font-medium text-main-color ">
          YOUR ADDRESS
        </h1>
        <button className="bg-button-black w-[140px] h-10 rounded-[10px] text-white text-xs font-[Lexend] font-regular">
          Add address
        </button>
      </div>
      <div className="bg-white p-4 border-[1.3px] h-[134px] boder-gainsboro mt-[37px] rounded-[10px] w-[600px]">
        <div>
          <div className="flex mt-[12px] mx-[7px]">
            <p className="text-xs font-[Lexend] font-medium text-main-color ">
              Your name:
            </p>
            <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
              Tran Thanh Hien
            </p>
            <div className="mx-[20px] bg-green-default w-[61px] rounded-[30px] text-green-text h-[22px] justify-center items-center flex">
              <p className="text-[9px]  font-[Lexend] font-normal ">Default</p>
            </div>
            <div className="ml-[272px]">
              <button className="bg-transparent">
                <img src={IC_Edit} />
              </button>
            </div>
          </div>
          <div className="flex mt-[6px] mx-[7px]">
            <p className="text-xs font-[Lexend] font-medium text-main-color ">
              Phone number:
            </p>
            <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
              0398285020
            </p>
          </div>
          <div className="flex mt-[12px] mx-[7px]">
            <p className="text-xs font-[Lexend] font-medium text-main-color ">
              Address:
            </p>
            <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
              Ký túc xá khu B, Đông Hòa, Dĩ An, Bình Dương
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
