import { ManagerTabs } from "./ManagerTabs";
import { PublicOptions } from "../GlobalOptions";

import logoURL from "shared/assets/img/logo.svg";
import userImg from "shared/assets/icons/user.svg";
import settingsImg from "shared/assets/icons/settings.svg";
import helpImg from "shared/assets/icons/orange-question-mark.svg";
import { useMediaQuery } from "usehooks-ts";
import {
  LogoAndTabsWrap,
  LogoLink,
  LogoWrap,
  SideMenuWrap,
} from "../NavBar.styled";

interface IManagerNavBarProps {
  className?: string;
}

export interface IOptionLink {
  to: string;
  text: string;
  icon: string;
}

export const ManagerNavbar: React.FC<IManagerNavBarProps> = ({ className }) => {
  const isScreenWidthLessThan_480 = useMediaQuery("(max-width: 480px)");

  const optionsLinksData: IOptionLink[] = [
    {
      to: "/",
      text: "Допомога",
      icon: helpImg,
    },
    {
      to: "/",
      text: isScreenWidthLessThan_480 ? "Налаштунок" : "Налаштування",
      icon: settingsImg,
    },
    {
      to: "/",
      text: "Вийти",
      icon: userImg,
    },
  ];

  return (
    <SideMenuWrap className={className}>
      <LogoAndTabsWrap>
        <LogoLink to="/">
          <LogoWrap src={logoURL} alt="logo" />
        </LogoLink>
        {/* <ManagerTabs /> */}
      </LogoAndTabsWrap>
      <PublicOptions optionsData={optionsLinksData} />
    </SideMenuWrap>
  );
};
