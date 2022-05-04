

import React, { useState } from "react";
import FunctionalContextComponent2 from "./FunctionalContextComponent2";
import { ThemeProvider } from "./ThemeContext";

export default function UseContextApp() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toogleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeProvider.Provider value={{darkTheme, toogleTheme}}>
        <button onClick={toogleTheme} style={{margin:"5rem 0rem 0rem 5rem"}}>Toogle Color </button>
        <FunctionalContextComponent2   />
      </ThemeProvider.Provider>
    </>
  );
}
