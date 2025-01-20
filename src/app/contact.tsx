"use client";

import React, { useState } from "react";
import "../styles/contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Snackbar, Alert, Divider, Typography } from "@mui/material";

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const handleSnackbarClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "b635a5c3-875e-4a0e-99b7-760880b4007c");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }).then((res) => res.json());

      if (res.success) {
        setStatus("success");
        setSnackbarMessage("Thank you! Your message has been sent.");
        setSnackbarSeverity("success");
      } else {
        setStatus("error");
        setSnackbarMessage("Something went wrong. Please try again later.");
        setSnackbarSeverity("error");
      }
    } catch (error) {
      setStatus("error");
      setSnackbarMessage("Something went wrong. Please try again later.");
      setSnackbarSeverity("error");
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="contact-container">
      <h2>Let us collaborate!</h2>
      <form onSubmit={onSubmit} className="contact-form">
        <label htmlFor="name">NAME</label>
        <input type="text" name="name" id="name" required placeholder="Your Name" />

        <label htmlFor="email">EMAIL</label>
        <input type="email" name="email" id="email" required placeholder="Your Email" />

        <label htmlFor="message">MESSAGE</label>
        <textarea name="message" id="message" required placeholder="Your Message"></textarea>

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Submit Form"}
        </button>
      </form>

      <Divider orientation="horizontal" variant="middle" flexItem>
         <Typography variant="h5">or check out my socials @ </Typography>

      </Divider>

      <div className="social-icons">
        <a href="https://github.com/OJOCODING" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/oniluca" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/oniluca" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;
