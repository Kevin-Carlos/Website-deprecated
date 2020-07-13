import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { };

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledA {...props}>
      {children}
    </StyledA>
  )
}

const StyledA = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${Colors.Black};
  transition: all 0.2s ease-in-out;

  &:visited {
    color: ${Colors.Black};
  }
  
  &:hover {
    color: ${Colors.White};
    transform: scale3d(1.2, 1.2, 1);
  }
`;