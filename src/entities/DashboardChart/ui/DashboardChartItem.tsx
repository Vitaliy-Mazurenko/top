import { FC } from "react";

import { ChartItemInterface } from "pages/dashboard";

import {
  DiagramItem,
  DiagramLabel,
  DiagramWrapper,
} from "./DashboardChartItem.styled";

export const DashboardChartItem: FC<ChartItemInterface> = ({
  percentage,
  title,
}) => {
  return (
    <DiagramWrapper>
      <DiagramItem $percentage={percentage} />
      <DiagramLabel>{title}</DiagramLabel>
    </DiagramWrapper>
  );
};
