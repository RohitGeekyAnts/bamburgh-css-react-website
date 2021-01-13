import React from "react";
import graphicLayout from "../../images/graphicLayout.png";

const FixBtn = () => {
  return (
    <div id="fixbtnmain">
      <div id="fixbtnalign">
        <button className="fixbtn" id="fixbtn1">
          <img src={graphicLayout} alt="logo" />
        </button>
        <br />
        <button className="fixbtn" id="fixbtn2">
          <img src={graphicLayout} alt="logo" />
        </button>
        <br />
        <button className="fixbtn" id="fixbtn3">
          <img src={graphicLayout} alt="logo" />
        </button>
      </div>
    </div>
  );
};

export default FixBtn;
