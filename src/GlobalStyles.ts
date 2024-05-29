import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #14142c ;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: Roboto, sans-serif;
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
