import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
// import routes from "./routes";
import Header from "./components/Header/Header";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Skills />
      {/* {routes} */}
    </div>
  );
}

export default App;
