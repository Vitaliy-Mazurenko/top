import { LogoWrap, SideMenuWrap } from "../../Tabs/TabsPanel.styled";
import { PersonalOptions } from "./PersonalOptions";
import { PersonalTabs } from "./PersonalTabs";
import { ProfileCard } from "entities/user";
import { NavLink } from "react-router-dom";
import defaultAvatar from "shared/assets/img/sidebarimg.png";
import logoImg from "shared/assets/img/logo.svg";

export const PersonalNavbar = () => {
  return (
    <SideMenuWrap>
      <div>
        <NavLink to="/">
          <LogoWrap src={logoImg} alt="logo" />
        </NavLink>

        <ProfileCard
          name="Повне ім'я"
          position="Посада"
          imgURL={defaultAvatar}
        />
        <PersonalTabs />
      </div>
      <PersonalOptions />
    </SideMenuWrap>
  );
};
