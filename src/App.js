import React from "react";
import Todos from "./components/Todos";
import AppContainer from "./components/AppContainer";
import ModeContextProvider from "./components/context/ModeContext";

function App() {
  return (
    <ModeContextProvider>
      <header
        style={{
          backgroundColor: "#bf0808",
        }}
        className="p-5 text-white text-center"
      >
        <h1 className="text-center">ToDos App</h1>
      </header>
      <AppContainer>
        <Todos />
        <p className="mt-5">
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </p>
      </AppContainer>
    </ModeContextProvider>
  );
}

export default App;
