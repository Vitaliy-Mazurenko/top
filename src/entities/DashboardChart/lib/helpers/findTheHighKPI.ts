import { ChartItemInterface } from "pages/dashboard";

export interface IChartItemWithRating extends ChartItemInterface {
  highKPI: boolean;
}

export const findTheHighKPI = (
  data: ChartItemInterface[]
): IChartItemWithRating[] => {
  const amountOfTheHightestKPI = Math.ceil(data.length / 2);
  const sortedCollection = [...data].sort(
    (a, b) => b.percentage - a.percentage
  );

  const idsOfTheHightestKPIItems = sortedCollection
    .slice(0, amountOfTheHightestKPI)
    .map((i) => i.id);

  return data.map((item) =>
    idsOfTheHightestKPIItems.includes(item.id)
      ? { ...item, highKPI: true }
      : { ...item, highKPI: false }
  );
};
