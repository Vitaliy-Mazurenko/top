import {
  LogoAndTabsWrap,
  LogoWrap,
  SideMenuWrap,
} from "../Tabs/TabsPanel.styled";
import logoImg from "shared/assets/img/logo.svg";
import { PublicOptions } from "../GlobalOptions";
import { EmployeeTabs } from "./EmployeeTabs";
import { ProfileCard } from "entities/user";
import defaultAvatar from "shared/assets/img/sidebarimg.png";
import { NavLink } from "react-router-dom";
import { IOptionLink } from "../ManagerNavbar/ManagerNavbar";

import userImg from "shared/assets/icons/user.svg";
import settingsImg from "shared/assets/icons/settings.svg";
import helpImg from "shared/assets/icons/orange-question-mark.svg";

const optionsLinksData: IOptionLink[] = [
  {
    to: "/",
    text: "Допомога",
    icon: helpImg,
  },
  {
    to: "/",
    text: "Налаштування",
    icon: settingsImg,
  },
  {
    to: "/",
    text: "Вийти",
    icon: userImg,
  },
];

export const EmployeeNavbar = () => {
  return (
    <SideMenuWrap>
      <LogoAndTabsWrap>
        <NavLink to="/">
          <LogoWrap src={logoImg} alt="logo" />
        </NavLink>

        <ProfileCard
          name="Повне ім'я"
          position="Посада"
          imgURL={defaultAvatar}
        />
        <EmployeeTabs />
      </LogoAndTabsWrap>
      <PublicOptions optionsData={optionsLinksData} />
    </SideMenuWrap>
  );
};
