import React, { FC, useState, useEffect, useRef } from "react";
import HeroSvg from "common/assets/animated/hero.svg";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import { hiItems } from "./languages";
import { Section } from "common/sections/section";

type HeroProps = {
  className?: string;
}

export const Hero: FC<HeroProps> = ({ className }) => {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(hiItems[index].item.length);
  const valueRef = useRef<HTMLSpanElement | null>(null);

  const transitions = useTransition(hiItems[index], hiItems => hiItems.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 60, friction: 10 },
    unique: true,
    reset: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % hiItems.length);
    }, 1000 * 2.9);

    return () => clearInterval(interval)
  }, []);

  useEffect(() => {
    setLength(valueRef.current?.clientWidth || hiItems[index].item.length);
  }, [index])


  return (
    <StyledSection className={className} src={HeroSvg}>
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: "100%"
          }}
        >
          <div>
            <HeroHeader>
              {`</`}
              {transitions.map(({ item: language, props, key }) => {
                return (
                  <animated.span
                    ref={valueRef}
                    key={key}
                    style={{ ...props, position: "absolute", marginLeft: "0.5rem" }}
                  >
                    {language.item}
                  </animated.span>
                )
              })}
              <Text length={length + 10}>
                {`>`}
              </Text>
            </HeroHeader>
          </div>
        </div>
      </Content>
    </StyledSection>
  );
}

const StyledSection = styled(Section) <{ src: string }>`
  height: 50vh;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const HeroHeader = styled.h1`
  max-width: 100vw;
  margin: 0;
`;

const Text = styled.span<{ length: number }>`
  margin-left: ${({ length }) => `${length}px`};
  transition: margin-left 500ms cubic-bezier(0.520, 0.095, 0.270, 0.895);
`;