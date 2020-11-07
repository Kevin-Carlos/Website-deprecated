import React, {useContext} from "../../../web_modules/react.js";
import styled from "../../../web_modules/styled-components.js";
import {Header} from "./header/index.js";
import {Footer} from "./footer/index.js";
import {MenuContext} from "./menu-context.js";
export const MenuLayout = ({children}) => {
  const menuCtx = useContext(MenuContext);
  return /* @__PURE__ */ React.createElement(GridLayout, null, /* @__PURE__ */ React.createElement(GridHeader, {
    backgroundVisibility: menuCtx.transparentizeHeaderBG
  }), /* @__PURE__ */ React.createElement(GridContent, null, children), /* @__PURE__ */ React.createElement(GridFooter, {
    hideFooterItems: menuCtx.hideFooterItems
  }));
};
const GridLayout = styled.article`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;
const GridHeader = styled(Header)`
  grid-area: header;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
`;
const GridContent = styled.main`
  grid-area: content;
  min-height: calc(100vh - 12rem);
  background-color: ${({theme}) => theme.colors.black};

  /* Skewed transparent div  */
  &::after {
    content: "";
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100%;
    bottom: -70rem;
    transform: skewY(-12deg);
    pointer-events: none;
    z-index: ${({theme}) => theme.zIndices.underlay};

    ${({theme}) => theme.mediaQuery.tablet} {
      bottom: -85vh;
    }
  }
`;
const GridFooter = styled(Footer)`
  grid-area: footer;
  align-self: end;
`;
//# sourceMappingURL=menu-layout.js.map
