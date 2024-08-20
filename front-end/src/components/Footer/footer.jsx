import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

const footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">FoodyNow .</div>
          <p>
            FoodyNow delivers your favorite local meals right to your doorstep.
            Enjoy a diverse menu and fast, reliable service—all from the comfort
            of home. Your next delicious meal is just a few taps away!
          </p>
          <div className="footer-social-media">
            <img src={assets.facebook} alt="facebook icon" />
            <img src={assets.instagram} alt="instagram icon" />
            <img src={assets.linkedin} alt="linkedin icon" />
            {/*<img src={assets.whatsapp} alt="whatsapp icon" />*/}
          </div>
        </div>

        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-right">
          <h2>CONTACT-US</h2>
          <ul>
            <li>+212-486-858-474</li>
            <li>contact@foodynow.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">© 2024 FoodyNow - All Rights Reserved.</p>
    </div>
  );
};

export default footer;
