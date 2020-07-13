import React, { FC } from "react";
import { Section } from "src/common/layout";
import styled from "styled-components";
import { Colors } from "src/common/styles/colors";
import { projectItems } from "./project-items";

interface ProjectDashboardProps { };

export const ProjectDashboard: FC<ProjectDashboardProps> = () => {
  return (
    <Section>
      <HeaderWrapper>
        <h1>Projects</h1>
        <Grid>
          {projectItems.map(i => (
            <CardLink href={i.path}>
              <Card>
                <h3>{i.name}</h3>
                <p>
                  {i.description}
                </p>
              </Card>
            </CardLink>
          ))}
        </Grid>
      </HeaderWrapper>
    </Section>
  )
}

const HeaderWrapper = styled.div`
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
`;

const CardLink = styled.a``;

const Card = styled.div`
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid ${Colors.Light_Gray};
  padding: 2rem;
  border-radius: 0.3rem;
  transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale3d(1.01, 1.01, 1);
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;