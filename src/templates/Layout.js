import React from "react";
import { Footer, Header, SEO } from "../components/";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    primary: "hotpink",
  },
};

const SomeText = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SEO></SEO>
        <Header></Header>
        <SomeText>Hello</SomeText>
        <h2>Layout</h2>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
