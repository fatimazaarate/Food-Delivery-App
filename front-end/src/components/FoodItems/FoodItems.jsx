import React, { useContext } from "react";
import "./FoodItems.css";
import { assets } from "../../assets/assets";
import { storeContext } from "../../context/storeContext";

const FoodItems = ({ id, name, price, image }) => {
  // Consuming Context with useContext Hook
  const { cartItems, addToCart, removeFromCart } = useContext(storeContext);

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
          <p className="food-item-price"> {price} MAD </p>
          <div>
            {!cartItems[id] ? (
              <button className="add-button" onClick={() => addToCart(id)}>
                <p>+</p>
              </button>
            ) : (
              <>
                <div className="count-icons">
                  <div className="counter-buttons minus-icon">
                    <button onClick={() => removeFromCart(id)}>
                      <p>-</p>
                    </button>
                  </div>
                  {cartItems[id]}
                  <div className="counter-buttons plus-icon">
                    <button onClick={() => addToCart(id)}>
                      <p>+</p>
                    </button>
                  </div>
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
