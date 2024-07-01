import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    margin-top: 8rem;
    padding: 0;
    background-color: black;
    color: white;
    font-family: 'JetBrains Mono', Sans-Serif;
    transition: .2s;
  }
`;

export default GlobalStyle;
