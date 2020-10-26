import React, { FC } from "react";
import { Section } from "common/sections/section";
import styled from "styled-components";
import { projectItems } from "./project-items";
import { Link } from "react-router-dom";

type ProjectDashboardProps = {};

export const ProjectDashboard: FC<ProjectDashboardProps> = ({ }) => {
  return (
    <StyledSection>
      <div>
        <h1>My Projects</h1>
        <ProjectGrid>
          {projectItems.map(project => (
            <li key={project.name}>
              <CardLink to={project.path}>
                <Card>
                  <h2>{project.name}</h2>
                  {project.description}
                </Card>
              </CardLink>
            </li>
          ))}
        </ProjectGrid>
      </div>
    </StyledSection>
  );
}

const StyledSection = styled(Section)`
  padding: 2rem;
`;

const ProjectGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  justify-self: center;
  ${({ theme }) => theme.mediaQuery.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  }
`;

const CardLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray};
`;

const Card = styled.div`
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.light_gray};
  padding: 2rem;
  border-radius: 0.3rem;
  transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale3d(1.01, 1.01, 1);
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;