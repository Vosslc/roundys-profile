import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills";
// import routes from "./routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
