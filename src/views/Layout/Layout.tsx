import React from "react";
import { ThemeProvider } from "@emotion/react";
import NavBar from "../Generic/NavBar/NavBar";
import theme from "../../assets/styles/theme";
import WorkoutListContainer from "../WorkoutList/WorkoutListContainer";

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <WorkoutListContainer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
