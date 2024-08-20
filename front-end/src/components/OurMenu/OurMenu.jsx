import React from "react";
import "./OurMenu.css";
import { menu_items } from "../../assets/assets";

const OurMenu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="explore-our-menu" id="our-menu">
        <h1>Explore Our Menu</h1>
        <p className="menu-description">
          Explore the diverse flavors at FoodyNow! Our menu offers everything
          from vibrant salads to satisfying burgers and pastas. Dive in and
          discover your new favorite meal today!
        </p>
        <div className="menu-categories">
          {menu_items.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((current) =>
                    current === item.menu_name ? "menu" : item.menu_name
                  )
                }
                className="menu-item"
                key={index}
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_img}
                  alt="image of the category of food"
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default OurMenu;
