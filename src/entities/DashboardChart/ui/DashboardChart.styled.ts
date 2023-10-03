import styled from "styled-components";

export const ChartWrapper = styled.div`
  flex-basis: 64.8%;
  border-radius: 8px;
  background: #f4f9fb;
`;

export const ChartTitle = styled.h3`
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 28px;
  font-size: 14px;
  line-height: 1.43;
  text-transform: uppercase;
`;

export const ChartList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  height: 237px;
`;

export const ChartItem = styled.li<{ $height: number }>`
  flex-grow: 1;
  height: ${(props) => `${props.$height}%`};
  border-radius: 8px;
  background: #c6e1ec;
`;
