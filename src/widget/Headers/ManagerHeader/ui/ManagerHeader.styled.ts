import styled from "styled-components";

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1080px) {
    justify-content: flex-end;
  }
`;
