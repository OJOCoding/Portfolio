import Image from "next/image";
import styles from "./page.module.css";
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main>
      <Spline scene="https://prod.spline.design/EWTeMbZpEenWUYHZ/scene.splinecode" />
      <h1><a href="google.com">Help</a></h1>
    </main>
    
  );
}
