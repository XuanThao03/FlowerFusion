import React, {useRef, useState} from 'react';
import {IC_Edit} from '../../../assets/icons';
import styles from './address.module.scss';
import ItemAddress from '../../../components/itemAddress/itemAddress';

function Address() {
  const [addresses, setAddresses] = useState([{
    firstName: 'firstName',
          lastName: 'lastName',
          phoneNumber: 'phoneNumber',
          address: 'address',
          city: 'city',
  }]);
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();


  const addAddress = (firstName, lastName, phoneNumber, address, city) => {
    setAddresses(prevAddressList => {
      return [
        ...prevAddressList,
        {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          address: address,
          city: city,
        },
      ];
    });
  };

  const submitHandler = (event) => {
      event.preventDefault();
      const enteredFirstName = firstNameInputRef.current.value;
      const enteredLastName = lastNameInputRef.current.value;
      const enteredPhoneNumber = phoneNumberInputRef.current.value;
      const enteredAddress = addressInputRef.current.value;
      const enteredCity = cityInputRef.current.value;

      addAddress(enteredFirstName, enteredLastName, enteredPhoneNumber, enteredAddress, enteredCity);

      firstNameInputRef.current.value = '';
      lastNameInputRef.current.value = '';
      phoneNumberInputRef.current.value = '';
      addressInputRef.current.value = '';
      cityInputRef.current.value = '';

  }

  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.mainTiltle}>YOUR ADDRESS</h1>
        <button
          onClick={() => document.getElementById('my_modal_3').showModal()}
          className=" btn-neutral bg-button-black w-[140px] h-10 rounded-[10px] text-white text-xs font-[Lexend] font-normal">
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
          </form >
          <form>
          <div className="flex mt-[20px]">
            <div className="text-xs font-[Lexend] font-light text-main-color">
              <input
                className="w-[285px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="First name"
                ref={firstNameInputRef}
              />
            </div>
            <div className="text-xs font-[Lexend] font-light text-main-color">
              <input
              type='text'
                className="w-[285px] ml-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="Last name"
                ref={lastNameInputRef}
              />
            </div>
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Phone number"
              ref={phoneNumberInputRef}
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Address"
              ref={addressInputRef}
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="City"
              ref={cityInputRef}
            />
          </div>
          <div className="mt-[20px] ml-[415px]">
          <form method="dialog">
            {}
            <button onClick={submitHandler} className="btn btn-neutral bg-black w-[170px] h-[50px] rounded-[10px] text-white text-xs font-[Lexend] font-normal">
              Save
            </button>
          </form >
            
          </div>
          </form>
        </div>
      </dialog>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box h-[360px] w-[636px] max-w-5xl">
          <form method="dialog">
            
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form >
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
            <button type='submit'  className="btn btn-neutral bg-button-black w-[170px] h-[50px] rounded-[10px] text-white text-xs font-[Lexend] font-normal">
              Update Address
            </button>
          </div>
          </form>
        </div>
      </dialog>
      {addresses.map(e => 
        <ItemAddress
          firstName={e.firstName}
          lastName={e.lastName}
          phoneNumber={e.phoneNumber}
          address={e.address}
        />
      )}
    </div>
  );
}

export default Address;
