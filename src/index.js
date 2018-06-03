import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import "typeface-nunito";
import App from "./App";

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Nunito", "Arial", "sans-serif"].join(",")
  },
  palette: {
    primary: green
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "white",
        fontWeight: 800
      }
    },
    MuiTypography: {
      display3: {
        color: "white",
        lineHeight: 1,
        marginBottom: "16px",
        fontWeight: 800
      },
      display1: {
        color: "#a5d6a7",
        lineHeight: 1,
        marginBottom: "16px",
        fontWeight: 600
      },
      title: {
        fontWeight: 800,
        color: "#4caf50"
      }
    }
  }
});

ReactDOM.render(
  <Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Fragment>,
  document.getElementById("root")
);
