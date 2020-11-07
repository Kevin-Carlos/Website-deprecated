import React, {useEffect} from "../../../../web_modules/react.js";
import styled from "../../../../web_modules/styled-components.js";
import {animated, useSpring} from "../../../../web_modules/react-spring.js";
import {menuItems} from "./nav-items.js";
import {LinkButton} from "../../ui-elements/buttons/index.js";
export const HamburgerMenu = ({isOpen, setIsOpen}) => {
  const spring = useSpring({
    from: {opacity: 0, transform: `translateX(100vw)`},
    to: isOpen ? {opacity: 1, transform: `translateX(0vw)`} : {opacity: 0, transform: `translateX(100vw)`}
  });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);
  return /* @__PURE__ */ React.createElement(Menu, {
    style: spring
  }, /* @__PURE__ */ React.createElement(MenuList, null, menuItems.map((i, idx) => /* @__PURE__ */ React.createElement(MenuListItem, {
    key: `${i.name}_${idx}`
  }, /* @__PURE__ */ React.createElement(LinkButton, {
    href: i.path
  }, i.name)))));
};
const Menu = styled(animated.nav)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: ${({theme}) => theme.colors.dark_teal};
  z-index: ${({theme}) => theme.zIndices.overlay};
  transition: width 0.15s ease-in-out;
  ${({theme}) => theme.mediaQuery.tablet} {
    width: 50vw;
  }
`;
const MenuList = styled.ul`
  list-style: none;
  & > li {
    margin-bottom: 2rem;
  }
  & > li:last-child {
    margin-bottom: 0;
  }
`;
const MenuListItem = styled.li`
  & > a {
    font-size: 2.5rem;
  }
`;
//# sourceMappingURL=hamburger-menu.js.map
