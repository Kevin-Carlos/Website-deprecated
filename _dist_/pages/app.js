import React, {useState} from "../../web_modules/react.js";
import {Switch} from "../../web_modules/react-router-dom.js";
import {MenuLayoutRoute} from "../common/routes/index.js";
import {links as links2} from "../common/links.js";
import {ProjectsSection} from "./projects/index.js";
import {Homepage} from "./home/index.js";
import {MenuContext} from "../common/layout/index.js";
import {AboutMe} from "./about/index.js";
const App = () => {
  const [hideFooterItems, setFooterItemVisibility] = useState("hide");
  const [transparentizeHeaderBG, setHeaderBGVisibility] = useState("show");
  return /* @__PURE__ */ React.createElement(MenuContext.Provider, {
    value: {
      hideFooterItems,
      setFooterItemVisibility,
      transparentizeHeaderBG,
      setHeaderBGVisibility
    }
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(MenuLayoutRoute, {
    path: links2.projects().root()
  }, /* @__PURE__ */ React.createElement(ProjectsSection, null)), /* @__PURE__ */ React.createElement(MenuLayoutRoute, {
    path: links2.aboutMe()
  }, /* @__PURE__ */ React.createElement(AboutMe, null)), /* @__PURE__ */ React.createElement(MenuLayoutRoute, {
    exact: true,
    path: links2.home()
  }, /* @__PURE__ */ React.createElement(Homepage, null))));
};
export default App;
