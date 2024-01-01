import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './logininput.module.scss';
import {NavLink, useNavigate} from 'react-router-dom';
import {login} from '../../Redux/Actions/userActions';
import {REQUEST_OTP} from '../../Redux/Constants/ResetPwConstant';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';
import axios from 'axios';
import {IC_Eye, IC_EyeOff} from '../../assets/icons';
import otpEmail from '../../ultils/otpEmail';
import {message} from 'antd';

const LoginInput = (location, history) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);

  const [recoverEmail, setRecoverEmail] = useState('');

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
  const googleAuth = () => {
    localStorage.removeItem('cart');

    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      '_self',
    );
  };

  const sendEmail = () => {
    if (recoverEmail.includes('@')) {
      var params = {
        otp: Math.floor(Math.random() * 9000 + 1000),
        to_email: recoverEmail,
      };

      otpEmail(params);

      console.log(params.otp);
      dispatch({type: REQUEST_OTP, payload: params});

      navigate('/verifyotp');
    } else alert('Email Invalid!');

    //setOTP(OTP);
  };
  return (
    <div className="  flex flex-col items-center ">
      <h1 className="text-2xl font-[Lexend] font-medium text-main-color mt-3 ">
        Login
      </h1>
      <p className="text-xs font-[Lexend] font-medium text-argent mt-2">
        Login to your account
      </p>
      {error && <Message variant="alert-danger">{error}</Message>}
      {loading && <Loading />}
      <form onSubmit={submitHandler} className="pl-10">
        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-5 bg-transparent"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="text-xs font-[Lexend] font-light text-main-color flex align-middle ">
          <input
            className="w-72 border-[1.4px] border-0.5 boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent focus-within:boder-gainsboro "
            placeholder="Password"
            type={!showPw ? 'password' : ''}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPw(!showPw)}>
            <img src={showPw ? IC_Eye : IC_EyeOff} className="mt-2 ml-5" />
          </button>
        </div>
        <div className=" flex justify-end w-72 text-xs font-[Lexend] font-light text-main-color mt-2">
          <button
            type="button"
            onClick={() => document.getElementById('emailModal').showModal()}
            className="underline ">
            Forgot password?
          </button>
        </div>
        <div className="mt-5">
          <button className="bg-button-black w-72 h-10 rounded-[10px] text-white text-xs font-[Lexend] font-normal">
            Login
          </button>
        </div>
      </form>
      <div className="mt-5 flex flex-col justify-center items-center">
        <p
          className=" text-main-color
        ">
          - Or -
        </p>
        <button
          onClick={googleAuth}
          className=" mt-3  bg-button-black w-72 h-10 rounded-[10px] text-white text-xs font-[Lexend] font-normal">
          Login with Google
        </button>
      </div>

      <NavLink
        to={redirect ? `/signup?redirect=${redirect}` : '/signup'}
        exact={true}
        className="py-2">
        New to Flowerfusion? <strong>Create account</strong>
      </NavLink>

      {/* dialog */}
      <dialog id="emailModal" className="modal">
        <div className="modal-box h-1/3 flex flex-col items-center justify-between">
          <form method="dialog">
            <button
              onClick={() => setRecoverEmail('')}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <p className=" text-xl font-[Lexend]">RESET YOUR PASSWORD</p>
          <p>We will send you an email to reset your password.</p>
          <div className="flex mt-4 w-4/5">
            <div className="text-xs font-[Lexend] font-light text-main-color w-full">
              <input
                value={recoverEmail}
                onChange={e => setRecoverEmail(e.target.value)}
                className="w-full border-[1.3px] boder-gainsboro rounded-md h-11 p-4 bg-transparent"
                placeholder="Email"
              />
            </div>
          </div>

          <div>
            <button
              onClick={sendEmail}
              className="btn btn-neutral bg-button-black w-[170px] h-5 rounded-[10px] text-white text-xs font-[Lexend] font-normal">
              Send
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LoginInput;
