import React from "react";
import "./Header.css";

const Header = () => {
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
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
