import { ITabInfo } from "shared/ui/Tabs/types/Tab";
import {
  StyledFooter,
  StyledTabListCalendar,
} from "./ManagerFooter.styled";

import home from "shared/assets/icons/octicon_home.svg";

interface IManagerFooterProps {
  className?: string;
}

export const ManagerFooterCalendar: React.FC<IManagerFooterProps> = ({ className }) => {
  const tabsInfo: ITabInfo[] = [
    {
      to: "/",
      text: "ГОЛОВНА",
      leftIcon: home,
    }
  ];

  return (
    <StyledFooter>
      <StyledTabListCalendar className={className} tabsInfo={tabsInfo} />
    </StyledFooter>
  );
};
