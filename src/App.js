import React from "react";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container" id="top">
      <NavBar />
      <Profile />
      <Projects />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
