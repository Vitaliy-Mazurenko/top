import {
  LogoAndTabsWrap,
  LogoWrap,
  SideMenuWrap,
} from "../Tabs/TabsPanel.styled";
import logoImg from "shared/assets/img/logo.png";
import { PublicOptions } from "../GlobalOptions";
import { EmployeeTabs } from "./EmployeeTabs";

export const EmployeeNavbar = () => {
  
  return (
    <SideMenuWrap>
      <LogoAndTabsWrap>
        <LogoWrap src={logoImg} />
        <EmployeeTabs />
      </LogoAndTabsWrap>
      <PublicOptions />
    </SideMenuWrap>
  )
}
