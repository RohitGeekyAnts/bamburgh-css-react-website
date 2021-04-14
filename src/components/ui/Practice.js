import React from "react";
import Body1 from "./Body1";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  componentDidMount() {
    const apiUrl = "http://localhost:3000/api/courses";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ header: data[0].header, body: data[0].body })
      );
  }
  render() {
    console.log(this.state, "@@##");
    // const data = data;
    // console.log(data, "##@@");
    // console.log(data, "hygyff");
    return (
      <div>
        <h1>my Component has Mounted, Check the browser 'console' </h1>
        <Body1 data={this.state.data} />;
      </div>
    );
  }
}
export default Practice;
