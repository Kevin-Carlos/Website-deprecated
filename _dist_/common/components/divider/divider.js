import {transparentize} from "../../../../web_modules/polished.js";
import styled from "../../../../web_modules/styled-components.js";
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: radial-gradient(
    circle,
    ${({theme}) => theme.colors.orange} 0%,
    ${({theme}) => transparentize(1, theme.colors.light_gray)} 100%
  );
`;
