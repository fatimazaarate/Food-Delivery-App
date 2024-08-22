import React, { useContext } from "react";
import "./PlaceOrder.css";
import { storeContext } from "../../context/storeContext";

const PlaceOrder = () => {
  const { getTotalToPay, getDeliveryFee, cartItems } = useContext(storeContext);

  return (
    <form className="place-order-page">
      <div className="place-order-leftside">
        <p className="title">Delivery Informations</p>
        <div className="info-element-side-by-side">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <div className="info-element-side-by-side">
          <input type="text" placeholder="Phone number" />
          <input type="email" placeholder="Email address" />
        </div>
        <input type="text" placeholder="Delivery address" />
      </div>
      <div className="place-order-rightside">
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
