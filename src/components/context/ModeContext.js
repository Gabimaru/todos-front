import React, { useState, useEffect, createContext } from "react";

export const ModeContext = createContext();

const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);
  const modeClass = mode === "dark" ? "bg-dark text-light" : "";
  return (
    <ModeContext.Provider value={{ mode, setMode, modeClass }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
