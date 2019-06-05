import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./firebase";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
