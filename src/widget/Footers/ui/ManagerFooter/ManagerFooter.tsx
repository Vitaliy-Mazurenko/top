import { ITabInfo } from "shared/ui/Tabs/types/Tab";
import {
  StyledFooter,
  StyledTabList,
  StyledNotification,
} from "./ManagerFooter.styled";

import home from "shared/assets/icons/octicon_home.svg";
import efficientImg from "shared/assets/icons/arrow-up.svg";
import walletImg from "shared/assets/icons/wallet.svg";
import coursesImg from "shared/assets/icons/courses.svg";

interface IManagerFooterProps {
  className?: string;
}

export const ManagerFooter: React.FC<IManagerFooterProps> = ({ className }) => {
  const tabsInfo: ITabInfo[] = [
    {
      to: "/",
      text: "ГОЛОВНА",
      leftIcon: home,
    },
    {
      to: "/",
      text: "Ефективність",
      leftIcon: walletImg,
    },
    {
      to: "/",
      text: "Витрати",
      leftIcon: efficientImg,
    },
    {
      to: "/",
      text: "Курси",
      leftIcon: coursesImg,
    },
    {
      to: "/",
      text: "Звістка",
      leftIcon: <StyledNotification />,
    },
  ];

  return (
    <StyledFooter>
      <StyledTabList className={className} tabsInfo={tabsInfo} />
    </StyledFooter>
  );
};
