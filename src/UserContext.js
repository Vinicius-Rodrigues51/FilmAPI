import React, { createContext, useState } from "react";

export const userContext = createContext();

export const SearchedValue = ({ children }) => {
  const [busca, setBusca] = useState("");
  const [Moviepage, setMoviePage] = useState(1);

  return (
    <userContext.Provider value={{ busca, setBusca, Moviepage, setMoviePage }}>
      {children}
    </userContext.Provider>
  );
};
