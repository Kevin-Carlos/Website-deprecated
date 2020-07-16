import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "src/common/styles/colors";

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <FooterWrapper className={className}>
      <div>
        Something here
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${Colors.Black};
`;
