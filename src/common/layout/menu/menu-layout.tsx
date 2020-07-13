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
const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 4rem 100% 4rem;
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
  height: 4rem;
`;

const GridContent = styled.main`
  grid-area: content;
`;