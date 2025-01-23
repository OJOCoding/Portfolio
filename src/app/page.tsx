"use client";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./navigation";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import ThemeSwitcher from "./ThemeSwitcher";

const BodyClassManager = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "";
    if (location.pathname === "/") {
      document.body.classList.add("home");
    } else if (location.pathname === "/about") {
      document.body.classList.add("about");
    } else if (location.pathname === "/projects") {
      document.body.classList.add("projects");
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <BodyClassManager />
      <Navbar />
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
