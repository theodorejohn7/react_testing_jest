import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
   
 /* eslint-disable */
//  https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7
  render() {
      const { count, incrementCount, name} = this.props
    
    return (
      <div>
        <button onClick={incrementCount}>{name} Clicked {count} times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter,5);

