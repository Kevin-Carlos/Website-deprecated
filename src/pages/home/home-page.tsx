import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "src/common/styles/colors";
import { Hero } from "./hero";
import { Bars } from "./about-me/";

interface HomePageProps { };

export const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <StyledHero />
      <StyledBars />
    </>
  )
}

const StyledHero = styled(Hero)`
  z-index: 10;
  position: relative;
`;

const StyledBars = styled(Bars)`
  z-index: 2;
  position: relative;
`;