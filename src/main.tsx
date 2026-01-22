import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <Router basename="/kaskelkinder-website">
    <ThemeProvider theme={lightTheme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </Router>
);
