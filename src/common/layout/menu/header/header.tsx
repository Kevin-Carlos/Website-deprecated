import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "src/common/styles/colors";
import { menuItems } from "./nav-items";
import { LinkButton } from "src/common/ui-elements/button/link-button";
import darklogo from "src/common/assets/logo-dark.png";
import { links } from "src/common/links";
import { transparentize } from "polished";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <HeaderWrapper className={className}>
      <ContentWrapper>
        <LogoWrapper>
          <a href={links.home()}>
            <Circle />
            <Logo src={darklogo} />
          </a>
        </LogoWrapper>
        <Nav>
          {menuItems.map(i => (
            <LinkButton href={i.path} key={i.name}>
              {i.name}
            </LinkButton>
          ))}
        </Nav>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: ${Colors.Black};
  height: 6rem;
  padding: 0 1rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Circle = styled.div`
  background-color: ${Colors.White};
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  position: absolute;
  border-width: 0;
  
  transition: all 0.2s ease-in-out;
`;

const Logo = styled.img`
  position: absolute;
  width: 4rem;
  /* background-color: ${Colors.White}; */
  /* border-radius: 100%; */
`;

const LogoWrapper = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;

  &:hover {
    ${Circle} {
      background-color: ${transparentize(0.2, Colors.White)};
      border: 1px solid ${Colors.Orange};
    }
  }
`;

const Nav = styled.nav`
  & > a:not(:first-child) {
    margin-left: 2rem;
  }
`;