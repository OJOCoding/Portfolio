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
              <Typography variant="h5">WHO AM I?</Typography>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="OJO.png" alt="Logo" className="navbar-logo" />
            </Link>
          </li>
          <li>
            <Link to="/projects" className="navbar-link">
              <Typography variant="h5">WHAT DO I DO?</Typography>
            </Link>
          </li>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;