import React from "react";
import logofooter from "../../images/logofooter.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img src={logofooter} alt="logo" />
        </div>
      </div>
      <div className="footermain">
        <div className="footercomp">
          <h3>SERVICES</h3>
          <a href="">Products</a>
          <a href="">Services</a>
          <a href="">About us</a>
        </div>
        <div className="footercomp">
          <h3>SUPPORT</h3>
          <a href="">Products</a>
          <a href="">Services</a>
          <a href="">About us</a>
        </div>
        <div className="footercomp">
          <h3>APPLICATIONS</h3>
          <a href="">Products</a>
          <a href="">Services</a>
          <a href="">About us</a>
        </div>
        <div className="footercomp">
          <h3>SOCIAL CONNECTIONS</h3>
          <p>Stay up to date with our latest updates and releases!</p>
        </div>
      </div>
      <hr />

      <div className="footermain">
        <div className="footercomp" id="footercopyright">
          copyright &copy; 2020 - UiFort.com
        </div>
        <div className="footercomp" id="footerbottom">
          <button>Privacy Policy</button>
          <button>Terms of Service</button>
        </div>
        <div>
          <button>My Account</button>
        </div>
      </div>
    </footer>
  );
}
