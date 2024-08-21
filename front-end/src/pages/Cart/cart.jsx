import React, { useContext } from "react";
import "./cart.css";
import { storeContext } from "../../context/storeContext";

const cart = () => {
  const { cartItems, food_List, removeFromCart } = useContext(storeContext);

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
        {food_List.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className="cart-table-elements cart-item-name">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} MAD</p>
                  <p>{cartItems[item.id]}</p>
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
    </div>
  );
};

export default cart;
