import {Header} from './components/header/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/home/home';
import Banner from './components/banner/banner';
import Login from './views/login/Login';
import LoginInput from './components/login/login';
import CheckOut from './views/checkout/checkout';
import DetailFlower from './views/detailflower/detailflower';
import Signup from './components/singup/singup';
import Detail from './views/detail/detail';
import MyAccount from './views/MyAccount/myAccount';
import Flower from './views/catalog/flower/flower';
import Vase from './views/catalog/vase/vase';
import Occasion from './views/catalog/occasion/occasion';
import Candle from './views/catalog/candle/candle';
import FAQ from './views/faq/faq';

export default function App() {
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
          <Route path="/login" exact={true} element={<LoginInput />} />
          <Route path="/checkout" exact={true} element={<CheckOut />} />
          <Route
            path="/flowers/detail"
            exact={true}
            element={<DetailFlower />}
          />
          <Route path="/signup" exact={true} element={<Signup />} />
          <Route path="/myaccount" exact={true} element={<MyAccount />} />
          <Route path="/faq" exact={true} element={<FAQ />} />
        </Routes>
      </Router>
    </>
  );
  //<Header />;
}
