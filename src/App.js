import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About"
// import routes from "./routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
    </div>
  );
}

export default App;
