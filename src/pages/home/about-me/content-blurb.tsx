import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "src/common/styles/colors";
import graduationPic from "src/common/assets/graduation.jpeg";

interface ContentBlurbProps {
  type: BlurbType;
};

export type BlurbType = "about" | "education" | "career";

export const ContentBlurb: FC<ContentBlurbProps> = ({
  type,
}) => {
  return (
    <ContentWrapper>
      <Content>

        {type === "career" && (
          <CareerBackground>
            <Description style={{ marginBottom: "1rem" }}>
              I joined the guys at{" "}
              <CycleLink href={`https://cycle.io`} target="_#">
                Cycle.io
              </CycleLink> back in October of 2019 as the 4th member. Since joining, my task
              has been to constantly learn/adapt to new challenges to create an amazing product that people
              want to use.
            </Description>
            <div>
              <Description>
                I've learned: React, Redux & Redux Sagas, Gatsby, interacting with API's, the fundamentals and importance
                of functional programming, Bash scripting, containers, and much more through this journey.
              </Description>
            </div>
          </CareerBackground>
        )}

        {type === "education" && (
          <Education>
            <Img src={graduationPic} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                Degree:
                <TabbedDescription>
                  Bachelors in Computer Science and Engineering
                </TabbedDescription>
                <TabbedDescription>
                  Minor in Mathematics
                </TabbedDescription>
              </div>
              <WavyDescription>
                I graduated from the University of Nevada, Reno in the winter of 2019.
                My coursework and area of interest was in Machine Learning and A.I. For my
                Senior project, I worked as part of a team of three on a production-ready 
                web application built using modern technologies.
              </WavyDescription>
            </div>
          </Education>
        )}

        {type === "about" && (
          <div>
            Grew up in Reno, etc etc.
          </div>
        )}

      </Content>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 2rem 0;
`;

const Content = styled.div`
  padding: 2rem;
  position: relative;
  width: 100%;

  /* To eliminate content moving around */
  min-width: 40rem;
  min-height: 20rem;
  max-width: 80rem;
  max-height: 20rem;
`;

const Education = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;

const TabbedDescription = styled.p`
  margin-left: 1rem;
`;

const Img = styled.img`
  max-width: 20rem;
  margin-right: 2rem;
`;

const CareerBackground = styled.div`
  padding: 2rem;
  border-radius: 0.2rem;
  background-color: ${Colors.Black};
`;

const CycleLink = styled.a`
  color: ${Colors.Blue};
`;

const Description = styled.p`
  color: ${Colors.White};
`;

const WavyDescription = styled.p`
  width: 75%;
`;