import React, {useState, useRef, useEffect} from 'react';
import {IC_Edit} from '../../../assets/icons';
import styles from './address.module.scss';
import MyAddressItem from '../../../components/myaddress/MyaddressItem';
import axios from 'axios';

function Address() {
  const [addresses, setAddresses] = useState([]);
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const addressInputRef = useRef();
  const user = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    console.log('useEffect');
    fetch('http://localhost:5000/api/addresses')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.data);
        const loadedAddresses = [...data.data].filter(address => {
          return address.user === user._id;
        });
        setAddresses([...loadedAddresses]);
      });
  }, [user._id]);

  const addAddress = (firstName, lastName, phoneNumber, address, country) => {
    const newAddress = {
      user: user._id,
      firstName,
      lastName,
      phoneNumber,
      address,
      country,
    };
    axios
      .post('http://localhost:5000/api/addresses', newAddress)
      .then(res => {
        console.log(res.data);
        setAddresses(prevAddresses => [...prevAddresses, newAddress]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const submitHandler = event => {
    event.preventDefault();
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    addAddress(
      enteredFirstName,
      enteredLastName,
      enteredPhoneNumber,
      enteredAddress,
    );

    firstNameInputRef.current.value = '';
    lastNameInputRef.current.value = '';
    phoneNumberInputRef.current.value = '';
    addressInputRef.current.value = '';

    document.getElementById('my_modal_3').close();
  };


  // const [addressList, setAddressList] = useState([
  //   {
  //     firstName: 'Hien',
  //     lastName: 'Tran',
  //     phoneNumber: '1111',
  //     address: 'Hi',
  //     country: 'VietNam',
  //   },
  // ]);

  // const createList = addressList.map(address => {
  //   return (
  //     <MyAddressItem
  //       firstname={address.firstName}
  //       lastName={address.lastName}
  //     />
  //   );
  // });

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
                ref={firstNameInputRef}
                className="w-[285px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="First name"
              />
            </div>
            <div className="text-xs font-[Lexend] font-light text-main-color">
              <input
                ref={lastNameInputRef}
                className="w-[285px] ml-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              ref={phoneNumberInputRef}
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Phone number"
            />
          </div>
          <div className="text-xs font-[Lexend] font-light text-main-color">
            <input
              ref={addressInputRef}
              className="w-[586px] mt-[15px] border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
              placeholder="Address"
            />
          </div>

          <div className="mt-[20px] ml-[415px] modal-action">
            <button
              onClick={submitHandler}
              className="btn btn-neutral bg-button-black w-[170px] h-[50px] rounded-[10px] text-white text-xs font-[Lexend] font-normal">
              Save
            </button>
          </div>
        </div>
      </dialog>

      {addresses.map(address => {
        return (
          <MyAddressItem
            firstName={address.firstName}
            lastName={address.lastName}
            phoneNumber={address.phoneNumber}
            address={address.address}
          />
        );
      })}
    </div>
  );
}

export default Address;
