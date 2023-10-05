import {
  LogoAndTabsWrap,
  LogoWrap,
  SideMenuWrap,
} from "../Tabs/TabsPanel.styled";
import { ManagerTabs } from "./ManagerTabs";
import logoURL from "shared/assets/img/logo.svg";
import { PublicOptions } from "../GlobalOptions";

export const ManagerNavbar = () => {
  return (
    <SideMenuWrap>
      <LogoAndTabsWrap>
        <LogoWrap src={logoURL} />
        <ManagerTabs />
      </LogoAndTabsWrap>
      <PublicOptions />
    </SideMenuWrap>
  );
};
