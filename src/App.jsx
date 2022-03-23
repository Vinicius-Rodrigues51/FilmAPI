import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./hooks/usePersistedState";
import SingleMovie from "./components/SingleMovie/SingleMovie";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/:id"} element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
