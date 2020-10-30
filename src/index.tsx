import React from "react";
import ReactDOM from "react-dom";

// Stylization
import "normalize.css";
import { theme } from "common/styles";
import { GlobalStyle } from "common/styles/global";
import { ThemeProvider } from "styled-components";

// Core application
import { RecoilRoot } from "recoil";
import { App } from "./pages";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById("root"),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
