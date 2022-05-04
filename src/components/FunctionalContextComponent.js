
import React, { useContext } from "react";
import { ThemeContext } from "./UseContextApp";

function FunctionalContextComponent() {
  const darkTheme = useContext(ThemeContext);

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

  return <div style={darkStyle}>Functional Component</div>;
}

export default FunctionalContextComponent;
