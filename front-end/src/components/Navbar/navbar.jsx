import React from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const navbar = ({ setLogin, currentRoute }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className={`logo ${currentRoute === "/" ? "" : ""}`}>
          FoodyNow .
        </div>
      </Link>
      <ul className="navbar-menu">
        <Link to="/" className={currentRoute === "/" ? "active" : ""}>
          Home
        </Link>
        <a
          href="#our-menu"
          className={currentRoute === "/menu" ? "active" : ""}
        >
          Menu
        </a>

        <a
          href="#app-download"
          className={currentRoute === "/mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>

        <a
          href="#footer"
          className={currentRoute === "/contact" ? "active" : ""}
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
