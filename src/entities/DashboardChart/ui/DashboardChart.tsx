import { ChartItemInterface } from "pages/dashboard";

import {
  ChartItem,
  ChartList,
  ChartTitle,
  ChartWrapper,
} from "./DashboardChart.styled";
import { DashboardChartItem } from "./DashboardChartItem";

interface DashboardChartProps {
  data: ChartItemInterface[];
  className?: string;
}

export const DashboardChart = ({ data, className }: DashboardChartProps) => {
  return (
    <ChartWrapper className={className}>
      <ChartTitle>Порівняння Kpi</ChartTitle>
      <ChartList>
        {data.map((item) => (
          <ChartItem key={item.id}>
            <DashboardChartItem {...item} />
          </ChartItem>
        ))}
      </ChartList>
    </ChartWrapper>
  );
};
