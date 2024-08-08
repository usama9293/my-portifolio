import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
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
      }}
    >
      <AccountCircleIcon
        sx={{
          width: { xs: 100, md: 150 },
          height: { xs: 100, md: 150 },
          marginBottom: "1rem",
        }}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          fontFamily: '"Playfair Display", serif',
          marginBottom: "1rem",
        }}
      >
        About Usama Arshad
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: '"Playfair Display", serif',
          marginBottom: "1rem",
          maxWidth: "800px",
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
        }}
      >
        I am eager to bring my technical skills and passion for quality to a
        dynamic and innovative organization, where I can contribute to creating
        reliable and efficient software solutions.
      </Typography>
    </Box>
  );
}

export default About;
