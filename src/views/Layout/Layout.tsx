import React from "react";
import { ThemeProvider } from "@emotion/react";
import NavBar from "../Generic/NavBar/NavBar";
import theme from "../../assets/styles/theme";

const Layout = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <p>{!data ? "Loading..." : data}</p>
    </ThemeProvider>
  );
};

export default Layout;
