import React from "react";
import logo from "../../images/logo.gif";

const Header = () => {
  return (
    <header>
      <div id="headerbg" className="container">
        <div id="headernav">
          <div id="headerlogo">
            <img src={logo} alt="Logo" />

            <div className="textwhite" id="headernav1">
              <div>GENERAL</div>
              <strong>bamburgh</strong>
            </div>
          </div>
          <div id="dropdownmain">
            <div className="dropdown">
              <button className="dropdownbtn">hello</button>
              <div className="dropdowncontent">
                <a href="#">hdjbwdiuwbedfgegwfb</a>
                <a href="#">hello</a>
                <a href="#">hola</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropdownbtn">hello</button>
              <div className="dropdowncontent">
                <a href="#">hdjbwdiuwbedfgegwfb</a>
                <a href="#">hello</a>
                <a href="#">hola</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropdownbtn">hello</button>
              <div className="dropdowncontent">
                <a href="#">hdjbwdiuwbedfgegwfb</a>
                <a href="#">hello</a>
                <a href="#">hola</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropdownbtn">hello</button>
              <div className="dropdowncontent">
                <a href="#">hdjbwdiuwbedfgegwfb</a>
                <a href="#">hello</a>
                <a href="#">hola</a>
              </div>
            </div>
          </div>

          {/* <div id="headerselectdiv">
            <select name="Apps" value="Apps" className="headerselect">
              <option>Apps</option>
              <option>Commerce</option>
              <option>Analytics</option>
            </select>

            <select className="headerselect">
              <option>Blocks</option>
              <option>Commerce</option>
              <option>Analytics</option>
            </select>

            <select className="headerselect">
              <option>Others</option>
              <option>Commerce</option>
              <option>Analytics</option>
            </select>

            <select className="headerselect">
              <option>Forms</option>
              <option>Commerce</option>
              <option>Analytics</option>
            </select>
          </div> */}
          <div id="headerbtn1div">
            <button id="headerbtn1">
              <strong>BUY NOW</strong>
            </button>
          </div>
        </div>

        <div id="headerbody">
          <h1>Bamburgh React Admin Dashboard with Material-UI PRO</h1>

          <p>
            Premium admin template powered by the most popular UI components
            framework available for React: Material-UI. Features hundreds of
            examples making web development fast and easy. Start from one of the
            individual apps included or from the general dashboard and build
            beautiful scalable applications and presentation websites.
          </p>
        </div>
        <div id="headerbtnsdiv">
          <button id="headerbtn2"> Browse Dashboards</button>
          <button id="headerbtn3">Product Details</button>
        </div>
        <div id="headerbox" className="container">
          <div className="headercomp">
            <h2>1000+</h2>
            <p>components</p>
          </div>
          <hr />
          <div className="headercomp">
            <h2>5+</h2>
            <p>applications</p>
          </div>
          <hr />
          <div className="headercomp">
            <h2>100+</h2>
            <p>pages</p>
          </div>
          <hr />
          <div className="headercomp">
            <h2>100+</h2>
            <p>widgets</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
