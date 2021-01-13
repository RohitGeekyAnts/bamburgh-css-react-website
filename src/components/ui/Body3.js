import React from "react";
import logofooter from "../../images/logofooter.png";
import indicatorlogo from "../../images/indicatorlogo.jpg";

export default function Body3() {
  return (
    <div className="body3">
      <div id="body3container">
        <div>
          {" "}
          <button
            style={{
              backgroundColor: "rgba(0,255,127,0.5)",
              padding: "10px 20px",
              color: "green",
              borderRadius: "20px",
              border: "none",
            }}
          >
            UNLIMITED OPTIONS
          </button>
          <div>
            <div style={{ fontSize: "40px", padding: "20px 20px 0px 20px" }}>
              <b>Build anything you want</b>
            </div>
            <div
              style={{
                fontSize: "20px",
                padding: "20px",
                lineHeight: "30px",
                color: "grey",
              }}
            >
              We've got you covered with over 500 custom components ready to use
            </div>
          </div>
        </div>
        <div className="body3main">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              paddingLeft: "70px",
            }}
            className="container"
          >
            <div id="body3mainbody">
              {" "}
              <div style={{ textAlign: "left", marginBottom: "20px" }}>
                <strong
                  style={{
                    fontSize: "25px",
                    color: "darkblue",
                  }}
                >
                  Marketing Sections
                </strong>
                <p style={{ color: "grey" }}>
                  These can be used to build presentation websites in the same
                  consistent style like your application.
                </p>
              </div>
              <div style={{ textAlign: "left", marginBottom: "20px" }}>
                <strong
                  style={{
                    fontSize: "25px",
                    color: "darkblue",
                  }}
                >
                  Data Display
                </strong>
                <p style={{ color: "grey" }}>
                  We've built a plethora of component blocks that can be
                  composed to form new elements or sections.
                </p>
              </div>
              <div style={{ textAlign: "left", marginBottom: "20px" }}>
                <strong
                  style={{
                    fontSize: "25px",
                    color: "darkblue",
                  }}
                >
                  UI Widgets
                </strong>
                <p style={{ color: "grey" }}>
                  Interaction is important in all apps, this being the reason
                  we've built over 200 examples with the 80+ integrated widgets.
                </p>
              </div>
              <div style={{ textAlign: "left", marginBottom: "20px" }}>
                <strong
                  style={{
                    fontSize: "25px",
                    color: "darkblue",
                  }}
                >
                  Forms Plugins
                </strong>
                <p style={{ color: "grey" }}>
                  Custom upload forms, multiple style sliders, tabs, accordions
                  - you'll get them all with this template.
                </p>
              </div>
            </div>
          </div>
          <div className="container" id="body3mainbox">
            <div style={{ padding: "10px 20px 30px 20px" }}>
              <img src={logofooter} alt="logo" id="body3logo" />
            </div>

            <strong
              style={{
                fontSize: "20px",
                color: "white",
              }}
            >
              Berlin Data Center
            </strong>
            <p style={{ color: "grey" }}>
              View any of the 5+ live previews we've set up to learn why this
              dashboard template is the last one you'll ever need!
            </p>
            <div>
              <img src={indicatorlogo} alt="logo" id="body3img" />
            </div>
            <div style={{ paddingTop: "20px" }}>
              <button
                style={{
                  backgroundColor: "#45b6fe",
                  padding: "10px 20px",
                  color: "white",
                  borderRadius: "40px",
                  border: "none",
                  fontSize: "15px",
                }}
              >
                View Dashboard
              </button>
            </div>
          </div>
          <div className="container" style={{ alignSelf: "center" }}>
            <div id="body3guage">
              <h1 style={{ color: "darkblue" }}>Gauges, maybe?</h1>
              <p
                style={{ color: "grey", lineHeight: "25px", fontSize: "18px" }}
              >
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
