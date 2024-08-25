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
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <div className="info-element-side-by-side">
          <input type="text" placeholder="Phone number" required />
          <input type="email" placeholder="Email address" />
        </div>
        <input type="text" placeholder="Delivery address" required />
        <div className="payment-method">
          <select
            required
            onChange={(e) =>
              (e.target.style.color = e.target.value ? "black" : "#757575")
            }
            style={{ color: "#757575" }}
          >
            <option value="">Choose your payment method:</option>
            <option value="c-o-d">Cash On Delivery</option>
          </select>
        </div>
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
          <button>ORDER NOW</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
