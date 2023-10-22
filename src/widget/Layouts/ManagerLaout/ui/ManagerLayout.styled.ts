import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 1080px) {
    display: flex;
    padding-right: 5.3%;
  }
`;

export const RightSideContent = styled.div`
  padding-bottom: 20px;

  @media screen and (min-width: 480px) {
    padding-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 35px;
  }

  @media screen and (min-width: 1080px) {
    margin-left: 227px;
    flex-basis: 83.4%;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1450px) {
    margin-left: auto;
  }
`;

export const Content = styled.section`
  padding-top: 88px;

  @media screen and (min-width: 768px) {
    padding-top: 117px;
  }

  @media screen and (min-width: 1080px) {
    padding-top: unset;
  }
`;
