"use client";

import Spline from "@splinetool/react-spline";
import { useState, useEffect, useRef } from "react";
import "../styles/home.css";

// Slogans for the typewriter effect
const slogans: string[] = [
  "Crafting Clean Code, Designing Seamless Experiences.",
  "Empowering the Web with Smart Code and Thoughtful UI/UX.",
  "Building Bold Ideas with AI, Data, and Accessible Design.",
  "Driven by Design, Powered by Code—Exploring AI and Data Science.",
  "Turning Ideas into Reality—Blending Code, Design, and Innovation.",
];

const Home: React.FC = () => {
  const [currentLine, setCurrentLine] = useState<string>(""); // Current line for typewriter effect
  const [currentIndex, setCurrentIndex] = useState<number>(-1); // Current index for the slogan
  const timeoutRef = useRef<number | null>(null); // Ref to store timeout ID for cleanup

  // Random index selection avoiding immediate repeats
  const getRandomIndex = (exclude: number): number => {
    let index: number;
    do {
      index = Math.floor(Math.random() * slogans.length);
    } while (index === exclude);
    return index;
  };

  // Typing effect handler
  const typeLine = (line: string, index: number) => {
    if (index < line.length) {
      setCurrentLine((prev) => prev + line.charAt(index));
      timeoutRef.current = window.setTimeout(() => typeLine(line, index + 1), 100); // Typing speed
    } else {
      timeoutRef.current = window.setTimeout(() => startTyping(), 2000); // Pause before next slogan
    }
  };

  // Start typing a new slogan
  const startTyping = () => {
    setCurrentLine(""); // Reset current line
    const newIndex = getRandomIndex(currentIndex); // Get a new slogan index
    setCurrentIndex(newIndex); // Update current index
    typeLine(slogans[newIndex], 0); // Start typing the selected slogan
  };

  // Effect to start the typewriter animation on mount
  useEffect(() => {
    startTyping();

    // Cleanup function to clear timeouts if the component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Clear any ongoing timeout
      }
    };
  }, []); // Empty dependency array to run on mount only

  return (
    <main className="home-container">
      <div className="tittle-container">
        <h1>ONI LUCA</h1>
        <h2>
          {currentLine}
          <span className="blinking-cursor">|</span>
        </h2>
      </div>
      <div className="spline-container">
        <Spline
          onLoad={(spline) => spline.setGlobalEvents(true)}
          scene="https://prod.spline.design/0Vt4vZoLzFCc-dZI/scene.splinecode"
        />
        <div className="bg-box"></div>
      </div>
      
      <footer className="footer">
        &copy; 2025 Oni Luca | All Rights Reserved | I honestly don't know what to put here &lt;3
      </footer>
    </main>
  );
};

export default Home;