import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="Header">
      <div className="header-content">
        <h2>Order your favorite food here</h2>
        <p>
          Take your time to explore our diverse menu, filled with mouthwatering
          dishes crafted to satisfy every craving. Choose the perfect meal that
          speaks to your taste and enjoy a delightful dining experience right at
          your doorstep.
        </p>
        <a href="#our-menu">
          <button onClick={() => setMenu("menu")}>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
