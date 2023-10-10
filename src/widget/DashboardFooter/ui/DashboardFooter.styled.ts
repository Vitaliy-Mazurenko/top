import styled from "styled-components";

export const StyledFooter = styled.footer`
  z-index: 2;
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 82px;
  background-color: #f4f9fb;

  @media screen and (min-width: 480px) {
    height: 80px;
  }

  @media screen and (min-width: 768px) {
    height: 83px;
  }

  @media screen and (min-width: 1080px) {
    display: none;
  }
`;

export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1080px) {
    display: none;
  }
`;
