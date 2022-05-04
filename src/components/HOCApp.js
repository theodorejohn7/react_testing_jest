import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

class HOCApp extends Component {
  render() {
    return (
      <div className="App">
        <br></br>
        <br></br>

        <ClickCounter />
        <HoverCounter name="Theodore" />
      </div>
    );
  }
}

export default HOCApp;