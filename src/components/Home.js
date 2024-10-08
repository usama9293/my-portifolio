import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import pf from "../assets/pf.jpg";
import About from "./About";
import "../App.css";
import bg from "../assets/bg1.jpg";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
          padding: { xs: "1rem", md: "0 2rem" },
          textAlign: { xs: "center", md: "left" },
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg}) center/cover no-repeat`, // Replace with your background image path
          color: "white",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            mb: { xs: 2, md: 0 },
            opacity: 0,
            transform: "translateX(100%)",
            animation: "slideIn 1s forwards ease-in-out",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              mt: { xs: 0, md: 2 },
              fontWeight: "bold",
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Web Developer and SQA Analyst
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/contact"
            sx={{
              mt: 2,
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "grey",
              },
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Contact Me
          </Button>
        </Box>
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            textAlign: "right",
          }}
        >
          <img
            src={pf} // Replace with your image URL
            alt="Profile"
            style={{
              width: "100%", // Make the image responsive
              maxWidth: "400px", // Maximum width
              height: "auto", // Auto height to maintain aspect ratio
              borderRadius: "50%", // Make the image round
              objectFit: "cover", // Ensure the image covers the container
            }}
          />
        </Box>
      </Box>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
