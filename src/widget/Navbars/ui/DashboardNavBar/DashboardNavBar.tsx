import { useMediaQuery } from "usehooks-ts";
import { RefObject } from "react";

import { TabList } from "shared/ui/Tabs";
import { ITabInfo } from "shared/ui/Tabs/types/Tab";

import {
  AsideWrapper,
  DashboardContent,
  LogoLink,
  LogoWrap,
} from "../NavBar.styled";

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
  mobileMenuRef?: RefObject<HTMLElement>;
}

export const DashboardNavBar: React.FC<IManagerNavBarProps> = ({
  className,
  mobileMenuRef,
}) => {
  const isScreenWidthLessThan_480 = useMediaQuery("(max-width: 480px)");
  const isScreenWidthLessThan_767 = useMediaQuery("(max-width: 767px)");

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
    managerTabsData.push({
      to: "/calendar",
      text: "Календар",
      leftIcon: calendar,
    });

  return (
    <AsideWrapper ref={mobileMenuRef} className={className}>
      <DashboardContent>
        <div>
          <LogoLink to="/">
            <LogoWrap src={logoURL} alt="logo" />
          </LogoLink>
          <TabList tabsInfo={managerTabsData} />
        </div>
        <TabList tabsInfo={optionsTabsData} />
      </DashboardContent>
    </AsideWrapper>
  );
};
