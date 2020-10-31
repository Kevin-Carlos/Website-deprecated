import React, {useRef, useState, useEffect} from "../../../web_modules/react.js";
import {lighten} from "../../../web_modules/polished.js";
import {animated, useTransition} from "../../../web_modules/react-spring.js";
import styled from "../../../web_modules/styled-components.js";
import {hiItems} from "./languages.js";
import {Divider} from "../../common/components/index.js";
import {Link} from "../../../web_modules/react-router-dom.js";
import {links as links2} from "../../common/links.js";
export const Hero = ({className}) => {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(hiItems[index].item.length);
  const valueRef = useRef(null);
  const transitions = useTransition(hiItems[index], (hiItems2) => hiItems2.key, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {tension: 60, friction: 10},
    unique: true,
    reset: true
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % hiItems.length);
    }, 1e3 * 3.9);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setLength(valueRef.current?.clientWidth || hiItems[index].item.length);
  }, [index]);
  return /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("span", null, transitions.map(({item: language, props, key}) => {
    return /* @__PURE__ */ React.createElement(animated.span, {
      ref: valueRef,
      key,
      style: {...props, position: "absolute"}
    }, language.item, ",");
  }), /* @__PURE__ */ React.createElement(Text, {
    length: length + 15
  }, "I'm")), /* @__PURE__ */ React.createElement(ColoredName, null, "Kevin Carlos")), /* @__PURE__ */ React.createElement(StyledDivider, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Link, {
    to: links2.aboutMe()
  }, /* @__PURE__ */ React.createElement(AboutMeButton, null, "About Me")), /* @__PURE__ */ React.createElement(Link, {
    to: links2.projects().root()
  }, /* @__PURE__ */ React.createElement(ProjectsButton, null, "Projects"))));
};
const Content = styled.div`
  width: 30rem;
  position: fixed;
  top: 50%;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: ${({theme}) => theme.colors.white};

  ${({theme}) => theme.mediaQuery.tablet} {
    left: 35vw;
  }
`;
const ColoredName = styled.p`
  color: ${({theme}) => lighten(0.15, theme.colors.light_teal)};
`;
const Text = styled.span`
  margin-left: ${({length}) => `${length}px`};
  transition: margin-left 500ms cubic-bezier(0.52, 0.095, 0.27, 0.895);
`;
const StyledDivider = styled(Divider)`
  margin-bottom: 3rem;
`;
const StyledButton = styled.button`
  font-family: "Poppins", sans-serif;
  padding: 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.light_teal};
  color: ${({theme}) => theme.colors.white} !important;
  border-width: 0;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: ${({theme}) => theme.colors.dark_teal};
  }

  &:focus {
    outline: none;
  }
`;
const AboutMeButton = styled(StyledButton)`
  margin-right: 2.5rem;
`;
const ProjectsButton = styled(StyledButton)`
  background-color: ${({theme}) => theme.colors.gray};

  &:hover {
    background-color: ${({theme}) => theme.colors.blue};
  }
`;
