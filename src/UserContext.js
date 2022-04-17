import React, { createContext, useState } from "react";

export const userContext = createContext();

export const SearchedValue = ({ children }) => {
  const [busca, setBusca] = useState("");
  console.log(busca);

  return (
    <userContext.Provider value={{ busca, setBusca }}>
      {children}
    </userContext.Provider>
  );
};
