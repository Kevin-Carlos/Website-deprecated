import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "src/common/styles/colors";

interface HeroProps {
  className?: string;
};

export const Hero: FC<HeroProps> = ({ className }) => {
  return (
    <section style={{ height: "20rem" }} className={className}>
      <Background>
        <h1 style={{ marginTop: 0 }}>Yellow everybody</h1>
      </Background>
    </section>
  )
}

const Background = styled.div`
  height: 100%;
  background-color: ${Colors.Gray};
`;