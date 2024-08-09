import React from "react";
import airbnb from "../assets/airbnb.png";
import todo from "../assets/todo.png";
import fyp from "../assets/fyp.jpeg";
import insta from "../assets/insta.jpg";
import estore from "../assets/estore.png";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "ScrollSafeApp",
    description:
      "A full-featured Instagram clone with user authentication, photo sharing, and real-time updates, built using React and Firebase.",
    image: `${insta}`,
    github: "https://github.com/usama9293/scrollSafeApp",
  },
  {
    title: "Airbnb Clone",
    description:
      "A Node.js project that replicates core functionalities of Airbnb, including property listings, user authentication, and booking management.",
    image: `${airbnb}`,
    github: "https://github.com/usama9293/airbnb",
  },
  {
    title: "Sales Forecasting Tool",
    description:
      "A tool built with Python and Flask for predicting sales in e-commerce using machine learning algorithms.",
    image: `${fyp}`,
    github: "https://github.com/usama9293/sales-forecasting-tool",
    liveDemo: "#",
  },
  {
    title: "E-Commerce Store",
    description:
      "A full-stack e-commerce cart using React, Redux, Node.js, and MongoDB.",
    image: `${estore}`,
    github: "https://github.com/usama9293/estore",
  },
  {
    title: "To-do Application",
    description:
      "A to-do application with Firebase integration for real-time data storage.",
    image: `${todo}`,
    github: "https://github.com/usama9293/todo-list",
  },
];

function Projects() {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#282c34", // Change this to the desired background color
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          fontFamily: '"Playfair Display", serif',
          textAlign: "center",
          color: "white", // Adjust text color for contrast
          marginBottom: "2rem",
        }}
      >
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.github}
                  target="_blank"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    transition: "color 0.3s ease-in-out",
                    "&:hover": {
                      color: "grey",
                    },
                  }}
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
