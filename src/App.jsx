import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./hooks/usePersistedState";
import SingleMovie from "./components/SingleMovie/SingleMovie";
import Series from "./components/Series/Series";
import SingleTv from "./components/SingleTv/SingleTv";
import Search from "./components/SearchPage/Search";
import { SearchedValue } from "./UserContext";
import Home from "./components/Home/Home";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SearchedValue>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/movie"} element={<Movies />} />
            <Route path={"/tv"} element={<Series />} />
            <Route path={"/movie/:id"} element={<SingleMovie />} />
            <Route path={"/tv/:id"} element={<SingleTv />} />
            <Route path={"search"} element={<Search />} />
          </Routes>
        </SearchedValue>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
