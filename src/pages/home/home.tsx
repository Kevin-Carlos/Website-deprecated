import React, { FC } from "react";
import styled from 'styled-components';
import { Hero } from './components/hero';
import { Bars } from './components/bars';

type HomepageProps = {};

export const Homepage: FC<HomepageProps> = ({ }) => {
  return (
    <>
      <StyledHero />
      <StyledBars />
    </>
  );
};

const StyledHero = styled(Hero)`
  ${({ theme }) => theme.mediaQuery.laptop} {
    z-index: ${({ theme }) => theme.zIndices.standard};
    position: relative; 
  }
`;

const StyledBars = styled(Bars)`
  /* & > div {
    margin: 0 auto 10rem !important;
  } */

  ${({ theme }) => theme.mediaQuery.laptop} {
    z-index: ${({ theme }) => theme.zIndices.underlay};
    position: relative; 
  }
`;