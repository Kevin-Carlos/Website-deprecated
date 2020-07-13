import React from "react";
import ReactDOM from "react-dom";
import Recoil from "recoil"; // ! fix import of whole library when compatible with snowpack
import { App } from "./pages";
import { GlobalStyle } from "./common/styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Recoil.RecoilRoot>
      <GlobalStyle />
      <App />
    </Recoil.RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root"),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
