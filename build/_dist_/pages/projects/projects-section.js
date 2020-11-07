import React from "../../../web_modules/react.js";
import {Switch, Route} from "../../../web_modules/react-router-dom.js";
import {links as links2} from "../../common/links.js";
import {ProjectDashboard} from "./dashboard/index.js";
import {Flashcards} from "./flashcards/index.js";
export const ProjectsSection = () => {
  return /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: links2.projects().project().flashcards()
  }, /* @__PURE__ */ React.createElement(Flashcards, null)), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: links2.projects().root()
  }, /* @__PURE__ */ React.createElement(ProjectDashboard, null)));
};
//# sourceMappingURL=projects-section.js.map
