import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "src/common/styles/colors";
import { menuItems } from "./nav-items";
import { LinkButton } from "src/common/button/link-button";
import darklogo from "src/common/assets/logo-dark.png";
import { links } from "src/common/links";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <HeaderWrapper className={className}>
      <ContentWrapper>
        <div>
          <a href={links.home()}>
            <Logo src={darklogo} />
          </a>
        </div>
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
  background-color: ${Colors.Blue};
  height: 4rem;
  padding: 0 1rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 4rem;
`;

const Nav = styled.nav`
  & > a:not(:first-child) {
    margin-left: 2rem;
  }
`;