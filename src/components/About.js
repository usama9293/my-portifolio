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
        padding: "2rem",
        textAlign: "center",
        opacity: 0,
        transform: "translateY(20px)",
        animation: "fadeInUp 1s forwards ease-in-out",
      }}
    >
      <AccountCircleIcon
        sx={{
          width: { xs: 100, md: 150 },
          height: { xs: 100, md: 150 },
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
