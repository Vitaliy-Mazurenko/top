import { Link } from "react-router-dom";

import {
  AsideWrapper,
  EmployeeContent,
  LogoWrap,
  StyledProfileCard,
} from "../NavBar.styled";
import { EmployeeTabs } from "./EmployeeTabs";
import { PublicOptions } from "../GlobalOptions";

import logoImg from "shared/assets/img/logo.svg";
import defaultAvatar from "shared/assets/img/sidebarimg.png";
import settingsImg from "shared/assets/icons/settings.svg";

export interface IOptionLink {
  to: string;
  text: string;
  icon: string;
}
const optionsLinksData: IOptionLink[] = [
  {
    to: "/",
    text: "Налаштування",
    icon: settingsImg,
  },
];

export const EmployeeNavbar = () => {
  return (
    <AsideWrapper>
      <EmployeeContent>
        <div>
          <Link to="/">
            <LogoWrap src={logoImg} alt="logo" />
          </Link>

          <StyledProfileCard
            name="Повне ім'я"
            position="Посада"
            imgURL={defaultAvatar}
          />
          <EmployeeTabs />
        </div>
        <PublicOptions optionsData={optionsLinksData} />
      </EmployeeContent>
    </AsideWrapper>
  );
};
