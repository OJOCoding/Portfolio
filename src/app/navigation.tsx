"use client";
import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import "../styles/navigation.css"; // Ensure the CSS file is correctly linked

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="navbar-toolbar">
        <Box component="ul" className="navbar-list">
          {/* "Who am I" Link */}
          <li>
            <Link href="/about" className="navbar-link" aria-label="Who am I?">
              WHO AM I?
            </Link>
          </li>

          {/* Logo in the center */}
          <li>
            <Link href="/" aria-label="Home">
              <Image
                src="/OJO.png"
                alt="Logo"
                width={80}
                height={48}
                className="navbar-logo"
              />
            </Link>
          </li>

          {/* "What do I do" Link */}
          <li>
            <Link
              href="/projects"
              className="navbar-link"
              aria-label="What do I do?"
            >
              WHAT DO I DO?
            </Link>
          </li>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
