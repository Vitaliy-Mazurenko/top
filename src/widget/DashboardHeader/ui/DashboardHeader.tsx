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

import { ITabInfo } from "shared/ui/Tabs/types/Tab";

import logoImage from "shared/assets/img/logo.svg";
import burgerIcon from "shared/assets/icons/burger.svg";
import userIcon from "shared/assets/icons/user.svg";
import settingsImg from "shared/assets/icons/settings.svg";
import helpImg from "shared/assets/icons/orange-question-mark.svg";

interface IDashboardHeaderProps {
  onMenuBtnClick: () => void;
  burgerButtonRef: RefObject<HTMLButtonElement>;
}

const optionsTabsData: ITabInfo[] = [
  {
    to: "/",
    text: "Допомога",
    leftIcon: helpImg,
  },
  {
    to: "/",
    text: "Налаштування",
    leftIcon: settingsImg,
  },
  {
    to: "/",
    text: "Вийти",
    leftIcon: userIcon,
  },
];

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
            <StyledDropdownButton content={optionsTabsData} />
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
