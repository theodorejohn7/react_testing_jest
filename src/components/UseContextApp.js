
import React, { useState } from "react";
import FunctionalContextComponent from "./FunctionalContextComponent";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = React.createContext();

export default function UseContextApp() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toogleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toogleTheme} style={{margin:"5rem 0rem 0rem 5rem"}}>Toogle Color </button>
        <FunctionalContextComponent   />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}
