import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { firebaseAuth } from "./firebase";

const App = props => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
};

firebaseAuth.onAuthStateChanged(user => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App user={user} />, rootElement);
});
