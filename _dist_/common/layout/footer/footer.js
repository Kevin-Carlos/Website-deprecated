import React from "../../../../web_modules/react.js";
import styled from "../../../../web_modules/styled-components.js";
import stackOverflow from "../../assets/icons/brands/so-icon.svg.proxy.js";
import github2 from "../../assets/icons/brands/github.png.proxy.js";
import linkedIn from "../../assets/icons/brands/linkedin.png.proxy.js";
import {links as links2} from "../../links.js";
export const Footer = ({className, hideFooterItems}) => {
  return /* @__PURE__ */ React.createElement(FooterWrapper, {
    className
  }, hideFooterItems === "show" ? /* @__PURE__ */ React.createElement(SocialRow, {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    }
  }, /* @__PURE__ */ React.createElement(IconWrapper, {
    href: links2.linkedIn(),
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    src: linkedIn
  })), /* @__PURE__ */ React.createElement(IconWrapper, {
    href: links2.stackoverflow(),
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    src: stackOverflow
  })), /* @__PURE__ */ React.createElement(IconWrapper, {
    href: links2.github(),
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    src: github2
  }))) : null);
};
const FooterWrapper = styled.footer`
  background-color: ${({theme}) => theme.colors.black};
  height: 100%;
`;
const SocialRow = styled.div`
  z-index: ${({theme}) => theme.zIndices.standard};

  & > a {
    margin-right: 2rem;
  }

  & > a:last-child {
    margin-right: 0;
  }
`;
const IconWrapper = styled.a`
  max-width: 3.5rem;
  cursor: pointer;
`;
const Icon = styled.img`
  max-height: 3.2rem;
  max-width: 3.2rem;
  height: 100%;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }
`;
