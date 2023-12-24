import axios from 'axios';
import emailjs from '@emailjs/browser';
import {
  USER_GGLOGIN_FAIL,
  USER_GGLOGIN_REQUEST,
  USER_GGLOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../Constants/UserContants';
import {useRef} from 'react';
import sendEmail from '../../ultils/welcomeEmail';

//login
export const login = (email, password) => async dispatch => {
  try {
    dispatch({type: USER_LOGIN_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const {data} = await axios.post(
      `/api/users/login`,
      {email, password},
      config,
    );
    dispatch({type: USER_LOGIN_SUCCESS, payload: data});

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// logout
export const logout = () => dispatch => {
  document.location.href = '/login';
  //const {data} = axios.get(`http://localhost:5000/auth/logout`);
  localStorage.removeItem('userInfo');
  dispatch({type: USER_LOGOUT});
};

//register
export const register =
  (firstname, lastname, email, password) => async dispatch => {
    try {
      dispatch({type: USER_REGISTER_REQUEST});

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const {data} = await axios.post(
        `/api/users`,
        {firstname, lastname, email, password},
        config,
      );
      dispatch({type: USER_REGISTER_SUCCESS, payload: data});
      dispatch({type: USER_LOGIN_SUCCESS, payload: data});

      localStorage.setItem('userInfo', JSON.stringify(data));
      var templateParams = {
        name: `${firstname} ${lastname}`,
        to_email: `${email} `,
      };
      sendEmail(templateParams);
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const userExist = email => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const {data} = await axios.post(`/api/users/finduser`, {email}, config);
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
