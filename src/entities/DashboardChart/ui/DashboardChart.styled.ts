import styled from "styled-components";

export const ChartWrapper = styled.div`
  border-radius: 8px;
  background: #f4f9fb;
  padding-bottom: 15px;

  @media screen and (min-width: 480px) {
    padding-bottom: 21px;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 25px;
  }
  @media screen and (min-width: 1080px) {
    padding-bottom: 0;
  }
`;

export const ChartTitle = styled.h3`
  padding-top: 12px;
  padding-left: 12px;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  text-transform: uppercase;

  @media screen and (min-width: 480px) {
    margin-bottom: 26px;
    padding-top: 20px;
    padding-left: 20px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 57px;
  }
  @media screen and (min-width: 1080px) {
    margin-bottom: 28px;
    font-weight: 400;
  }
`;

export const ChartList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 13px;
  height: 117px;
  padding: 0 17px;

  @media screen and (min-width: 480px) {
    height: 159px;
    padding: 0 32.5px;
  }
  @media screen and (min-width: 768px) {
    height: 183px;
    padding: 0 14.5px;
    gap: 10px;
  }
  @media screen and (min-width: 1080px) {
    height: 237px;
    padding: 0;
    gap: 32px;
  }
`;

export const ChartItem = styled.li`
  height: 100%;
  flex-grow: 1;
`;
