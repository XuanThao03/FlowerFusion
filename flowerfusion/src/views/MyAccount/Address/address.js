import React from 'react';
import {IC_Edit} from '../../../assets/icons';
import styles from './address.module.scss';

function Address() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.mainTiltle}>YOUR ADDRESS</h1>
        <button
          onClick={() => document.getElementById('my_modal_3').showModal()}
          className="btn-neutral bg-button-black w-[140px] h-10 rounded-[10px] text-white text-xs font-[Lexend] font-normal">
          Add address
        </button>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-[360px] w-[636px] max-w-5xl">
          <form method="dialog">
            {}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex mt-[20px]">
            <div className="text-xs font-[Lexend] font-light text-main-color">
              <input
                className="w-[285px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="First name"
              />
            </div>
            <div className="text-xs font-[Lexend] font-light text-main-color">
              <input
                className="w-[285px] ml-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Phone number"
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Address"
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="City"
            />
          </div>
          <div className="mt-[20px] ml-[415px]">
            <button className="btn btn-neutral bg-button-black w-[170px] h-[50px] rounded-[10px] text-white text-xs font-[Lexend] font-normal">
              Save
            </button>
          </div>
        </div>
      </dialog>
      <div className={styles.bgItem}>
        <div>
          <div className={styles.subContainer}>
            <div className="flex">
              <p className={styles.txtTitle}>Your name:</p>
              <p className={styles.txtValue}>Tran Thanh Hien</p>
              <div className={styles.bgStatus}>
                <p className={styles.txtStatus}>Default</p>
              </div>
            </div>

            <div className="mr-5">
              <button
                onClick={() =>
                  document.getElementById('my_modal_4').showModal()
                }
                className="bg-transparent">
                <img src={IC_Edit} />
              </button>
            </div>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box h-[360px] w-[636px] max-w-5xl">
                <form method="dialog">
                  {}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="flex mt-[20px]">
                  <div className="text-xs font-[Lexend] font-light text-main-color">
                    <input
                      className="w-[285px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                      placeholder="First name"
                    />
                  </div>
                  <div className="text-xs font-[Lexend] font-light text-main-color">
                    <input
                      className="w-[285px] ml-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="text-xs font-[Lexend] font-light text-main-color">
                  <input
                    className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                    placeholder="Phone number"
                  />
                </div>
                <div className="text-xs font-[Lexend] font-light text-main-color">
                  <input
                    className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                    placeholder="Address"
                  />
                </div>
                <div className="text-xs font-[Lexend] font-light text-main-color">
                  <input
                    className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                    placeholder="City"
                  />
                </div>
                <div className="mt-[20px] ml-[415px]">
                  <button className="btn btn-neutral bg-button-black w-[170px] h-[50px] rounded-[10px] text-white text-xs font-[Lexend] font-normal">
                    Update Address
                  </button>
                </div>
              </div>
            </dialog>
          </div>
          <div className={styles.phoneContainer}>
            <p className={styles.txtTitle}>Phone number:</p>
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
