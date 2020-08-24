import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { };

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledA {...props}>
      <Underline />
      {children}
    </StyledA>
  )
}

const Underline = styled.hr`
  color: ${Colors.Orange};
  border-width: 0px;
  position: absolute;
  bottom: -1rem;
  left: 0;
  width: 0;
  transition: all 0.2s ease-in-out;
`;

const StyledA = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${Colors.White};
  transition: all 0.2s ease-in-out;
  position: relative;

  &:visited {
    color: ${Colors.White};
  }
  
  &:hover {
    color: ${Colors.White};
    transform: scale(1.2);

    ${Underline} {
      border-width: 1px;
      width: 2rem;
    };
  }
`;
