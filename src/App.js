import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
// import routes from "./routes";
import Header from "./components/Header/Header";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills";
import ProjectCarouselPage from "./components/Development/ProjectCarouselPage"
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <ProjectCarouselPage />
      <Footer />
      {/* {routes} */}
    </div>
  );
}

export default App;
