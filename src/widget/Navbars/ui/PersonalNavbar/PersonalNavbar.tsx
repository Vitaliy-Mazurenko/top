import {
  LogoAndTabsWrap,
  LogoWrap,
  SideMenuWrap,
} from "../../Tabs/TabsPanel.styled";
import logoImg from "shared/assets/img/logo.svg";
import { PersonalOptions } from "./PersonalOptions";
import { PersonalTabs } from "./PersonalTabs";
import { ProfileCard } from "entities/user";
import defaultAvatar from 'shared/assets/img/sidebarimg.png'
import { NavLink } from "react-router-dom";


export const PersonalNavbar = () => {
 
  return (
    <SideMenuWrap>
      <LogoAndTabsWrap>
        <NavLink to="/">
          <LogoWrap src={logoImg} alt="logo" />
        </NavLink>

        <ProfileCard name="Повне ім'я" position="Посада" imgURL={defaultAvatar} />
        <PersonalTabs />
      </LogoAndTabsWrap>
      <PersonalOptions />
    </SideMenuWrap>
  );
};





