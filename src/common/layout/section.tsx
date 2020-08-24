import React, { FC } from "react";
import styled from "styled-components";
import { mediaQuery } from "../styles/media";

interface SectionProps {
  className?: string;
};

export const Section: FC<SectionProps> = ({
  className,
  children,
}) => {
  return (
    <StyledSection className={className}>
      <Content>
        {children}
      </Content>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  ${mediaQuery.laptop} {
    width: 120rem;
  }
`;

const Content = styled.div`
  margin: 0 auto;
`;