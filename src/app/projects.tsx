"use client";

import React, { useEffect, useState } from "react";
import "../styles/projects.css";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Skeleton,
  MenuItem,
  Select,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faAngular,
  faReact,
  faGitAlt,
  faPython,
  faJava,
  faNodeJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { text } from "stream/consumers";

const skills = [
  { name: "CSS3", icon: <FontAwesomeIcon icon={faCss3Alt} /> },
  { name: "HTML5", icon: <FontAwesomeIcon icon={faHtml5} /> },
  { name: "JavaScript", icon: <FontAwesomeIcon icon={faJsSquare} /> },
  { name: "Angular", icon: <FontAwesomeIcon icon={faAngular} /> },
  { name: "React", icon: <FontAwesomeIcon icon={faReact} /> },
  { name: "Git", icon: <FontAwesomeIcon icon={faGitAlt} /> },
  { name: "Python", icon: <FontAwesomeIcon icon={faPython} /> },
  {
    name: "C#",
    icon: (
      <Typography variant="h4" fontWeight="bold">
        C#
      </Typography>
    ),
  },
  {
    name: "C++",
    icon: (
      <Typography variant="h4" fontWeight="bold">
        C++
      </Typography>
    ),
  },
  { name: "Java", icon: <FontAwesomeIcon icon={faJava} /> },
  { name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} /> },
  {
    name: ".NET",
    icon: (
      <Typography variant="h4" fontWeight="bold">
        .NET
      </Typography>
    ),
  },
  { name: "Figma", icon: <FontAwesomeIcon icon={faFigma} /> },
];

const Projects = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [sorter, setSorter] = useState("name");

  useEffect(() => {
    fetch("https://api.github.com/users/OJOCODING/repos?per_page=100")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch(() => console.error("Failed to load projects."))
      .finally(() => setLoading(false));
  }, []);

  const sortedRepos = [...repos].sort((a, b) => {
    if (sorter === "stars") return b.stargazers_count - a.stargazers_count;
    if (sorter === "forks") return b.forks_count - a.forks_count;
    return a.name.localeCompare(b.name);
  });

  return (
    <main className="project-page">
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h1" gutterBottom>
          Welcome to My Projects
        </Typography>
        <Typography variant="h6">
          Here you'll find a collection of my skills and projects showcasing my
          expertise and creativity.
        </Typography>
      </Box>
      <br />
      <br />
      {/* Selected Projects Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h3" gutterBottom textAlign={"center"}>
          Featured Projects
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 equal-width columns
            gap: 2, // Space between each card
          }}
        >
          {/* Project 1 */}
          <Card sx={{ display: "flex", flexDirection: "column", height: 550 }}>
            <CardMedia
              component="img"
              sx={{ height: 220 }} // Adjust the height of the image
              image="/AequitasOB.png"
              alt="Project 1 Thumbnail"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                AEQUITAS - Optimizing the Online Banking Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Aequitas is a groundbreaking project designed as part of a
                bachelor's thesis to optimize the online banking experience. The
                platform emphasizes inclusivity, accessibility, and security,
                offering an equitable digital banking environment for all users,
                including senior citizens and individuals with disabilities.
                This thesis-driven project features an accessible user
                interface, robust security measures leveraging digital
                signatures, and a Machine Learning ML-powered chatbot to
                redefine user experience. The project is hosted at{" "}
                <a href="https://aequitas-thesis.web.app/"> Aequitas</a>.
              </Typography>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card sx={{ display: "flex", flexDirection: "column", height: 550 }}>
            <CardMedia
              component="img"
              sx={{ height: 220 }} // Adjust the height of the image
              image="/Vinnie'sT.png"
              alt="Project 2 Thumbnail"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                The Vinnie's Trattoria Suite
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The Vinnie's Trattoria Suite began as a static website project,
                showcasing the restaurant's branding through a clean, responsive
                design. It then evolved into a dynamic platform featuring
                customer reviews, blogs, and an administration side for
                efficient content and menu management. Finally, it further
                expanded into a mobile app with a user-friendly interface for
                reservation creation/management, ordering system, as well as
                payment system backed by an SQLite database. This comprehensive
                suite provides a seamless digital solution for both customers
                and staff, combining functionality, scalability, and ease of
                use.
              </Typography>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card sx={{ display: "flex", flexDirection: "column", height: 550 }}>
            <CardMedia
              component="img"
              sx={{ height: 225 }} // Adjust the height of the image
              image="/Portfolio.png"
              alt="Project 3 Thumbnail"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                This portfolio project
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A portfolio project showcasing my skills and projects.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <br />
      <br />
      {/* Skills Section */}
      <Box sx={{ marginBottom: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Mastering the Tools of the Trade
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {skills.map((skill) => (
            <Box
              key={skill.name}
              sx={{
                textAlign: "center",
                width: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ fontSize: "48px", color: "#4A4A4A" }}>
                {skill.icon}
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <br />
      <br />
      {/* GitHub Projects Section */}
      <Box sx={{ marginBottom: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom >
          GitHub Projects
        </Typography>
        <Select
          value={sorter}
          onChange={(e) => setSorter(e.target.value)}
          sx={{ marginBottom: 2}}
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="stars">Stars</MenuItem>
          <MenuItem value="forks">Forks</MenuItem>
        </Select>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 equal-width columns
            gap: 2, // Space between each card
            overflowY: "auto", // Enable vertical scrolling if needed
            maxHeight: 600, // Set the max height for the scrollable area
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for Internet Explorer
            paddingLeft: 5, 
          }}
        >
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  sx={{ width: 345, height: 200 }}
                />
              ))
            : sortedRepos.map((repo) => (
                <Card key={repo.id} sx={{ width: 345 }}>
                  <CardActionArea
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      component="img"
                      height="150"
                      image={`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/${repo.default_branch}/project_thumbnail.png`}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = "/fallback.jpg";
                      }}
                      alt={repo.name}
                    />
                    <CardContent>
                      <Typography variant="h5">{repo.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {repo.description || "No description available."}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
        </Box>
      </Box>
      <footer className="p-footer">
        &copy; 2025 Oni Luca | All Rights Reserved
      </footer>
    </main>
  );
};

export default Projects;
