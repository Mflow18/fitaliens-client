import React from "react";
import { ThemeProvider } from "@emotion/react";
import NavBar from "../Generic/NavBar/NavBar";
import theme from "../../assets/styles/theme";
import WorkoutList from "../WorkoutList/WorkoutList";

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <WorkoutList />
      </ThemeProvider>
    </>
  );
};

export default Layout;
