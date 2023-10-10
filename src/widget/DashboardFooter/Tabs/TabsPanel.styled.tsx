import styled from "styled-components";

export const FooterWrap = styled.div`
  background: #ddedf4;
  padding-top: 40px;
  display: none;

  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: space-between;
    background-color: #f4f9fb;
    padding-top: 0px;
    margin: 0 auto;
  }
`;

export const FooterTabsWrap = styled.div`
    display: flex;
    justify-content: space-between;

  @media screen and (max-width: 1080px) {
    /* display: block; */
  }
`;


