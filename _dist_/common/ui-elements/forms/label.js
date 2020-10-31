import React from "../../../../web_modules/react.js";
import styled from "../../../../web_modules/styled-components.js";
export const Label = ({className, label, children}) => {
  return /* @__PURE__ */ React.createElement(LabelWrapper, {
    className
  }, /* @__PURE__ */ React.createElement(HTMLLabel, {
    style: {width: "100%"},
    htmlFor: label
  }, label), children);
};
const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const HTMLLabel = styled.label`
  padding-bottom: 1rem;
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${({theme}) => theme.colors.light_gray};
`;
