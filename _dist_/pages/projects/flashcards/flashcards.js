import React, {useState, useEffect} from "../../../../web_modules/react.js";
import styled from "../../../../web_modules/styled-components.js";
import {ChevronLeft, ChevronRight} from "../../../common/ui-elements/icons/index.js";
import {Section} from "../../../common/sections/section.js";
import {useRecoilValue} from "../../../../web_modules/recoil.js";
import {flashcardState} from "../../../state/flashcards/index.js";
import {FlashcardInputs} from "./form/flashcard-inputs.js";
export const Flashcards = ({}) => {
  const [index, setIndex] = useState(0);
  const [sideOfCard, setSideOfCard] = useState({
    idx: index,
    side: "front"
  });
  const cards = useRecoilValue(flashcardState);
  const updateIndex = (v) => setIndex(v);
  useEffect(() => {
    setSideOfCard({
      idx: index,
      side: "front"
    });
  }, [index]);
  return /* @__PURE__ */ React.createElement(Section, {
    isFirst: true
  }, /* @__PURE__ */ React.createElement("h1", null, "Flashcards"), /* @__PURE__ */ React.createElement(CardWrapper, null, /* @__PURE__ */ React.createElement(StyledChevronLeft, {
    onClick: () => {
      if (index === 0) {
        return;
      }
      setIndex(index - 1);
    },
    shouldHide: index === 0
  }), /* @__PURE__ */ React.createElement(Flashcard, {
    onClick: () => setSideOfCard({
      idx: index,
      side: sideOfCard.side === "front" ? "back" : "front"
    }),
    side: sideOfCard.side
  }, /* @__PURE__ */ React.createElement("p", {
    style: {userSelect: "none"}
  }, cards.length ? sideOfCard.side === "front" ? cards[index].subject : /* @__PURE__ */ React.createElement(React.Fragment, null, cards[index].description.includes("http") ? /* @__PURE__ */ React.createElement("a", {
    href: cards[index].description,
    target: "_blank"
  }, cards[index].description) : cards[index].description) : [])), /* @__PURE__ */ React.createElement(StyledChevronRight, {
    onClick: () => {
      if (index === cards.length - 1) {
        return;
      }
      setIndex(index + 1);
    },
    shouldHide: index === cards.length - 1 || !cards.length
  })), /* @__PURE__ */ React.createElement(InputWrapper, null, /* @__PURE__ */ React.createElement(FlashcardInputs, {
    cardIndex: index,
    setIndex: updateIndex
  })));
};
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
const Flashcard = styled.div`
  width: 30rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.white};

  border: 1px solid ${({theme}) => theme.colors.light_gray};
  box-shadow: -2px 2px 5px rgba(255, 255, 255, 0.1);
  text-align: center;
  word-wrap: break-word;
  white-space: initial;
  cursor: pointer;

  & a {
    color: ${({theme}) => theme.colors.blue};
  }

  ${({theme}) => theme.mediaQuery.tablet} {
    width: 50rem;
    height: 30rem;
  }

  ${({side}) => side === "back" && `
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
const StyledChevronRight = styled(ChevronRight)`
  ${({shouldHide}) => shouldHide && `
    opacity: 0;
    pointer-events: none;
    cursor: normal;
  `};
`;
const StyledChevronLeft = styled(ChevronLeft)`
  ${({shouldHide}) => shouldHide && `
    opacity: 0;
    pointer-events: none;
    cursor: normal;
  `};
`;
