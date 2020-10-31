import React, {useState} from "../../../web_modules/react.js";
import {Section} from "../../common/sections/section.js";
import styled from "../../../web_modules/styled-components.js";
import {animated, useTransition} from "../../../web_modules/react-spring.js";
import {ContentBlurb} from "./content-blurbs.js";
export const AboutMe = ({}) => {
  const [headerType, setHeaderType] = useState("about");
  const transitionedHeaderItems = useTransition(circleItems, (item) => item.key, {
    trail: 150,
    from: {opacity: 0, transform: "scale(0)"},
    enter: {opacity: 1, transform: "scale(1)"},
    leave: {opacity: 0, transform: "scale(0)"}
  });
  return /* @__PURE__ */ React.createElement(FullHeightSection, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    style: {
      textAlign: "center",
      marginRight: "6rem",
      textTransform: "capitalize"
    }
  }, headerType === "about" ? `About Me` : headerType), /* @__PURE__ */ React.createElement(CircleWrapper, null, transitionedHeaderItems.map(({item, key, props}) => {
    console.log("isActive", item.key === headerType);
    return /* @__PURE__ */ React.createElement(Circle, {
      size: item.size,
      color: item.color,
      active: item.key === headerType,
      key,
      style: props,
      onClick: () => setHeaderType(item.key)
    }, /* @__PURE__ */ React.createElement(CircleHeaders, null, item.title));
  }))), /* @__PURE__ */ React.createElement(ContentBlurb, {
    type: headerType
  }));
};
const circleItems = [
  {
    key: "about",
    title: "Who Am I?",
    size: 12,
    color: "light_teal"
  },
  {
    key: "education",
    title: "Education",
    size: 10,
    color: "orange"
  },
  {
    key: "career",
    title: "Career",
    size: 15,
    color: "blue"
  }
];
const FullHeightSection = styled(Section)`
  & > div {
    min-height: calc(100vh - 24rem);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 4rem;

    ${({theme}) => theme.mediaQuery.laptop} {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    }
  }
`;
const CircleWrapper = styled.ul`
  display: flex;
  margin-bottom: 2rem;

  & > li:not(:last-child) {
    margin-right: 1.5rem;
  }

  ${({theme}) => theme.mediaQuery.laptop} {
    margin-bottom: unset;
    margin-right: 4rem;
  }
`;
const Circle = styled(animated.li)`
  height: ${({size}) => `${size}rem`};
  width: ${({size}) => `${size}rem`};
  background-color: ${({theme, color}) => theme.colors[color]};
  border-radius: 50%;
  color: ${({theme}) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-property: scale3d;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;

  ${({active}) => active && `
    transform: scale3d(1.1, 1.1, 1) !important;
  `};
`;
const CircleHeaders = styled.h2`
  font-size: 1.7rem;
  margin: 0;
`;
