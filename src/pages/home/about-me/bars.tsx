import React, { FC, useState, useEffect, useRef } from "react";
import { animated, useSpring, useChain } from "react-spring";
import styled, { keyframes } from "styled-components";
import { Colors } from "src/common/styles/colors";
import { ContentBlurb, BlurbType } from "./content-blurb";
import { Section } from "src/common/layout";
import { mediaQuery } from "src/common/styles/media";

interface BarsProps {
  className?: string;
};

export const Bars: FC<BarsProps> = ({
  className
}) => {
  // TODO For now I am explicitly setting these during experimentation
  // change to a useSprings or useChain implementation
  // This will clean up a lot of this component
  const [{ y1 }, set1] = useSpring<{ y1: number }>(() => ({ y1: 0 }));
  const [{ y2 }, set2] = useSpring<{ y2: number }>(() => ({ y2: 0 }));
  const [{ y3 }, set3] = useSpring<{ y3: number }>(() => ({ y3: 0 }));


  const [blurb, setBlurb] = useState<BlurbType>("about");
  const [hovered, setHovered] = useState<{ id: BlurbType | null, active: boolean }>({
    id: null,
    active: false
  });

  const springRef1 = useRef(null);
  const spring1 = useSpring({
    ref: springRef1,
    from: { height: "0rem", bottom: "0rem" },
    to: { height: "2.5rem", bottom: "-2.5rem" },
  });
  const springRef2 = useRef(null);
  const spring2 = useSpring({
    ref: springRef2,
    from: { height: "2.5rem", bottom: "-2.5rem", width: "0rem", right: "0rem" },
    to: { height: "2.5rem", bottom: "-2.5rem", width: "50rem", right: "-50rem" },
  });

  useChain(hovered.active ? [springRef1, springRef2] : [springRef2, springRef1]);

  useEffect(() => {
    const timer = hovered.active ? setTimeout(onTimeout, 300) : 0;
    return () => {
      clearTimeout(timer);
    };
  }, [hovered]);

  const onTimeout = () => {
    if (!hovered.id) {
      return;
    }

    setBlurb(hovered.id);
  };

  const onMouseEnterHandler = (v: BlurbType) => {
    setHovered({
      id: v,
      active: true
    });
  }

  const onMouseLeaveHandler = () => {
    setHovered({
      id: null,
      active: false
    });
  }

  return (
    <StyledSection>
      <Wrapper>
        <BarWrapper className={className}>
          <Bar1
            onMouseEnter={() => {
              set1({ y1: 5 });
              onMouseEnterHandler("education");
            }}
            onMouseLeave={() => {
              set1({ y1: 0 });
              onMouseLeaveHandler();
            }}
            style={{ transform: y1.interpolate(v => `translateY(${v}%`) }}
          >
            <VerticalWord>
              Education
              {/**
               * Warrants explanation:
               *  I use the percentage provided by react-spring during the translate
               *  to make the height of the progress bar appear, and use that same
               *  percentage to use as an offset
                */}
              <VerticalProgressLine style={{ ...spring1 }} />
              <HorizontalProgressLine style={{ ...spring2 }} />
              {/* <VerticalProgressLine
                style={{
                  height: y1.interpolate(v => `${(v * 0.5).toPrecision(3)}rem`),
                  bottom: y1.interpolate(v => `-${(v * 0.5) + 0.8}rem`)
                }}
              />
              <HorizontalProgressLine
                style={{
                  width: y1.interpolate(v => `${(v * 15).toPrecision(3)}rem`),
                  right: y1.interpolate(v => `-${(v * 15)}rem`)
                }}
              /> */}
            </VerticalWord>
          </Bar1>
          <Bar2
            onMouseEnter={() => {
              set2({ y2: 5 });
              onMouseEnterHandler("about");
            }}
            onMouseLeave={() => {
              set2({ y2: 0 });
              onMouseLeaveHandler();
            }}
            style={{ transform: y2.interpolate(v => `translateY(${v}%`) }}
          >
            <VerticalWord>
              About
              <VerticalProgressLine
                style={{
                  height: y2.interpolate(v => `${(v * 0.5).toPrecision(3)}rem`),
                  bottom: y2.interpolate(v => `-${(v * 0.5) + 0.8}rem`)
                }}
              />
              <HorizontalProgressLine
                style={{
                  width: y2.interpolate(v => `${(v * 14).toPrecision(3)}rem`),
                  right: y2.interpolate(v => `-${(v * 14)}rem`)
                }}
              />
            </VerticalWord>
          </Bar2>
          <Bar3
            onMouseEnter={() => {
              set3({ y3: 5 });
              onMouseEnterHandler("about");
            }}
            onMouseLeave={() => {
              set3({ y3: 0 });
              onMouseLeaveHandler();
            }}
            style={{ transform: y3.interpolate(v => `translateY(${v}%`) }}
          >
            <VerticalWord>
              About
              <VerticalProgressLine
                style={{
                  height: y3.interpolate(v => `${(v * 0.5).toPrecision(3)}rem`),
                  bottom: y3.interpolate(v => `-${(v * 0.5) + 0.8}rem`)
                }}
              />
              <HorizontalProgressLine
                style={{
                  width: y3.interpolate(v => `${(v * 13).toPrecision(3)}rem`),
                  right: y3.interpolate(v => `-${(v * 13)}rem`)
                }}
              />
            </VerticalWord>
          </Bar3>
        </BarWrapper>

        <ContentBlurb type={blurb} />
      </Wrapper>
    </StyledSection>
  )
}

const StyledSection = styled(Section)``;

const Wrapper = styled.div`
  ${mediaQuery.tablet} {
    display: flex;
    justify-content: space-evenly;
  }
`;

const BarWrapper = styled.div`
  display: flex;
  margin-bottom: 7rem;

  & > div:first-child {
    margin-top: -2rem;
  }

  & > div:nth-child(2) {
    margin-top: -3rem;
  }

  & > div:last-child {
    margin-top: -4rem;
  }

  ${mediaQuery.tablet} {
    margin-bottom: 0;
  }
`;

const Bar = styled(animated.div)`
  background-color: ${Colors.Blue};
  height: 30rem;
  width: 3rem;
  display: flex;
  margin-right: 4rem;
  border-radius: 0.2rem;


  ${mediaQuery.tablet} {
    margin-right: 2rem;
  }
`;

const Bar1 = styled(Bar)``;
const Bar2 = styled(Bar)``;
const Bar3 = styled(Bar)``;

const VerticalWord = styled.span`
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;
`;

const VerticalProgressLine = styled(animated.div)`
  border-left: 3px solid ${Colors.Light_Gray};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;


const HorizontalProgressLine = styled(animated.div)`
  border-bottom: 3px solid ${Colors.Light_Gray};
  position: absolute;
  bottom: -3.3rem;
  left: 1.5rem;
`;
