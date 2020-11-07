import React from "../../../../web_modules/react.js";
import {Section} from "../../../common/sections/section.js";
import styled from "../../../../web_modules/styled-components.js";
import {projectItems} from "./project-items.js";
import {Link} from "../../../../web_modules/react-router-dom.js";
export const ProjectDashboard = ({}) => {
  return /* @__PURE__ */ React.createElement(StyledSection, {
    isFirst: true
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "My Projects"), /* @__PURE__ */ React.createElement(ProjectGrid, null, projectItems.map((project) => /* @__PURE__ */ React.createElement("li", {
    key: project.name
  }, /* @__PURE__ */ React.createElement(CardLink, {
    to: project.path
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("h2", null, project.name), project.description)))))));
};
const StyledSection = styled(Section)``;
const ProjectGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, 1fr);
  justify-self: center;

  ${({theme}) => theme.mediaQuery.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  }
`;
const CardLink = styled(Link)`
  color: ${({theme}) => theme.colors.gray};
`;
const Card = styled.div`
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({theme}) => theme.colors.dark_teal};
  padding: 2rem;
  border-radius: 0.3rem;
  transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale3d(0.99, 0.99, 1);
    box-shadow: -2px 2px 5px rgba(255, 255, 255, 0.05);
  }

  & a {
    color: ${({theme}) => theme.colors.blue};
  }

  &:last-child {
    color: ${({theme}) => theme.colors.light_gray};
  }
`;
//# sourceMappingURL=project-dashboard.js.map
