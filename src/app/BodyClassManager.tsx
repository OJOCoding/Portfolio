"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Next.js app router API

const BodyClassManager = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document !== "undefined") {
      // Clear all previous body classes
      document.body.className = "";

      // Add a specific body class based on the pathname
      switch (pathname) {
        case "/":
          document.body.classList.add("home");
          break;
        case "/about":
          document.body.classList.add("about");
          break;
        case "/projects":
          document.body.classList.add("projects");
          break;
        default:
          document.body.classList.add("default-page");
      }
    }
  }, [pathname]);

  return null;
};

export default BodyClassManager;
