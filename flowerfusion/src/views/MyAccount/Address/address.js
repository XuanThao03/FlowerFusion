import React, {useState} from 'react';
import {IC_Edit} from '../../../assets/icons';
import styles from './address.module.scss';
import MyAddressItem from '../../../components/myaddress/MyaddressItem';

const addresses = [
  {
    firstName: 'Hien',
    lastName: 'Tran',
    phoneNumber: '1111',
    address: 'Hi',
    country: 'VietNam',
  },
];

function Address() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [addess, setAddress] = useState('');
  const [country, setCountry] = useState('');

  const [addressList, setAddressList] = useState([
    {
      firstName: 'Hien',
      lastName: 'Tran',
      phoneNumber: '1111',
      address: 'Hi',
      country: 'VietNam',
    },
  ]);

  const createList = addressList.map(address => {
    return (
      <MyAddressItem
        firstname={address.firstName}
        lastName={address.lastName}
      />
    );
  });

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
                onChange={e => setFirstname(e.target.value)}
                className="w-[285px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="First name"
              />
            </div>
            <div className="text-xs font-[Lexend] font-light text-main-color">
              <input
                onChange={e => setLastname(e.target.value)}
                className="w-[285px] ml-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              onChange={e => setPhonenumber(e.target.value)}
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Phone number"
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              onChange={e => setAddress(e.target.value)}
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Address"
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              onChange={e => setCountry(e.target.value)}
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Country"
            />
          </div>
          <div className="mt-[20px] ml-[415px]">
            <button
              onClick={() =>
                setAddressList([
                  ...addressList,
                  {
                    firstName: firstname,
                    lastName: lastname,
                    phoneNumber: '1111',
                    address: 'Hi',
                    country: 'VietNam',
                  },
                ])
              }
              className="btn btn-neutral bg-button-black w-[170px] h-[50px] rounded-[10px] text-white text-xs font-[Lexend] font-normal">
              Save
            </button>
          </div>
        </div>
      </dialog>
      {/* <MyAddressItem firstname={'Hule'} />
      <MyAddressItem /> */}
      {createList}
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
              placeholder="Country"
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
  );
}

export default Address;
