import React, { useContext } from "react";
import { ModeContext } from "../components/context/ModeContext";

const AppContainer = ({ children }) => {
  const { modeClass } = useContext(ModeContext);
  return <div className={`pt-3 container ${modeClass}`}>{children}</div>;
};

export default AppContainer;
