import styled from "styled-components";

export const StyledDaschboard = styled.div`
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 1080px) {
    display: flex;
    padding-right: 5.3%;
  }
`;

export const DashboardContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;

  @media screen and (min-width: 480px) {
    width: 468px;
  }

  @media screen and (min-width: 768px) {
    width: 724px;
  }

  @media screen and (min-width: 1080px) {
    width: auto;
    margin: 0;
    padding: 0;
  }
`;

export const DashboardHeaderWrap =  styled.div`
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const LeftNavBar = styled.aside`
  position: fixed;
  width: 14%;
  min-width: 200px;
  @media screen and (max-width: 1080px) {
    display: none;
  }
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

export const CalendarAndChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;
