import { FC, RefObject } from "react";

import { Container } from "shared/ui/Container";

import {
  ControlButton,
  StyledDropdownButton,
  StyledHeader,
  StyledNotification,
  StyledUserCredentials,
  HeaderInner,
  MobileContent,
  DesktopContent,
  LogoLink,
  BurgerButton,
} from "./DashboardHeader.styled";

import logoImage from "shared/assets/img/logo.svg";
import burgerIcon from "shared/assets/icons/burger.svg";
import userIcon from "shared/assets/icons/user.svg";

interface IDashboardHeaderProps {
  onMenuBtnClick: () => void;
  burgerButtonRef: RefObject<HTMLButtonElement>;
}

export const DashboardHeader: FC<IDashboardHeaderProps> = ({
  onMenuBtnClick,
  burgerButtonRef,
}) => {
  return (
    <StyledHeader>
      <Container>
        {/* Desktop */}

        <DesktopContent>
          <HeaderInner>
            <StyledNotification />
            <StyledUserCredentials firstName="Ім'я" lastName="Прізвище" />
            <StyledDropdownButton />
          </HeaderInner>
        </DesktopContent>

        {/* Mobile */}

        <MobileContent>
          <HeaderInner>
            <BurgerButton
              ref={burgerButtonRef}
              onClick={onMenuBtnClick}
              id="dashboard-burger-btn"
            >
              <img src={burgerIcon} alt="burger menu icon" />
            </BurgerButton>
            <LogoLink to="/">
              <img src={logoImage} alt="logo" />
            </LogoLink>
            <ControlButton>
              <img src={userIcon} alt="user" />
            </ControlButton>
          </HeaderInner>
        </MobileContent>
      </Container>
    </StyledHeader>
  );
};
