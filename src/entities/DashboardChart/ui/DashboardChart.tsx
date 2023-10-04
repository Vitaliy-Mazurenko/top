import { ChartItemInterface } from "pages/dashboard";

import {
  ChartItem,
  ChartList,
  ChartTitle,
  ChartWrapper,
} from "./DashboardChart.styled";

interface DashboardChartProps {
  data: ChartItemInterface[];
}

export const DashboardChart = ({ data }: DashboardChartProps) => {
  return (
    <ChartWrapper>
      <ChartTitle>Порівняння Kpi</ChartTitle>
      <ChartList>
        {data.map(({ percentage, id }) => (
          <ChartItem
            $height={percentage}
            style={percentage > 50 ? { backgroundColor: "#FF8C33" } : {}}
            key={id}
          ></ChartItem>
        ))}
      </ChartList>
    </ChartWrapper>
  );
};
