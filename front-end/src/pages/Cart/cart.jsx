import React, { useContext } from "react";
import "./cart.css";
import { storeContext } from "../../context/storeContext";
import { useNavigate } from "react-router-dom";

const cart = () => {
  const {
    cartItems,
    food_List,
    removeFromCart,
    getTotalToPay,
    getDeliveryFee,
  } = useContext(storeContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-table-elements">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_List.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className="cart-table-elements cart-item-name">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} MAD</p>
                  <p className="item-quantity">{cartItems[item.id]}</p>
                  <p>{item.price * cartItems[item.id]} MAD</p>
                  <p
                    onClick={() => removeFromCart(item.id)}
                    className="xbutton"
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-details">
        <div className="cart-total">
          <h2>Your Total</h2>
          <div>
            <div className="total-details">
              <p>Subtotal</p>
              <p>{getTotalToPay()} MAD</p>
            </div>
            <hr />
            <div className="total-details">
              <p>Delivery Fee</p>
              <p>{getDeliveryFee(cartItems)} MAD</p>
            </div>
            <hr />
            <div className="total-details">
              <b>Total</b>
              <b>{getTotalToPay() + getDeliveryFee(cartItems)} MAD</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="promocode">
          <div>
            <p>You have a promocode? Enter it here</p>
            <div className="promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
