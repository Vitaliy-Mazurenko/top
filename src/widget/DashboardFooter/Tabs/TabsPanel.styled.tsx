import styled from "styled-components";

export const FooterWrap = styled.div`
  background: #ddedf4;
  height: 100vh;
  padding-top: 40px;

  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f4f9fb;
    padding-top: 0px;
  }
`;

export const FooterTabsWrap = styled.div`
  display: none;

  @media screen and (max-width: 1080px) {
    display: block;
  }
`;


