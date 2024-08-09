import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "1rem", md: "2rem" }, // Responsive padding
        textAlign: "center",
        opacity: 0,
        transform: "translateY(20px)",
        animation: "fadeInUp 1s forwards ease-in-out",
        backgroundColor: "#f0f0f0", // Adding a light background color
        borderRadius: "8px", // Rounded corners for a modern look
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
        maxWidth: "900px", // Restricting the max-width for better readability
        margin: "auto", // Centering the box
      }}
    >
      <AccountCircleIcon
        sx={{
          width: { xs: 80, md: 120 }, // Responsive icon size
          height: { xs: 80, md: 120 },
          marginBottom: "1rem",
          transition: "transform 0.5s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          fontFamily: '"Playfair Display", serif',
          marginBottom: "1rem",
          transition: "color 0.5s ease-in-out",
          "&:hover": {
            color: "grey",
          },
          fontSize: { xs: "1.8rem", md: "2.5rem" }, // Responsive font size
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: '"Playfair Display", serif',
          marginBottom: "1rem",
          maxWidth: "800px",
          fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
          lineHeight: { xs: "1.5", md: "1.75" }, // Responsive line height
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          "&:hover": {
            opacity: 0.8,
            transform: "translateY(-5px)",
          },
        }}
      >
        I am Usama Arshad, a recent graduate with a Bachelor's degree in
        Computer Science from NUTECH Islamabad. I have a strong passion for web
        development and quality assurance. Throughout my academic journey, I
        have gained extensive knowledge and hands-on experience in both
        front-end and back-end development, including HTML, CSS, JavaScript,
        React, Node.js, and MongoDB.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: '"Playfair Display", serif',
          marginBottom: "1rem",
          maxWidth: "800px",
          fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
          lineHeight: { xs: "1.5", md: "1.75" }, // Responsive line height
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          "&:hover": {
            opacity: 0.8,
            transform: "translateY(-5px)",
          },
        }}
      >
        In addition to my development skills, I have also honed my expertise in
        quality assurance. I have experience with manual and automated testing,
        using tools like JIRA, to ensure the delivery of high-quality software.
        During my internship at Pakistan International Airlines, I supported the
        IT department in developing web applications, performing data quality
        checks, and generating reports.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: '"Playfair Display", serif',
          maxWidth: "800px",
          fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
          lineHeight: { xs: "1.5", md: "1.75" }, // Responsive line height
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          "&:hover": {
            opacity: 0.8,
            transform: "translateY(-5px)",
          },
        }}
      >
        I am eager to bring my technical skills and passion for quality to a
        dynamic and innovative organization, where I can contribute to creating
        reliable and efficient software solutions.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: "2rem",
          fontFamily: '"Playfair Display", serif',
          padding: { xs: "0.5rem 1rem", md: "0.75rem 1.5rem" }, // Responsive padding
          fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
          transition:
            "background-color 0.5s ease-in-out, transform 0.5s ease-in-out",
          "&:hover": {
            backgroundColor: "grey",
            transform: "translateY(-3px)",
          },
        }}
        href="./UsamaArshadResume.pdf" // Replace with the actual path to your CV
        download="UsamaArshadResume.pdf"
      >
        Download CV
      </Button>
    </Box>
  );
}

export default About;
