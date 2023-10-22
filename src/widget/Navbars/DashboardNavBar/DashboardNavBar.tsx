import { useMediaQuery } from "usehooks-ts";

import { TabList } from "shared/ui/Tabs";
import { ITabInfo } from "shared/ui/Tabs/types/Tab";

import {
  LogoAndTabsWrap,
  LogoLink,
  LogoWrap,
  SideMenuWrap,
} from "../ui/NavBar.styled";

import logoURL from "shared/assets/img/logo.svg";
import settingsImg from "shared/assets/icons/settings.svg";
import helpImg from "shared/assets/icons/orange-question-mark.svg";
import userImg from "shared/assets/icons/user.svg";
import efficientImg from "shared/assets/icons/arrow-up.svg";
import walletImg from "shared/assets/icons/wallet.svg";
import coursesImg from "shared/assets/icons/courses.svg";
import calendar from "shared/assets/icons/calendar.svg";

interface IManagerNavBarProps {
  className?: string;
}

const managerTabsData: ITabInfo[] = [
  {
    to: "/",
    text: "Панель",
    leftIcon: userImg,
  },
  {
    to: "/",
    text: "Витрати",
    leftIcon: walletImg,
  },
  {
    to: "/",
    text: "Ефективність компаній",
    leftIcon: efficientImg,
  },
  {
    to: "/",
    text: "Порівняння крі",
    leftIcon: userImg,
  },
  {
    to: "/",
    text: "Курси та тренінги",
    leftIcon: coursesImg,
  },
];

export const DashboardNavBar: React.FC<IManagerNavBarProps> = ({
  className,
}) => {
  const isScreenWidthLessThan_480 = useMediaQuery("(max-width: 480px)");
  const isScreenWidthLessThan_767 = useMediaQuery("(max-width: 767px)");

  const optionsTabsData: ITabInfo[] = [
    {
      to: "/",
      text: "Допомога",
      leftIcon: helpImg,
    },
    {
      to: "/",
      text: isScreenWidthLessThan_480 ? "Налаштунок" : "Налаштування",
      leftIcon: settingsImg,
    },
    {
      to: "/",
      text: "Вийти",
      leftIcon: userImg,
    },
  ];

  isScreenWidthLessThan_767 &&
    optionsTabsData.push({
      to: "/calendar",
      text: "Календар",
      leftIcon: calendar,
    });

  return (
    <aside className={className}>
      <SideMenuWrap>
        <LogoAndTabsWrap>
          <LogoLink to="/">
            <LogoWrap src={logoURL} alt="logo" />
          </LogoLink>
          <TabList tabsInfo={managerTabsData} />
        </LogoAndTabsWrap>
        <TabList tabsInfo={optionsTabsData} />
      </SideMenuWrap>
    </aside>
  );
};
