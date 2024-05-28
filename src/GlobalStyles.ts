import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url("https://i.postimg.cc/cL96Sty6/Home.png");
    background-size: cover;
    background-repeat: no-repeat;
    font-family: Arial, sans-serif;
    padding-top: 20px;
  }

  @media screen and (max-width: 600px) {
    body {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 601px) {
    body {
      font-size: 16px;
    }
  }
`;

export default GlobalStyles;
