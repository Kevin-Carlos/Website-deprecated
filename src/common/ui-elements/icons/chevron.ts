import styled from "styled-components";
import { Colors } from "../../styles/colors";
import { transparentize } from "polished";

const Chevron = styled.div`
  display: inline-block;
  border-right: .4rem solid ${transparentize(0.3, Colors.Light_Teal)};
  border-bottom: .4rem solid ${Colors.Light_Teal};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  &:hover {
    border-right: .4rem solid ${transparentize(0.3, Colors.Dark_Teal)};
    border-bottom: .4rem solid ${Colors.Dark_Teal};
  }
`;

export const ChevronLeft = styled(Chevron)`
  transform: rotate(-225deg);
`;

export const ChevronRight = styled(Chevron)`
  transform: rotate(-45deg);
`;