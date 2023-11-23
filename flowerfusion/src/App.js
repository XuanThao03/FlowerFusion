import { Header } from "./components/header/Header";
import Catalog from "./views/catalog/Catalog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Banner from "./components/banner/banner";
import Login from "./views/login/Login";
import LoginInput from "./components/login/login";
import CheckOut from "./views/checkout/checkout";
import DetailFlower from "./views/detailflower/detailflower";
import Detail from "./views/detail/detail";
import MyAccount from "./views/MyAccount/myAccount";

export default function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Header />
        <Banner />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" exact={true} element={<LoginInput />} />
          <Route path="/checkout" exact={true} element={<CheckOut />} />
          <Route path="/catalog/detail" element={<Detail />} />
          <Route path="/detailflower" exact={true} element={<DetailFlower />} />
          <Route path="/myaccount" exact={true} element={<MyAccount />} />

          {/* <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password" element={<ResetPassword />} />
          <Route path="/me" element={<Info />} />
          <Route path="*" element={<NotFoundScreen />} /> */}
        </Routes>
      </Router>
    </>
  );
  //<Header />;
}
