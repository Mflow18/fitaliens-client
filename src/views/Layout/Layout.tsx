import React from "react";
import { ThemeProvider } from "@emotion/react";
import NavBar from "../Generic/NavBar/NavBar";
import theme from "../../assets/styles/Theme";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
    </ThemeProvider>
  );
};

export default Layout;
