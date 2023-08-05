import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const userContext = createContext();

export const SearchedValue = ({ children }) => {
  const [busca, setBusca] = useState("");
  const [Moviepage, setMoviePage] = useState(1);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("id_session");

    if (token) {
      setLogin(true);
    }
  }, [login]);

  return (
    <userContext.Provider
      value={{
        busca,
        setBusca,
        Moviepage,
        setMoviePage,
        login,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
