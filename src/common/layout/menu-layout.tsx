import React, { FC, useContext } from "react";
import styled from "styled-components";
import { Header } from "./header";
import { Footer } from "./footer";
import { MenuContext } from "./menu-context";

type MenuLayoutProps = {};

export const MenuLayout: FC<MenuLayoutProps> = ({ children }) => {
  const menuCtx = useContext(MenuContext);

  return (
    <GridLayout>
      <GridHeader backgroundVisibility={menuCtx.transparentizeHeaderBG} />
      <GridContent>{children}</GridContent>
      <GridFooter hideFooterItems={menuCtx.hideFooterItems} />
    </GridLayout>
  );
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
  /* z-index: ${({ theme }) => theme.zIndices.header}; */
`;

const GridContent = styled.main`
  grid-area: content;
  min-height: calc(100vh - 12rem);
`;

const GridFooter = styled(Footer)`
  grid-area: footer;
  align-self: end;
`;
