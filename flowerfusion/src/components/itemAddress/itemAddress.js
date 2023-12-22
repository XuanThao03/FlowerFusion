import {useMemo} from 'react';
import {IC_Edit} from '../../assets/icons';
import styles from '../../views/MyAccount/Address/address.module.scss';
import React from 'react';
function ItemAddress(props) {
  return (
    <>
      <div className={styles.bgItem}>
        <div>
          <div className={styles.subContainer}>
            <div className="flex">
              <p className={styles.txtTitle}>Your name:</p>
              <p className={styles.txtValue}>{props.firstName + ' ' + props.lastName}</p>
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
          </div>
          <div className={styles.phoneContainer}>
            <p className={styles.txtTitle}>Phone number:</p>
            <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
              {props.phoneNumber}
            </p>
          </div>
          <div className="flex mt-[12px] mx-[7px]">
            <p className="text-xs font-[Lexend] font-medium text-main-color ">
              Address:
            </p>
            <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
              {props.address}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ItemAddress;
