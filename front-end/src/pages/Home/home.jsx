import React, { useState } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import OurMenu from "../../components/OurMenu/OurMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const home = () => {
  const [category, setCategory] = useState("menu");
  return (
    <div>
      <Header />
      <OurMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default home;
