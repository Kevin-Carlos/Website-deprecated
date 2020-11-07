import {Divider} from "../../../common/components/index.js";
import React from "../../../../web_modules/react.js";
import styled from "../../../../web_modules/styled-components.js";
export const EducationBlurb = ({}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", {
    style: {marginTop: 0}
  }, "University of Nevada, Reno"), /* @__PURE__ */ React.createElement(Education, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly"
    }
  }, /* @__PURE__ */ React.createElement("p", null, "I graduated in the winter of 2019 from the University of Nevada, Reno with a Bachelors in Computer Science and Engineering and a minor in Mathematics."), /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "2rem"
    }
  }, /* @__PURE__ */ React.createElement(Divider, null)), /* @__PURE__ */ React.createElement("p", null, "My coursework and area of interest was in Machine Learning and A.I. For my Senior project, I worked as the primary front-end developer on a team of three. Our goal was to refactor and rebuild from scratch an in-use production application."))));
};
const Education = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
//# sourceMappingURL=education.js.map
