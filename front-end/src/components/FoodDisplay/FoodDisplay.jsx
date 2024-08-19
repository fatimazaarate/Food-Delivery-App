import React, { useContext } from "react";
import "./FoodDisplay.css";
import { storeContext } from "../../context/storeContext";
import FoodItems from "../FoodItems/FoodItems";

const FoodDisplay = ({ category }) => {
  const { food_List } = useContext(storeContext);
  return (
    <div className="food-display">
      <h1>Best Dishes Around You</h1>
      <div className="food-display-list">
        {food_List.map((item, index) => {
          if (category === "menu" || category === item.category) {
            return (
              <FoodItems
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
