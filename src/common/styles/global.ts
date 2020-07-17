import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; /* To make 1rem === 10px for easy calculation */
  }

  body {
    margin: 0;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 1.7rem;
  }

  html, body {
    height: 100%;
  }

  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${Colors.Blue};
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    margin-top: 0;
    font-size: 3rem;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin: 0;
    line-height: 2.5rem;
  }

  input, button {
    font-family: inherit;
    font-size: inherit;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;
