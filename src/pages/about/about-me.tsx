import React, { FC, useState } from "react";
import { Section } from "common/sections/section";
import styled from "styled-components";
import { ColorNames } from "common/styles";
import { animated, useTransition } from "react-spring";
import { ContentBlurb, BlurbType } from "./content-blurbs";

type AboutMeProps = {};

export const AboutMe: FC<AboutMeProps> = ({}) => {
  const [headerType, setHeaderType] = useState<BlurbType>("about");

  const transitionedHeaderItems = useTransition(
    circleItems,
    (item) => item.key,
    {
      trail: 150,
      from: { opacity: 0, transform: "scale(0)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0)" },
    },
  );

  return (
    <FullHeightSection>
      <ContentWrapper>
        <h1>About Me</h1>
        <CircleWrapper>
          {transitionedHeaderItems.map(({ item, key, props }) => (
            <Circle
              size={item.size}
              color={item.color}
              key={key}
              style={props}
              onClick={() => {
                setHeaderType(item.key);
              }}
            >
              <CircleHeaders>{item.title}</CircleHeaders>
            </Circle>
          ))}
        </CircleWrapper>
      </ContentWrapper>
      <ContentBlurb type={headerType} />
    </FullHeightSection>
  );
};

type ContentHeaderItemsT = {
  size: number;
  color: ColorNames;
  title: string;
  key: BlurbType;
};

const circleItems: ContentHeaderItemsT[] = [
  {
    key: "about",
    title: "Who Am I?",
    size: 12,
    color: "light_teal",
  },
  {
    key: "education",
    title: "Education",
    size: 10,
    color: "orange",
  },
  {
    key: "career",
    title: "Career",
    size: 15,
    color: "blue",
  },
];

const FullHeightSection = styled(Section)`
  & > div {
    min-height: calc(100vh - 24rem);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 4rem;

    ${({ theme }) => theme.mediaQuery.laptop} {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    }
  }
`;

const ContentWrapper = styled.div``;

const CircleWrapper = styled.ul`
  display: flex;
  margin-bottom: 8rem;

  & > li:not(:last-child) {
    margin-right: 1.5rem;
  }

  ${({ theme }) => theme.mediaQuery.laptop} {
    margin-bottom: unset;
    margin-right: 4rem;
  }
`;

const Circle = styled(animated.li)<{ size: number; color: ColorNames }>`
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CircleHeaders = styled.h2`
  font-size: 1.7rem;
  margin: 0;
`;
