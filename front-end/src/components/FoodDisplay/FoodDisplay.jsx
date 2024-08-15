import React, { useContext } from "react";
import "./FoodDisplay.css";
import { storeContext } from "../../context/storeContext";

const FoodDisplay = () => {
  const { food_list } = useContext(storeContext);
  return (
    <div>
      <h1>this is the use of createContext hook in react</h1>
    </div>
  );
};

export default FoodDisplay;
