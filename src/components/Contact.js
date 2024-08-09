import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, like sending the data to an API or displaying a success message.
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          fontFamily: '"Playfair Display", serif',
          marginBottom: "1rem",
        }}
      >
        Contact Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: '"Playfair Display", serif',
          marginBottom: "2rem",
        }}
      >
        Feel free to reach out to me by filling out the form below.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{
            marginBottom: "1rem",
            fontFamily: '"Playfair Display", serif',
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          type="email"
          sx={{
            marginBottom: "1rem",
            fontFamily: '"Playfair Display", serif',
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
          sx={{
            marginBottom: "1.5rem",
            fontFamily: '"Playfair Display", serif',
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "black",
            color: "white",
            fontFamily: '"Playfair Display", serif',
            "&:hover": {
              backgroundColor: "grey",
            },
          }}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
}

export default Contact;
