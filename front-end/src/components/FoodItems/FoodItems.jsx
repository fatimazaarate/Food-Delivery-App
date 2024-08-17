import React from "react";
import "./FoodItems.css";
import { assets } from "../../assets/assets";

const FoodItems = ({ id, name, price, image }) => {
  return (
    <div className="food-item">
      <div className="food-item-img">
        <img src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.ratingStars} alt="rating stars" />
        </div>
        <p className="food-item-price"> {price} </p>
      </div>
    </div>
  );
};

export default FoodItems;
