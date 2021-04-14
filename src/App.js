import React from "react";
import "./App.css";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Body1 from "./components/ui/Body1";
import Body2 from "./components/ui/Body2";
import Body3 from "./components/ui/Body3";
import FixBtn from "./components/ui/FixBtn";
import Practice from "./components/ui/Practice";

function App() {
  return (
    <div>
      {/* <Practice /> */}
      <Header />
      <Body1 />
      <Body2 />
      <Body3 />
      <FixBtn />
      <Footer />
    </div>
  );
}

export default App;
