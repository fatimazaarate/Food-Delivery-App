import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const navbar = ({ setLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* before using assets here, we imported the img in assets.jxs and exported it */}

      <Link to="/">
        {" "}
        <div className="logo">FoodyNow .</div>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#our-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>

        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>

        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img src={assets.search_icon} alt="search icon" />
        </div>

        <div className="panier-icon">
          <Link to="/cart">
            {" "}
            <img
              src={assets.panier}
              alt="add to cart panier"
              className="panier-img"
            />
          </Link>
          <div className="dot"></div>
        </div>

        <button onClick={() => setLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default navbar;
