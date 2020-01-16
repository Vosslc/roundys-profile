import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//! MDB https://www.npmjs.com/package/mdbreact as REF
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { HashRouter } from "react-router-dom";
import './env'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
