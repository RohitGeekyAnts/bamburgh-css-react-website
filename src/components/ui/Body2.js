import React from "react";
import body2 from "../../images/body2.png";

export default function Body2() {
  return (
    <div className="body2main">
      <div className="container">
        <div>
          <button id="body2btn1">INCLUDED</button>
          <div>
            <section id="body2header">
              <b className="textwhite">Individual Applications</b>
            </section>
            <section id="body2body">
              This template comes with included individual applications, making
              it easy to start with
              <br /> something closer to your project requirements
            </section>
          </div>
        </div>
        <div>
          <div className="body2div">
            <div className="body2box">
              <img src={body2} alt="logo" className="body2img" />{" "}
              <p className="body2p">General</p>
            </div>
            <div className="body2box">
              <img src={body2} alt="logo" className="body2img" />{" "}
              <p className="body2p">Crypto</p>
            </div>
          </div>
          <div className="body2div">
            <div className="body2box">
              <img src={body2} alt="logo" className="body2img" />{" "}
              <p className="body2p">Messenger</p>
            </div>
            <div className="body2box">
              <img src={body2} alt="logo" className="body2img" />{" "}
              <p className="body2p">Commerce</p>
            </div>
          </div>
        </div>
        <div>
          <button id="body2btn2">View Product Details</button>
        </div>
      </div>
    </div>
  );
}
