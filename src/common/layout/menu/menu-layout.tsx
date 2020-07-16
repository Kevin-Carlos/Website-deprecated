import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "./header";
import { Footer } from "./footer";

interface MenuLayoutProps {}

export const MenuLayout: FC<MenuLayoutProps> = ({ children }) => {
  return (
    <GridLayout>
      <GridHeader />
      <GridContent>{children}</GridContent>
      <GridFooter />
    </GridLayout>
  );
};

// ! TODO fix the calc below
const GridLayout = styled.article`
  display: grid;
  grid-template-rows: 4rem 1fr 4rem;
  grid-template-columns: 100%;
  min-height: 100vh;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
`;

const GridHeader = styled(Header)`
  grid-area: header;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const GridFooter = styled(Footer)`
  grid-area: footer;
`;

const GridContent = styled.main`
  grid-area: content;
`;