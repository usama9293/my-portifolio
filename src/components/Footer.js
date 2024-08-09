import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "2rem",
        marginTop: "auto",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: '"Playfair Display", serif',
              marginBottom: "1rem",
            }}
          >
            Contact Information
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: '"Playfair Display", serif' }}
          >
            Email: usama.arshad@example.com
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: '"Playfair Display", serif' }}
          >
            Phone: +123 456 7890
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: '"Playfair Display", serif',
              marginBottom: "1rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Follow Me
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <IconButton
              href="https://github.com/usama9293"
              target="_blank"
              sx={{
                color: "white",
                "&:hover": {
                  color: "grey",
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/usama-arshad-0022a0217/"
              target="_blank"
              sx={{
                color: "white",
                "&:hover": {
                  color: "grey",
                },
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://twitter.com/your_twitter_handle"
              target="_blank"
              sx={{
                color: "white",
                "&:hover": {
                  color: "grey",
                },
              }}
            >
              <Twitter />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: '"Playfair Display", serif',
              marginBottom: "1rem",
              textAlign: { xs: "center", md: "right" },
            }}
          >
            About This Site
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: '"Playfair Display", serif',
              textAlign: { xs: "center", md: "right" },
            }}
          >
            This is my personal portfolio website showcasing my projects,
            skills, and experience as a web developer and SQA analyst.
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "2rem",
          borderTop: "1px solid grey",
          paddingTop: "1rem",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontFamily: '"Playfair Display", serif' }}
        >
          &copy; {new Date().getFullYear()} Usama Arshad. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
