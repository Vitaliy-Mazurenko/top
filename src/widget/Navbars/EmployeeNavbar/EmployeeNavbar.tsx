import {
  LogoAndTabsWrap,
  LogoWrap,
  SideMenuWrap,
} from "../Tabs/TabsPanel.styled";
import logoImg from "shared/assets/img/logo.svg";
import { PublicOptions } from "../GlobalOptions";
import { EmployeeTabs } from "./EmployeeTabs";
import { ProfileCard } from "entities/user";
import defaultAvatar from 'shared/assets/img/sidebarimg.png'
import { NavLink } from "react-router-dom";


export const EmployeeNavbar = () => {
 
  return (
    <SideMenuWrap>
      <LogoAndTabsWrap>
        <NavLink to="/">
          <LogoWrap src={logoImg} alt="logo" />
        </NavLink>

        <ProfileCard name="Повне ім'я" position="Посада" imgURL={defaultAvatar} />
        <EmployeeTabs />
      </LogoAndTabsWrap>
      <PublicOptions />
    </SideMenuWrap>
  );
};





