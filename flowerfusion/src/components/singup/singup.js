import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../Redux/Actions/userActions';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';
const Signup = ({location, history}) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const redirect = window.location.search
    ? window.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector(state => state.userRegister);
  const {error, loading, userInfo} = userRegister;
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = e => {
    console.log(firstname);
    e.preventDefault();
    dispatch(register(firstname, lastname, email, password));
  };
  return (
    <div className=" align-middle flex flex-col items-center ">
      <h1 className="text-2xl font-[Lexend] font-medium text-main-color mt-8 ">
        Sign up
      </h1>
      <p className="text-xs font-medium font-lexend text-argent mt-3.5">
        Create your new account
      </p>
      {error && <Message variant="alert-danger">{error}</Message>}
      {loading && <Loading />}
      <form onSubmit={submitHandler}>
        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] font-[Lexend] boder-gainsboro rounded-md h-11 p-4 mt-12 bg-transparent"
            placeholder="Firstname"
            onChange={e => setFirstname(e.target.value)}
          />
        </div>
        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
            placeholder="Lastname"
            onChange={e => setLastname(e.target.value)}
          />
        </div>

        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <button className="bg-button-black w-72 h-10 rounded-[10px] text-white text-xs font-[Lexend] font-normal mt-10">
            Sign up
          </button>
        </div>
      </form>

      <NavLink
        to={redirect ? `/login?redirect=${redirect}` : '/login'}
        exact={true}
        className="py-2">
        Already have an account <strong>Login</strong>
      </NavLink>
    </div>
  );
};
export default Signup;
