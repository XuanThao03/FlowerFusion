import React from "react";
import { IC_Edit } from "../../../assets/icons";
import styles from "./address.module.scss";

function Address() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.mainTiltle}>YOUR ADDRESS</h1>
        <button className={styles.buttonAdd}>Add address</button>
      </div>
      <div className={styles.bgItem}>
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
