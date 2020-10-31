import React from "../../../../web_modules/react.js";
import styled from "../../../../web_modules/styled-components.js";
import {darken, lighten} from "../../../../web_modules/polished.js";
import {colors} from "../../styles/index.js";
export const SubmitButton = ({
  color = "blue",
  name,
  ...props
}) => {
  return /* @__PURE__ */ React.createElement(StyledButton, {
    ...props,
    name,
    type: "submit",
    color,
    isDisabled: props.disabled
  });
};
const StyledButton = styled.button`
  width: 100%;
  padding: 1.25rem 1.5rem;
  background-color: ${({color}) => colors[color]};
  color: ${({theme}) => theme.colors.white};
  border: 0;
  border-radius: 0.2rem;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({isDisabled, theme}) => isDisabled && `
    cursor: not-allowed;
    background-color: ${theme.colors.light_gray};
  `};

  &:hover {
    background-color: ${({color, isDisabled, theme}) => !isDisabled ? lighten(0.03, colors[color]) : theme.colors.light_gray};
    color: ${({theme}) => darken(0.04, theme.colors.white)};
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-0.3rem);
  }

  &:focus {
    outline: none;
  }
`;
