import React from "../../../web_modules/react.js";
import styled from "../../../web_modules/styled-components.js";
export const Section = ({className, children, isFirst}) => {
  return /* @__PURE__ */ React.createElement(StyledSection, {
    className,
    style: isFirst ? {paddingTop: "4rem"} : void 0
  }, /* @__PURE__ */ React.createElement(ContentWrapper, null, children));
};
const StyledSection = styled.section`
  position: relative;
  z-index: ${({theme}) => theme.zIndices.standard};
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto 4rem;

  ${({theme}) => theme.mediaQuery.desktop} {
    width: 120rem;
    margin: 0 auto 8rem;
    padding: 0;
  }

  ${({theme}) => theme.mediaQuery.xl_desktop} {
    width: 140rem;
  }
`;
//# sourceMappingURL=section.js.map
