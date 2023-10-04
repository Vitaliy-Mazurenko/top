import {
  LogoAndTabsWrap,
  LogoWrap,
  SideMenuWrap,
} from "../Tabs/TabsPanel.styled";
import logoImg from "shared/assets/img/logo.png";
import { PublicOptions } from "../GlobalOptions";
import { EmployeeTabs } from "./EmployeeTabs";
import { ProfileCard } from "entities/user";
import defaultAvatar from 'shared/assets/img/sidebarimg.png'

export const EmployeeNavbar = () => {

  return (
    <SideMenuWrap>
      <LogoAndTabsWrap>
        <LogoWrap src={logoImg} />
        <ProfileCard name="Повне ім'я" position="Посада" imgURL={defaultAvatar} />
        <EmployeeTabs />
      </LogoAndTabsWrap>
      <PublicOptions />
    </SideMenuWrap>
  )
}
