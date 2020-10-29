import React, { FC } from "react";
import styled from "styled-components";
import { transparentize } from "polished";

interface ContentBlurbProps {
  type: BlurbType;
}

export type BlurbType = "about" | "education" | "career";

export const ContentBlurb: FC<ContentBlurbProps> = ({ type }) => {
  return (
    <Content>
      {type === "career" && (
        <CareerBackground>
          <Description style={{ marginBottom: "1rem" }}>
            I joined the guys at{" "}
            <CycleLink href={`https://cycle.io`} target="_#">
              Cycle.io
            </CycleLink>{" "}
            back in October of 2019 as the 4th member. We are a container
            orchestration platform that's been built from scratch without
            Kubernetes and streamlines DevOps.
          </Description>
          <div>
            <Description>
              I've learned: React, Redux & Redux Sagas, Gatsby, interacting with
              API's, GraphQL, the fundamentals and importance of functional
              programming, Bash scripting, containers, and much more through
              this journey.
            </Description>
          </div>
        </CareerBackground>
      )}

      {type === "education" && (
        <>
          <h1 style={{ marginTop: 0 }}>University of Nevada, Reno</h1>
          <Education>
            {/* <Img src={graduationPic} /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                Degree:
                <TabbedDescription>
                  B.S. in Computer Science and Engineering
                </TabbedDescription>
                <TabbedDescription>Minor in Mathematics</TabbedDescription>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem 0",
                }}
              >
                <Divider />
              </div>

              <p>
                I graduated from the University of Nevada, Reno in the winter of
                2019. My coursework and area of interest was in Machine Learning
                and A.I. For my Senior project, I worked as part of a team of
                three on a production-ready web application built using modern
                technologies.
              </p>
            </div>
          </Education>
        </>
      )}

      {type === "about" && (
        <div>
          <p>
            I was born and raised in Reno, Nevada. I got into games from an
            early age from a neighbor friend who showed me Halo. From then on I
            had an interest in games and computers; Like everyone, I got into
            Computer Science to make games, but in doing so, found a world of
            much more.
            <br />
            <br />
            My focus shifted when I saw what Tesla is doing with ML and AI. I
            wanted to help develop life changing technology that would impact
            the world we live in today. But I've found that there are more ways
            to do that than working on self-driving cars.
          </p>
        </div>
      )}
    </Content>
  );
};

const Content = styled.div`
  padding: 2rem;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mediaQuery.laptop} {
    /* To eliminate content moving around */
    min-width: 40rem;
    min-height: 20rem;
    max-width: 80rem;
    max-height: 20rem;
  }
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  ${({ theme }) => theme.mediaQuery.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

const TabbedDescription = styled.p`
  margin-left: 1rem;
`;

const CareerBackground = styled.div`
  padding: 2rem;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

const CycleLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.orange} 0%,
    ${({ theme }) => transparentize(1, theme.colors.light_gray)} 100%
  );
`;
