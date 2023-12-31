import React, {useEffect, useState, useRef} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../Redux/Actions/userActions';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';
import {IC_Eye, IC_EyeOff} from '../../assets/icons';
const Signup = ({location, history}) => {
  const form = useRef();

  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [flag, setflag] = useState(true);
  const [mesage, setMessage] = useState('');

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
    e.preventDefault();
    console.log(password.length);
    if (password.length >= 8) {
      setflag(true);
      setMessage('');
      if (confirmPassword === password) {
        setflag(true);
        setMessage('');
      } else {
        setflag(false);
        setMessage('Password do not match. Please try again');
      }
    } else {
      setflag(false);
      setMessage('Your password must be at least 8 characters long');
    }

    if (flag) dispatch(register(firstname, lastname, email, password));
  };

  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      '_self',
    );
  };
  return (
    <div className=" align-middle flex flex-col items-center ">
      <h1 className="text-2xl font-[Lexend] font-medium text-main-color mt-3 ">
        Sign up
      </h1>
      <p className="text-xs font-medium font-lexend text-argent mt-1">
        Create your new account
      </p>
      {!flag && <Message>{mesage}</Message>}
      {error && <Message variant="alert-danger">{error}</Message>}
      {loading && <Loading />}
      <form onSubmit={submitHandler} ref={form} className="pl-10">
        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            name="user_name"
            className="w-72 border-[1.4px] font-[Lexend] boder-gainsboro rounded-md h-11 p-4 mt-5 bg-transparent"
            placeholder="Firstname"
            onChange={e => setFirstname(e.target.value)}
          />
        </div>
        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            name="message"
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
            placeholder="Lastname"
            onChange={e => setLastname(e.target.value)}
          />
        </div>

        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            name="user_email"
            className="w-72  border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
            placeholder="Password"
            type={!showPass ? 'password' : ''}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPass(!showPass)}>
            <img src={showPass ? IC_Eye : IC_EyeOff} className="mt-2 ml-5" />
          </button>
        </div>

        <div className="text-xs font-[Lexend] font-light text-main-color">
          <input
            type={!showConfirm ? 'password' : ''}
            className="w-72 border-[1.4px] boder-gainsboro rounded-md h-11 p-4 mt-3 bg-transparent"
            placeholder="Confirm Password"
            onChange={e => setConfirm(e.target.value)}
          />
          <button type="button" onClick={() => setShowConfirm(!showConfirm)}>
            <img src={showConfirm ? IC_Eye : IC_EyeOff} className="mt-2 ml-5" />
          </button>
        </div>

        <div className="mt-1">
          <button className="bg-button-black w-72 h-10 rounded-[10px] text-white text-xs font-[Lexend] font-normal mt-2">
            Sign up
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
          Sign up with Google
        </button>
      </div>
      <NavLink
        to={redirect ? `/login?redirect=${redirect}` : '/login'}
        exact={true}
        className="py-2">
        Already have an account? <strong>Login</strong>
      </NavLink>
    </div>
  );
};
export default Signup;
