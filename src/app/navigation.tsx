"use client";
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="navbar-toolbar">
        <Box component="ul" className="navbar-list">
          <li>
            <Link to="/about" className="navbar-link">
              <Typography variant="h5">ABOUT ME</Typography>
            </Link>
          </li>
          <li>
            <Link to="/skills" className="navbar-link">
              <Typography variant="h5">SKILLS</Typography>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="OJO.png" alt="Logo" className="navbar-logo" />
            </Link>
          </li>
          <li>
            <Link to="/projects" className="navbar-link">
              <Typography variant="h5">PROJECTS</Typography>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              <Typography variant="h5">CONTACTS</Typography>
            </Link>
          </li>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
