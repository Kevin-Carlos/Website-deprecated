import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { App } from "./pages";
import { ThemeProvider } from "styled-components";
import "normalize.css";
import { theme } from "common/styles";
import { GlobalStyle } from "common/styles/global";

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById("root"),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
