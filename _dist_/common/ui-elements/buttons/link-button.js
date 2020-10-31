import React from "../../../../web_modules/react.js";
import styled from "../../../../web_modules/styled-components.js";
import {Link} from "../../../../web_modules/react-router-dom.js";
export const LinkButton = ({children, ...props}) => {
  if (props.href?.includes("http")) {
    return /* @__PURE__ */ React.createElement(StyledLink, {
      ...props,
      href: props.href || "",
      target: props.href?.includes("http") ? "_blank" : void 0,
      as: "a"
    }, /* @__PURE__ */ React.createElement(Underline, null), children);
  }
  return /* @__PURE__ */ React.createElement(StyledLink, {
    ...props,
    to: props.href || ""
  }, /* @__PURE__ */ React.createElement(Underline, null), children);
};
const Underline = styled.hr`
  color: ${({theme}) => theme.colors.orange} !important;
  border-width: 0px;
  position: absolute;
  bottom: -1rem;
  left: 0;
  width: 0;
  transition: all 0.2s ease-in-out;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: ${({theme}) => theme.colors.white};
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.2);
    ${Underline} {
      border-width: 1px;
      width: 2rem;
      color: ${({theme}) => theme.colors.orange} !important;
    }
  }
`;
