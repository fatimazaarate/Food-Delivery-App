import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download">
      <p>
        For Better Experience Download Our App <br /> FoodyNow .
      </p>
      <div className="platforms">
        <img src={assets.playstore} alt="" />
        <img src={assets.applestore} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
