import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { Box } from "rebass";

import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import Home from "./components/Home";
import "@reach/dialog/styles.css";
class App extends Component {
  getWindowSize = () => {
    let viewportwidth = window.innerWidth;
    let viewportheight = window.innerHeight;
    return { viewportheight, viewportwidth };
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Home path="/" />
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
