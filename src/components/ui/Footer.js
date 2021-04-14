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
          <a href="">
            <h3>SERVICES</h3>
          </a>
          <a href="">Products</a>
          <a href="">Services</a>
          <a href="">About us</a>
        </div>
        <div className="footercomp">
          <a href="">
            <h3>SUPPORT</h3>
          </a>
          <a href="">Products</a>
          <a href="">Services</a>
          <a href="">About us</a>
        </div>
        <div className="footercomp">
          <a href="">
            <h3>APPLICATIONS</h3>
          </a>
          <a href="">Products</a>
          <a href="">Services</a>
          <a href="">About us</a>
        </div>
        <div className="footercomp" style={{ minWidth: "250px" }}>
          <a href="">
            <h3>SOCIAL CONNECTIONS</h3>
          </a>
          <p style={{ padding: "0px 10px" }}>
            Stay up to date with our latest updates and releases!
          </p>
        </div>
      </div>
      <hr />

      <div className="footermain" style={{ alignItems: "center" }}>
        <div
          className="footercomp"
          id="footercopyright"
          style={{ minWidth: "250px" }}
        >
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
