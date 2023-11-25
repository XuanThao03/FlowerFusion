import React from "react";
const Information = () => {
  return (
    <div>
      <h1 className="text-xl font-[Lexend] font-medium text-main-color mt-8 ">
        ACCOUNT INFORMATION
      </h1>
      <div className="flex">
        <p className="text-xs font-[Lexend] font-medium text-main-color mt-[52px]">
          Full name:
        </p>
        <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color mt-[52px]">
          Tran Thanh Hien
        </p>
      </div>
      <div className="flex mt-[10px]">
        <p className="text-xs font-[Lexend] font-medium text-main-color ">
          Email:
        </p>
        <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
          tranthanhhien123bt@gmail.com
        </p>
      </div>
      <div className="flex mt-[10px]">
        <p className="text-xs font-[Lexend] font-medium text-main-color">
          Phone number:
        </p>
        <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
          0398285020
        </p>
      </div>
      <div className="flex mt-[10px]">
        <p className="text-xs font-[Lexend] font-medium text-main-color ">
          Address:
        </p>
        <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
          Ký túc xá khu B, Đông Hòa, Dĩ An, Bình Dương
        </p>
      </div>
    </div>
  );
};

export default Information;
