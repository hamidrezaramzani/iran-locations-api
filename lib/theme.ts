import { createTheme } from "@mui/material/styles";

export const getMuiTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#7D3C98",
      },
      secondary: {
        main: "#1C39BB",
      },
      success: {
        main: "#00A693",
      },
      error: {
        main: "#CC3333",
      },
      background: {
        default: mode === "dark" ? "#000" : "#fff",
        paper: mode === "dark" ? "#121212" : "#f5f5f5",
      },
      text: {
        primary: mode === "dark" ? "#fff" : "#000",
        secondary: mode === "dark" ? "#B3B3B3" : "#4A4A4A",
      },
    },
    typography: {
      fontFamily: "iran-yekan",
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        color: mode === "dark" ? "#A66DD4" : "#32127A",
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
        color: mode === "dark" ? "#8895D4" : "#1C39BB",
      },
      h3: { fontSize: "1.75rem", fontWeight: 500 },
      body1: { fontSize: "1rem", lineHeight: 1.6 },
      button: { textTransform: "none", fontWeight: 600 },
    },
  });
