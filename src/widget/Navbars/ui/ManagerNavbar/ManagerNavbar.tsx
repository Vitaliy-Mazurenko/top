import { useMediaQuery } from "usehooks-ts";

import { TabList } from "shared/ui/Tabs";
import { ITabInfo } from "shared/ui/Tabs/types/Tab";

import {
  LogoAndTabsWrap,
  LogoLink,
  LogoWrap,
  SideMenuWrap,
} from "../NavBar.styled";

import logoURL from "shared/assets/img/logo.svg";
import settingsImg from "shared/assets/icons/settings.svg";
import helpImg from "shared/assets/icons/orange-question-mark.svg";
import userImg from "shared/assets/icons/user.svg";
import efficientImg from "shared/assets/icons/arrow-up.svg";
import walletImg from "shared/assets/icons/wallet.svg";
import coursesImg from "shared/assets/icons/courses.svg";
import calendar from "shared/assets/icons/calendar.svg"

interface IManagerNavBarProps {
  className?: string;
}

export const ManagerNavbar: React.FC<IManagerNavBarProps> = ({ className }) => {
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
    {
      to: isScreenWidthLessThan_767 ? "/calendar" : "/",
      text: isScreenWidthLessThan_767 ? "Календар" : "",
      leftIcon: isScreenWidthLessThan_767 ? calendar : null,
    },
  ];

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

  return (
    <SideMenuWrap className={className}>
      <LogoAndTabsWrap>
        <LogoLink to="/">
          <LogoWrap src={logoURL} alt="logo" />
        </LogoLink>
        <TabList tabsInfo={managerTabsData} />
      </LogoAndTabsWrap>
      <TabList tabsInfo={optionsTabsData} />
    </SideMenuWrap>
  );
};
