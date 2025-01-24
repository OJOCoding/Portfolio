import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import "../styles/navigation.css"; // Ensure the CSS file is correctly linked
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="navbar-toolbar">
        <Box component="ul" className="navbar-list">
          {/* "Who am I?" */}
          <li>
            <Link href="/about" className="navbar-link" aria-label="Who am I?">
              <AssignmentIndOutlinedIcon />
              <span>WHO AM I?</span>
            </Link>
          </li>

          {/* Logo in the center */}
          <li>
            <Link href="/" aria-label="Home">
              <Image
                src="/Portfolio/OJO.png"
                alt="Logo"
                width={80}
                height={48}
                className="navbar-logo"
              />
            </Link>
          </li>

          {/* "What do I do?" */}
          <li>
            <Link href="/projects" className="navbar-link" aria-label="What do I do?">
              <DesignServicesOutlinedIcon />
              <span>WHAT DO I DO?</span>
            </Link>
          </li>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
