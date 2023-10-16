import { Link } from "react-router-dom";

import { ProfileCard } from "entities/user";

import { TabList } from "shared/ui/Tabs";
import { ITabInfo } from "shared/ui/Tabs/types/Tab";

import { LogoAndTabsWrap, LogoWrap, SideMenuWrap } from "../NavBar.styled";
import { EmployeeTabs } from "./EmployeeTabs";

import logoImg from "shared/assets/img/logo.svg";
import defaultAvatar from "shared/assets/img/sidebarimg.png";
import userImg from "shared/assets/icons/user.svg";
import settingsImg from "shared/assets/icons/settings.svg";
import helpImg from "shared/assets/icons/orange-question-mark.svg";

const optionsTabsData: ITabInfo[] = [
  {
    to: "/",
    text: "Допомога",
    leftIcon: helpImg,
  },
  {
    to: "/",
    text: "Налаштування",
    leftIcon: settingsImg,
  },
  {
    to: "/",
    text: "Вийти",
    leftIcon: userImg,
  },
];

export const EmployeeNavbar = () => {
  return (
    <SideMenuWrap>
      <LogoAndTabsWrap>
        <Link to="/">
          <LogoWrap src={logoImg} alt="logo" />
        </Link>

        <ProfileCard
          name="Повне ім'я"
          position="Посада"
          imgURL={defaultAvatar}
        />
        <EmployeeTabs />
      </LogoAndTabsWrap>
      <TabList tabsInfo={optionsTabsData} />
    </SideMenuWrap>
  );
};
