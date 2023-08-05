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
import Login from "./components/Login/Login";
import UserAccount from "./components/Login/UserAccount";
import Logout from "./components/Login/Logout";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  function expireData() {
    const expirationTime = localStorage.getItem("expirationTime");
    const currentHour = new Date().getTime();
    if (expirationTime === null) {
      localStorage.setItem("expirationTime", currentHour);
    } else {
      const num = parseInt(expirationTime);
      const expirationCalc = currentHour - num > 6 * 60 * 60 * 1000;

      if (expirationCalc) {
        localStorage.removeItem("token");
        localStorage.removeItem("user_login_token");
        localStorage.removeItem("expirationTime");
        localStorage.removeItem("id_session");
      }
    }
  }

  expireData();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SearchedValue>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login*"} element={<Login />} />
            <Route path={"/logout*"} element={<Logout />} />
            <Route path={"/movie"} element={<Movies />} />
            <Route path={"/tv"} element={<Series />} />
            <Route path={"/movie/:id"} element={<SingleMovie />} />
            <Route path={"/conta/:id"} element={<UserAccount />} />
            <Route path={"/tv/:id"} element={<SingleTv />} />
            <Route path={"search"} element={<Search />} />
          </Routes>
        </SearchedValue>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
