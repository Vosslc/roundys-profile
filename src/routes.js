import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import Landing from "./components/Login-Register/Register";
// import Login from "./components/Login-Register/Login";
// import Dashboard from "./components/Dashboard/Dashboard";
// import CreatePost from "./components/Posting/CreatePost";
// import PostDetails from "./components/Posting/PostDetails";

export default (
  <Switch>
    <Route exact path="/" component={Header} />
    <Route path="/about" component={About} />
    
  </Switch>
);
