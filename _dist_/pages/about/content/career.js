import React from "../../../../web_modules/react.js";
import {Blockquote} from "../../../common/components/index.js";
import styled from "../../../../web_modules/styled-components.js";
export const CareerBlurb = ({}) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Back in October of 2019, I joined", " ", /* @__PURE__ */ React.createElement(BlueLink, {
    href: "https://cycle.io",
    target: "_blank"
  }, "Cycle"), "."), /* @__PURE__ */ React.createElement(Blockquote, null, /* @__PURE__ */ React.createElement("p", null, "Too many companies have been led down the path of believing they have the same technical requirements as Fortune 100 enterprises, and we're here to fix that."), /* @__PURE__ */ React.createElement("p", null, "Our goal is simple: enable developers to spend more time building awesome products and less time managing infrastructure, pushing deployments, and patching orchestrators."), /* @__PURE__ */ React.createElement("p", {
    style: {margin: 0}
  }, "-", " ", /* @__PURE__ */ React.createElement(BlueLink, {
    href: "https://cycle.io/platform/",
    target: "_blank"
  }, "Platform"))), /* @__PURE__ */ React.createElement("p", null, "I help manage and maintain five different frontend applications and my most recent noteworthy project has been developing the views/pages of our now-rebranded site, check it out!"), /* @__PURE__ */ React.createElement("h2", null, "I've also written some blog posts!"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(BlueLink, {
    href: "https://cycle.io/blog/2020/02/thrown-into-the-fire---learning-containers-as-a-new-college-grad/",
    target: "_blank"
  }, "Thrown Into the Fire \u2014 Learning Containers as a New College Grad")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(BlueLink, {
    href: "https://cycle.io/blog/2020/10/a-deep-dive-into-cycles-frontend-stack/",
    target: "_blank"
  }, "A Deep Dive Into Cycle's Frontend Stack"))));
};
const BlueLink = styled.a`
  color: ${({theme}) => theme.colors.blue};
`;
//# sourceMappingURL=career.js.map
