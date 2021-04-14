import React from "react";
import logofooter from "../../images/logofooter.png";
import indicatorlogo from "../../images/indicatorlogo.jpg";

export default function Body3() {
  return (
    <div className="body3">
      <div id="body3container">
        <div>
          {" "}
          <button id="body3btn1">UNLIMITED OPTIONS</button>
          <div>
            <div id="body3header">
              <b>Build anything you want</b>
            </div>
            <div id="body3header2">
              We've got you covered with over 500 custom components ready to use
            </div>
          </div>
        </div>
        <div className="body3main">
          <div id="body3content1" className="container">
            <div id="body3mainbody">
              {" "}
              <div className="body3mainbodydiv">
                <strong>Marketing Sections</strong>
                <p>
                  These can be used to build presentation websites in the same
                  consistent style like your application.
                </p>
              </div>
              <div className="body3mainbodydiv">
                <strong>Data Display</strong>
                <p>
                  We've built a plethora of component blocks that can be
                  composed to form new elements or sections.
                </p>
              </div>
              <div className="body3mainbodydiv">
                <strong>UI Widgets</strong>
                <p>
                  Interaction is important in all apps, this being the reason
                  we've built over 200 examples with the 80+ integrated widgets.
                </p>
              </div>
              <div className="body3mainbodydiv">
                <strong>Forms Plugins</strong>
                <p>
                  Custom upload forms, multiple style sliders, tabs, accordions
                  - you'll get them all with this template.
                </p>
              </div>
            </div>
          </div>
          <div className="container" id="body3mainbox">
            <div id="body3mainboxlogo">
              <img src={logofooter} alt="logo" id="body3logo" />
            </div>

            <strong id="body3mainboxheader">Berlin Data Center</strong>
            <p className="textgray">
              View any of the 5+ live previews we've set up to learn why this
              dashboard template is the last one you'll ever need!
            </p>
            <div>
              <img src={indicatorlogo} alt="logo" id="body3img" />
            </div>
            <div id="body3mainboxbtndiv">
              <button id="body3mainboxbtn">View Dashboard</button>
            </div>
          </div>
          <div className="container" id="body3guagemaindiv">
            <div id="body3guage">
              <h1>Gauges, maybe?</h1>
              <p>
                This is just one example of <br /> what comes packed in this
                template.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
