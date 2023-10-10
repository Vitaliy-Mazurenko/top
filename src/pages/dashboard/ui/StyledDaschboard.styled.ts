import styled from "styled-components";

import { DashboardNavBar } from "widget/DashboardNavBar";
import { Calendar } from "features/Calendar/Calendar";
import { DashboardChart } from "entities/DashboardChart";

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

export const RightSideContent = styled.div`
  @media screen and (min-width: 1080px) {
    margin-left: 227px;
    flex-basis: 83.4%;
  }

  @media screen and (min-width: 1450px) {
    margin-left: auto;
  }
`;

export const Content = styled.div`
  padding-top: 88px;

  @media screen and (min-width: 768px) {
    padding-top: 117px;
  }

  @media screen and (min-width: 1080px) {
    padding-top: unset;
  }
`;

export const CalendarAndChartWrapper = styled.div`
  margin: 24px 0;

  @media screen and (min-width: 480px) {
    margin: 15px 0 24px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    margin: 30px 0 32px;
  }

  @media screen and (min-width: 1080px) {
    justify-content: space-between;
    margin: 40px 0;
  }
`;

export const StyledCalendar = styled(Calendar)`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    flex: 1;
  }

  @media screen and (min-width: 1080px) {
    flex-basis: 28.3%;
  }
`;

export const StyledDashboardChart = styled(DashboardChart)`
  @media screen and (min-width: 768px) {
    flex: 1;
  }

  @media screen and (min-width: 1080px) {
    flex-basis: 64.8%;
  }
`;

export const DashboardHeaderDesktop =  styled.div`
  @media screen and (max-width: 1080px) {
    visibility: hidden;
  }
`;

