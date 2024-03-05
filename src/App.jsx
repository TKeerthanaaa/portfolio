import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Skills from "./containers/skills/skills";
import { Projects } from "./containers/project/Projects";
import Contact from "./containers/contact/contact";
import Navbar from "./components/navbar/navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* {particles} */}

      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
