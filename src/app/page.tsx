"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation"; // Use the app router API
import Navbar from "./navigation";
import ThemeSwitcher from "./ThemeSwitcher";

const BodyClassManager = () => {
  const pathname = usePathname(); // Works specifically in the Next.js app directory

  useEffect(() => {
    if (typeof document !== "undefined") {
      // Ensure this runs only on the client
      document.body.className = ""; // Clear existing classes
      if (pathname === "/") {
        document.body.classList.add("home");
      } else if (pathname === "/about") {
        document.body.classList.add("about");
      } else if (pathname === "/projects") {
        document.body.classList.add("projects");
      }
    }
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <BodyClassManager />
      <Navbar />
      <ThemeSwitcher />
    </>
  );
};

export default App;
