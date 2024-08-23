import { createContext, useEffect, useState } from "react";
import { food_List } from "../assets/assets";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalToPay = () => {
    let totalToPay = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemElements = food_List.find(
          (element) => element.id === Number(item)
        );
        if (itemElements) {
          //Check if itemElements is found
          totalToPay += itemElements.price * cartItems[item];
        }
      }
    }
    return totalToPay;
  };

  // getDeliveryFee function to return the delicery fee based on the quantity of food
  const getDeliveryFee = (cartItems) => {
    return getTotalToPay() === 0 ? 0 : 20;
  };

  const contextValue = {
    food_List,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalToPay,
    getDeliveryFee,
  };
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
