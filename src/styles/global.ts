import { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    margin-top: 8rem;
    padding: 0;
    background-color: black;
    color: white;
    font-family: 'JetBrains Mono', Sans-Serif;
    transition: .2s;

    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
  width: 8px;
  background-color: ${COLORS.black};
}

::-webkit-scrollbar-thumb {
  background-color: ${COLORS.purple[400]};
  border-radius: 1rem;
}

`;

export default GlobalStyle;
