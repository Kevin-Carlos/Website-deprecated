import React, { FC } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { AboutMeBlurb } from "./content/about-me";
import { CareerBlurb } from "./content/career";
import { EducationBlurb } from "./content/education";

interface ContentBlurbProps {
  type: BlurbType;
}

export type BlurbType = "about" | "education" | "career";

export const ContentBlurb: FC<ContentBlurbProps> = ({ type }) => {
  const spring = useSpring({
    from: { opacity: 0, transform: "translateY(5rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { mass: 1, tension: 280, friction: 60 },
    reset: true,
  });

  return (
    <Content style={spring}>
      {type === "about" && <AboutMeBlurb />}
      {type === "education" && <EducationBlurb />}
      {type === "career" && <CareerBlurb />}
    </Content>
  );
};

const Content = styled(animated.div)`
  padding: 2rem;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`;
