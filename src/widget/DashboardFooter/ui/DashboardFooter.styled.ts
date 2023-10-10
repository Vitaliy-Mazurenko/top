import styled from "styled-components";

export const StyledFooter = styled.footer`
  z-index: 2;
  width: 100%;

  @media screen and (max-width: 1080px) {
    position: fixed;
    bottom: 0px;
    height: 84px;
    padding: 40px 10px;
    background-color: #f4f9fb;
  }
`;

export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1080px) {
    justify-content: flex-end;
  }
`;



