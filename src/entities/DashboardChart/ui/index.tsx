import {
  IChartItemWithRating,
  findTheHighKPI,
} from "../lib/helpers/findTheHighKPI";
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
  const filteredData: IChartItemWithRating[] = findTheHighKPI(data);

  return (
    <ChartWrapper>
      <ChartTitle>Порівняння Kpi</ChartTitle>
      <ChartList>
        {filteredData.map(({ percentage, id, highKPI }) => (
          <ChartItem
            $height={percentage}
            style={highKPI ? { backgroundColor: "#FF8C33" } : {}}
            key={id}
          ></ChartItem>
        ))}
      </ChartList>
    </ChartWrapper>
  );
};

export default DashboardChart;
