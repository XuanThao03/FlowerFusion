import React, {useState} from 'react';
import styles from '../../views/MyAccount/Address/address.module.scss';
import {IC_Edit} from '../../assets/icons';

function MyAddressItem(props) {

  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [address, setAddress] = useState(props.address);
  const [country, setCountry] = useState(props.country);


  return (
    <div className={styles.bgItem}>
      <div>
        <div className={styles.subContainer}>
          <div className="flex">
            <p className={styles.txtTitle}>Your name:</p>

            <p className={styles.txtValue}>{firstName + ' ' + lastName}</p>

            <div className={styles.bgStatus}>
              <p className={styles.txtStatus}>Default</p>
            </div>
          </div>

          <div className="mr-5">
            <button
              onClick={() => document.getElementById('my_modal_4').showModal()}
              className="bg-transparent">
              <img src={IC_Edit} />
            </button>
          </div>
        </div>
        <div className={styles.phoneContainer}>
          <p className={styles.txtTitle}>Phone number:</p>
          <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
            {phoneNumber}
          </p>
        </div>
        <div className="flex mt-[12px] mx-[7px]">
          <p className="text-xs font-[Lexend] font-medium text-main-color ">
            Address:
          </p>
          <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
            {address}
          </p>
        </div>
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
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="w-[285px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="First name"
              />
            </div>
            <div className="text-xs font-[Lexend] font-light text-main-color">
              <input
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className="w-[285px] ml-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Phone number"
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Address"
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Country"
            />
          </div>
          <div className="mt-[20px] ml-[415px]">
            <form method="dialog">
              {}
              <button className="btn btn-neutral bg-button-black w-[170px] h-[50px] rounded-[10px] text-white text-xs font-[Lexend] font-normal">
                Update Address
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default MyAddressItem;
