import React, { FC } from "react";
import styled from "styled-components";
import { ColorNames, Colors } from "src/common/styles";
import { lighten } from "polished";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  color?: ColorNames;
};

export const SubmitButton: FC<SubmitButtonProps> = ({
  color = "Blue",
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      type="submit"
      color={color}
      isDisabled={props.disabled}
    />
  )
}

const StyledButton = styled.button<{ color: ColorNames, isDisabled?: boolean }>`
  width: 100%;
  margin: 1rem;
  padding: 1.25rem 1.5rem;
  background-color: ${({ color }) => Colors[color]};
  color: ${Colors.Black};
  border: 0;
  border-radius: 0.2rem;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ isDisabled }) => isDisabled && `
    cursor: not-allowed;
    background-color: ${Colors.Light_Gray};
  `};

  &:hover {
    background-color: ${({ color, isDisabled }) => 
      !isDisabled 
        ? lighten(0.03, Colors[color])
        : Colors.Light_Gray
    };
    color: ${lighten(0.07, Colors.Black)};
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-0.3rem);
  }

  &:focus {
    outline: none;
  }
`;