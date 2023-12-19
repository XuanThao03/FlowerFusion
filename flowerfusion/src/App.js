import {Header} from './components/header/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/home/home';
import Banner from './components/banner/banner';
import Login from './views/login/Login';
import LoginInput from './components/login/login';
import CheckOut from './views/checkout/checkout';
import DetailFlower from './views/detailflower/detailflower';
import DetailCandle from './views/detailcandle/detailcandle';
import DetailOccasion from './views/detailoccasion/detailoccasion';
import DetailVase from './views/detailvase/detailvase';
import Signup from './components/singup/singup';
import Detail from './views/detail/detail';
import MyAccount from './views/MyAccount/myAccount';
import Flower from './views/catalog/flower/flower';
import Vase from './views/catalog/vase/vase';
import Occasion from './views/catalog/occasion/occasion';
import Candle from './views/catalog/candle/candle';

import Trending from './views/catalog/trending/trending';

import emailjs from '@emailjs/browser';
import FAQ from './views/faq/faq';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {
  USER_GGLOGIN_SUCCESS,
  USER_LOGIN_SUCCESS,
} from './Redux/Constants/UserContants';
import {useDispatch} from 'react-redux';

export default function App() {
  const controller = new AbortController();
  const dispatch = useDispatch();

  //get - save - send email
  const getUser = async () => {
    try {
      const url = `http://localhost:5000/auth/login/success`;
      const {data} = await axios.get(url, {
        withCredentials: true,
        signal: controller.signal,
      });
      console.log(data);
      // console.log(data.firstname);
      // console.log(data.lastname);

      if (data.isNew) {
        var templateParams = {
          name: `${data.firstname} ${data.lastname}`,
          to_email: `${data.email} `,
        };
        console.log(templateParams.name);
        emailjs
          .send(
            'service_32cvm54',
            'template_1158atm',
            templateParams,
            '7beaQSbI_ePACoK5c',
          )
          .then(
            result => {
              console.log(result.text);
            },
            error => {
              console.log(error.text);
            },
          );
      }
      dispatch({type: USER_GGLOGIN_SUCCESS, payload: data});
      dispatch({type: USER_LOGIN_SUCCESS, payload: data});

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Router>
        {/* <Header /> */}
        <Header />
        <Banner />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/flowers" element={<Flower />} />
          <Route path="/vases" element={<Vase />} />
          <Route path="/occasions" element={<Occasion />} />
          <Route path="/candles" element={<Candle />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/login" exact={true} element={<LoginInput />} />
          <Route path="/checkout" exact={true} element={<CheckOut />} />
          <Route
            path="/flowers/detail/:key"
            element={<DetailFlower />}
          />
          <Route
            path="/candles/detail/:key"
            element={<DetailCandle />}
          />
          <Route
            path="/occasions/detail/:key"
            element={<DetailOccasion />}
          />
          <Route 
            path="/vases/detail/:key"
            element={<DetailVase />} />
          <Route path="/signup" exact={true} element={<Signup />} />
          <Route path="/myaccount" exact={true} element={<MyAccount />} />
          <Route path="/faq" exact={true} element={<FAQ />} />
        </Routes>
      </Router>
    </>
  );
  //<Header />;
}
