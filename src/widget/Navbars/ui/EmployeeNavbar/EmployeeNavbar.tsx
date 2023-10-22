import { Link } from "react-router-dom";

import {
  AsideWrapper,
  EmployeeContent,
  LogoWrap,
  StyledProfileCard,
} from "../NavBar.styled";
import { EmployeeTabs } from "./EmployeeTabs";

import logoImg from "shared/assets/img/logo.svg";
import defaultAvatar from "shared/assets/img/sidebarimg.png";

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
      </EmployeeContent>
    </AsideWrapper>
  );
};
