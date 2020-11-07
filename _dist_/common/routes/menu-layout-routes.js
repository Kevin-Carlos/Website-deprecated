import React from "../../../web_modules/react.js";
import {Route} from "../../../web_modules/react-router.js";
import {MenuLayout} from "../layout/index.js";
export const MenuLayoutRoute = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ React.createElement(Route, {
    ...props
  }, /* @__PURE__ */ React.createElement(MenuLayout, null, children));
};
//# sourceMappingURL=menu-layout-routes.js.map
