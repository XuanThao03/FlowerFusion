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
      // var templateParams = {
      //   name: `${firstname} ${lastname}`,
      // };
      // emailjs
      //   .send(
      //     'service_32cvm54',
      //     'template_1158atm',
      //     templateParams,
      //     '7beaQSbI_ePACoK5c',
      //   )
      //   .then(
      //     result => {
      //       console.log(result.text);
      //     },
      //     error => {
      //       console.log(error.text);
      //     },
      //   );
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

//gglogin
export const googleLogin = data => async dispatch => {
  try {
    dispatch({type: USER_GGLOGIN_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log('hi');

    // const {data} = await axios
    //   .get(`/auth/login/success`, {withCredentials: true})
    //   .then(function (response) {
    //     console.log(data);
    //   });
    // dispatch({type: USER_GGLOGIN_SUCCESS, payload: data});
    const {saveddata} = await axios.post(`/auth/googlesave`, {data}, config);
    dispatch({type: USER_GGLOGIN_SUCCESS, payload: data});

    localStorage.setItem('userInfo', JSON.stringify(data));

    //localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_GGLOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
