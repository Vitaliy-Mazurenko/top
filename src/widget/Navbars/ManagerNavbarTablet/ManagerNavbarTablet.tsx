import {
  LogoAndTabsWrap,
  SideMenuTabletWrap,
} from "../Tabs/TabsPanel.styled";
import { PublicOptions } from "../GlobalOptions";

export const ManagerNavbarTablet = () => {
  return (
    <SideMenuTabletWrap>
      <LogoAndTabsWrap>
      </LogoAndTabsWrap>
      <PublicOptions />
    </SideMenuTabletWrap>
  );
};
