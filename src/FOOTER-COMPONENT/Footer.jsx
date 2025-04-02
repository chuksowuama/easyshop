import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer" id="ContactUS">
        <div className="footer-content">
          <div className="footerleft">
            <h2 style={{ color: "#bc6c25" }}>EasyShop</h2>
            <p className="comapanuDummytext">
              Lorem ipsum dolor sit amet consectetur, quis officiis totam sunt?
            </p>
            <div className="socialIcons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className="footerCenter">
            <h3>COMAPNY</h3>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footerRight">
            <h3>GET IN TOUCH</h3>
            <ul>
              <li>08137577286</li>
              <li>contact@Shopzone.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2025 @ ShopZone.com - All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
