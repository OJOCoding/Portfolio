"use client";

import React from "react";
import { usePathname } from "next/navigation"; 
import Home from "./home/page"; 

const App = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && <Home />}{" "}
    </>
  );
};

export default App;
