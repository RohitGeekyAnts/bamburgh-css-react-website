import React from "react";
import graphicLayout from "../../images/graphicLayout.png";

export default function Body1() {
  return (
    <div id="body1main">
      <div className="container">
        <button id="body1btn">OVERVIEW</button>
        <div>
          <section id="body1header">Highlights</section>

          <section id="body1body">
            You can build unlimited layout styles using any of the <br /> 500+
            included components and elements. Powerful, <br /> unique template
            built for React and Material-UI.
          </section>
        </div>
      </div>
      <div className="container" id="body1carddiv">
        <section className="body1card">
          <img src={graphicLayout} alt="logo" />
          <div className="body1boxheader">Powered by Material-UI</div>
          <p className="body1boxbody">
            Bamburgh uses the Material-UI components framework for React.
          </p>
        </section>
        <section className="body1card">
          <img src={graphicLayout} alt="logo" />
          <div className="body1boxheader">Powered by Material-UI</div>
          <p className="body1boxbody">
            Bamburgh uses the Material-UI components framework for React.
          </p>
        </section>
        <section className="body1card">
          <img src={graphicLayout} alt="logo" />
          <div className="body1boxheader">Powered by Material-UI</div>
          <p className="body1boxbody">
            Bamburgh uses the Material-UI components framework for React.
          </p>
        </section>
      </div>
      <div className="container" id="body1carddiv">
        <section className="body1card">
          <img src={graphicLayout} alt="logo" />

          <div className="body1boxheader">Powered by Material-UI</div>
          <p className="body1boxbody">
            Bamburgh uses the Material-UI components framework for React.
          </p>
        </section>
        <section className="body1card">
          <img src={graphicLayout} alt="logo" />

          <div className="body1boxheader">Powered by Material-UI</div>
          <p className="body1boxbody">
            Bamburgh uses the Material-UI components framework for React.
          </p>
        </section>
        <section className="body1card">
          <img src={graphicLayout} alt="logo" />

          <div className="body1boxheader">Powered by Material-UI</div>
          <p className="body1boxbody">
            Bamburgh uses the Material-UI components framework for React.
          </p>
        </section>
      </div>
    </div>
  );
}
