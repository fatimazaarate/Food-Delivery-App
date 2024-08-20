import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* before using assets here, we imported the img in assets.jxs and exported it */}

      <div className="logo">FoodyNow .</div>
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
          <img
            src={assets.panier}
            alt="add to cart panier"
            className="panier-img"
          />
          <div className="dot"></div>
        </div>

        <button>Sign in</button>
      </div>
    </div>
  );
};

export default navbar;
