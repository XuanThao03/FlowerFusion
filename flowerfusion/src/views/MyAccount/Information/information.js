import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IC_Edit} from '../../../assets/icons';
import {editProfile} from '../../../Redux/Actions/userActions';
import Message from '../../../components/LoadingError/Error';
const Information = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const {loading, error, userInfo} = userLogin;
  console.log('usrInfo', userInfo);
  const [isEdit, setEdit] = useState(false);

  const [firstName, setFirstName] = useState(
    userInfo.firstname ?? userInfo.given_name,
  );
  const [lastName, setLastName] = useState(
    userInfo.lastname ?? userInfo.family_name,
  );
  const [phone, setPhone] = useState(userInfo.phone ?? '');
  const [address, setAddress] = useState(userInfo.address ?? '');
  return (
    <div>
      <h1 className="text-xl font-[Lexend] font-medium text-main-color mt-8 ">
        ACCOUNT INFORMATION
      </h1>
      {error && <Message variant="alert-danger">{error}</Message>}
      {isEdit ? (
        <button
          className="flex  mt-3 items-center w-4/5 justify-end "
          onClick={() => {
            console.log(firstName, lastName, phone, address);
            dispatch(editProfile(firstName, lastName, phone, address));
            if (!loading) setEdit(false);
          }}>
          <p className="text-xs font-[Lexend] font-medium text-white  pr-2 bg-button-black w-20 p-3 rounded-lg">
            Save
          </p>
        </button>
      ) : (
        <button
          className="flex  mt-3 items-center w-4/5 justify-end"
          onClick={() => setEdit(true)}>
          <p className="text-xs font-[Lexend] font-medium text-main-color  pr-2">
            Edit
          </p>
          <img src={IC_Edit} />
        </button>
      )}

      <div className="flex  items-center">
        <p className="text-xs font-[Lexend] font-medium text-main-color ">
          First name:
        </p>
        {isEdit ? (
          <input
            onChange={e => setFirstName(e.target.value)}
            className="text-xs font-[Lexend] font-light mx-3 w-1/5 text-main-color p-2  border-2 border-quartz rounded-lg"
            value={firstName}
          />
        ) : (
          <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
            {firstName}
          </p>
        )}
      </div>
      <div className="flex mt-5 items-center">
        <p className="text-xs font-[Lexend] font-medium text-main-color ">
          Last name:
        </p>
        {isEdit ? (
          <input
            onChange={e => setLastName(e.target.value)}
            className="text-xs font-[Lexend] font-light mx-3 w-1/5 text-main-color p-2 border-2 border-quartz  rounded-lg"
            value={lastName}
          />
        ) : (
          <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color">
            {lastName}
          </p>
        )}
      </div>
      <div className="flex mt-5 items-center">
        <p className="text-xs font-[Lexend] font-medium text-main-color ">
          Email:
        </p>
        <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color ">
          {userInfo.email}
        </p>
      </div>
      <div className="flex mt-5 items-center">
        <p className="text-xs font-[Lexend] font-medium text-main-color">
          Phone number:
        </p>
        {isEdit ? (
          <input
            onChange={e => setPhone(e.target.value)}
            className="text-xs font-[Lexend] font-light mx-3 w-1/5 text-main-color p-2 border-2 border-quartz  rounded-lg"
            value={phone}
          />
        ) : (
          <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color">
            {phone}
          </p>
        )}
      </div>
      <div className="flex mt-5 items-center">
        <p className="text-xs font-[Lexend] font-medium text-main-color ">
          Address:
        </p>
        {isEdit ? (
          <input
            onChange={e => setAddress(e.target.value)}
            className="text-xs font-[Lexend] font-light mx-3 text-main-color p-2 border-2 border-quartz w-3/5 rounded-lg"
            value={address}
          />
        ) : (
          <p className="text-xs font-[Lexend] font-light mx-[4px] text-main-color">
            {address}
          </p>
        )}
      </div>
    </div>
  );
};

export default Information;
