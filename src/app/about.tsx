"use client";

import React from "react";
import "../styles/about.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Email } from "@mui/icons-material";
import Image from 'next/image';

const About = () => {
  return (
    <main className="about">
      <div className="profile"><Image src="ONI.svg" alt="Oni Luca | Open Peeps Illustration" width={500} height={500} /></div>
      <div className="about-section">
        <h1>Hello, again it&apos;s Oni.</h1>
        <p>Hi, I&apos;m Oni Luca!
        I&apos;m a web developer and designer specializing in creating engaging, accessible, and visually striking user experiences. With a background in computer science and a keen eye for UI/UX design, I blend creativity with functionality to build seamless digital solutions. Beyond design, I have interests in AI, databases, data science, and programming, making me a well-rounded tech enthusiast. Explore my work and join me on my journey of crafting innovative and user-friendly web applications!</p>
        <div className="social-icons">
          <a
            href="https://github.com/OJOCODING"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
            <span className="tooltip">https://github.com/OJOCODING</span>
          </a>
          <a
            href="https://www.linkedin.com/in/oniluca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
            <span className="tooltip">https://www.linkedin.com/in/oniluca</span>
          </a>
          <a
            href="https://www.instagram.com/oniluca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <InstagramIcon />
            <span className="tooltip">https://www.instagram.com/oniluca</span>
          </a>
          <a
            href="mailto:oniluca@ymail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Oni Luca"
          >
            <Email />
            <span className="tooltip">oniluca@ymail.com</span>
          </a>
      </div>
      </div>
    </main>
  );
};

export default About;
