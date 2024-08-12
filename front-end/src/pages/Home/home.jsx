import React, { useState } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import OurMenu from "../../components/OurMenu/OurMenu";

const home = () => {
  const [category, setCategory] = useState("Something");
  return (
    <div>
      <Header />
      <OurMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default home;
