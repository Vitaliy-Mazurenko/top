import {
  LogoAndTabsWrap,
  LogoLink,
  LogoWrap,
  SideMenuWrap,
} from "../Tabs/TabsPanel.styled";
import { ManagerTabs } from "./ManagerTabs";
import logoURL from "shared/assets/img/logo.svg";
import { PublicOptions } from "../GlobalOptions";

interface IManagerNavBarProps {
  className?: string;
}

export const ManagerNavbar: React.FC<IManagerNavBarProps> = ({ className }) => {
  return (
    <SideMenuWrap className={className}>
      <LogoAndTabsWrap>
        <LogoLink to="/">
          <LogoWrap src={logoURL} alt="logo" />
        </LogoLink>
        <ManagerTabs />
      </LogoAndTabsWrap>
      <PublicOptions />
    </SideMenuWrap>
  );
};
