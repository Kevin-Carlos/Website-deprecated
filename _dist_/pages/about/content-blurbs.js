import React from "../../../web_modules/react.js";
import {animated, useSpring} from "../../../web_modules/react-spring.js";
import styled from "../../../web_modules/styled-components.js";
import {AboutMeBlurb} from "./content/about-me.js";
import {CareerBlurb} from "./content/career.js";
import {EducationBlurb} from "./content/education.js";
export const ContentBlurb = ({type}) => {
  const spring = useSpring({
    from: {opacity: 0, transform: "translateY(5rem)"},
    to: {opacity: 1, transform: "translateY(0)"},
    config: {mass: 1, tension: 280, friction: 60},
    reset: true
  });
  return /* @__PURE__ */ React.createElement(Content, {
    style: spring
  }, type === "about" && /* @__PURE__ */ React.createElement(AboutMeBlurb, null), type === "education" && /* @__PURE__ */ React.createElement(EducationBlurb, null), type === "career" && /* @__PURE__ */ React.createElement(CareerBlurb, null));
};
const Content = styled(animated.div)`
  padding: 2rem;
  position: relative;
  width: 100%;
  color: ${({theme}) => theme.colors.white};
`;
