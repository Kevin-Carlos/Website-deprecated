import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "./header";
import { Footer } from "./footer";


type MenuLayoutProps = { };

export const MenuLayout: FC<MenuLayoutProps> = ({ children }) => {
  return (
    <GridLayout>
      <GridHeader />
      <GridContent>{children}</GridContent>
      <GridFooter />
    </GridLayout>
  )
}

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
  padding: 2rem;
`;

const GridFooter = styled(Footer)`
  grid-area: footer;
  align-self: end;
`;