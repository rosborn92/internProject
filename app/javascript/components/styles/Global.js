import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html,
  html > body,
  body {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
