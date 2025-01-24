"use client";
import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <IconButton
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "1rem",
        backgroundColor: "var(--primary-bg)",
        color: "var(--primary-text)",
      }}
    >
      {theme === "light" ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
};

export default ThemeSwitcher;
