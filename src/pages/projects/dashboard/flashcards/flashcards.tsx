import React, { FC, useState } from "react";
import { Section } from "src/common/layout";
import styled from "styled-components";
import { Colors } from "src/common/styles/colors";

interface FlashcardsProps { };

type CardSide = "front" | "back";

export const Flashcards: FC<FlashcardsProps> = () => {
  const [sideOfCard, setSideOfCard] = useState<CardSide>("front");
  const [test] = useState({
    subject: "dog",
    description: "woof",
  })

  return (
    <Section>
      <h1>Flashcards</h1>
      <CardWrapper>
        <Flashcard
          onClick={() =>
            /* Flip card */
            setSideOfCard(
              sideOfCard === "front"
                ? "back"
                : "front"
            )}
          side={sideOfCard}
        >
          <p style={{ userSelect: "none" }}>
            {sideOfCard === "front"
              ? test.subject
              : test.description
            }
          </p>
        </Flashcard>
      </CardWrapper>
    </Section>
  )
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Flashcard = styled.div<{ side: CardSide }>`
    width: 50rem;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${Colors.White};
    border: 1px solid ${Colors.Light_Gray};
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    word-wrap: break-word;
    white-space: initial;
    cursor: pointer;

    ${({ side }) => side === "back" && `
      background-image: linear-gradient(to bottom,
          #ffffff 15%,
          #F94545 16%,
          #ffffff 16%,
          #ffffff 25%,
          #85b2d3 26%,
          #ffffff 26%,
          #ffffff 35%,
          #85b2d3 36%,
          #ffffff 36%,
          #ffffff 45%,
          #85b2d3 46%,
          #ffffff 46%,
          #ffffff 55%,
          #85b2d3 56%,
          #ffffff 56%,
          #ffffff 65%,
          #85b2d3 66%,
          #ffffff 66%,
          #ffffff 75%,
          #85b2d3 76%,
          #ffffff 76%,
          #ffffff 85%,
          #85b2d3 86%,
          #ffffff 86%,
          #ffffff 95%,
          #85b2d3 96%,
          #ffffff 96%
      );
    `};
`;