import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Header from "./components/Header";

const theme = createTheme({
  typography: {
    fontFamily: '"Playfair Display", serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header /> {/* Place Header here if it should be on all pages */}
        <Routes>
          
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
