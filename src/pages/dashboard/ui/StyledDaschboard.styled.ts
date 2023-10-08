import styled from "styled-components";

import { DashboardNavBar } from "widget/DashboardNavBar";

export const StyledDaschboard = styled.div`
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 1080px) {
    display: flex;
    padding-right: 5.3%;
  }
`;

export const StyledDashboardNavBar = styled(DashboardNavBar)<{
  $visible: boolean;
}>`
  transform: ${(props) =>
    props.$visible ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.25s ease-in-out;
`;

export const Content = styled.div`
  padding-top: 88px;

  @media screen and (min-width: 768px) {
    padding-top: 117px;
  }

  @media screen and (min-width: 1080px) {
    padding-top: unset;
    margin-left: 227px;
    flex-basis: 83.4%;
  }

  @media screen and (min-width: 1450px) {
    margin-left: auto;
  }
`;

export const CalendarAndChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;
