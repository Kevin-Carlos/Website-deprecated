import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "src/common/styles";
import { darken } from "polished";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { };

export const Input: FC<InputProps> = ({
  ...props
}) => {
  return (
    <StyledInput
      type="text"
      {...props}
    />
  )
}

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  appearance: none;
  border: 1.7px solid ${Colors.Light_Gray};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    border-color: ${darken(0.1, Colors.Light_Gray)};
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    border-color: ${Colors.Blue};
  }
`;