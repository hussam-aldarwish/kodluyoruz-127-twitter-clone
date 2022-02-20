import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeContext } from "./contexts/ThemeContext";
import Routes from "./routes";

import "./App.scss";

function App() {
  const [theme, setTheme] = useState(() => {
    let theme = localStorage.getItem("theme");
    return theme ? theme : "light";
  });

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme) localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Helmet htmlAttributes={{ theme: theme }} />
      <div className="App">
        <Routes />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
