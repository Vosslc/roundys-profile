import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
// import routes from "./routes";
import Header from "./components/Header/Header";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills";
import ProjectCarouselPage from "./components/Development/ProjectCarouselPage"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <ProjectCarouselPage />
      {/* {routes} */}
    </div>
  );
}

export default App;
