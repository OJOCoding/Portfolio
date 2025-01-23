"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Link from "next/link"; // Use Next.js Link component
import Image from "next/image";
import styles from "../styles/navigation.module.css"; // Import CSS module

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className={styles.navbarToolbar}>
        <Box component="ul" className={styles.navbarList}>
          <li>
            <Link href="/about" className={styles.navbarLink}>
              <Typography variant="h5">WHO AM I?</Typography>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <Image
                src="/OJO.png"
                alt="Logo"
                width={80}
                height={48}
                className={styles.navbarLogo}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href="/projects" className={styles.navbarLink}>
              <Typography variant="h5">WHAT DO I DO?</Typography>
            </Link>
          </li>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
