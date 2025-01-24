"use client";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";
import Image from "next/image";
import "../../styles/home.css";
import { gsap } from "gsap";

const Home: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll(".codedText").forEach((t) => {
      const arr1 = t.innerHTML.split("");
      const arr2: string[] = [];
      arr1.forEach((char, i) => (arr2[i] = randChar()));
      (t as HTMLElement).onpointerover = () => {
        const tl = gsap.timeline();
        let step = 0;
        tl.fromTo(
          t,
          { innerHTML: arr2.join("") },
          {
            duration: arr1.length / 10,
            ease: "power4.in",
            delay: 0.1,
            onUpdate: () => {
              const p = Math.floor(tl.progress() * arr1.length);
              if (step !== p) {
                step = p;
                arr1.forEach((char, i) => (arr2[i] = randChar()));
                const pt1 = arr1.join("").substring(p, 0);
                const pt2 = arr2.join("").substring(arr2.length - p, 0);
                t.innerHTML = pt1 + pt2;
              }
            },
          }
        );
      };
    });

    function randChar() {
      const chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`";
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      return Math.random() > 0.5 ? randomChar.toUpperCase() : randomChar;
    }
  }, []);

  return (
    <main className="home-container">
      <div className="title-container">
        <h1 className="codedText">ONI LUCA</h1>
        <h3 id="text-effect">
          Empowering People Through Thoughtful Design, Advancing Technology
          Through Innovative Development.
        </h3>
      </div>
      <div className="spline-container">
        <Spline
          onLoad={(spline) => spline.setGlobalEvents(true)}
          scene="https://prod.spline.design/0Vt4vZoLzFCc-dZI/scene.splinecode"
        />
        <div className="bg-box"></div>
      </div>
      <Image className="heart"src="/Portfolio/Heart.png" alt="EYE Illustration" width={300} height={300} />
      <footer className="footer">
        &copy; 2025 Oni Luca | All Rights Reserved | I honestly don&apos;t know
        what to put here &lt;3
      </footer>
    </main>
  );
};

export default Home;
