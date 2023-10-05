import styled from "styled-components";

export const StyledDaschboard = styled.div`
  max-height: 100%;
  display: flex;
  padding-right: 5.3%;
  gap: 27px;
  justify-content: space-between;
  font-family: "Inter", sans-serif;
`;

export const LeftNavBar = styled.aside`
  position: fixed;
  width: 14%;
  min-width: 200px;
`;

export const RightSideContent = styled.div`
  margin-left: 227px;
  flex-basis: 83.4%;

  @media screen and (min-width: 1450px) {
    margin-left: auto;
  }
`;

export const CalendarAndChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;
