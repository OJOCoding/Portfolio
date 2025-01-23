import Spline from "@splinetool/react-spline";
import { useEffect } from "react";
import "../styles/home.css";
import { gsap } from "gsap";

const Home: React.FC = () => {

  useEffect(() => {
    document.querySelectorAll('.codedText').forEach((t) => {
      const arr1 = t.innerHTML.split('');
      const arr2: any[] = [];
      arr1.forEach((char, i) => arr2[i] = randChar()); // fill arr2 with random characters
      (t as HTMLElement).onpointerover = () => {
        const tl = gsap.timeline();
        let step = 0;
        tl.fromTo(t, {
          innerHTML: arr2.join(''),
         
        }, {
          duration: arr1.length / 10, // slower duration based on text length
          ease: 'power4.in',
          delay: 0.1,
          onUpdate: () => {
            const p = Math.floor(tl.progress() * (arr1.length)); // whole number from 0 - text length
            if (step !== p) { // throttle the change of random characters
              step = p;
              arr1.forEach((char, i) => arr2[i] = randChar());
              let pt1 = arr1.join('').substring(p, 0),
                  pt2 = arr2.join('').substring(arr2.length - p, 0);
              if (t.classList.contains('fromRight')) {
                pt1 = arr2.join('').substring(arr2.length - p, 0);
                pt2 = arr1.join('').substring(arr1.length - p);
              }
              t.innerHTML = pt1 + pt2; // update text
            }
          }
        });
      };
    });

    function randChar() {
      let c = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`";
      c = c[Math.floor(Math.random() * c.length)];
      return (Math.random() > 0.5) ? c : c.toUpperCase();
    }
  }, []);

  return (
    <main className="home-container">
      <div className="title-container">
        <h1 className="codedText">ONI LUCA</h1>
        <h3 id="text-effect" >
          Empowering People Through Thoughtful Design,
          Advancing Technology Through Innovative Development.
        </h3>
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
