import { FC } from "react";

import { Tab } from "./Tab";
import { TabsWrap } from "./TabList.styled";

import { ITabInfo } from "../types/Tab";

interface ITabListProps {
  tabsInfo: ITabInfo[];
  className?: string;
}

export const TabList: FC<ITabListProps> = ({ tabsInfo, className }) => {
  return (
    <TabsWrap className={className}>
      {tabsInfo.map((tab) => (
        <li key={tab.text}>
          <Tab {...tab} />
        </li>
      ))}
    </TabsWrap>
  );
};
