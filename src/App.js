import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
// import routes from "./routes";
import Header from "./components/Header/Header";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills";
import PersonalDev from "./components/Development/PersonalDev"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <PersonalDev />
      {/* {routes} */}
    </div>
  );
}

export default App;
