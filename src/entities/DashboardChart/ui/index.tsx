import {
  ChartItem,
  ChartList,
  ChartTitle,
  ChartWrapper,
} from "./DashboardChart.styled";

import { ChartItemInterface } from "pages/dashboard/ui/Daschboard/Daschboard";

interface DashboardChartProps {
  data: ChartItemInterface[];
}

const DashboardChart = ({ data }: DashboardChartProps) => {
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

export default DashboardChart;
