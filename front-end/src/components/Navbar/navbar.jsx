import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";

const navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* before using assets here, we imported the img in assets.jxs and exported it */}

      <div className="logo">FoodyNow .</div>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        {
          <li
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile-app
          </li>
        }
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact us
        </li>
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
