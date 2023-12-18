import {Header} from './components/header/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/home/home';
import Banner from './components/banner/banner';
import Login from './views/login/Login';
import LoginInput from './components/login/login';
import CheckOut from './views/checkout/checkout';
import DetailFlower from './views/detailflower/detailflower';
import DetailCandle from './views/detailcandle/detailcandle';
import DetailVase from './views/detailvase/detailvase';
import Signup from './components/singup/singup';
import Detail from './views/detail/detail';
import MyAccount from './views/MyAccount/myAccount';
import Flower from './views/catalog/flower/flower';
import Vase from './views/catalog/vase/vase';
import Occasion from './views/catalog/occasion/occasion';
import Candle from './views/catalog/candle/candle';

import Trending from './views/catalog/trending/trending';

import FAQ from './views/faq/faq';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {googleLogin} from './Redux/Actions/userActions';
import {
  USER_GGLOGIN_SUCCESS,
  USER_LOGIN_SUCCESS,
} from './Redux/Constants/UserContants';

export default function App() {
  const [user, setUser] = useState(null);
  const controller = new AbortController();
  const controller2 = new AbortController();

  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const url = `http://localhost:5000/auth/login/success`;
      const {data} = await axios.get(url, {
        withCredentials: true,
        signal: controller.signal,
      });
      setUser(data.user._json);
      console.log(data.user._json);
      console.log(user);

      if (data.user._json) {
        controller.abort();
        const res = await fetch('http://localhost:5000/auth/googlesave', {
          method: 'POST',
          signal: controller2.signal,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            given_name: data.user._json.given_name,
            family_name: data.user._json.family_name,
            email: data.user._json.email,
          }),
        });
        dispatch({type: USER_GGLOGIN_SUCCESS, payload: data.user._json});
        dispatch({type: USER_LOGIN_SUCCESS, payload: data.user._json});

        localStorage.setItem('userInfo', JSON.stringify(data));

        controller2.abort();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();

    // if (user) {
    //   controller.abort();
    //   console.log('hi');
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   };
    //   axios.post('http://localhost:5000/auth/googlesave', {
    //     user,
    //     config,
    //   });

    //   console.log('user', user);
    // }
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
            path="/flowers/detail"
            exact={true}
            element={<DetailFlower />}
          />
          <Route
            path="/candles//detail"
            exact={true}
            element={<DetailCandle />}
          />
          <Route path="/vases/detail" exact={true} element={<DetailVase />} />
          <Route path="/signup" exact={true} element={<Signup />} />
          <Route path="/myaccount" exact={true} element={<MyAccount />} />
          <Route path="/faq" exact={true} element={<FAQ />} />
        </Routes>
      </Router>
    </>
  );
  //<Header />;
}
