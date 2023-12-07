import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './logininput.module.scss';
import {NavLink, useNavigate} from 'react-router-dom';
import {login} from '../../Redux/Actions/userActions';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';
const LoginInput = (location, history) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const redirect = window.location.search
    ? window.location.search.split('=')[1]
    : '/';

  const userLogin = useSelector(state => state.userLogin);
  const {error, loading, userInfo} = userLogin;
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className=" align-middle flex flex-col items-center pb-[200px]">
      <h1 className="text-2xl font-[Lexend] font-medium text-main-color mt-8 ">
        Login
      </h1>
      <p className="text-xs font-[Lexend] font-medium text-argent mt-3.5">
        Login to your account
      </p>
      {error && <Message variant="alert-danger">{error}</Message>}
      {loading && <Loading />}
      <form onSubmit={submitHandler}>
        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-12 bg-transparent"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] border-0.5 boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="w-72 text-xs font-[Lexend] font-light text-main-color mt-2">
          <button className="underline ">Forgot password?</button>
        </div>
        <div className="mt-9">
          <button className="bg-button-black w-72 h-10 rounded-[10px] text-white text-xs font-[Lexend] font-normal">
            Login
          </button>
        </div>
      </form>
      <NavLink
        to={redirect ? `/signup?redirect=${redirect}` : '/signup'}
        exact={true}
        className="py-2">
        Create account
      </NavLink>
    </div>
  );
};

export default LoginInput;
