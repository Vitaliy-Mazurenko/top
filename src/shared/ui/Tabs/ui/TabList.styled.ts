import styled from "styled-components";

export const TabsWrap = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    & li#calendar {
      display: none;
    }
  }
`;
