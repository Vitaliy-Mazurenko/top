import {
  LogoAndTabsWrap,
  LogoWrap,
  OptionsWrap,
  SideMenuWrap,
} from "./TabsPanel.styled";
import { Tabs } from "./Tabs";
import logoImg from "../../../../shared/assets/img/logo.png";
import { Options } from "./Options";

export const TabsPanel = () => {
  return (
    <SideMenuWrap>
      <LogoAndTabsWrap>
        <LogoWrap src={logoImg} />
        <Tabs />
      </LogoAndTabsWrap>
      <OptionsWrap>
        <Options />
      </OptionsWrap>
    </SideMenuWrap>
  );
};
