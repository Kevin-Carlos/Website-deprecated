import React from "../../../../web_modules/react.js";
import styled from "../../../../web_modules/styled-components.js";
import {Divider} from "../divider/index.js";
export const Blockquote = ({children, className}) => {
  return /* @__PURE__ */ React.createElement(BlockQuoteWithDivider, {
    className
  }, /* @__PURE__ */ React.createElement(RotatedDivider, null), /* @__PURE__ */ React.createElement("blockquote", null, children));
};
const BlockQuoteWithDivider = styled.div`
  display: grid;
  grid-template-columns: 2px 1fr;
  margin-bottom: 2rem;
`;
const RotatedDivider = styled(Divider)`
  width: 2px;
  height: 100%;
`;
