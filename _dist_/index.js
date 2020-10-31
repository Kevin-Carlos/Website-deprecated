import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../web_modules/react.js";
import ReactDOM from "../web_modules/react-dom.js";
import "../web_modules/normalize.css.js";
import {theme} from "./common/styles/index.js";
import {GlobalStyle} from "./common/styles/global.js";
import {ThemeProvider} from "../web_modules/styled-components.js";
import {RecoilRoot} from "../web_modules/recoil.js";
import {App} from "./pages/index.js";
import {BrowserRouter} from "../web_modules/react-router-dom.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(RecoilRoot, null, /* @__PURE__ */ React.createElement(ThemeProvider, {
  theme
}, /* @__PURE__ */ React.createElement(GlobalStyle, null), /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(App, null)))), document.getElementById("root"));
if (import.meta.hot) {
  import.meta.hot.accept();
}
