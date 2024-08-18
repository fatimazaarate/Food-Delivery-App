import React, { useState } from "react";
import "./FoodItems.css";
import { assets } from "../../assets/assets";

const FoodItems = ({ id, name, price, image }) => {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);
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
        <div className="price-and-add-button">
          <p className="food-item-price"> {price} </p>
          <div>
            {!count ? (
              <button className="add-button" onClick={plusCount}>
                <p>+</p>
              </button>
            ) : (
              <>
                <div className="count-icons">
                  <button
                    className="counter-buttons plus-icon"
                    onClick={plusCount}
                  >
                    <p>+</p>
                  </button>
                  {count}
                  <button
                    className="counter-buttons minus-icon"
                    onClick={minusCount}
                  >
                    <p>-</p>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
