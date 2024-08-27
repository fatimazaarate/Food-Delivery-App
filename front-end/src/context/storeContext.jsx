import { createContext, useState } from "react";
import { food_List } from "../assets/assets";

// Create a Context
export const storeContext = createContext(null);

// Provide the context value with useState Hook
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      // ...prev ensures that the existing items in the cart are preserved, while [itemId]: 1 adds the new item to the cart with a quantity of 1.
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // getTotalToPay function calculate the total of orders of the user
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

  // getDeliveryFee function to return the delivery fee based on the quantity of food
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
