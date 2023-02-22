import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../src/assets/style/GlobalStyles";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStyles>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalStyles>
);
