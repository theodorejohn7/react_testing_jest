
import React from "react";
import { useThemeConsumer } from "./ThemeContext";

function FunctionalContextComponent2() {
  const {darkTheme,toogleTheme} = useThemeConsumer();

  const darkStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: !darkTheme ? "#333" : "#ccc",
    padding: "2em",
    margin: "2rem",
    borderRadius:"2rem",
    height:"2rem",
    width:"15rem",
    textAlign:"center",
     
  };

  return (
    <div style={darkStyle}>
      <button onClick={toogleTheme}>Toogle Color</button>
      <h5>Nested Functional Component</h5>
    </div>
  );
}

export default FunctionalContextComponent2;
