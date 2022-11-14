import React from "react";
import { ThemeProvider } from "@emotion/react";
import NavBar from "./NavBar/NavBar";
import theme from "../../assets/styles/theme";

type TLayout = {
  children: JSX.Element;
};

const Layout: React.FC<TLayout> = ({ children }: TLayout) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
