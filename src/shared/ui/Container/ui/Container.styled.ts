import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;

  @media screen and (min-width: 480px) {
    max-width: 468px;
  }

  @media screen and (min-width: 768px) {
    max-width: 724px;
  }

  @media screen and (min-width: 1080px) {
    max-width: unset;
    width: auto;
    margin: 0;
    padding: 0;
  }
`;
