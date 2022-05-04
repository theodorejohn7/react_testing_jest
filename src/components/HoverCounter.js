import React, { Component } from "react";
import withCounter from "./withCounter";


class HoverCounter extends Component {
   
 /* eslint-disable */

  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>{name} Hovered {count} times</h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter,8);