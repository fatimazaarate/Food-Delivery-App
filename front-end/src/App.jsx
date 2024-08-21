// install extension es7 react...
// rafce to write the model of app.jsx

import React, { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
// useLocation hook to be able to delete the active class style when reloading the route /cart
import Home from "./pages/Home/home";
import Cart from "./pages/Cart/cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";

const App = () => {
  const [login, setLogin] = useState(false);
  const location = useLocation();

  return (
    <>
      {login ? <Login setLogin={setLogin} /> : <></>}
      <div className="app">
        <Navbar setLogin={setLogin} currentRoute={location.pathname} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
