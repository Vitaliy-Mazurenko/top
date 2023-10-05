import {
  LogoAndTabsWrap,
  LogoWrap,
  SideMenuWrap,
} from "../Tabs/TabsPanel.styled";
import { ManagerTabs } from "./ManagerTabs";
import logoURL from "shared/assets/img/logo.svg";
import { PublicOptions } from "../GlobalOptions";
import { NavLink } from "react-router-dom";

export const ManagerNavbar = () => {
  return (
    <SideMenuWrap>
      <LogoAndTabsWrap>
        <NavLink to="/">
          <LogoWrap src={logoURL} alt="logo" />
        </NavLink>
        <ManagerTabs />
      </LogoAndTabsWrap>
      <PublicOptions />
    </SideMenuWrap>
  );
};
