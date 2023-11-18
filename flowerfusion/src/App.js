import { Header } from "./components/header/Header";
import Catalog from "./views/catalog/Catalog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/home";

export default function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
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
