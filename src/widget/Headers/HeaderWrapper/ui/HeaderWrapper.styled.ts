import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #f4f9fb;

  @media screen and (min-width: 1080px) {
    background-color: transparent;
  }
`;

export const DesktopHeader = styled(StyledHeader)`
  display: none;

  @media screen and (min-width: 1080px) {
    display: block;
    margin-bottom: 40px;
    padding: 20px 0;
  }
`;

export const MobileHeader = styled(StyledHeader)`
  position: fixed;
  z-index: 100;
  width: 100%;

  @media screen and (min-width: 1080px) {
    display: none;
  }
`;
