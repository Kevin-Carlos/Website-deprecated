import React, {useState, useRef} from "../../../../web_modules/react.js";
import styled from "../../../../web_modules/styled-components.js";
import {menuItems} from "./nav-items.js";
import darkLogo from "../../assets/images/logo-dark.png.proxy.js";
import {transparentize} from "../../../../web_modules/polished.js";
import {links as links2} from "../../links.js";
import {HamburgerIcon} from "./hamburger-icon.js";
import {HamburgerMenu} from "./hamburger-menu.js";
import {useClickOutside} from "../../hooks/index.js";
import {LinkButton} from "../../ui-elements/buttons/index.js";
import {Link} from "../../../../web_modules/react-router-dom.js";
export const Header = ({
  className,
  backgroundVisibility
}) => {
  const [mobileNav, toggleMobileNav] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => toggleMobileNav(false));
  return /* @__PURE__ */ React.createElement(HeaderWrapper, {
    className,
    backgroundVisibility
  }, /* @__PURE__ */ React.createElement(ContentWrapper, null, /* @__PURE__ */ React.createElement(LogoWrapper, null, /* @__PURE__ */ React.createElement(Link, {
    to: links2.home()
  }, /* @__PURE__ */ React.createElement(Circle, null), /* @__PURE__ */ React.createElement(Logo, {
    src: darkLogo
  }))), /* @__PURE__ */ React.createElement(Nav, null, menuItems.map((i) => /* @__PURE__ */ React.createElement(LinkButton, {
    href: i.path,
    key: i.name
  }, i.name))), /* @__PURE__ */ React.createElement(HamburgerMenuWrapper, {
    ref: menuRef
  }, /* @__PURE__ */ React.createElement(HamburgerIcon, {
    isOpen: mobileNav,
    setIsOpen: toggleMobileNav
  }), /* @__PURE__ */ React.createElement(HamburgerMenu, {
    isOpen: mobileNav,
    setIsOpen: toggleMobileNav
  }))));
};
const HeaderWrapper = styled.header`
  background-color: ${({backgroundVisibility, theme}) => backgroundVisibility === "show" ? theme.colors.black : `transparent`};
  height: 6rem;
  padding: 0 1rem;
  z-index: ${({theme}) => theme.zIndices.overlay};
`;
const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem 0 2rem;

  /* ${({theme}) => theme.mediaQuery.desktop} {
    max-width: 120rem;
  }

  ${({theme}) => theme.mediaQuery.xl_desktop} {
    max-width: 140rem;
  } */
`;
const Circle = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  position: absolute;
  border-width: 0;

  transition: all 0.2s ease-in-out;
`;
const Logo = styled.img`
  position: absolute;
  width: 4rem;
`;
const LogoWrapper = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;
  &:hover {
    ${Circle} {
      background-color: ${({theme}) => transparentize(0.2, theme.colors.white)};
    }
  }
`;
const Nav = styled.nav`
  display: none;
  font-size: 1.5rem;

  ${({theme}) => theme.mediaQuery.laptop} {
    display: inherit;
    & > a:not(:first-child) {
      margin-left: 2rem;
    }
  }
`;
const HamburgerMenuWrapper = styled.div`
  z-index: ${({theme}) => theme.zIndices.overlay - 1};

  ${({theme}) => theme.mediaQuery.laptop} {
    display: none;
  }
`;
