import React, { useState } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import OurMenu from "../../components/OurMenu/OurMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const home = () => {
  const [category, setCategory] = useState("Something");
  return (
    <div>
      <Header />
      <OurMenu category={category} setCategory={setCategory} />
      <FoodDisplay />
    </div>
  );
};

export default home;
