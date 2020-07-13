import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "src/common/styles/colors";
import graduationPic from "src/common/assets/graduation.jpeg";

interface ContentBlurbProps {
  type: BlurbType;
};

export type BlurbType = "about" | "education";

export const ContentBlurb: FC<ContentBlurbProps> = ({
  type,
}) => {
  return (
    <ContentWrapper>
      <Content>
        {type === "education" && (
          <Education>
            {/* <Img src={graduationPic} /> */}
            <p>
              I graduated from the University of Nevada, Reno in the winter of 2019.
            </p>
            <div>
              Degree:
                <TabbedDescription>
                Bachelors Degree in Computer Science and Engineering
                </TabbedDescription>
                <TabbedDescription>
                Minor in Mathematics
                </TabbedDescription>
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
  margin: 2rem 0;
`;

const Content = styled.div`
  padding: 2rem;
  position: relative;

  /* To eliminate content moving around */
  width: 40rem;
  height: 20rem;
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const TabbedDescription = styled.p`
  margin-left: 1rem;
`;

const Img = styled.img`
  max-width: 20rem;
`;

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const Test1 = styled.svg`
  transform: rotateX(180deg);
`;

const Test = styled.polyline`
  stroke-dasharray: 1250;
  stroke-dashoffset: 1250;
  animation: ${draw} 1.5s linear forwards;
  animation-play-state: paused;

  ${TabbedDescription}:hover {
    animation-play-state: running;
  }
`;