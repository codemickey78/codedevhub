import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import App from "./App";

const mainElem: any = document.getElementById("root");
const root = createRoot(mainElem);

root.render(
  <Router>
    <App />
  </Router>
);
